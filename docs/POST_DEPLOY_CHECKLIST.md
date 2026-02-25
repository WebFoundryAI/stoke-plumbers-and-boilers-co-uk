# Post-Deploy SEO Verification Checklist

## 1. Render-Blocking Resources

### Verify Third-Party Scripts Are Deferred
- [x] Open Chrome DevTools → Network tab
- [x] Filter by "JS" 
- [x] Verify `googletagmanager.com` loads **after** user interaction (scroll/click)
- [x] Check that no third-party scripts block `DOMContentLoaded`

### Run Lighthouse Audit
```bash
# In Chrome DevTools → Lighthouse tab
# Select: Performance, SEO, Best Practices
# Device: Mobile
```
- [x] "Eliminate render-blocking resources" warning reduced/removed
- [x] FCP (First Contentful Paint) < 1.8s
- [x] LCP (Largest Contentful Paint) < 2.5s

## 2. Font Performance

### Verify Font Loading
- [x] Open DevTools → Network tab → Filter "Font"
- [x] Confirm only 2-3 font files load (400, 600/700 weights)
- [x] Check that fonts use `font-display: swap` (no FOIT)

### Check for CLS
- [x] Run Lighthouse and check CLS score < 0.1
- [x] Verify text doesn't shift after fonts load

## 3. Image Alt Text

### Verify All Images Have Alt
Run in browser console on each page:
```javascript
// Check for images missing alt
const images = document.querySelectorAll('img');
images.forEach((img, i) => {
  if (img.alt === undefined || img.alt === null) {
    console.error(`Image ${i} missing alt:`, img.src);
  } else if (img.alt === '' && !img.hasAttribute('aria-hidden')) {
    console.warn(`Image ${i} has empty alt but no aria-hidden:`, img.src);
  }
});
console.log(`Total images: ${images.length}`);
```

- [x] Homepage: All images have alt or aria-hidden
- [x] Service pages: All images have alt
- [x] Location pages: All images have alt

## 4. Sitemap & Robots.txt

### Verify Accessibility
- [x] https://manchesterblockeddrain.co.uk/sitemap.xml returns 200
- [x] https://manchesterblockeddrain.co.uk/robots.txt returns 200

### Validate Sitemap
```bash
# Use an online validator or:
curl -I https://manchesterblockeddrain.co.uk/sitemap.xml
# Should return: Content-Type: application/xml
```

- [x] All URLs in sitemap return 200 status
- [x] All URLs use https:// (not http://)
- [x] Sitemap includes the homepage with priority 1.0

### Validate robots.txt
- [x] Contains `Sitemap: https://manchesterblockeddrain.co.uk/sitemap.xml`
- [x] Contains `Allow: /` for major crawlers
- [x] Admin pages are disallowed

## 5. Content Expansion

### Homepage Content Check
- [x] Open homepage and scroll through
- [x] Verify "Signs Your Drain Is Blocked" section exists
- [x] Verify "How We Clear a Blocked Drain" numbered steps exist
- [x] Verify 8 FAQs are displayed
- [x] Verify internal links to service pages work
- [x] Verify internal links to location pages work

### Word Count Verification
Run in console on homepage:
```javascript
// Approximate word count for main content
const content = document.querySelector('main');
const text = content?.innerText || '';
const words = text.split(/\s+/).filter(w => w.length > 0).length;
console.log(`Approximate word count: ${words}`);
// Should be 2000+ words with new content
```

## 6. SEO Meta Tags (Per-Route Verification)

### Run on Each Page
```javascript
// Check for duplicate meta tags
const titles = document.querySelectorAll('title');
const descriptions = document.querySelectorAll('meta[name="description"]');
const canonicals = document.querySelectorAll('link[rel="canonical"]');

console.log('Titles:', titles.length, '(should be 1)');
console.log('Descriptions:', descriptions.length, '(should be 1)');
console.log('Canonicals:', canonicals.length, '(should be 1)');

// Verify canonical URL
const canonical = document.querySelector('link[rel="canonical"]');
console.log('Canonical URL:', canonical?.href);
// Should match current page URL without trailing slash
```

### Pages to Check
- [x] Homepage (`/`)
- [x] Services (`/services`)
- [x] Service detail (`/services/blocked-drains`)
- [x] Location (`/locations/manchester`)
- [x] Location + service (`/locations/manchester/blocked-drains`)
- [x] About (`/about`)
- [x] Contact (`/contact`)

## 7. HTTPS Verification

### Check for Mixed Content
Run in console:
```javascript
// Find any http:// references
const html = document.documentElement.innerHTML;
const httpRefs = html.match(/http:\/\/[^"'\s]+/g);
console.log('HTTP references found:', httpRefs?.length || 0);
httpRefs?.forEach(ref => console.warn(ref));
```

- [x] No http:// URLs found in page HTML
- [x] All assets load via HTTPS

## 8. Google Search Console

### Verify Ownership (if not already done)
- [x] Go to https://search.google.com/search-console
- [x] Add property: `manchesterblockeddrain.co.uk`
- [x] Complete verification (DNS TXT or HTML file)

### Submit Sitemap
- [x] In GSC → Sitemaps → Enter `sitemap.xml`
- [x] Click Submit
- [x] Wait for status to show "Success"

### Request Indexing for Key Pages
- [x] Homepage: Use URL Inspection → Request Indexing
- [x] Main service pages: Request Indexing
- [x] Check Coverage report after 24-48 hours

## Quick Test Commands

```bash
# Test sitemap
curl -s https://manchesterblockeddrain.co.uk/sitemap.xml | head -20

# Test robots.txt
curl https://manchesterblockeddrain.co.uk/robots.txt

# Test homepage canonical
curl -s https://manchesterblockeddrain.co.uk/ | grep -i 'rel="canonical"'

# Test homepage title
curl -s https://manchesterblockeddrain.co.uk/ | grep -i '<title>'
```

## Files Created/Modified

### New Files
- `src/components/ui/SiteImage.tsx` - Alt-enforced image component
- `src/lib/loadNonCriticalScripts.ts` - Script loader utility
- `src/components/sections/BlockedDrainsContent.tsx` - Expanded content
- `seo/keyword-map.csv` - Keyword-to-URL mapping
- `docs/GSC_SETUP.md` - GSC setup guide
- `docs/POST_DEPLOY_CHECKLIST.md` - This checklist

### Modified Files
- `index.html` - font-display: swap for fonts
- `src/pages/Index.tsx` - Added BlockedDrainsContent section
- `src/components/lazy/LazySections.tsx` - Added lazy BlockedDrainsContent

## Expected Improvements

| Metric | Before | Target |
|--------|--------|--------|
| LCP | Variable | < 2.5s |
| CLS | Variable | < 0.1 |
| FCP | Variable | < 1.8s |
| Thin content flag | Yes | No |
| Alt text coverage | Partial | 100% |
| Render-blocking | Present | Minimal |
