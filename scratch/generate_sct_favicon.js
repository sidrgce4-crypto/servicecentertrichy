const fs = require('fs');
const zlib = require('zlib');

// 1. Generate favicon.svg (Vector format with crisp SCT branding in maroon/terracotta)
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="sct-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8B2F2F" />
      <stop offset="60%" stop-color="#732424" />
      <stop offset="100%" stop-color="#551818" />
    </linearGradient>
    <linearGradient id="sct-accent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D97745" />
      <stop offset="100%" stop-color="#B85C38" />
    </linearGradient>
  </defs>
  <!-- Background Badge with clean rounded corners -->
  <rect width="512" height="512" rx="100" fill="url(#sct-bg)" />
  <!-- Subtle inner border -->
  <rect x="20" y="20" width="472" height="472" rx="84" fill="none" stroke="#B85C38" stroke-width="8" opacity="0.4" />
  <!-- Accent corner indicator -->
  <circle cx="410" cy="110" r="26" fill="url(#sct-accent)" />
  <!-- Clean bold SCT monogram -->
  <text x="256" y="328" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Plus Jakarta Sans', Arial, sans-serif" font-size="185" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="6">SCT</text>
  <!-- Small Trichy Service mark dot -->
  <circle cx="256" cy="385" r="9" fill="#D97745" />
</svg>
`;

fs.writeFileSync('favicon.svg', svgContent.trim() + '\n', 'utf8');
console.log('Created favicon.svg (Maroon/Terracotta SCT)');

// 2. Pure JS PNG generator for favicon.png and apple-touch-icon.png
function createPngSCT(width, height) {
  const crcTable = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) c = 0xedb88320 ^ (c >>> 1);
      else c = c >>> 1;
    }
    crcTable[n] = c;
  }

  function crc32(buf) {
    let crc = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  function makeChunk(type, data) {
    const len = data.length;
    const buf = Buffer.alloc(4 + 4 + len + 4);
    buf.writeUInt32BE(len, 0);
    buf.write(type, 4, 4, 'ascii');
    data.copy(buf, 8);
    const typeAndData = buf.slice(4, 8 + len);
    const crc = crc32(typeAndData);
    buf.writeUInt32BE(crc, 8 + len);
    return buf;
  }

  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData.writeUInt8(8, 8); // 8 bits per channel
  ihdrData.writeUInt8(6, 9); // RGBA
  ihdrData.writeUInt8(0, 10); // deflate
  ihdrData.writeUInt8(0, 11); // filter
  ihdrData.writeUInt8(0, 12); // no interlace
  const ihdrChunk = makeChunk('IHDR', ihdrData);

  const rowBytes = 1 + width * 4;
  const rawData = Buffer.alloc(rowBytes * height);

  const radius = Math.floor(width * 0.20);
  const cornerR = radius * radius;

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowBytes;
    rawData[rowOffset] = 0; // filter: none

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;

      let inBounds = true;
      let dx = 0, dy = 0;
      if (x < radius && y < radius) { dx = radius - x; dy = radius - y; }
      else if (x >= width - radius && y < radius) { dx = x - (width - 1 - radius); dy = radius - y; }
      else if (x < radius && y >= height - radius) { dx = radius - x; dy = y - (height - 1 - radius); }
      else if (x >= width - radius && y >= height - radius) { dx = x - (width - 1 - radius); dy = y - (height - 1 - radius); }

      if (dx > 0 && dy > 0 && (dx * dx + dy * dy > cornerR)) {
        inBounds = false;
      }

      if (!inBounds) {
        rawData[pxOffset] = 0;
        rawData[pxOffset + 1] = 0;
        rawData[pxOffset + 2] = 0;
        rawData[pxOffset + 3] = 0; // transparent
      } else {
        // Gradient from Maroon #8B2F2F (139, 47, 47) to Deep Maroon #551818 (85, 24, 24)
        const t = (x + y) / (width + height);
        let r = Math.round(139 * (1 - t) + 85 * t);
        let g = Math.round(47 * (1 - t) + 24 * t);
        let b = Math.round(47 * (1 - t) + 24 * t);
        let a = 255;

        // Terracotta accent dot top-right #D97745 (217, 119, 69)
        const dotCx = width * 0.80;
        const dotCy = height * 0.22;
        const dotR = width * 0.08;
        const dDot = Math.hypot(x - dotCx, y - dotCy);
        if (dDot <= dotR) {
          r = 217; g = 119; b = 69;
        }

        // Inner border accent #B85C38
        const borderDist = Math.min(x, y, width - 1 - x, height - 1 - y);
        if (borderDist < Math.max(2, Math.floor(width * 0.03)) && inBounds) {
          r = Math.min(255, r + 45);
          g = Math.min(255, g + 30);
          b = Math.min(255, b + 15);
        }

        rawData[pxOffset] = r;
        rawData[pxOffset + 1] = g;
        rawData[pxOffset + 2] = b;
        rawData[pxOffset + 3] = a;
      }
    }
  }

  function drawRect(rx, ry, rw, rh, cr, cg, cb) {
    for (let py = Math.floor(ry); py < Math.floor(ry + rh); py++) {
      if (py < 0 || py >= height) continue;
      const rOffset = py * rowBytes;
      for (let px = Math.floor(rx); px < Math.floor(rx + rw); px++) {
        if (px < 0 || px >= width) continue;
        const pOffset = rOffset + 1 + px * 4;
        rawData[pOffset] = cr;
        rawData[pOffset + 1] = cg;
        rawData[pOffset + 2] = cb;
        rawData[pOffset + 3] = 255;
      }
    }
  }

  // Draw clean "S C T" glyphs
  const s = width / 192;
  const baseY = 74 * s;
  const h = 56 * s;
  const th = 11 * s;

  // Letter S: x: 26s to 64s
  const sx = 26 * s;
  const sw = 36 * s;
  drawRect(sx, baseY, sw, th, 255, 255, 255); // top bar
  drawRect(sx, baseY, th, h / 2, 255, 255, 255); // top-left
  drawRect(sx, baseY + (h - th) / 2, sw, th, 255, 255, 255); // mid bar
  drawRect(sx + sw - th, baseY + h / 2, th, h / 2, 255, 255, 255); // bot-right
  drawRect(sx, baseY + h - th, sw, th, 255, 255, 255); // bot bar

  // Letter C: x: 74s to 114s
  const cx = 74 * s;
  const cw = 38 * s;
  drawRect(cx, baseY, cw, th, 255, 255, 255); // top
  drawRect(cx, baseY, th, h, 255, 255, 255); // left
  drawRect(cx, baseY + h - th, cw, th, 255, 255, 255); // bot

  // Letter T: x: 124s to 166s
  const tx = 124 * s;
  const tw = 42 * s;
  drawRect(tx, baseY, tw, th, 255, 255, 255); // top horizontal bar
  const tStemX = tx + (tw - th) / 2;
  drawRect(tStemX, baseY, th, h, 255, 255, 255); // vertical stem

  // Center bottom accent dot
  drawRect(92 * s, 142 * s, 8 * s, 6 * s, 217, 119, 69);

  const compressed = zlib.deflateSync(rawData);
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Generate favicon.png (192x192)
const png192 = createPngSCT(192, 192);
fs.writeFileSync('favicon.png', png192);
console.log('Created favicon.png (192x192,', png192.length, 'bytes)');

// Generate apple-touch-icon.png (180x180)
const png180 = createPngSCT(180, 180);
fs.writeFileSync('apple-touch-icon.png', png180);
console.log('Created apple-touch-icon.png (180x180,', png180.length, 'bytes)');

// Generate favicon.ico (Standard Windows ICO containing 32x32 PNG)
const png32 = createPngSCT(32, 32);

function createIcoFromPng(pngBuffer) {
  // ICO header: 6 bytes
  // ICONDIR: reserved (2B=0), type (2B=1 for ICO), count (2B=1)
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // 1 = icon
  header.writeUInt16LE(1, 4); // 1 image

  // ICONDIRENTRY: 16 bytes
  const entry = Buffer.alloc(16);
  entry.writeUInt8(32, 0); // width (0 = 256, 32 = 32)
  entry.writeUInt8(32, 1); // height
  entry.writeUInt8(0, 2);  // color palette (0 = no palette)
  entry.writeUInt8(0, 3);  // reserved
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(pngBuffer.length, 8); // image data size
  entry.writeUInt32LE(22, 12); // offset of image data (6 + 16 = 22)

  return Buffer.concat([header, entry, pngBuffer]);
}

const icoBuffer = createIcoFromPng(png32);
fs.writeFileSync('favicon.ico', icoBuffer);
console.log('Created favicon.ico (32x32 ICO,', icoBuffer.length, 'bytes)');
