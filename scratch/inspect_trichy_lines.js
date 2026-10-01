const fs = require('fs');
const path = require('path');

function walk(dir) {
  let res = [];
  for (const d of fs.readdirSync(dir, { withFileTypes: true })) {
    if (d.name === 'scratch' || d.name === '.git') continue;
    const p = path.join(dir, d.name);
    if (d.isDirectory()) res = res.concat(walk(p));
    else if (d.name.endsWith('.html')) res.push(p);
  }
  return res;
}

const htmlFiles = walk('.');
const sentencePatterns = new Map();

htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  // Match lines containing trichy
  const lines = content.split('\n');
  lines.forEach(l => {
    if (l.toLowerCase().includes('trichy')) {
      const trimmed = l.trim();
      sentencePatterns.set(trimmed, (sentencePatterns.get(trimmed) || 0) + 1);
    }
  });
});

console.log('Total unique lines containing trichy:', sentencePatterns.size);
const sorted = Array.from(sentencePatterns.entries()).sort((a, b) => b[1] - a[1]);
console.log('\nTop 25 most frequent lines with trichy:');
sorted.slice(0, 25).forEach(([line, count]) => {
  console.log(`${count}x: ${line.substring(0, 100)}`);
});
