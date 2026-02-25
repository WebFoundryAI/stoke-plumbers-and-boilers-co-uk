# Pre-rendering Service Setup Guide

This guide walks through setting up Prerender.io to serve fully-rendered HTML to search crawlers for manchesterblockeddrain.co.uk.

## Why Pre-rendering?

Our React/Vite SPA uses client-side rendering. While Google can render JavaScript, there are benefits to pre-rendering:
- **Faster indexing**: Bots see complete HTML immediately
- **Social previews**: Facebook, Twitter, LinkedIn get proper OG tags
- **AI/LLM crawlers**: ChatGPT, Claude, Perplexity see full content
- **Edge cases**: Solves "Discovered – currently not indexed" issues

---

## Current SEO Infrastructure ✅

Already implemented and working:
- `react-helmet-async` for dynamic meta tags
- `RouteSEOHead` component on every page
- JSON-LD structured data (LocalBusiness, FAQ, Breadcrumb, etc.)
- Dynamic sitemap via edge function
- Self-referencing canonical URLs

---

## Step 1: Sign Up for Prerender.io

1. Go to https://prerender.io
2. Create an account (free tier: 250 pages/month)
3. Add site: `https://manchesterblockeddrain.co.uk`
4. Copy your **Prerender Token** from the dashboard

---

## Step 2: Configure Cloudflare (Recommended)

Since the site uses Cloudflare, add a Worker to route bot traffic to Prerender.io.

### 2a. Create Cloudflare Worker

In Cloudflare Dashboard → Workers → Create Worker:

```javascript
// prerender-worker.js
const PRERENDER_TOKEN = 'YOUR_PRERENDER_TOKEN_HERE';

const BOT_AGENTS = [
  'googlebot', 'bingbot', 'slurp', 'duckduckbot', 'baiduspider',
  'yandexbot', 'facebookexternalhit', 'twitterbot', 'linkedinbot',
  'whatsapp', 'telegrambot', 'discordbot', 'pinterest', 'slackbot',
  'applebot', 'petalbot', 'semrushbot', 'ahrefsbot', 'mj12bot',
  'chatgpt-user', 'gptbot', 'claudebot', 'anthropic-ai', 'perplexitybot'
];

// Files that should never be prerendered
const IGNORED_EXTENSIONS = [
  '.js', '.css', '.xml', '.json', '.png', '.jpg', '.jpeg', '.gif',
  '.webp', '.svg', '.ico', '.woff', '.woff2', '.ttf', '.eot', '.map'
];

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const userAgent = (request.headers.get('User-Agent') || '').toLowerCase();
  
  // Skip static files
  const path = url.pathname.toLowerCase();
  if (IGNORED_EXTENSIONS.some(ext => path.endsWith(ext))) {
    return fetch(request);
  }
  
  // Check if request is from a bot
  const isBot = BOT_AGENTS.some(bot => userAgent.includes(bot));
  
  // Also check for _escaped_fragment_ (legacy crawlers)
  const hasEscapedFragment = url.searchParams.has('_escaped_fragment_');
  
  if (isBot || hasEscapedFragment) {
    // Build Prerender.io URL
    const prerenderUrl = `https://service.prerender.io/${request.url}`;
    
    try {
      const response = await fetch(prerenderUrl, {
        headers: {
          'X-Prerender-Token': PRERENDER_TOKEN,
          'X-Prerender-Int-Type': 'cloudflare'
        },
        cf: {
          cacheTtl: 86400, // Cache for 24 hours
          cacheEverything: true
        }
      });
      
      // Return prerendered response with original status
      return new Response(response.body, {
        status: response.status,
        headers: response.headers
      });
    } catch (error) {
      // Fallback to origin if Prerender fails
      console.error('Prerender error:', error);
      return fetch(request);
    }
  }
  
  // Regular users get the SPA
  return fetch(request);
}
```

### 2b. Deploy Worker Route

In Cloudflare Dashboard:
1. Go to your domain → Workers Routes
2. Add route: `manchesterblockeddrain.co.uk/*`
3. Select your prerender worker
4. Save

---

## Step 3: Alternative - Netlify Integration

If using Netlify instead of Cloudflare, add to `netlify.toml`:

```toml
[[plugins]]
package = "netlify-plugin-prerender"

[plugins.inputs]
prerenderToken = "YOUR_PRERENDER_TOKEN"
```

Or configure via Netlify Dashboard → Build & Deploy → Prerendering.

---

## Step 4: Configure Prerender.io Settings

In Prerender.io Dashboard:

### Cache Settings
| Page Type | TTL |
|-----------|-----|
| Homepage | 6 hours |
| Service pages | 24 hours |
| Location pages | 24 hours |
| Blog posts | 7 days |
| Legal pages | 30 days |

### Recache Triggers
1. Enable webhook recaching
2. Set up a cron job or edge function to ping Prerender when content changes

### Blocked Paths (Optional)
```
/admin/*
/api/*
/functions/*
```

---

## Step 5: Verification

### 5a. Test with Prerender.io Tester
1. Go to Prerender.io Dashboard → Tester
2. Enter: `https://manchesterblockeddrain.co.uk/services/blocked-drains`
3. Verify:
   - Full HTML content rendered
   - `<title>` tag present
   - `<meta name="description">` present
   - `<link rel="canonical">` correct
   - JSON-LD schemas in HTML

### 5b. Test via cURL
```bash
# Simulate Googlebot
curl -A "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" \
  -I https://manchesterblockeddrain.co.uk/services/blocked-drains

# Check if Prerender served the response (via headers)
curl -A "Googlebot" https://manchesterblockeddrain.co.uk/ -D -

# View full prerendered HTML
curl -A "Googlebot" https://manchesterblockeddrain.co.uk/services/blocked-drains
```

### 5c. Google Search Console Verification
1. Go to [Search Console](https://search.google.com/search-console)
2. URL Inspection → Enter a URL
3. Click "Test Live URL"
4. View Tested Page → Check:
   - Screenshot shows full content
   - HTML tab shows `<title>`, `<meta>`, `<h1>`
   - No "Page is not indexable" errors

### 5d. Rich Results Test
1. Go to https://search.google.com/test/rich-results
2. Enter URL
3. Confirm structured data is detected

---

## Step 6: Remove noindex Directives

After verification, ensure all pages have proper robots directives:

```tsx
// All indexable pages should have:
<meta name="robots" content="index, follow, max-image-preview:large" />

// Only admin/utility pages should have:
<meta name="robots" content="noindex, nofollow" />
```

Current noindex pages (correct):
- `/admin/*`
- `/login`
- `/reset-password`
- `/status`
- `/redirect-test`

---

## Monitoring

### Weekly Checks
- [ ] Review Prerender.io cache hit rate
- [ ] Check for failed renders in Prerender logs
- [ ] Monitor Search Console coverage report

### Monthly Tasks
- [ ] Clear and rebuild cache for major content updates
- [ ] Review bot user agents list for new crawlers
- [ ] Check Prerender.io usage vs quota

---

## Troubleshooting

### Issue: Pages not being prerendered
1. Check Cloudflare Worker is deployed to correct route
2. Verify Prerender token is valid
3. Check if path is in blocked list

### Issue: Stale content in cache
1. Use Prerender.io API to recache specific URLs:
```bash
curl -X POST https://api.prerender.io/recache \
  -H "Content-Type: application/json" \
  -d '{"prerenderToken": "YOUR_TOKEN", "url": "https://manchesterblockeddrain.co.uk/page"}'
```

### Issue: Canonical mismatch
- Verify `RouteSEOHead` component is on every page
- Check no trailing slash inconsistencies
- Confirm Prerender renders same canonical as browser

---

## Cost Considerations

| Plan | Pages/Month | Cost |
|------|-------------|------|
| Free | 250 | $0 |
| Starter | 10,000 | $15/mo |
| Basic | 50,000 | $39/mo |
| Growth | 200,000 | $99/mo |

This site has ~100 unique pages, so the free tier should suffice for initial testing.

---

## Alternative Services

If Prerender.io doesn't meet needs, consider:
- **Hado SEO** - Similar service, different pricing
- **DataJelly** - UK-based, GDPR compliant
- **Rendertron** - Self-hosted (requires server)
- **Cloudflare Browser Rendering** - Enterprise feature

---

## Summary Checklist

- [ ] Sign up for Prerender.io
- [ ] Get Prerender Token
- [ ] Deploy Cloudflare Worker
- [ ] Configure Worker route
- [ ] Test with bot simulation
- [ ] Verify in Search Console
- [ ] Monitor cache and coverage
