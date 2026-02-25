import { describe, it, expect } from 'vitest';
import {
  BLOG_POSTS,
  getBlogPostBySlug,
  getFeaturedPosts,
  getPostsByCategory,
  getAllCategories,
  getRecentPosts,
  SERVICE_BLOG_POSTS,
  getRelatedBlogPosts,
} from '../../src/data/blog';
import { SERVICES } from '../../src/data/services';

describe('Blog Data', () => {
  describe('BLOG_POSTS array integrity', () => {
    it('contains exactly 5 posts', () => {
      expect(BLOG_POSTS).toHaveLength(5);
    });

    it('every post has a unique slug', () => {
      const slugs = BLOG_POSTS.map((p) => p.slug);
      expect(new Set(slugs).size).toBe(slugs.length);
    });

    it('every slug matches URL-safe pattern', () => {
      for (const post of BLOG_POSTS) {
        expect(post.slug).toMatch(/^[a-z0-9-]+$/);
      }
    });

    it('every post has required fields', () => {
      for (const post of BLOG_POSTS) {
        expect(post.slug).toBeTruthy();
        expect(post.title).toBeTruthy();
        expect(post.metaTitle).toBeTruthy();
        expect(post.metaDescription).toBeTruthy();
        expect(post.excerpt).toBeTruthy();
        expect(post.content).toBeTruthy();
        expect(post.author).toBeTruthy();
        expect(post.publishDate).toBeTruthy();
        expect(post.category).toBeTruthy();
        expect(post.tags.length).toBeGreaterThan(0);
        expect(post.readingTime).toBeGreaterThan(0);
      }
    });

    it('publishDate format is YYYY-MM-DD for every post', () => {
      for (const post of BLOG_POSTS) {
        expect(post.publishDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      }
    });
  });

  describe('getBlogPostBySlug', () => {
    it('returns correct post for "signs-of-blocked-drain"', () => {
      const post = getBlogPostBySlug('signs-of-blocked-drain');
      expect(post).toBeDefined();
      expect(post!.title).toContain('Warning Signs');
    });

    it('returns undefined for non-existent slug', () => {
      expect(getBlogPostBySlug('nonexistent')).toBeUndefined();
    });
  });

  describe('getFeaturedPosts', () => {
    it('returns only featured posts', () => {
      const featured = getFeaturedPosts();
      expect(featured.length).toBeGreaterThan(0);
      for (const post of featured) {
        expect(post.featured).toBe(true);
      }
    });

    it('returns exactly 2 featured posts', () => {
      expect(getFeaturedPosts()).toHaveLength(2);
    });
  });

  describe('getPostsByCategory', () => {
    it('returns 2 posts for "Drain Maintenance"', () => {
      const posts = getPostsByCategory('Drain Maintenance');
      expect(posts).toHaveLength(2);
    });

    it('returns 1 post for "Emergency Services"', () => {
      const posts = getPostsByCategory('Emergency Services');
      expect(posts).toHaveLength(1);
    });

    it('returns empty array for non-existent category', () => {
      expect(getPostsByCategory('Nonexistent')).toEqual([]);
    });
  });

  describe('getAllCategories', () => {
    it('returns array with no duplicates', () => {
      const categories = getAllCategories();
      expect(new Set(categories).size).toBe(categories.length);
    });

    it('includes expected categories', () => {
      const categories = getAllCategories();
      expect(categories).toContain('Drain Maintenance');
      expect(categories).toContain('Emergency Services');
    });
  });

  describe('getRecentPosts', () => {
    it('returns posts sorted by publishDate descending', () => {
      const posts = getRecentPosts();
      for (let i = 1; i < posts.length; i++) {
        const prev = new Date(posts[i - 1].publishDate).getTime();
        const curr = new Date(posts[i].publishDate).getTime();
        expect(prev).toBeGreaterThanOrEqual(curr);
      }
    });

    it('returns at most N posts when count is specified', () => {
      const posts = getRecentPosts(2);
      expect(posts).toHaveLength(2);
    });

    it('returns all posts when count exceeds total', () => {
      const posts = getRecentPosts(100);
      expect(posts).toHaveLength(BLOG_POSTS.length);
    });
  });

  describe('SERVICE_BLOG_POSTS', () => {
    it('every key is a valid service slug', () => {
      const validSlugs = new Set(SERVICES.map((s) => s.slug));
      for (const key of Object.keys(SERVICE_BLOG_POSTS)) {
        expect(validSlugs.has(key)).toBe(true);
      }
    });

    it('every value slug is a valid blog post slug', () => {
      const validSlugs = new Set(BLOG_POSTS.map((p) => p.slug));
      for (const slugs of Object.values(SERVICE_BLOG_POSTS)) {
        for (const slug of slugs) {
          expect(validSlugs.has(slug)).toBe(true);
        }
      }
    });
  });

  describe('getRelatedBlogPosts', () => {
    it('returns correct posts for "blocked-drains"', () => {
      const posts = getRelatedBlogPosts('blocked-drains');
      expect(posts).toHaveLength(2);
      const slugs = posts.map((p) => p.slug);
      expect(slugs).toContain('signs-of-blocked-drain');
      expect(slugs).toContain('prevent-blocked-drains-kitchen');
    });

    it('returns empty array for unknown service slug', () => {
      expect(getRelatedBlogPosts('nonexistent')).toEqual([]);
    });
  });
});
