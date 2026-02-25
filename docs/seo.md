# SEO Verification Checklist

### 1. Sitemap Verification
- [ ] Fetch `https://manchesterblockeddrain.co.uk/sitemap.xml` - confirm HTTP 200
- [ ] Verify all `<url>` entries have `<loc>`, `<lastmod>`, `<changefreq>`, `<priority>`
- [ ] Confirm `/llm.html` is included in sitemap
- [ ] Check all URLs use consistent trailing slash format

### 2. Robots.txt Verification
- [ ] Fetch `https://manchesterblockeddrain.co.uk/robots.txt` - confirm HTTP 200
- [ ] Verify `Sitemap:` directive points to correct absolute URL
- [ ] Confirm GPTBot, PerplexityBot, Claude-Web are allowed
- [ ] Confirm Google-Extended, CCBot are disallowed
- [ ] Verify admin routes are disallowed

### 3. Per-Page SEO Verification
For each key page, view source and confirm:
- [ ] `<title>` tag present and unique
- [ ] `<meta name="description">` present and unique
- [ ] `<link rel="canonical">` present and self-referencing
- [ ] Open Graph tags present (og:title, og:description, og:url, og:image)
- [ ] Twitter Card tags present

Key pages to check:
- Homepage `/`
- Services `/services/`
- Blocked Drains `/services/blocked-drains/`
- Locations `/locations/`
- Manchester `/locations/manchester/`
- Contact `/contact/`

### 4. Structured Data Verification
- [ ] Test homepage with Google Rich Results Test
- [ ] Verify LocalBusiness schema is valid
- [ ] Verify FAQPage schema on FAQ page
- [ ] Verify Service schemas on service pages
- [ ] Check for no errors/warnings in structured data

### 5. LLM Page Verification
- [ ] Fetch `https://manchesterblockeddrain.co.uk/llm.html` - confirm HTTP 200
- [ ] Verify page is static HTML (no JS required to render content)
- [ ] Confirm JSON-LD schemas are present and valid
- [ ] Check all factual information matches main site

### 6. Google Search Console
- [ ] Submit sitemap at `https://manchesterblockeddrain.co.uk/sitemap.xml`
- [ ] Verify ownership with google verification file
- [ ] Check for crawl errors
- [ ] Monitor index coverage

### 7. Performance
- [ ] Check Core Web Vitals in PageSpeed Insights
- [ ] Verify images are optimized and lazy-loaded
- [ ] Confirm critical CSS is inlined
- [ ] Test mobile rendering

### 8. Local SEO
- [ ] Verify NAP (Name, Address, Phone) consistency
- [ ] Check Google Business Profile alignment
- [ ] Confirm service area pages are indexed
