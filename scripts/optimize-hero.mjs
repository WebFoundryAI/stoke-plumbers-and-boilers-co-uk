/**
 * Generate a mobile-optimized hero background image.
 *
 * Usage:  node scripts/optimize-hero.mjs
 *
 * Reads   public/images/hero-bg.webp  (1536x1024, ~219 KB)
 * Writes  public/images/hero-bg-mobile.webp  (640px wide, ~40-50 KB)
 */

import sharp from 'sharp';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const input = resolve(root, 'public/images/hero-bg.webp');
const output = resolve(root, 'public/images/hero-bg-mobile.webp');

const info = await sharp(input)
  .resize({ width: 640, withoutEnlargement: true })
  .webp({ quality: 78 })
  .toFile(output);

console.log(`Created ${output}`);
console.log(`  ${info.width}x${info.height}, ${(info.size / 1024).toFixed(1)} KB`);
