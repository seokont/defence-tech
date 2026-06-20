import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = join(__dirname, '..', 'public', 'logo-transparent.png');
const app = join(__dirname, '..', 'app');

// icon.png (32×32) — Next.js App Router favicon
await sharp(src).resize(32, 32, { fit: 'contain', background: { r:0,g:0,b:0,alpha:0 } }).png().toFile(join(app, 'icon.png'));
console.log('✓ app/icon.png');

// apple-icon.png (180×180)
await sharp(src).resize(180, 180, { fit: 'contain', background: { r:15,g:23,b:42,alpha:1 } }).png().toFile(join(app, 'apple-icon.png'));
console.log('✓ app/apple-icon.png');

// og-image base (512×512) in public for social sharing
await sharp(src).resize(512, 512, { fit: 'contain', background: { r:15,g:23,b:42,alpha:1 } }).png().toFile(join(__dirname, '..', 'public', 'icon-512.png'));
console.log('✓ public/icon-512.png');
