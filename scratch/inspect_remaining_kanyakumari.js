const fs = require('fs');
const path = require('path');
const { transformContent } = require('./scratch/test_full_validation.js');

function walk(dir) {
  let res = [];
  for (const d of fs.readdirSync(dir, { withFileTypes: true })) {
    if (d.name === 'scratch' || d.name === '.git') continue;
    const p = path.join(dir, d.name);
    if (d.isDirectory()) res = res.concat(walk(p));
    else res.push(p);
  }
  return res;
}

// We'll read the function from test_full_validation
const code = fs.readFileSync('scratch/test_full_validation.js', 'utf8');
const fnCode = code.match(/function transformContent[\s\S]*?\n\}/)[0];
eval(fnCode);

const allFiles = walk('.');
const kSet = new Map();
allFiles.forEach(f => {
  if (!f.endsWith('.html')) return;
  const original = fs.readFileSync(f, 'utf8');
  const transformed = transformContent(original, f);
  const lines = transformed.split('\n');
  lines.forEach((l, idx) => {
    if (l.toLowerCase().includes('kanyakumari')) {
      const trimmed = l.trim();
      kSet.set(trimmed, (kSet.get(trimmed) || 0) + 1);
    }
  });
});

console.log('Unique lines with Kanyakumari remaining:', kSet.size);
for (const [line, count] of kSet.entries()) {
  console.log(`${count}x: ${line.substring(0, 120)}`);
}
