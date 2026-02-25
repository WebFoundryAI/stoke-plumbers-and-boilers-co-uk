// Cloudflare Pages Function – lead capture using D1 database

export const onRequestPost = async (context: any) => {
  const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
  const RATE_LIMIT_MAX = 5;

  // @ts-ignore - lightweight in-memory store for single isolate best-effort limiting
  globalThis.__leadRateLimit = globalThis.__leadRateLimit || new Map<string, { count: number; start: number }>();
  // @ts-ignore
  const memoryStore: Map<string, { count: number; start: number }> = globalThis.__leadRateLimit;

  const ip = context.request.headers.get('CF-Connecting-IP') || 'unknown';
  const now = Date.now();
  const entry = memoryStore.get(ip);

  if (!entry || now - entry.start > RATE_LIMIT_WINDOW_MS) {
    memoryStore.set(ip, { count: 1, start: now });
  } else if (entry.count >= RATE_LIMIT_MAX) {
    return Response.json({ error: 'Too many requests, please try again shortly.' }, { status: 429 });
  } else {
    memoryStore.set(ip, { count: entry.count + 1, start: entry.start });
  }

  const payload = await context.request.json<Record<string, unknown>>().catch(() => null);
  if (!payload) return Response.json({ error: 'Invalid JSON payload' }, { status: 400 });

  const required = ['name', 'phone', 'postcode', 'service'];
  const errors = required.filter((field) => !String(payload[field] ?? '').trim()).map((field) => `${field} is required`);
  if (String(payload.company ?? '').trim()) errors.push('spam detected');
  if (errors.length) return Response.json({ error: errors.join(', '), fields: errors }, { status: 400 });

  const db = context.env.DB;
  if (!db) {
    return Response.json({ error: 'Database not configured' }, { status: 500 });
  }

  try {
    await db.prepare(
      `INSERT INTO leads (name, phone, postcode, address, service, notes, source, ip_address, user_agent)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      String(payload.name ?? '').trim(),
      String(payload.phone ?? '').trim(),
      String(payload.postcode ?? '').trim().toUpperCase(),
      String(payload.address ?? '').trim() || null,
      String(payload.service ?? '').trim(),
      String(payload.notes ?? '').trim() || null,
      String(payload.source ?? 'website').trim(),
      ip,
      context.request.headers.get('user-agent') || null,
    ).run();
  } catch (err: any) {
    return Response.json({ error: 'Failed to store lead', details: err.message }, { status: 502 });
  }

  return Response.json({ success: true });
};
