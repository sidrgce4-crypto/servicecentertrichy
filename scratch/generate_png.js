const fs = require('fs');
const zlib = require('zlib');

function createPng(width, height) {
  // CRC table
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

  // PNG Signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData.writeUInt8(8, 8); // 8 bits per channel
  ihdrData.writeUInt8(6, 9); // RGBA
  ihdrData.writeUInt8(0, 10); // deflate
  ihdrData.writeUInt8(0, 11); // filter
  ihdrData.writeUInt8(0, 12); // no interlace
  const ihdrChunk = makeChunk('IHDR', ihdrData);

  // Generate image data (RGBA)
  // Royal blue #1e40af with SCN letters in pixel art or icon representation
  const rowBytes = 1 + width * 4;
  const rawData = Buffer.alloc(rowBytes * height);

  const radius = Math.floor(width * 0.22);
  const cornerR = radius * radius;

  // Render a nice high-contrast rounded badge with SCN colors
  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowBytes;
    rawData[rowOffset] = 0; // filter byte: none

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;

      // Check rounded corner distance
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
        // Gradient from #1e40af (30, 64, 175) to #0f172a (15, 23, 42)
        const t = (x + y) / (width + height);
        let r = Math.round(30 * (1 - t) + 15 * t);
        let g = Math.round(64 * (1 - t) + 23 * t);
        let b = Math.round(175 * (1 - t) + 42 * t);
        let a = 255;

        // Orange accent dot at top-right
        const dotCx = width * 0.78;
        const dotCy = height * 0.25;
        const dotR = width * 0.08;
        const dDot = Math.hypot(x - dotCx, y - dotCy);
        if (dDot <= dotR) {
          // #f97316 (249, 115, 22)
          r = 249; g = 115; b = 22;
        }

        // Inner border
        const borderDist = Math.min(x, y, width - 1 - x, height - 1 - y);
        if (borderDist < Math.max(2, Math.floor(width * 0.03)) && inBounds) {
          r = Math.min(255, r + 40);
          g = Math.min(255, g + 60);
          b = Math.min(255, b + 90);
        }

        rawData[pxOffset] = r;
        rawData[pxOffset + 1] = g;
        rawData[pxOffset + 2] = b;
        rawData[pxOffset + 3] = a;
      }
    }
  }

  // Draw simple clean "SCN" letter glyphs onto the canvas
  // We can render letter patterns for S, C, N
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

  const s = width / 192; // scale factor
  const baseY = 75 * s;
  const h = 55 * s;
  const th = 11 * s;

  // Letter S: x: 30 to 65
  const sx = 32 * s;
  drawRect(sx, baseY, 34 * s, th, 255, 255, 255); // top bar
  drawRect(sx, baseY, th, h / 2, 255, 255, 255); // top-left
  drawRect(sx, baseY + (h - th) / 2, 34 * s, th, 255, 255, 255); // middle bar
  drawRect(sx + 34 * s - th, baseY + h / 2, th, h / 2, 255, 255, 255); // bot-right
  drawRect(sx, baseY + h - th, 34 * s, th, 255, 255, 255); // bot bar

  // Letter C: x: 78 to 112
  const cx = 78 * s;
  drawRect(cx, baseY, 34 * s, th, 255, 255, 255); // top
  drawRect(cx, baseY, th, h, 255, 255, 255); // left
  drawRect(cx, baseY + h - th, 34 * s, th, 255, 255, 255); // bot

  // Letter N: x: 124 to 160
  const nx = 124 * s;
  const nw = 36 * s;
  drawRect(nx, baseY, th, h, 255, 255, 255); // left
  drawRect(nx + nw - th, baseY, th, h, 255, 255, 255); // right
  // Diagonal for N
  for (let step = 0; step < h; step++) {
    const diagX = nx + (step / h) * (nw - th);
    drawRect(diagX, baseY + step, th, 2 * s, 255, 255, 255);
  }

  const compressed = zlib.deflateSync(rawData);
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

const png192 = createPng(192, 192);
fs.writeFileSync('favicon.png', png192);
fs.writeFileSync('apple-touch-icon.png', png192);
console.log('Created favicon.png and apple-touch-icon.png (192x192,', png192.length, 'bytes)');
