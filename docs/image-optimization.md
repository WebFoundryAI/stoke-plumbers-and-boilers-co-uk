# Image Optimization Guide

This project uses `vite-imagetools` for build-time image optimization.

## Current Optimizations (Implemented)

### Hero Image
- **Format**: WebP (already compressed, ~70% smaller than JPEG)
- **Loading**: `fetchPriority="high"` with `decoding="sync"` for LCP optimization
- **Preload**: Dynamic `<link rel="preload">` injection with correct Vite-resolved URL
- **Dimensions**: Explicit `width` and `height` attributes prevent CLS

### Map Images
- **Lazy Loading**: IntersectionObserver with 200px rootMargin
- **Responsive Sizing**: Dynamically adjusts Google Maps `size=` parameter based on container width
- **Format**: WebP fallback for offline/no-API-key scenarios
- **Dimensions**: Explicit 800x400 with `sizes` attribute

### All Images
- **Lazy Loading**: `loading="lazy"` + `decoding="async"` by default
- **Alt Text Enforcement**: `SiteImage` component throws in dev if alt is missing
- **CLS Prevention**: Width/height attributes on all images

## Further Optimization (For 224 KiB+ Savings)

To generate multiple resolutions at build time, you need source images in **JPG or PNG format** (vite-imagetools cannot re-encode WebP).

### Step 1: Add High-Resolution Source
Replace the WebP hero with a high-resolution JPG:

```
src/assets/
  hero-bg.jpg  (1920px+ wide, quality 90-95%)
```

### Step 2: Update ResponsiveHeroImage

```tsx
// Generate multiple sizes at build time
import heroSm from "@/assets/hero-bg.jpg?w=640&format=webp";
import heroMd from "@/assets/hero-bg.jpg?w=1024&format=webp";
import heroLg from "@/assets/hero-bg.jpg?w=1920&format=webp";

// Use in picture element
<picture>
  <source
    type="image/webp"
    srcSet={`${heroSm} 640w, ${heroMd} 1024w, ${heroLg} 1920w`}
    sizes="100vw"
  />
  <img src={heroLg} alt="" width={1920} height={1080} />
</picture>
```

### Step 3: Add AVIF for Maximum Compression

```tsx
import heroSmAvif from "@/assets/hero-bg.jpg?w=640&format=avif";
import heroMdAvif from "@/assets/hero-bg.jpg?w=1024&format=avif";
import heroLgAvif from "@/assets/hero-bg.jpg?w=1920&format=avif";

<picture>
  {/* AVIF - 30-50% smaller than WebP */}
  <source
    type="image/avif"
    srcSet={`${heroSmAvif} 640w, ${heroMdAvif} 1024w, ${heroLgAvif} 1920w`}
    sizes="100vw"
  />
  {/* WebP fallback */}
  <source type="image/webp" srcSet="..." sizes="100vw" />
  {/* JPEG fallback */}
  <img src={heroLg} alt="" />
</picture>
```

## Available vite-imagetools Directives

| Directive | Description | Example |
|-----------|-------------|---------|
| `w=640` | Resize to width | `?w=640` |
| `w=640;1024;1920` | Multiple widths | `?w=640;1024;1920` |
| `format=webp` | Convert to WebP | `?format=webp` |
| `format=avif` | Convert to AVIF | `?format=avif` |
| `quality=80` | Set quality (1-100) | `?quality=80` |
| `as=srcset` | Output as srcset | `?as=srcset` |
| `aspect=16:9` | Crop to ratio | `?aspect=16:9` |

## Recommended Breakpoints

- **Mobile**: 640px (saves ~80% vs 1920px)
- **Tablet**: 1024px (saves ~50% vs 1920px)
- **Desktop**: 1920px (full resolution)

## Performance Checklist

- [x] WebP format for all images
- [x] `fetchPriority="high"` for LCP images
- [x] `loading="lazy"` for below-fold images
- [x] Explicit width/height to prevent CLS
- [x] `sizes` attribute for responsive selection
- [x] Dynamic preload injection with resolved URLs
- [ ] Multi-resolution srcset (requires JPG source)
- [ ] AVIF format for modern browsers
