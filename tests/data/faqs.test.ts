import { describe, it, expect } from 'vitest';
import {
  GENERIC_FAQS,
  SERVICE_FAQS,
  getServiceFAQs,
  getLocationFAQs,
  PAGE_FAQS,
  HOMEPAGE_FAQS,
} from '../../src/data/faqs';

describe('FAQ Data', () => {
  describe('GENERIC_FAQS', () => {
    it('contains exactly 7 FAQs', () => {
      expect(GENERIC_FAQS).toHaveLength(7);
    });

    it('every FAQ has non-empty question and answer', () => {
      for (const faq of GENERIC_FAQS) {
        expect(faq.question.trim()).toBeTruthy();
        expect(faq.answer.trim()).toBeTruthy();
      }
    });
  });

  describe('SERVICE_FAQS', () => {
    it('has entries for expected service slugs', () => {
      expect(SERVICE_FAQS['blocked-drains']).toBeDefined();
      expect(SERVICE_FAQS['cctv-drain-surveys']).toBeDefined();
      expect(SERVICE_FAQS['drain-jetting']).toBeDefined();
      expect(SERVICE_FAQS['emergency-drain-services']).toBeDefined();
    });

    it('every FAQ entry has non-empty question and answer', () => {
      for (const faqs of Object.values(SERVICE_FAQS)) {
        for (const faq of faqs) {
          expect(faq.question.trim()).toBeTruthy();
          expect(faq.answer.trim()).toBeTruthy();
        }
      }
    });
  });

  describe('getServiceFAQs', () => {
    it('returns service-specific FAQs followed by GENERIC_FAQS', () => {
      const faqs = getServiceFAQs('blocked-drains');
      const serviceFaqCount = SERVICE_FAQS['blocked-drains'].length;
      expect(faqs).toHaveLength(serviceFaqCount + GENERIC_FAQS.length);
      // First items should be service-specific
      expect(faqs[0].question).toBe(SERVICE_FAQS['blocked-drains'][0].question);
      // Last items should be generic
      expect(faqs[faqs.length - 1].question).toBe(GENERIC_FAQS[GENERIC_FAQS.length - 1].question);
    });

    it('returns only GENERIC_FAQS for unknown service slug', () => {
      const faqs = getServiceFAQs('nonexistent');
      expect(faqs).toHaveLength(GENERIC_FAQS.length);
    });
  });

  describe('getLocationFAQs', () => {
    it('returns FAQs for "Manchester"', () => {
      const faqs = getLocationFAQs('Manchester');
      expect(faqs.length).toBeGreaterThan(0);
    });

    it('returns fallback FAQs for unknown location', () => {
      const faqs = getLocationFAQs('Atlantis');
      expect(faqs.length).toBe(3);
      // Fallback FAQs should contain the location name
      expect(faqs[0].question).toContain('Atlantis');
      expect(faqs[0].answer).toContain('Atlantis');
    });
  });

  describe('PAGE_FAQS / HOMEPAGE_FAQS', () => {
    it('PAGE_FAQS contains exactly 8 FAQs', () => {
      expect(PAGE_FAQS).toHaveLength(8);
    });

    it('HOMEPAGE_FAQS is the same reference as PAGE_FAQS', () => {
      expect(HOMEPAGE_FAQS).toBe(PAGE_FAQS);
    });
  });
});
