import { describe, it, expect } from 'vitest';
import {
  SERVICES,
  getServiceBySlug,
  getSubServiceBySlug,
  getRelatedServices,
  RELATED_SERVICES,
} from '../../src/data/services';

describe('Services Data', () => {
  describe('SERVICES array integrity', () => {
    it('contains exactly 6 services', () => {
      expect(SERVICES).toHaveLength(6);
    });

    it('every service has a unique slug', () => {
      const slugs = SERVICES.map((s) => s.slug);
      expect(new Set(slugs).size).toBe(slugs.length);
    });

    it('every slug matches URL-safe pattern', () => {
      for (const service of SERVICES) {
        expect(service.slug).toMatch(/^[a-z0-9-]+$/);
      }
    });

    it('every service has required fields', () => {
      for (const service of SERVICES) {
        expect(service.slug).toBeTruthy();
        expect(service.name).toBeTruthy();
        expect(service.shortLabel).toBeTruthy();
        expect(service.description).toBeTruthy();
        expect(service.icon).toBeTruthy();
      }
    });

    it('total sub-services count is 13', () => {
      const total = SERVICES.reduce((sum, s) => sum + (s.subServices?.length ?? 0), 0);
      expect(total).toBe(13);
    });

    it('every sub-service has unique slug within its parent', () => {
      for (const service of SERVICES) {
        if (service.subServices) {
          const slugs = service.subServices.map((s) => s.slug);
          expect(new Set(slugs).size).toBe(slugs.length);
        }
      }
    });

    it('every sub-service has required fields', () => {
      for (const service of SERVICES) {
        for (const sub of service.subServices || []) {
          expect(sub.slug).toBeTruthy();
          expect(sub.name).toBeTruthy();
          expect(sub.description).toBeTruthy();
        }
      }
    });
  });

  describe('getServiceBySlug', () => {
    it('returns correct service for "blocked-drains"', () => {
      const service = getServiceBySlug('blocked-drains');
      expect(service).toBeDefined();
      expect(service!.name).toBe('Blocked Drains');
    });

    it('returns correct service for "drain-repairs"', () => {
      const service = getServiceBySlug('drain-repairs');
      expect(service).toBeDefined();
      expect(service!.name).toBe('Drain Repairs');
    });

    it('returns undefined for non-existent slug', () => {
      expect(getServiceBySlug('nonexistent')).toBeUndefined();
    });

    it('returns undefined for empty string', () => {
      expect(getServiceBySlug('')).toBeUndefined();
    });
  });

  describe('getSubServiceBySlug', () => {
    it('returns correct sub-service', () => {
      const sub = getSubServiceBySlug('blocked-drains', 'blocked-toilet');
      expect(sub).toBeDefined();
      expect(sub!.name).toBe('Blocked Toilet');
    });

    it('returns undefined for valid service but invalid sub-service', () => {
      expect(getSubServiceBySlug('blocked-drains', 'nonexistent')).toBeUndefined();
    });

    it('returns undefined for invalid service slug', () => {
      expect(getSubServiceBySlug('nonexistent', 'blocked-toilet')).toBeUndefined();
    });
  });

  describe('RELATED_SERVICES', () => {
    it('every key corresponds to a valid service slug', () => {
      const validSlugs = new Set(SERVICES.map((s) => s.slug));
      for (const key of Object.keys(RELATED_SERVICES)) {
        expect(validSlugs.has(key)).toBe(true);
      }
    });

    it('every value slug corresponds to a valid service slug', () => {
      const validSlugs = new Set(SERVICES.map((s) => s.slug));
      for (const relatedSlugs of Object.values(RELATED_SERVICES)) {
        for (const slug of relatedSlugs) {
          expect(validSlugs.has(slug)).toBe(true);
        }
      }
    });

    it('no service lists itself as related', () => {
      for (const [slug, related] of Object.entries(RELATED_SERVICES)) {
        expect(related).not.toContain(slug);
      }
    });
  });

  describe('getRelatedServices', () => {
    it('returns 3 related services for "blocked-drains"', () => {
      const related = getRelatedServices('blocked-drains');
      expect(related).toHaveLength(3);
    });

    it('returned services are full Service objects', () => {
      const related = getRelatedServices('blocked-drains');
      for (const service of related) {
        expect(service.slug).toBeTruthy();
        expect(service.name).toBeTruthy();
        expect(service.description).toBeTruthy();
      }
    });

    it('returns empty array for unknown slug', () => {
      expect(getRelatedServices('nonexistent')).toEqual([]);
    });
  });
});
