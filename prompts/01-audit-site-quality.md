# Phase 1: Site Quality Audit

Use this prompt to audit a site against the Manchester Blocked Drain reference implementation.

---

## Prompt

```
Audit this codebase and report what exists vs what's missing:

1. DATA STRUCTURE: Is business data (brand, services, locations, FAQs) centralized in config files or scattered in templates?

2. SEO - STRUCTURED DATA: Does the site have JSON-LD schema for LocalBusiness, Service, FAQPage, and BreadcrumbList?

3. SEO - META TAGS: Are title, description, canonical, and Open Graph tags dynamic per page?

4. SEO - SITEMAP: Is there an XML sitemap, HTML sitemap, and robots.txt?

5. CACHING: Are cache headers configured for assets, images, and HTML?

6. SECURITY: Are security headers set (HSTS, CSP, X-Frame-Options, etc.)?

7. STYLING: Is there a CSS variable system for colors/theming?

8. MOBILE: Is there a responsive nav with ARIA labels and a sticky call bar?

9. PAGE GENERATION: Are service/location pages generated dynamically from data?

10. INTERNAL LINKING: Do pages cross-link properly (services to locations, breadcrumbs, footer links)?

Create a summary table showing: EXISTS / PARTIAL / MISSING for each area.
Do not make any changes yet - audit only.
```

---

## Expected Output

A table like:

| Area | Status | Notes |
|------|--------|-------|
| Data Structure | EXISTS / PARTIAL / MISSING | Details... |
| SEO - Structured Data | EXISTS / PARTIAL / MISSING | Details... |
| ... | ... | ... |

---

## Next Step

After audit, use `02-fix-seo.md` to implement missing SEO elements.
