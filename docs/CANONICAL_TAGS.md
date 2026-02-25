# Canonical Tag Implementation

This document confirms the canonical tag strategy for manchesterblockeddrain.co.uk.

## ✅ Status: Fully Implemented

All pages have self-referencing canonical tags via the `RouteSEOHead` component.

---

## Canonical URL Pattern

| Page Type | Canonical Format | Example |
|-----------|------------------|---------|
| Homepage | `https://manchesterblockeddrain.co.uk/` | With trailing slash |
| All other pages | `https://manchesterblockeddrain.co.uk/path` | No trailing slash |

### Examples

```
Homepage:        https://manchesterblockeddrain.co.uk/
Services:        https://manchesterblockeddrain.co.uk/services
Service detail:  https://manchesterblockeddrain.co.uk/services/blocked-drains
Location:        https://manchesterblockeddrain.co.uk/locations/salford
Location+Service: https://manchesterblockeddrain.co.uk/locations/salford/blocked-drains
```

---

## Implementation Details

### Component: `src/components/seo/RouteSEOHead.tsx`

This component handles all SEO meta tags including:
- `<title>`
- `<meta name="description">`
- `<link rel="canonical">`
- `<meta name="robots">`
- Open Graph tags (`og:title`, `og:description`, `og:url`, `og:image`)
- Twitter Card tags

### Canonical Logic

```typescript
// From src/seo/routeMeta.ts
export function normalizeCanonicalPath(path: string): string {
  if (path === "/" || path === "") return "/";
  return path.replace(/\/+$/, "");  // Strip trailing slash
}

// From RouteSEOHead.tsx
const canonicalPath = normalizeCanonicalPath(pathname);
const canonicalUrl = canonicalPath === "/" 
  ? `${BASE_URL}/` 
  : `${BASE_URL}${canonicalPath}`;
```

### URL Normalizer in App.tsx

The `CanonicalNormalizer` component automatically removes trailing slashes from URLs in the browser:

```typescript
// If user visits /services/, redirects to /services
if (pathname.endsWith("/") && pathname !== "/") {
  window.history.replaceState(null, "", pathname.replace(/\/+$/, ""));
}
```

---

## Pages with Canonical Tags

All pages use `<RouteSEOHead />`:

**Static Routes:**
- `/` - Homepage
- `/services` - Services hub
- `/locations` - Locations hub
- `/about` - About page
- `/contact` - Contact page
- `/faq` - FAQ page
- `/blog` - Blog index
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- `/cookies` - Cookie policy
- `/sitemap` - HTML sitemap

**Dynamic Routes:**
- `/services/:serviceSlug` - Service detail
- `/services/:serviceSlug/:subServiceSlug` - Sub-service detail
- `/locations/:locationSlug` - Location detail
- `/locations/:locationSlug/:serviceSlug` - Location + service
- `/locations/:locationSlug/:serviceSlug/:subServiceSlug` - Location + sub-service
- `/blog/:slug` - Blog post

**Noindex Routes (still have canonical, but noindex):**
- `/admin/*` - Admin pages
- `/login` - Login
- `/reset-password` - Password reset
- `/status` - Status page

---

## Self-Referencing Canonicals

Every page's canonical URL points to itself (self-referencing). There are no cross-canonical redirects between pages.

| URL Visited | Canonical Tag |
|-------------|---------------|
| `/services/blocked-drains` | `/services/blocked-drains` |
| `/services/blocked-drains/` | `/services/blocked-drains` (trailing slash stripped) |
| `/locations/salford` | `/locations/salford` |

---

## Verification

### 1. DevTools Check
```javascript
// In browser console on any page:
document.querySelector('link[rel="canonical"]').href
// Should return: https://manchesterblockeddrain.co.uk/current-path
```

### 2. View Source
Check the `<head>` section for exactly ONE canonical tag:
```html
<link rel="canonical" href="https://manchesterblockeddrain.co.uk/services/blocked-drains">
```

### 3. Google Search Console
1. URL Inspection → Enter any page URL
2. Check "Canonical" section
3. Should show: "User-declared canonical" matching the page URL

### 4. Bulk Verification Script
```bash
# Check multiple pages
for url in "/" "/services" "/services/blocked-drains" "/locations" "/locations/salford"; do
  echo "Checking: $url"
  curl -s "https://manchesterblockeddrain.co.uk$url" | grep -o '<link rel="canonical"[^>]*>'
done
```

---

## Duplicate Content Prevention

### Location Pages
Each location has its own canonical URL:
- `/locations/salford` → canonical: `/locations/salford`
- `/locations/bolton` → canonical: `/locations/bolton`

### Similar Service Pages
Each service variant has its own canonical:
- `/services/blocked-drains` → canonical: `/services/blocked-drains`
- `/services/drain-unblocking` → canonical: `/services/drain-unblocking`

### Location + Service Combinations
Unique canonicals for each combination:
- `/locations/salford/blocked-drains` → canonical: `/locations/salford/blocked-drains`
- `/locations/bolton/blocked-drains` → canonical: `/locations/bolton/blocked-drains`

---

## Robots Directives

| Route Pattern | Robots | Reason |
|---------------|--------|--------|
| Most pages | `index, follow, max-image-preview:large` | Indexable |
| `/admin/*` | `noindex, nofollow` | Admin area |
| `/login` | `noindex, nofollow` | Auth page |
| `/sitemap` (HTML) | `noindex, nofollow` | Utility page |
| `/status` | `noindex, nofollow` | Debug page |

---

## Troubleshooting

### Issue: Multiple canonical tags
This should not happen with `react-helmet-async` which deduplicates tags. If it does:
1. Check for multiple `<RouteSEOHead />` calls on same page
2. Ensure no raw `<Helmet>` usage outside the component

### Issue: Wrong canonical URL
1. Check `normalizeCanonicalPath()` function
2. Verify route params are being passed correctly
3. Check for override props on `<RouteSEOHead />`

### Issue: Google showing different canonical
1. Wait 2-4 weeks for re-crawl
2. Use URL Inspection → Request Indexing
3. Check for conflicting signals (redirects, internal links)

---

## Summary

- ✅ `react-helmet-async` installed and configured
- ✅ `RouteSEOHead` component on every page
- ✅ Self-referencing canonicals (page points to itself)
- ✅ No trailing slashes (except homepage)
- ✅ HTTPS only
- ✅ Consistent domain (manchesterblockeddrain.co.uk, no www)
- ✅ URL normalizer strips trailing slashes at runtime
- ✅ Deprecated `Seo.tsx` component removed
