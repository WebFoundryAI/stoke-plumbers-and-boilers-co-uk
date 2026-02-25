# Template Reuse Guide

This document explains how to use this project as a template for creating multiple independent local lead-generation sites.

---

## Concept

**One project = One local brand/site**

This template is designed for single-brand deployments. To serve multiple clients or brands:

1. **Duplicate** this project
2. **Rebrand** by editing configuration files
3. **Deploy** under the client's domain

This approach:
- Avoids multi-tenant SEO risks
- Keeps each site fully isolated
- Allows complete customisation per client
- Simplifies ownership transfer

---

## Steps to Spin Up a New Site

### 1. Duplicate the Project

Clone or fork this repository to create a new project for your client.

### 2. Configure the New Brand

Edit the configuration files in `/src/config/`:

**Brand Basics (`brand.ts`)**
- Company name, domain, phone, email
- Address and postcode
- Brand colours

**Primary Location (`locations.ts`)**
- Main town/city
- County/region
- Coordinates (from Google Maps)

**Surrounding Locations (`locations.ts`)**
- Add all service areas
- Each gets its own location pages

**Services (`services.ts`)**
- Configure services offered
- Add sub-services if needed

### 3. Build and Deploy

```bash
npm install
npm run build
```

Deploy the static files from the `dist/` folder to your hosting provider.

### 4. Submit to Search Engines

1. Access `/sitemap.xml` and `/robots.txt`
2. Submit sitemap to Google Search Console
3. Set up Google Business Profile with matching NAP

---

## Configuration Files Reference

| File | Purpose |
|------|---------|
| `/src/config/brand.ts` | Company name, contact, colours |
| `/src/config/locations.ts` | Service areas with coordinates |
| `/src/config/services.ts` | Services and sub-services |
| `/src/config/maps.ts` | Map provider settings |
| `/src/config/trust.ts` | Trust badges and guarantees |

---

## Selling the Site

### Pre-Sale Checklist

- [ ] Brand is configured (not default values)
- [ ] Locations are defined
- [ ] Services are defined
- [ ] Sitemap is accessible
- [ ] Contact information is correct

### Handover Process

1. **Transfer Domain**
   - Update DNS to point to deployment
   - Or transfer domain ownership to buyer

2. **Transfer Project**
   - Transfer repository ownership
   - Or help buyer clone and rebrand

3. **Provide Documentation**
   - Include this `REUSE.md` file
   - Include the main `README.md`

### What the Buyer Receives

- Complete, working drainage lead-gen website
- Multi-location SEO structure
- Lead capture forms
- Full documentation

---

## Troubleshooting

### Maps Not Showing
1. Configure map settings in `/src/config/maps.ts`
2. Or use placeholder maps (default)

### SEO Issues
1. Verify sitemap at `/sitemap.xml`
2. Check robots.txt at `/robots.txt`
3. Review schema using Google's Rich Results Test

---

## Support

For template support:
- Review the main `README.md`
- Check the code and configuration files

---

*This template is designed for resale. Each deployment should be treated as a separate instance for a single brand/client.*
