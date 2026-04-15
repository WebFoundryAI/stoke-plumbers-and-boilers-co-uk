import { defineConfig } from 'astro/config';
// @astrojs/sitemap removed — replaced by custom split sitemaps
// See src/pages/sitemap-index.xml.ts, sitemap-pages.xml.ts,
// sitemap-services.xml.ts, sitemap-locations.xml.ts, sitemap-blog.xml.ts
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://stokeplumbersandboilers.co.uk',
  integrations: [
    tailwind(),
  ],
  output: 'static',
  compressHTML: true,
  build: {
    format: 'directory',
  },
  trailingSlash: 'always',
});
