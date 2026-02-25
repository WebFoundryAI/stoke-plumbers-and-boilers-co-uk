# Phase 2: Fix Critical SEO Elements

Use this prompt after completing the Phase 1 audit.

---

## Prompt

```
Based on the audit, implement the missing SEO elements:

1. CENTRALIZE DATA: If business data (brand name, phone, email, address, services, locations, FAQs) is scattered in templates, consolidate into config files in /src/data/:
   - brand.ts - company info, contact details, social links
   - services.ts - service list with slugs, descriptions, sub-services
   - locations.ts - service areas with coordinates
   - faqs.ts - FAQs organized by service/location

2. ADD JSON-LD STRUCTURED DATA:
   - LocalBusiness schema (with geo coordinates, opening hours, contact info, service area)
   - Service schema on each service page
   - FAQPage schema wherever FAQs appear
   - BreadcrumbList schema on all pages
   - Generate schema dynamically from config data

3. DYNAMIC META TAGS: Every page needs:
   - Unique title tag (50-60 chars) with location + service + brand
   - Meta description (120-155 chars) with CTA
   - Canonical URL (handle www vs non-www)
   - Open Graph tags (og:title, og:description, og:image, og:url)
   - Twitter card meta tags

4. XML SITEMAP:
   - Auto-generate sitemap.xml with all pages
   - Include all dynamic pages (services, locations, blog)
   - Add lastmod dates

5. HTML SITEMAP:
   - Create /sitemap page listing all site pages
   - Organize by section (Services, Locations, etc.)

6. ROBOTS.TXT:
   - Allow all crawlers
   - Point to sitemap location

Reference implementation: /home/user/manchester_blocked_drain_co_uk
Key files to reference:
- /src/layouts/BaseLayout.astro (meta tags, schema injection)
- /src/utils/schema.ts (schema generation functions)
- /src/data/*.ts (data structure examples)
- /src/pages/sitemap.astro (HTML sitemap)
```

---

## Verification

After implementation, check:
- [ ] Every page has unique title and description
- [ ] View page source shows JSON-LD script tags
- [ ] /sitemap.xml loads and lists all pages
- [ ] /robots.txt exists and references sitemap

---

## Next Step

Use `03-fix-infrastructure.md` to implement security, caching, and mobile improvements.
