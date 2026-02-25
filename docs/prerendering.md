# Prerendering Guide

This document covers prerendering options for SEO optimization.

## Important: Is Prerendering Necessary?

**For Google SEO: Usually NOT required.** Google's crawler (Googlebot) executes JavaScript and renders SPAs correctly. React Helmet tags, JSON-LD schemas, and canonical URLs are all properly indexed from client-rendered content.

**When prerendering IS useful:**
- **Social media previews** (Facebook, Twitter, LinkedIn) - these bots don't execute JS
- **AI/LLM bots** (ChatGPT, Claude) - may not render JS
- **Older search engines** (Bing is improving but still inconsistent)
- **Performance-critical landing pages** where you want instant HTML

**Recommendation:** Test your site with Google's URL Inspection tool first. If content renders correctly there, prerendering is optional for SEO purposes.

---

## Option 1: Prerender.io (For Social/Bot Support)

### Setup
1. Sign up at https://prerender.io
2. Add your site URL: `https://manchesterblockeddrain.co.uk`
3. Configure your CDN/proxy to route bot traffic to Prerender.io

### User Agents to Prerender
These bots receive prerendered HTML:

```
Googlebot
Bingbot
Slurp (Yahoo)
DuckDuckBot
Baiduspider
YandexBot
facebookexternalhit
Twitterbot
LinkedInBot
WhatsApp
TelegramBot
Discordbot
Pinterest
Slackbot
```

### Cache Rules
- **Default TTL**: 24 hours for most pages
- **Blog posts**: 7 days (lower change frequency)
- **Homepage**: 6 hours (higher priority for freshness)
- **Sitemap/static pages**: 30 days

### Cloudflare Worker Example
```javascript
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

const BOT_AGENTS = [
  'googlebot', 'bingbot', 'slurp', 'duckduckbot', 'baiduspider',
  'yandexbot', 'facebookexternalhit', 'twitterbot', 'linkedinbot',
  'whatsapp', 'telegrambot', 'discordbot', 'pinterest', 'slackbot'
]

async function handleRequest(request) {
  const userAgent = (request.headers.get('User-Agent') || '').toLowerCase()
  const isBot = BOT_AGENTS.some(bot => userAgent.includes(bot))
  
  if (isBot) {
    // Route to Prerender.io
    const prerenderUrl = `https://service.prerender.io/${request.url}`
    return fetch(prerenderUrl, {
      headers: {
        'X-Prerender-Token': 'YOUR_PRERENDER_TOKEN'
      }
    })
  }
  
  // Regular users get the SPA
  return fetch(request)
}
```

---

## Option 2: Cloudflare Workers + Puppeteer

For self-hosted prerendering using Cloudflare's Browser Rendering API.

### Setup
1. Enable Cloudflare Browser Rendering in your Cloudflare dashboard
2. Deploy a Worker that renders pages on-demand for bots
3. Cache rendered HTML in Cloudflare KV or R2

---

## What Remains Unchanged

When implementing prerendering, these elements stay the same:

| Element | Location | Notes |
|---------|----------|-------|
| Canonical URLs | `<link rel="canonical">` via Helmet | Same URL for bots and users |
| Robots meta | `<meta name="robots">` via Helmet | Respects per-route noindex rules |
| sitemap.xml | `/sitemap.xml` | Static file, not prerendered |
| robots.txt | `/robots.txt` | Static file, not prerendered |
| JSON-LD schemas | Inline `<script type="application/ld+json">` | Rendered in prerendered HTML |

### Critical: Canonical Consistency
The prerendered HTML must contain the **exact same canonical URL** as the client-rendered version. Prerender.io handles this automatically by rendering your actual React app.

---

## Verification

### 1. Google Search Console - URL Inspection
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Enter a URL: `https://manchesterblockeddrain.co.uk/services/blocked-drains/`
3. Click "Test Live URL"
4. Click "View Tested Page" → "Screenshot" and "HTML"
5. Verify:
   - Full content is visible in screenshot
   - `<title>` tag is correct
   - `<meta name="description">` is present
   - `<link rel="canonical">` matches the URL
   - JSON-LD schemas are in the HTML

### 2. Mobile-Friendly Test
1. Go to [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
2. Enter your URL
3. Check "Page loading issues" for any blocked resources

### 3. Rich Results Test
1. Go to [Rich Results Test](https://search.google.com/test/rich-results)
2. Enter URL
3. Verify all structured data is detected

### 4. Manual Bot Simulation
```bash
# Simulate Googlebot
curl -A "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" \
  https://manchesterblockeddrain.co.uk/services/blocked-drains/
```

---

## Testing Checklist

- [ ] Homepage renders correctly for Googlebot
- [ ] Service pages have correct meta tags in prerendered HTML
- [ ] Location pages include LocalBusiness schema
- [ ] Blog posts render full content
- [ ] 404 pages return proper status code
- [ ] Redirects work correctly for bots
- [ ] Cache is refreshing at expected intervals
