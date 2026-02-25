# SEO Verification Checklist

**Last Updated:** 2026-02-13
**Canonical Host:** https://manchesterblockeddrain.co.uk (non-www, HTTPS)

---

## Quick URL Checks

```bash
# Must return HTTP 200
curl -I https://manchesterblockeddrain.co.uk/robots.txt
curl -I https://manchesterblockeddrain.co.uk/sitemap.xml
curl -I https://manchesterblockeddrain.co.uk/llm.html
```

---

## Browser Console Checks (per route)

Run these in DevTools console on each key page:

```javascript
// Title - must be unique per route, <= 60 chars
console.log('Title:', document.title, '(' + document.title.length + ' chars)');

// Description - must be unique, 140-160 chars ideal
const desc = document.querySelector('meta[name="description"]')?.content;
console.log('Description:', desc, '(' + (desc?.length || 0) + ' chars)');

// Canonical - exactly ONE, self-referencing
const canonicals = document.querySelectorAll('link[rel="canonical"]');
console.log('Canonical count:', canonicals.length, '- URL:', canonicals[0]?.href);

// Robots - should be "index, follow" for public pages
console.log('Robots:', document.querySelector('meta[name="robots"]')?.content);

// Check for duplicates (MUST all be 1)
console.log('Meta desc count:', document.querySelectorAll('meta[name="description"]').length);
console.log('Canonical count:', canonicals.length);
console.log('Title count:', document.querySelectorAll('title').length);

// Open Graph
console.log('OG Title:', document.querySelector('meta[property="og:title"]')?.content);
console.log('OG Description:', document.querySelector('meta[property="og:description"]')?.content);
console.log('OG URL:', document.querySelector('meta[property="og:url"]')?.content);
console.log('OG Image:', document.querySelector('meta[property="og:image"]')?.content);

// Twitter Card
console.log('Twitter Card:', document.querySelector('meta[name="twitter:card"]')?.content);
console.log('Twitter Title:', document.querySelector('meta[name="twitter:title"]')?.content);
```

---

## Expected Results

| Check | Expected Value |
|-------|----------------|
| Title length | ≤ 60 characters |
| Description length | 140-160 characters |
| Meta description count | Exactly 1 |
| Canonical count | Exactly 1 |
| Title tag count | Exactly 1 |
| Canonical format | `https://manchesterblockeddrain.co.uk/path` (no trailing slash except homepage) |
| Homepage canonical | `https://manchesterblockeddrain.co.uk/` |
| Robots (public pages) | `index, follow, max-image-preview:large` |
| Robots (admin/login) | `noindex, nofollow` |

---

## Routes to Verify

### Priority Routes (must verify all)
- [x] `/` - Homepage
- [x] `/services` - All services
- [x] `/services/blocked-drains` - Service detail
- [x] `/services/blocked-drains/blocked-toilet` - Sub-service
- [x] `/locations` - All locations
- [x] `/locations/manchester` - Location detail
- [x] `/locations/manchester/blocked-drains` - Location + service
- [x] `/contact` - Contact page
- [x] `/about` - About page
- [x] `/faq` - FAQ page
- [x] `/blog` - Blog listing

### NoIndex Routes (verify noindex)
- [x] `/admin` → `noindex, nofollow`
- [x] `/login` → `noindex, nofollow`
- [x] `/reset-password` → `noindex, nofollow`
- [x] `/sitemap` (HTML) → `noindex, nofollow`

---

## Canonical URL Rules

| Page Type | Canonical Format |
|-----------|-----------------|
| Homepage | `https://manchesterblockeddrain.co.uk/` |
| All other pages | `https://manchesterblockeddrain.co.uk/path` (NO trailing slash) |
| Service pages | `https://manchesterblockeddrain.co.uk/services/blocked-drains` |
| Location pages | `https://manchesterblockeddrain.co.uk/locations/manchester` |

---

## Sitemap Verification

```bash
# Check sitemap is accessible
curl -I https://manchesterblockeddrain.co.uk/sitemap.xml

# Validate sitemap content
curl https://manchesterblockeddrain.co.uk/sitemap.xml | grep -c '<url>'
```

**Expected sitemap content:**
- All `<loc>` URLs use `https://manchesterblockeddrain.co.uk`
- Homepage has trailing slash: `https://manchesterblockeddrain.co.uk/`
- All other URLs have NO trailing slash
- All entries have `<lastmod>`, `<changefreq>`, `<priority>`
- No admin/login/reset-password routes included

---

## Robots.txt Verification

```bash
curl https://manchesterblockeddrain.co.uk/robots.txt
```

**Expected content:**
- `User-agent: *` → `Allow: /`
- `Disallow: /admin`, `/login`, `/reset-password`, `/status`
- `Sitemap: https://manchesterblockeddrain.co.uk/sitemap.xml`
- AI bots (GPTBot, PerplexityBot, Claude-Web) → `Allow: /`
- Training scrapers (CCBot, cohere-ai) → `Disallow: /`

---

## Structured Data Verification

Use [Google Rich Results Test](https://search.google.com/test/rich-results):

| Page | Expected Schema |
|------|-----------------|
| Homepage `/` | LocalBusiness, FAQPage |
| Service pages | Service, LocalBusiness, BreadcrumbList |
| Location pages | LocalBusiness, BreadcrumbList |
| Contact page | ContactPage, LocalBusiness |
| FAQ page | FAQPage |

---

## Homepage Content Check

The homepage (`/`) should include:
- [x] Exactly 1 `<h1>` containing "Blocked Drains Manchester"
- [x] Multiple `<h2>` and `<h3>` sections
- [x] 800-1500+ words of content (PillarContent component)
- [x] Service list (drain unblocking, jetting, CCTV, repairs)
- [x] Service area section (Greater Manchester + districts)
- [x] 12 FAQ items with short answers
- [x] Internal links to key service pages

---

## No HTTP References Check

Search codebase for any `http://` references:
```bash
grep -r "http://" src/ --include="*.tsx" --include="*.ts"
```

All internal links and assets must use HTTPS.

---

## Mobile-Friendly Test

Use [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) on key pages:
- Homepage
- Service detail page
- Contact page

---

## Files Changed (2025-12-31 SEO Baseline)

| File | Change |
|------|--------|
| `index.html` | Removed static `<title>` tag to prevent duplicates |
| `src/App.tsx` | Fixed canonical normalizer to REMOVE trailing slashes (not add them) |
| `src/components/sections/ManchesterFAQSection.tsx` | Expanded from 6 to 12 FAQs |
| `public/robots.txt` | Configured with AI bot rules and correct disallows |
| `public/sitemap.xml` | All URLs use no trailing slash except homepage |
| `src/seo/routeMeta.ts` | Centralized SEO metadata for all routes |
| `src/components/seo/RouteSEOHead.tsx` | Single source of truth for all head tags |
| `docs/SEO_VERIFICATION.md` | Updated verification checklist |
