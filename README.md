# Blocked Drains Lead Generation Template

A professional, single-brand, local lead-generation website template built for the **Blocked Drains** niche in the UK. This is a fully-featured static site template designed for maximum SEO performance and easy customisation.

## Overview

This template is **not multi-tenant**. It is designed for a single brand deployment, making it perfect for:

- Drainage companies wanting a professional online presence
- Marketing agencies reselling to trade clients
- Entrepreneurs starting drainage service businesses

### Technology Stack

- **Astro** for static site generation
- **TypeScript** for type safety
- **TailwindCSS** for styling

---

## Features

### Core Features

- **Multi-location system** - Support for multiple service areas with individual pages
- **Service-in-location pages** - Core SEO pages (e.g., "Blocked Drains in Manchester")
- **Sub-service pages** - Granular service pages (e.g., "Blocked Toilet in Manchester")
- **Static Google-style maps** - Location maps with coverage areas
- **Lead capture forms** - Contact forms for lead generation
- **Full JSON-LD schema** - Structured data for rich search results
- **Automatic sitemap** - XML sitemap with all pages including sub-services
- **SEO metadata utilities** - Title and description helpers

### Performance & UX Features

- **Trust badges** - Configurable trust indicators (24/7, insured, local experts)
- **Guarantees section** - Configurable service guarantees
- **Mobile call bar** - Sticky "Tap to Call" CTA on mobile devices
- **Cookie consent banner** - GDPR-compliant cookie notice
- **Coverage statements** - Dynamic area coverage blocks on location pages
- **Popular links footer** - Auto-generated internal linking section

### Legal & Compliance

- **Privacy Policy page** - Boilerplate privacy policy
- **Terms of Service page** - Boilerplate terms
- **Cookie Policy page** - Cookie usage explanation
- **GDPR cookie banner** - User consent collection

---

## How to Rebrand the Site

All branding is centralised in configuration files. To rebrand for a new client:

### 1. Edit `/src/config/brand.ts`

```typescript
export const BRAND: BrandConfig = {
  brandName: "Your Drain Company",
  domain: "yourdraincompany.co.uk",
  primaryLocation: "Manchester",
  serviceAreaLabel: "Manchester and surrounding areas",
  phone: "0161 000 0000",
  email: "info@yourdraincompany.co.uk",
  addressLine1: "123 High Street",
  addressLine2: "Manchester",
  postcode: "M1 1AA",
  companyNumber: "12345678",
  primaryColour: "#005BBB",
  secondaryColour: "#FFD500",
  accentColour: "#111827",
  logoUrl: "/logo.png",
  tagline: "Fast, Reliable Drainage Solutions",
  emergencyAvailable: true,
  showMobileCallBar: true,
  socialLinks: {
    facebook: "https://facebook.com/yourcompany",
    twitter: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },
  openingHours: {
    weekdays: "8:00 AM - 6:00 PM",
    saturday: "9:00 AM - 4:00 PM",
    sunday: "Emergency only",
    emergencyNote: "24/7 Emergency Callouts Available",
  },
};
```

### 2. Edit `/src/config/locations.ts`

Update the primary location and surrounding areas:

```typescript
export const PRIMARY_LOCATION: LocationConfig = {
  slug: "manchester",
  name: "Manchester",
  countyOrRegion: "Greater Manchester",
  latitude: 53.4808,
  longitude: -2.2426,
};

export const LOCATIONS: LocationConfig[] = [
  PRIMARY_LOCATION,
  { slug: "salford", name: "Salford", ... },
  { slug: "stockport", name: "Stockport", ... },
  // Add more areas
];
```

### 3. Edit `/src/config/services.ts`

Customise the services offered, including sub-services:

```typescript
export const SERVICES: ServiceConfig[] = [
  {
    slug: "blocked-drains",
    name: "Blocked Drains",
    shortLabel: "Blocked drains cleared fast",
    description: "Professional drain unblocking...",
    icon: "wrench",
    subServices: [
      {
        slug: "blocked-toilet",
        name: "Blocked Toilet",
        shortLabel: "Toilet unblocking",
        description: "Fast toilet unblocking service.",
      },
      // Add more sub-services
    ],
  },
  // Add or modify services
];
```

### 4. Edit `/src/config/maps.ts`

Configure map settings:

```typescript
export const MAP_CONFIG: MapConfig = {
  provider: "google-static", // or "placeholder"
  apiKeyEnvVar: "GOOGLE_STATIC_MAPS_API_KEY",
  defaultZoom: 11,
  width: 800,
  height: 450,
};
```

### 5. Edit `/src/config/trust.ts`

Customise trust badges and guarantees:

```typescript
export const TRUST_BADGES: TrustBadge[] = [
  { icon: "clock", label: "24/7 Emergency", description: "Round-the-clock availability" },
  { icon: "shield", label: "Fully Insured", description: "Complete peace of mind" },
  // Add more badges
];

export const GUARANTEES: Guarantee[] = [
  { title: "No Call-Out Charge", description: "You only pay for work completed." },
  // Add more guarantees
];
```

---

## URL Structure

### Core Pages

- `/` - Homepage
- `/services` - Services overview
- `/locations` - Locations overview
- `/about` - About page
- `/contact` - Contact page
- `/faq` - FAQ page
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- `/cookies` - Cookie policy
- `/sitemap` - HTML sitemap

### Service Pages

- `/services/[serviceSlug]` - Service detail page
- `/services/[serviceSlug]/[subServiceSlug]` - Sub-service detail page

### Location Pages

- `/locations/[locationSlug]` - Location detail page
- `/locations/[locationSlug]/[serviceSlug]` - Service in location page
- `/locations/[locationSlug]/[serviceSlug]/[subServiceSlug]` - Sub-service in location page

---

## Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Deployment

### Static Hosting

The site builds to static HTML/CSS/JS files in the `dist/` folder. It is deployed to **Cloudflare Pages**.

- Cloudflare Pages

### Custom Domain

Configure your DNS to point to your hosting provider and set up SSL.

### Deploy Trailing-Slash Rewrite Worker

This repository includes a Cloudflare Worker that internally rewrites requests to add trailing slashes for route-like URLs without emitting 3xx redirects. This ensures canonical trailing-slash URLs are served at status 200.

#### Prerequisites

1. A Cloudflare account with your domain configured
2. `wrangler` CLI installed: `npm install -g @cloudflare/wrangler`

#### Setup Steps

1. **Retrieve your Cloudflare credentials:**
   - Account ID: Found in Cloudflare Dashboard → Account → Account ID
   - Zone ID: Found in Cloudflare Dashboard → Domain → API (under Zone) → Zone ID

2. **Update `wrangler.toml`:**
   ```toml
   account_id = "your-account-id"

   [env.production]
   routes = [
     { pattern = "manchesterblockeddrain.co.uk/*", zone_id = "your-zone-id" }
   ]
   ```

3. **Authenticate with Cloudflare:**
   ```bash
   wrangler login
   ```

4. **Deploy the worker:**
   ```bash
   wrangler deploy --env production
   ```

5. **Verify deployment:**
   The worker will now intercept requests and internally rewrite URLs like `/services` to `/services/` without returning a redirect.

#### What the Worker Does

- **Rewrites requests** to append `/` for route-like URLs
- **Preserves querystrings** and URL fragments
- **Does NOT rewrite** special files (`.xml`, `.txt`, `.js`, `.css`, `.png`, etc.)
- **Does NOT emit 3xx redirects** - Returns the rewritten page at status 200
- **Applies to all paths** matching the pattern in `wrangler.toml`

#### Verification

Test that the worker is functioning:

```bash
# Should return 200 (no redirect)
curl -I https://manchesterblockeddrain.co.uk/services

# Should also return 200 (canonical URL already has /)
curl -I https://manchesterblockeddrain.co.uk/services/

# Should return 200 for all valid routes
curl -I https://manchesterblockeddrain.co.uk/locations/manchester
curl -I https://manchesterblockeddrain.co.uk/blog
```

---

## Project Structure

```
src/
├── components/
│   ├── forms/           # Lead capture forms
│   ├── hero/            # Hero sections
│   ├── layout/          # Header, Footer, Layout
│   ├── nav/             # Navigation, Breadcrumbs
│   ├── sections/        # Page sections (Trust, Guarantees, etc.)
│   ├── seo/             # Schema and SEO components
│   └── ui/              # UI primitives (CookieBanner, etc.)
├── config/
│   ├── brand.ts         # Brand configuration
│   ├── locations.ts     # Service areas
│   ├── maps.ts          # Map settings
│   ├── seo.ts           # SEO metadata helpers
│   ├── services.ts      # Services and sub-services
│   └── trust.ts         # Trust badges and guarantees
├── layouts/             # Astro layouts
├── lib/                 # Utility functions (schema, maps, etc.)
└── pages/               # Astro pages
```

---

## SEO Features

- **Dynamic meta titles and descriptions** per page
- **JSON-LD schema** for LocalBusiness, Service, Place, FAQ
- **Opening hours schema** - Parsed from brand config
- **Social links (sameAs)** - Included in LocalBusiness schema
- **Breadcrumb schema** for navigation
- **XML sitemap** at `/sitemap.xml` (includes all sub-services)
- **HTML sitemap** at `/sitemap`
- **Robots.txt** allowing all crawlers
- **Internal linking** throughout all pages
- **Semantic HTML** structure

---

## Mobile & UX Features

- **Responsive design** - Mobile-first approach
- **Mobile call bar** - Sticky CTA for easy calling
- **Cookie consent** - GDPR-compliant banner
- **Trust indicators** - Visible trust badges
- **Service guarantees** - Clear value propositions
- **Coverage statements** - Location-specific area lists

---

## Support

For support with this template:

- Review the code comments
- Check the configuration files
- See `REUSE.md` for rebranding guidance

---

## License

This template is designed for resale. Each deployment should be treated as a separate instance for a single brand/client.
