import { describe, it, expect } from 'vitest';
import {
  LOCATIONS,
  INDEXED_LOCATIONS,
  PRIMARY_LOCATION,
  getLocationBySlug,
} from '../../src/data/locations';

describe('Locations Data', () => {
  describe('LOCATIONS array integrity', () => {
    it('contains exactly 10 locations', () => {
      expect(LOCATIONS).toHaveLength(10);
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

    it('every location has latitude within Greater Manchester bounds', () => {
      for (const loc of LOCATIONS) {
        expect(loc.latitude).toBeGreaterThan(53.3);
        expect(loc.latitude).toBeLessThan(53.7);
      }
    });

    it('every location has longitude within Greater Manchester bounds', () => {
      for (const loc of LOCATIONS) {
        expect(loc.longitude).toBeGreaterThan(-2.5);
        expect(loc.longitude).toBeLessThan(-2.0);
      }
    });

    it('every location has countyOrRegion defined', () => {
      for (const loc of LOCATIONS) {
        expect(loc.countyOrRegion).toBeTruthy();
      }
    });
  });

  describe('PRIMARY_LOCATION', () => {
    it('is "manchester"', () => {
      expect(PRIMARY_LOCATION.slug).toBe('manchester');
    });

    it('is first in LOCATIONS array', () => {
      expect(LOCATIONS[0]).toBe(PRIMARY_LOCATION);
    });
  });

  describe('INDEXED_LOCATIONS', () => {
    it('contains all 10 locations', () => {
      expect(INDEXED_LOCATIONS).toHaveLength(10);
    });

    it('includes only locations without noindex', () => {
      for (const loc of INDEXED_LOCATIONS) {
        expect(loc.noindex).toBeFalsy();
      }
    });

    it('includes all location slugs', () => {
      const slugs = INDEXED_LOCATIONS.map((l) => l.slug);
      expect(slugs).toContain('manchester');
      expect(slugs).toContain('salford');
      expect(slugs).toContain('stockport');
      expect(slugs).toContain('altrincham');
      expect(slugs).toContain('bolton');
      expect(slugs).toContain('oldham');
      expect(slugs).toContain('rochdale');
      expect(slugs).toContain('sale');
      expect(slugs).toContain('didsbury');
      expect(slugs).toContain('chorlton');
    });
  });

  describe('getLocationBySlug', () => {
    it('returns correct location for "manchester"', () => {
      const loc = getLocationBySlug('manchester');
      expect(loc).toBeDefined();
      expect(loc!.name).toBe('Manchester');
    });

    it('returns correct location for "chorlton"', () => {
      const loc = getLocationBySlug('chorlton');
      expect(loc).toBeDefined();
      expect(loc!.name).toBe('Chorlton');
    });

    it('returns undefined for non-existent slug', () => {
      expect(getLocationBySlug('nonexistent')).toBeUndefined();
    });

    it('returns undefined for empty string', () => {
      expect(getLocationBySlug('')).toBeUndefined();
    });
  });
});
