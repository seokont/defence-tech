// Run: node scripts/remove-bg.mjs
// Removes white background from public/logo.png → public/logo-transparent.png

import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputPath  = join(__dirname, '..', 'public', 'logo.jpeg');
const outputPath = join(__dirname, '..', 'public', 'logo-transparent.png');

const image = sharp(inputPath);
const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const buf = Buffer.from(data);

// White-fuzz threshold — pixels within this distance from pure white become transparent
const FUZZ = 30;

for (let i = 0; i < width * height; i++) {
  const offset = i * channels; // channels = 4 (RGBA)
  const r = buf[offset];
  const g = buf[offset + 1];
  const b = buf[offset + 2];

  const isWhitish = r > 255 - FUZZ && g > 255 - FUZZ && b > 255 - FUZZ;
  if (isWhitish) {
    buf[offset + 3] = 0; // set alpha to 0 (transparent)
  }
}

await sharp(buf, { raw: { width, height, channels } })
  .png()
  .toFile(outputPath);

console.log(`✓ Saved: ${outputPath}`);
