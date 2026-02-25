# SEO Audit Review & Outstanding Tasks - manchesterblockeddrain.co.uk

**Date:** 13 February 2026

---

## Table 1: SEO Non-Indexing Audit Issues

The site was migrated from React CSR SPA to Astro SSG in January 2026 specifically to resolve indexing problems. Below is the status of every non-indexing issue identified in the original audit.

| # | Issue | Status | Notes |
|---|-------|--------|-------|
| 1 | CSR rendering preventing indexing (React SPA) | DONE | Migrated to Astro SSG - all pages now pre-rendered as static HTML |
| 2 | Duplicate meta tags (title, description, canonical) | DONE | Single source of truth via BaseLayout.astro - exactly 1 of each per page |
| 3 | Missing or incorrect canonical tags | DONE | Self-referencing canonicals on all pages, homepage with trailing slash, all others without |
| 4 | robots.txt blocking crawlers or missing sitemap reference | DONE | Properly configured - allows all major crawlers, references sitemap.xml, blocks training-only bots |
| 5 | sitemap.xml missing or incomplete | DONE | Dynamic generation at build time via sitemap.xml.ts with all pages, priorities, lastmod dates |
| 6 | Missing meta descriptions | DONE | Unique 120-155 char descriptions on every page |
| 7 | Missing or duplicate title tags | DONE | Unique titles under 60 chars on every page |
| 8 | Admin/login pages being indexed | DONE | /admin, /login, /reset-password, /sitemap (HTML) all set to noindex, nofollow |
| 9 | No structured data / JSON-LD | DONE | 12+ schema types implemented (LocalBusiness, Service, FAQPage, Article, BreadcrumbList, etc.) |
| 10 | Missing Open Graph and Twitter Card tags | DONE | Full OG and Twitter Card tags with dynamic content on all pages |
| 11 | HTTP references instead of HTTPS | DONE | All URLs use HTTPS, non-www enforced, HSTS enabled with 2-year max-age |
| 12 | Missing Google Search Console verification | DONE | Meta tag verification + HTML file verification both present |
| 13 | Poor internal linking | DONE | 30-50+ links per page, breadcrumbs, footer sitemap, service/location grids |
| 14 | Render-blocking resources | DONE | GA loaded async, fonts with display=swap, no synchronous JS blocking |
| 15 | Missing image alt text | DONE | Hero image and content images have descriptive alt text |
| 16 | noscript fallback for non-JS crawlers | N/A | No longer needed - Astro SSG serves full HTML without JS |
| 17 | Trailing slash inconsistency in HTML sitemap | FIXED | Line 169 of sitemap.astro - was missing trailing slash, now corrected |
| 18 | www to non-www redirect | DONE | 301 redirect configured in netlify.toml |
| 19 | Sitemap submission to GSC | UNVERIFIED | Documented in GSC_SETUP.md but cannot confirm if actually submitted - needs manual check in GSC dashboard |
| 20 | Request indexing for key pages in GSC | UNVERIFIED | Documented in POST_DEPLOY_CHECKLIST.md but cannot confirm if done - needs manual check |

**Summary:** 17 of 20 issues fully resolved (including trailing slash fix). 1 not applicable. 2 require manual verification in Google Search Console.

---

## Table 2: Outstanding Tasks and TODOs in the Repo

| # | Task | Category | Location | Severity |
|---|------|----------|----------|----------|
| 1 | Hero contact form has no backend - action="#" is a placeholder, form submissions go nowhere | Feature Incomplete | src/pages/index.astro line 113 | CRITICAL |
| 2 | Contact page has no submission form - only displays phone/email, no web form for enquiries | Feature Incomplete | src/pages/contact.astro | HIGH |
| 3 | Google Consent Mode v2 not implemented - GA4 fires without user consent | Compliance Gap | src/layouts/BaseLayout.astro lines 80-86 | CRITICAL |
| 4 | No cookie consent banner/modal exists anywhere on the site | Compliance Gap | Site-wide | CRITICAL |
| 5 | Post-deploy Lighthouse audit not completed (FCP, LCP, CLS checks) | Verification | docs/POST_DEPLOY_CHECKLIST.md lines 11-19 | MEDIUM |
| 6 | Font performance verification not done (check only 2-3 files load) | Verification | docs/POST_DEPLOY_CHECKLIST.md lines 24-26 | LOW |
| 7 | Image alt text verification not done across all pages | Verification | docs/POST_DEPLOY_CHECKLIST.md lines 49-51 | LOW |
| 8 | Sitemap URL accessibility check not done (live curl tests) | Verification | docs/POST_DEPLOY_CHECKLIST.md lines 66-68 | LOW |
| 9 | Per-route SEO meta tag verification not done (7 pages) | Verification | docs/POST_DEPLOY_CHECKLIST.md lines 115-123 | MEDIUM |
| 10 | GSC sitemap submission status unconfirmed | Verification | docs/POST_DEPLOY_CHECKLIST.md lines 147-149 | MEDIUM |
| 11 | GSC indexing requests for key pages unconfirmed | Verification | docs/POST_DEPLOY_CHECKLIST.md lines 151-154 | MEDIUM |
| 12 | Missing aria-hidden="true" on decorative SVG icons | Accessibility | Multiple pages (header, cards, badges) | LOW |
| 13 | Some heading hierarchy issues in footer (h3/h4 nesting) | Accessibility | src/layouts/BaseLayout.astro lines 181, 205 | LOW |
| 14 | Legacy SEO architecture doc still in repo (marked legacy but not archived) | Housekeeping | docs/SEO_ARCHITECTURE_AUDIT.md | LOW |
| 15 | SEO Verification checklist routes still unchecked (all boxes empty) | Verification | docs/SEO_VERIFICATION.md lines 75-91 | MEDIUM |

---

## Table 3: Google Compliance - February 2026

| # | Requirement | Status | Detail |
|---|-------------|--------|--------|
| 1 | Consent Mode v2 | NOT COMPLIANT | No gtag consent default call exists. No consent categories declared (analytics_storage, ad_storage, ad_user_data, ad_personalization). Google requires this for EU/UK users - mandatory since March 2024 |
| 2 | Cookie Consent Banner | NOT COMPLIANT | Cookie policy page exists at /cookies/ but no actual consent mechanism (banner/modal) to collect or manage user preferences before firing analytics |
| 3 | Core Web Vitals - LCP | LIKELY COMPLIANT | Hero image uses fetchpriority="high", loading="eager", responsive picture with WebP. Background image preloaded. Needs live Lighthouse confirmation |
| 4 | Core Web Vitals - CLS | LIKELY COMPLIANT | Images have explicit width/height. Fonts use display=swap. Needs live Lighthouse confirmation |
| 5 | Core Web Vitals - INP | LIKELY COMPLIANT | Minimal JavaScript (static site), only interactive element is mobile menu toggle. Low risk but needs monitoring |
| 6 | Mobile-Friendly | COMPLIANT | Proper viewport meta tag, Tailwind responsive utilities, mobile-first design, hamburger navigation with ARIA |
| 7 | HTTPS / HSTS | COMPLIANT | HSTS with 2-year max-age, includeSubDomains, preload. www redirects to non-www with 301 |
| 8 | Structured Data | COMPLIANT | 12+ schema types - LocalBusiness, Service, FAQPage, Article, BreadcrumbList, Review, Organization, WebSite, WebPage |
| 9 | GA4 Setup | COMPLIANT | GA4 tag G-ZBN7YE9HZJ implemented with async loading. However fires without consent (see item 1) |
| 10 | Security Headers | COMPLIANT | CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy all configured in netlify.toml |
| 11 | Sitemap and Robots | COMPLIANT | Dynamic XML sitemap with all pages. robots.txt correctly configured with AI bot policies |
| 12 | Canonical URLs | COMPLIANT | Self-referencing canonicals, consistent trailing slash rules, HTTPS non-www enforced |
| 13 | Page Experience | COMPLIANT | Static HTML (Astro SSG), aggressive caching headers, WebP images, font preconnect |
| 14 | Accessibility (WCAG) | PARTIAL | lang="en-GB" present, ARIA on mobile menu, breadcrumb nav labelled. Missing: aria-hidden on decorative SVGs, some alt text gaps on card images |
| 15 | Privacy Policy | COMPLIANT | Comprehensive privacy policy at /privacy/ covering data collection, storage, third-party sharing, user rights |
| 16 | AI Crawler Policies | COMPLIANT | GPTBot and Google-Extended allowed. Training-only bots (CCBot, cohere-ai) blocked. llm.html static page available |
| 17 | No Deprecated APIs | COMPLIANT | Using GA4 (not Universal Analytics), modern Astro 4.x, no jQuery, no deprecated meta tags |
| 18 | Heading Hierarchy | MOSTLY COMPLIANT | Single h1 per page, proper h1-h2-h3 progression. Minor footer nesting issue |

**Overall Google Compliance Rating: 7.5/10**

The two blockers preventing full compliance are:
1. Consent Mode v2 - legally required for UK/EU under GDPR, mandatory for Google since March 2024
2. Cookie Consent Banner - without this, GA4 tracking is non-compliant and could result in reduced analytics data or regulatory penalties

---

## Recommended Priority Actions

1. CRITICAL - Implement Consent Mode v2 + cookie consent banner (GDPR/Google requirement)
2. CRITICAL - Wire up hero contact form to a backend (Netlify Forms, webhook, or email service)
3. HIGH - Add contact form to the contact page
4. MEDIUM - Complete post-deploy verification checklist (Lighthouse, GSC submission confirmation)
5. LOW - Add aria-hidden="true" to decorative SVG icons
6. LOW - Archive legacy SEO architecture doc
