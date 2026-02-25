import type { APIRoute } from 'astro';
import { BRAND } from '../data/brand';
import { SERVICES } from '../data/services';
import { INDEXED_LOCATIONS } from '../data/locations';
import { BLOG_POSTS } from '../data/blog';

// Generate at build time for static output
export const prerender = true;

const siteUrl = `https://${BRAND.domain}`;

// Stagger lastmod dates to avoid all pages showing the same date.
// High-priority pages get recent dates; lower-priority pages get earlier dates.
// This signals to Google which pages are freshest and most important.
const now = new Date();
function getStaggeredDate(daysAgo: number): string {
  const d = new Date(now);
  d.setDate(d.getDate() - daysAgo);
  return d.toISOString().split('T')[0];
}

interface SitemapUrl {
  loc: string;
  priority: number;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastmod?: string;
}

function generateSitemapUrls(): SitemapUrl[] {
  const urls: SitemapUrl[] = [];

  // Main pages (all with trailing slashes for canonicalization)
  // Stagger dates: homepage/key pages = recent, deeper pages = earlier
  urls.push({ loc: '/', priority: 1.0, changefreq: 'weekly', lastmod: getStaggeredDate(0) });
  urls.push({ loc: '/services/', priority: 0.9, changefreq: 'weekly', lastmod: getStaggeredDate(1) });
  urls.push({ loc: '/locations/', priority: 0.9, changefreq: 'weekly', lastmod: getStaggeredDate(1) });
  urls.push({ loc: '/contact/', priority: 0.8, changefreq: 'monthly', lastmod: getStaggeredDate(3) });
  urls.push({ loc: '/about/', priority: 0.7, changefreq: 'monthly', lastmod: getStaggeredDate(5) });
  urls.push({ loc: '/frequently-asked-questions/', priority: 0.7, changefreq: 'monthly', lastmod: getStaggeredDate(4) });

  // Blog pages
  urls.push({ loc: '/blog/', priority: 0.8, changefreq: 'weekly', lastmod: getStaggeredDate(0) });
  for (const [i, post] of BLOG_POSTS.entries()) {
    urls.push({
      loc: `/blog/${post.slug}/`,
      priority: 0.7,
      changefreq: 'monthly',
      lastmod: getStaggeredDate(2 + i * 3),
    });
  }

  // Legal pages (lower priority, older dates)
  urls.push({ loc: '/privacy/', priority: 0.3, changefreq: 'yearly', lastmod: getStaggeredDate(14) });
  urls.push({ loc: '/terms/', priority: 0.3, changefreq: 'yearly', lastmod: getStaggeredDate(14) });
  urls.push({ loc: '/cookies/', priority: 0.3, changefreq: 'yearly', lastmod: getStaggeredDate(14) });

  // Service pages
  for (const [i, service] of SERVICES.entries()) {
    urls.push({
      loc: `/services/${service.slug}/`,
      priority: 0.9,
      changefreq: 'weekly',
      lastmod: getStaggeredDate(1 + i),
    });

    // Sub-service pages
    if (service.subServices) {
      for (const [j, subService] of service.subServices.entries()) {
        urls.push({
          loc: `/services/${service.slug}/${subService.slug}/`,
          priority: 0.8,
          changefreq: 'monthly',
          lastmod: getStaggeredDate(3 + i + j),
        });
      }
    }
  }

  // Location pages (only indexed locations)
  for (const [i, location] of INDEXED_LOCATIONS.entries()) {
    // Main location page (Manchester gets higher priority)
    const isManchester = location.slug === 'manchester';
    urls.push({
      loc: `/locations/${location.slug}/`,
      priority: isManchester ? 0.9 : 0.8,
      changefreq: 'weekly',
      lastmod: getStaggeredDate(isManchester ? 1 : 2 + i),
    });

    // Location + Service combinations
    for (const [j, service] of SERVICES.entries()) {
      urls.push({
        loc: `/locations/${location.slug}/${service.slug}/`,
        priority: isManchester ? 0.8 : 0.7,
        changefreq: 'monthly',
        lastmod: getStaggeredDate(3 + i + j * 2),
      });
    }
  }

  return urls;
}

function generateSitemapXml(urls: SitemapUrl[]): string {
  const urlElements = urls
    .map(
      (url) => `  <url>
    <loc>${siteUrl}${url.loc}</loc>
    <lastmod>${url.lastmod || getStaggeredDate(7)}</lastmod>
    <changefreq>${url.changefreq || 'monthly'}</changefreq>
    <priority>${url.priority.toFixed(1)}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
}

export const GET: APIRoute = async () => {
  const urls = generateSitemapUrls();
  const sitemap = generateSitemapXml(urls);

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
