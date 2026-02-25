# Google Search Console Setup Guide

## Step 1: Create Domain Property

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **Add property**
3. Select **Domain** (recommended for full coverage)
4. Enter: `manchesterblockeddrain.co.uk`
5. Click **Continue**

## Step 2: Verify Ownership via DNS TXT Record

1. Google will display a TXT record value (e.g., `google-site-verification=xxxxx`)
2. Log in to your DNS provider (Namecheap, Cloudflare, etc.)
3. Add a new **TXT record**:
   - **Host/Name**: `@` (or leave blank)
   - **Value**: The verification string from Google
   - **TTL**: 3600 (or default)
4. Save the record
5. Wait 5-30 minutes for DNS propagation
6. Return to GSC and click **Verify**

### Alternative: HTML File Verification

If DNS verification is not possible:
1. Download the HTML file from GSC
2. Upload to `/public/` directory (already exists: `public/google961cee0b68e77cd7.html`)
3. Deploy the site
4. Click **Verify** in GSC

## Step 3: Submit Sitemap

1. In GSC, go to **Sitemaps** (left sidebar)
2. Enter: `sitemap.xml`
3. Click **Submit**
4. Verify status shows "Success"

## Step 4: Enable Performance Tracking

1. Wait 24-48 hours after verification
2. Go to **Performance** tab
3. Enable all available metrics:
   - Clicks
   - Impressions
   - CTR
   - Position
4. Review **Queries** and **Pages** tabs weekly

## Step 5: Monitor & Maintain

### Weekly Tasks
- Review **Performance > Queries** for ranking keywords
- Check **Coverage** for indexing issues
- Monitor **Core Web Vitals** status

### Monthly Tasks
- Review **Links** report for backlink profile
- Check **Security & Manual Actions**
- Update sitemap if new pages added

## Keyword-to-URL Mapping

Maintain the file: `/seo/keyword-map.csv`

| Keyword | Target URL |
|---------|-----------|
| blocked drain manchester | / |
| blocked drains manchester | / |
| blocked drains in manchester | / |
| drain blockage manchester | / |
| cctv drain survey cost | /services/cctv-drain-surveys |
| cctv drainage survey cost | /services/cctv-drain-surveys |
| drainage cctv survey cost | /services/cctv-drain-surveys |
| blocked drains salford | /locations/salford/blocked-drains |
| blocked drains stockport | /locations/stockport/blocked-drains |

## Troubleshooting

### "URL is not on Google"
1. Check robots.txt doesn't block the URL
2. Verify canonical points to itself (not another page)
3. Request indexing via URL Inspection tool

### "Discovered - currently not indexed"
- Page may be thin content - expand it
- Check for duplicate content issues
- Ensure internal links point to the page

### Sitemap Errors
- Verify sitemap.xml is accessible: https://manchesterblockeddrain.co.uk/sitemap.xml
- Check all URLs return 200 status
- Ensure lastmod dates are valid ISO format
