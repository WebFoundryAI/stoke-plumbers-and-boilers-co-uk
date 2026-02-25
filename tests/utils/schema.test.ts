import { describe, it, expect } from 'vitest';
import {
  getBaseBusinessSchema,
  getHomepageSchema,
  getServicePageSchema,
  getSubServicePageSchema,
  getLocationPageSchema,
  getLocationServicePageSchema,
  getBreadcrumbSchema,
  getFAQSchema,
  getBlogArticleSchema,
  getReviewsSchema,
  getOrganizationSchema,
  getWebPageSchema,
  getWebSiteSchema,
  getCompleteHomepageSchema,
  serializeSchema,
  getAggregateRatingData,
  getCustomerReviews,
} from '../../src/utils/schema';
import { SERVICES } from '../../src/data/services';
import { LOCATIONS } from '../../src/data/locations';
import { BRAND } from '../../src/data/brand';

const siteUrl = `https://${BRAND.domain}`;

describe('Schema Generation', () => {
  describe('getBaseBusinessSchema', () => {
    const schema = getBaseBusinessSchema();

    it('returns @context "https://schema.org"', () => {
      expect(schema['@context']).toBe('https://schema.org');
    });

    it('returns @type "Plumber"', () => {
      expect(schema['@type']).toBe('Plumber');
    });

    it('returns @id ending with "/#business"', () => {
      expect(schema['@id']).toBe(`${siteUrl}/#business`);
    });

    it('formats telephone with +44 prefix', () => {
      expect(schema.telephone).toBe(`+44${BRAND.phone.substring(1)}`);
      expect(schema.telephone).toMatch(/^\+44\d+$/);
    });

    it('includes aggregateRating with correct structure', () => {
      expect(schema.aggregateRating).toBeDefined();
      expect(schema.aggregateRating['@type']).toBe('AggregateRating');
      expect(schema.aggregateRating.ratingValue).toBeDefined();
      expect(schema.aggregateRating.reviewCount).toBeDefined();
    });

    it('includes areaServed array matching LOCATIONS length', () => {
      expect(schema.areaServed).toHaveLength(LOCATIONS.length);
    });

    it('each areaServed entry has @type "City"', () => {
      for (const area of schema.areaServed as any[]) {
        expect(area['@type']).toBe('City');
        expect(area.name).toBeTruthy();
      }
    });

    it('includes hasOfferCatalog with all SERVICES', () => {
      const catalog = schema.hasOfferCatalog;
      expect(catalog['@type']).toBe('OfferCatalog');
      expect(catalog.itemListElement).toHaveLength(SERVICES.length);
    });

    it('includes openingHoursSpecification covering all 7 days', () => {
      const hours = schema.openingHoursSpecification;
      expect(hours).toHaveLength(1);
      expect(hours[0].dayOfWeek).toHaveLength(7);
    });

    it('includes contactPoint with correct structure', () => {
      expect(schema.contactPoint['@type']).toBe('ContactPoint');
      expect(schema.contactPoint.contactType).toBe('Customer Service');
    });
  });

  describe('getHomepageSchema', () => {
    it('returns same structure as getBaseBusinessSchema', () => {
      const homepage = getHomepageSchema();
      const base = getBaseBusinessSchema();
      expect(homepage['@type']).toBe(base['@type']);
      expect(homepage['@id']).toBe(base['@id']);
    });
  });

  describe('getServicePageSchema', () => {
    const service = SERVICES[0]; // blocked-drains
    const result = getServicePageSchema(service);

    it('returns array of exactly 2 schemas', () => {
      expect(Array.isArray(result)).toBe(true);
      expect(result).toHaveLength(2);
    });

    it('first element is the base business schema', () => {
      expect(result[0]['@type']).toBe('Plumber');
    });

    it('second element has @type "Service"', () => {
      expect(result[1]['@type']).toBe('Service');
    });

    it('service URL matches /services/{slug} pattern', () => {
      expect(result[1].url).toBe(`${siteUrl}/services/${service.slug}`);
    });

    it('includes sub-service offer catalog when service has subServices', () => {
      expect(result[1].hasOfferCatalog).toBeDefined();
      expect(result[1].hasOfferCatalog.itemListElement).toHaveLength(service.subServices!.length);
    });

    it('telephone in availableChannel uses +44 format', () => {
      expect(result[1].availableChannel.servicePhone).toMatch(/^\+44\d+$/);
    });
  });

  describe('getSubServicePageSchema', () => {
    const service = SERVICES[0];
    const subService = service.subServices![0];
    const result = getSubServicePageSchema(service, subService);

    it('returns array of exactly 2 schemas', () => {
      expect(result).toHaveLength(2);
    });

    it('second element @type is "Service"', () => {
      expect(result[1]['@type']).toBe('Service');
    });

    it('URL includes both service and sub-service slugs', () => {
      expect(result[1].url).toBe(`${siteUrl}/services/${service.slug}/${subService.slug}`);
    });

    it('includes isRelatedTo referencing parent service', () => {
      expect(result[1].isRelatedTo).toBeDefined();
      expect(result[1].isRelatedTo.name).toBe(service.name);
      expect(result[1].isRelatedTo.url).toBe(`${siteUrl}/services/${service.slug}`);
    });
  });

  describe('getLocationPageSchema', () => {
    const location = LOCATIONS[0]; // manchester
    const result = getLocationPageSchema(location);

    it('returns a single object (not array)', () => {
      expect(Array.isArray(result)).toBe(false);
    });

    it('@id includes location slug', () => {
      expect(result['@id']).toContain(location.slug);
    });

    it('areaServed is a single City object (not array)', () => {
      expect(result.areaServed['@type']).toBe('City');
      expect(result.areaServed.name).toBe(location.name);
    });

    it('geo coordinates match the location data', () => {
      expect(result.geo.latitude).toBe(location.latitude);
      expect(result.geo.longitude).toBe(location.longitude);
    });

    it('containedInPlace uses countyOrRegion', () => {
      expect(result.areaServed.containedInPlace.name).toBe(location.countyOrRegion);
    });
  });

  describe('getLocationServicePageSchema', () => {
    const location = LOCATIONS[0];
    const service = SERVICES[0];
    const result = getLocationServicePageSchema(location, service);

    it('returns array of 2 schemas', () => {
      expect(result).toHaveLength(2);
    });

    it('second schema name includes both location and service names', () => {
      expect(result[1].name).toContain(location.name);
      expect(result[1].name).toContain(service.name);
    });

    it('URL matches /locations/{location}/{service} pattern', () => {
      expect(result[1].url).toBe(`${siteUrl}/locations/${location.slug}/${service.slug}`);
    });
  });

  describe('getBreadcrumbSchema', () => {
    it('returns @type "BreadcrumbList"', () => {
      const schema = getBreadcrumbSchema([{ name: 'Home', url: '/' }]);
      expect(schema['@type']).toBe('BreadcrumbList');
    });

    it('positions are 1-indexed', () => {
      const schema = getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services/' },
      ]);
      expect(schema.itemListElement[0].position).toBe(1);
      expect(schema.itemListElement[1].position).toBe(2);
    });

    it('prepends siteUrl to relative URLs', () => {
      const schema = getBreadcrumbSchema([{ name: 'Services', url: '/services/' }]);
      expect(schema.itemListElement[0].item).toBe(`${siteUrl}/services/`);
    });

    it('preserves absolute URLs as-is', () => {
      const absUrl = 'https://example.com/page';
      const schema = getBreadcrumbSchema([{ name: 'External', url: absUrl }]);
      expect(schema.itemListElement[0].item).toBe(absUrl);
    });
  });

  describe('getFAQSchema', () => {
    it('returns @type "FAQPage"', () => {
      const schema = getFAQSchema([{ question: 'Q?', answer: 'A.' }]);
      expect(schema['@type']).toBe('FAQPage');
    });

    it('each entry has @type "Question" with acceptedAnswer', () => {
      const schema = getFAQSchema([
        { question: 'Q1?', answer: 'A1.' },
        { question: 'Q2?', answer: 'A2.' },
      ]);
      for (const entity of schema.mainEntity) {
        expect(entity['@type']).toBe('Question');
        expect(entity.acceptedAnswer['@type']).toBe('Answer');
        expect(entity.acceptedAnswer.text).toBeTruthy();
      }
    });

    it('handles empty FAQ array', () => {
      const schema = getFAQSchema([]);
      expect(schema.mainEntity).toHaveLength(0);
    });
  });

  describe('getBlogArticleSchema', () => {
    const post = {
      slug: 'test-post',
      title: 'Test Post',
      excerpt: 'Test excerpt',
      author: 'Test Author',
      publishDate: '2025-01-01',
      category: 'Test',
    };

    it('returns @type "Article"', () => {
      const schema = getBlogArticleSchema(post);
      expect(schema['@type']).toBe('Article');
    });

    it('uses updatedDate for dateModified when provided', () => {
      const schema = getBlogArticleSchema({ ...post, updatedDate: '2025-06-01' });
      expect(schema.dateModified).toBe('2025-06-01');
    });

    it('falls back to publishDate for dateModified when updatedDate is absent', () => {
      const schema = getBlogArticleSchema(post);
      expect(schema.dateModified).toBe(post.publishDate);
    });

    it('includes correct URL pattern', () => {
      const schema = getBlogArticleSchema(post);
      expect(schema['@id']).toBe(`${siteUrl}/blog/${post.slug}/#article`);
    });
  });

  describe('getReviewsSchema', () => {
    const reviews = getReviewsSchema();

    it('returns array of 6 reviews', () => {
      expect(reviews).toHaveLength(6);
    });

    it('each review has @type "Review"', () => {
      for (const review of reviews) {
        expect(review['@type']).toBe('Review');
      }
    });

    it('each review references the business via @id', () => {
      for (const review of reviews) {
        expect(review.itemReviewed['@id']).toBe(`${siteUrl}/#business`);
      }
    });
  });

  describe('getOrganizationSchema', () => {
    const schema = getOrganizationSchema();

    it('returns @type "Organization"', () => {
      expect(schema['@type']).toBe('Organization');
    });

    it('includes 2 contactPoints', () => {
      expect(schema.contactPoint).toHaveLength(2);
      expect(schema.contactPoint[0].contactType).toBe('Customer Service');
      expect(schema.contactPoint[1].contactType).toBe('Emergency Service');
    });

    it('includes knowsAbout array', () => {
      expect(schema.knowsAbout.length).toBeGreaterThan(0);
    });
  });

  describe('getWebPageSchema', () => {
    it('prepends siteUrl to relative URL', () => {
      const schema = getWebPageSchema({
        url: '/services/',
        name: 'Services',
        description: 'Our services',
      });
      expect(schema.url).toBe(`${siteUrl}/services/`);
    });

    it('preserves absolute URL', () => {
      const schema = getWebPageSchema({
        url: 'https://example.com/page',
        name: 'Page',
        description: 'Desc',
      });
      expect(schema.url).toBe('https://example.com/page');
    });

    it('includes breadcrumb when provided', () => {
      const schema = getWebPageSchema({
        url: '/services/',
        name: 'Services',
        description: 'Desc',
        breadcrumb: [{ name: 'Home', url: '/' }],
      });
      expect(schema.breadcrumb).toBeDefined();
    });

    it('omits breadcrumb when not provided', () => {
      const schema = getWebPageSchema({
        url: '/services/',
        name: 'Services',
        description: 'Desc',
      });
      expect(schema.breadcrumb).toBeUndefined();
    });

    it('includes datePublished when provided', () => {
      const schema = getWebPageSchema({
        url: '/page/',
        name: 'Page',
        description: 'Desc',
        datePublished: '2025-01-01',
      });
      expect(schema.datePublished).toBe('2025-01-01');
    });

    it('omits datePublished when not provided', () => {
      const schema = getWebPageSchema({
        url: '/page/',
        name: 'Page',
        description: 'Desc',
      });
      expect(schema.datePublished).toBeUndefined();
    });
  });

  describe('getWebSiteSchema', () => {
    const schema = getWebSiteSchema();

    it('returns @type "WebSite"', () => {
      expect(schema['@type']).toBe('WebSite');
    });

    it('includes SearchAction potentialAction', () => {
      expect(schema.potentialAction['@type']).toBe('SearchAction');
    });
  });

  describe('getCompleteHomepageSchema', () => {
    const schemas = getCompleteHomepageSchema();

    it('returns array containing business, organization, website, and review schemas', () => {
      expect(schemas[0]['@type']).toBe('Plumber');
      expect(schemas[1]['@type']).toBe('Organization');
      expect(schemas[2]['@type']).toBe('WebSite');
      expect(schemas[3]['@type']).toBe('Review');
    });

    it('total length is 3 + number of reviews', () => {
      const reviewCount = getCustomerReviews().length;
      expect(schemas).toHaveLength(3 + reviewCount);
    });
  });

  describe('serializeSchema', () => {
    it('serializes single object as JSON string', () => {
      const obj = { '@context': 'https://schema.org', '@type': 'Thing' };
      const result = serializeSchema(obj);
      expect(JSON.parse(result)).toEqual(obj);
    });

    it('serializes array as @graph with @context at top level', () => {
      const arr = [
        { '@context': 'https://schema.org', '@type': 'Thing' },
        { '@context': 'https://schema.org', '@type': 'Person' },
      ];
      const result = JSON.parse(serializeSchema(arr));
      expect(result['@context']).toBe('https://schema.org');
      expect(result['@graph']).toHaveLength(2);
      // Individual @context should be stripped
      for (const item of result['@graph']) {
        expect(item['@context']).toBeUndefined();
      }
    });
  });

  describe('getAggregateRatingData', () => {
    it('returns rating data with expected fields', () => {
      const data = getAggregateRatingData();
      expect(data.ratingValue).toBeDefined();
      expect(data.reviewCount).toBeDefined();
      expect(data.bestRating).toBeDefined();
      expect(data.worstRating).toBeDefined();
    });
  });

  describe('getCustomerReviews', () => {
    it('returns array of review objects', () => {
      const reviews = getCustomerReviews();
      expect(reviews.length).toBeGreaterThan(0);
      for (const review of reviews) {
        expect(review.author).toBeTruthy();
        expect(review.reviewBody).toBeTruthy();
        expect(review.reviewRating).toBeGreaterThanOrEqual(1);
        expect(review.reviewRating).toBeLessThanOrEqual(5);
      }
    });
  });
});
