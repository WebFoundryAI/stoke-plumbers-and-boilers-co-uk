import { describe, it, expect } from 'vitest';
import {
  LOCATIONS,
  INDEXED_LOCATIONS,
  PRIMARY_LOCATION,
  getLocationBySlug,
} from '../../src/data/locations';

describe('Locations Data', () => {
  describe('LOCATIONS array integrity', () => {
    it('contains exactly 6 locations', () => {
      expect(LOCATIONS).toHaveLength(6);
    });

    it('every location has a unique slug', () => {
      const slugs = LOCATIONS.map((l) => l.slug);
      expect(new Set(slugs).size).toBe(slugs.length);
    });

    it('every slug matches URL-safe pattern', () => {
      for (const loc of LOCATIONS) {
        expect(loc.slug).toMatch(/^[a-z0-9-]+$/);
      }
    });

    it('every location has latitude within Stoke-on-Trent service area bounds', () => {
      for (const loc of LOCATIONS) {
        expect(loc.latitude).toBeGreaterThan(52.5);
        expect(loc.latitude).toBeLessThan(53.5);
      }
    });

    it('every location has longitude within Stoke-on-Trent service area bounds', () => {
      for (const loc of LOCATIONS) {
        expect(loc.longitude).toBeGreaterThan(-2.6);
        expect(loc.longitude).toBeLessThan(-1.8);
      }
    });

    it('every location has countyOrRegion defined', () => {
      for (const loc of LOCATIONS) {
        expect(loc.countyOrRegion).toBeTruthy();
      }
    });
  });

  describe('PRIMARY_LOCATION', () => {
    it('is "stoke-on-trent"', () => {
      expect(PRIMARY_LOCATION.slug).toBe('stoke-on-trent');
    });

    it('is first in LOCATIONS array', () => {
      expect(LOCATIONS[0]).toBe(PRIMARY_LOCATION);
    });
  });

  describe('INDEXED_LOCATIONS', () => {
    it('contains all 6 locations', () => {
      expect(INDEXED_LOCATIONS).toHaveLength(6);
    });

    it('includes only locations without noindex', () => {
      for (const loc of INDEXED_LOCATIONS) {
        expect(loc.noindex).toBeFalsy();
      }
    });

    it('includes all location slugs', () => {
      const slugs = INDEXED_LOCATIONS.map((l) => l.slug);
      expect(slugs).toContain('stoke-on-trent');
      expect(slugs).toContain('newcastle-under-lyme');
      expect(slugs).toContain('stafford');
      expect(slugs).toContain('crewe');
      expect(slugs).toContain('congleton');
      expect(slugs).toContain('leek');
    });
  });

  describe('getLocationBySlug', () => {
    it('returns correct location for "stoke-on-trent"', () => {
      const loc = getLocationBySlug('stoke-on-trent');
      expect(loc).toBeDefined();
      expect(loc!.name).toBe('Stoke-on-Trent');
    });

    it('returns correct location for "leek"', () => {
      const loc = getLocationBySlug('leek');
      expect(loc).toBeDefined();
      expect(loc!.name).toBe('Leek');
    });

    it('returns undefined for non-existent slug', () => {
      expect(getLocationBySlug('nonexistent')).toBeUndefined();
    });

    it('returns undefined for empty string', () => {
      expect(getLocationBySlug('')).toBeUndefined();
    });
  });
});
