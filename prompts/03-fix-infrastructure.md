# Phase 3: Fix Infrastructure (Security, Caching, Mobile)

Use this prompt after completing Phase 2 SEO fixes.

---

## Prompt

```
Implement the remaining infrastructure improvements:

1. SECURITY HEADERS: Add these headers (via netlify.toml, vercel.json, or _headers file):
   - Strict-Transport-Security: max-age=31536000; includeSubDomains
   - Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com
   - X-Frame-Options: DENY
   - X-Content-Type-Options: nosniff
   - Referrer-Policy: strict-origin-when-cross-origin
   - Permissions-Policy: camera=(), microphone=(), geolocation=()

2. CACHING HEADERS:
   - Static assets (/_astro/*): Cache-Control: public, max-age=31536000, immutable
   - Images (/images/*, *.webp, *.png, *.jpg): Cache-Control: public, max-age=2592000, stale-while-revalidate=86400
   - HTML pages: Cache-Control: public, max-age=0, must-revalidate
   - Fonts: Cache-Control: public, max-age=31536000

3. CSS VARIABLE SYSTEM: If not present, add to global.css:
   - --primary, --primary-foreground (main brand color)
   - --secondary, --secondary-foreground
   - --muted, --muted-foreground
   - --background, --foreground
   - --trust-green (for trust badges)
   - Use HSL format for easy theming
   - Update all hardcoded colors to use variables

4. MOBILE NAVIGATION:
   - Hamburger menu button with aria-label="Open menu"
   - aria-expanded attribute that toggles
   - Mobile menu with aria-label="Mobile navigation"
   - Focus trap when menu is open
   - Close on escape key

5. STICKY MOBILE CALL BAR:
   - Fixed to bottom on mobile only (hidden on desktop)
   - Click-to-call link with tel: href
   - High contrast, prominent styling
   - Shows phone number and "Call Now" text

6. INTERNAL LINKING:
   - Services pages link to locations where service is offered
   - Location pages link to services available there
   - Footer has "Popular Services" and "Service Areas" sections
   - Breadcrumbs on all pages linking back to parents
   - Related content sections where appropriate

Reference implementation: /home/user/manchester_blocked_drain_co_uk
Key files to reference:
- /netlify.toml or /vercel.json (headers configuration)
- /src/styles/global.css (CSS variables, mobile bar styles)
- /src/layouts/BaseLayout.astro (mobile nav, call bar markup)
```

---

## Verification

After implementation, check:
- [ ] Run security headers test: https://securityheaders.com
- [ ] Check caching in browser DevTools Network tab
- [ ] Test mobile menu with keyboard only
- [ ] Test mobile call bar appears on small screens
- [ ] Click through site - no orphan pages, good cross-linking

---

## Complete

Site should now match the Manchester Blocked Drain reference implementation quality.
