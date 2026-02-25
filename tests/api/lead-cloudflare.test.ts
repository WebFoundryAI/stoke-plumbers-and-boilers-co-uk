import { describe, it, expect, beforeEach, vi } from 'vitest';

let onRequestPost: (context: any) => Promise<Response>;

// Mock D1 database
function createMockDB(shouldFail = false) {
  return {
    prepare: vi.fn(() => ({
      bind: vi.fn(() => ({
        run: shouldFail
          ? vi.fn(() => Promise.reject(new Error('D1 write error')))
          : vi.fn(() => Promise.resolve({ success: true })),
      })),
    })),
  };
}

function createContext(
  body: object | string,
  headers: Record<string, string> = {},
  envOverrides: Record<string, any> = {}
) {
  const bodyStr = typeof body === 'string' ? body : JSON.stringify(body);
  return {
    request: new Request('https://example.com/api/lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'CF-Connecting-IP': '1.2.3.4',
        ...headers,
      },
      body: bodyStr,
    }),
    env: {
      DB: createMockDB(),
      ...envOverrides,
    },
  };
}

const VALID_PAYLOAD = {
  name: 'John Doe',
  phone: '07700900000',
  postcode: 'm2 3wq',
  service: 'Blocked Drains',
};

describe('Cloudflare Lead API (D1)', () => {
  beforeEach(async () => {
    vi.resetModules();
    // Clear rate limit state
    (globalThis as any).__leadRateLimit = undefined;
    const mod = await import('../../functions/api/lead');
    onRequestPost = mod.onRequestPost;
  });

  describe('JSON parsing', () => {
    it('returns 400 for malformed JSON', async () => {
      const ctx = {
        request: new Request('https://example.com/api/lead', {
          method: 'POST',
          body: 'not json{',
          headers: { 'CF-Connecting-IP': '1.2.3.4' },
        }),
        env: { DB: createMockDB() },
      };
      const res = await onRequestPost(ctx);
      expect(res.status).toBe(400);
      const data = await res.json();
      expect(data.error).toContain('Invalid JSON');
    });
  });

  describe('Input validation', () => {
    it('returns 400 when all required fields are missing', async () => {
      const ctx = createContext({});
      const res = await onRequestPost(ctx);
      expect(res.status).toBe(400);
      const data: any = await res.json();
      expect(data.fields).toContain('name is required');
      expect(data.fields).toContain('phone is required');
      expect(data.fields).toContain('postcode is required');
      expect(data.fields).toContain('service is required');
    });

    it('returns 400 when name is missing', async () => {
      const ctx = createContext({ phone: '07700900000', postcode: 'M2 3WQ', service: 'Drains' });
      const res = await onRequestPost(ctx);
      expect(res.status).toBe(400);
      const data: any = await res.json();
      expect(data.fields).toContain('name is required');
    });

    it('returns 400 when fields are whitespace-only', async () => {
      const ctx = createContext({ name: '   ', phone: '  ', postcode: '  ', service: '  ' });
      const res = await onRequestPost(ctx);
      expect(res.status).toBe(400);
      const data: any = await res.json();
      expect(data.fields.length).toBe(4);
    });

    it('accepts valid payload with all required fields', async () => {
      const ctx = createContext(VALID_PAYLOAD);
      const res = await onRequestPost(ctx);
      expect(res.status).toBe(200);
      const data: any = await res.json();
      expect(data.success).toBe(true);
    });
  });

  describe('Honeypot spam detection', () => {
    it('returns 400 when company field has a value', async () => {
      const ctx = createContext({ ...VALID_PAYLOAD, company: 'SpamCo' });
      const res = await onRequestPost(ctx);
      expect(res.status).toBe(400);
      const data: any = await res.json();
      expect(data.error).toContain('spam detected');
    });

    it('passes when company field is empty string', async () => {
      const ctx = createContext({ ...VALID_PAYLOAD, company: '' });
      const res = await onRequestPost(ctx);
      expect(res.status).toBe(200);
    });

    it('passes when company field is absent', async () => {
      const ctx = createContext(VALID_PAYLOAD);
      const res = await onRequestPost(ctx);
      expect(res.status).toBe(200);
    });
  });

  describe('Rate limiting', () => {
    it('allows first 5 requests from same IP', async () => {
      for (let i = 0; i < 5; i++) {
        const ctx = createContext(VALID_PAYLOAD);
        const res = await onRequestPost(ctx);
        expect(res.status).toBe(200);
      }
    });

    it('returns 429 on 6th request within 15-minute window', async () => {
      for (let i = 0; i < 5; i++) {
        await onRequestPost(createContext(VALID_PAYLOAD));
      }
      const ctx = createContext(VALID_PAYLOAD);
      const res = await onRequestPost(ctx);
      expect(res.status).toBe(429);
      const data: any = await res.json();
      expect(data.error).toContain('Too many requests');
    });

    it('tracks different IPs independently', async () => {
      for (let i = 0; i < 5; i++) {
        await onRequestPost(createContext(VALID_PAYLOAD));
      }
      const ctx = createContext(VALID_PAYLOAD, { 'CF-Connecting-IP': '5.6.7.8' });
      const res = await onRequestPost(ctx);
      expect(res.status).toBe(200);
    });

    it('falls back to "unknown" when CF-Connecting-IP header is missing', async () => {
      const ctx = {
        request: new Request('https://example.com/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(VALID_PAYLOAD),
        }),
        env: { DB: createMockDB() },
      };
      const res = await onRequestPost(ctx);
      expect(res.status).toBe(200);
    });
  });

  describe('D1 database integration', () => {
    it('returns 500 when DB binding is missing', async () => {
      const ctx = createContext(VALID_PAYLOAD, {}, { DB: undefined });
      const res = await onRequestPost(ctx);
      expect(res.status).toBe(500);
      const data: any = await res.json();
      expect(data.error).toContain('Database not configured');
    });

    it('returns 502 when D1 write fails', async () => {
      const ctx = createContext(VALID_PAYLOAD, {}, { DB: createMockDB(true) });
      const res = await onRequestPost(ctx);
      expect(res.status).toBe(502);
      const data: any = await res.json();
      expect(data.error).toContain('Failed to store lead');
    });

    it('inserts correct values via prepared statement', async () => {
      const mockDB = createMockDB();
      const ctx = createContext(
        { ...VALID_PAYLOAD, address: '123 High St', notes: 'Urgent', source: 'landing-page' },
        {},
        { DB: mockDB }
      );
      await onRequestPost(ctx);
      const bindCall = mockDB.prepare.mock.results[0].value.bind;
      expect(bindCall).toHaveBeenCalledWith(
        'John Doe',
        '07700900000',
        'M2 3WQ',
        '123 High St',
        'Blocked Drains',
        'Urgent',
        'landing-page',
        '1.2.3.4',
        null,
      );
    });

    it('trims whitespace and uppercases postcode', async () => {
      const mockDB = createMockDB();
      const ctx = createContext(
        { name: '  John Doe  ', phone: ' 07700900000 ', postcode: '  m2 3wq  ', service: ' Blocked Drains ' },
        {},
        { DB: mockDB }
      );
      await onRequestPost(ctx);
      const bindCall = mockDB.prepare.mock.results[0].value.bind;
      expect(bindCall).toHaveBeenCalledWith(
        'John Doe',
        '07700900000',
        'M2 3WQ',
        null,
        'Blocked Drains',
        null,
        'website',
        '1.2.3.4',
        null,
      );
    });

    it('sets optional address to null when empty', async () => {
      const mockDB = createMockDB();
      const ctx = createContext({ ...VALID_PAYLOAD, address: '' }, {}, { DB: mockDB });
      await onRequestPost(ctx);
      const bindCall = mockDB.prepare.mock.results[0].value.bind;
      expect(bindCall.mock.calls[0][3]).toBeNull();
    });

    it('defaults source to "website" when not provided', async () => {
      const mockDB = createMockDB();
      const ctx = createContext(VALID_PAYLOAD, {}, { DB: mockDB });
      await onRequestPost(ctx);
      const bindCall = mockDB.prepare.mock.results[0].value.bind;
      expect(bindCall.mock.calls[0][6]).toBe('website');
    });
  });
});
