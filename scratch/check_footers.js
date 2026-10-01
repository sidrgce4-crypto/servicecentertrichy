const fs = require('fs');

function getFiles(dir, base = '') {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    if (file === 'scratch' || file.startsWith('.')) continue;
    const full = dir + '/' + file;
    const rel = base ? base + '/' + file : file;
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results = results.concat(getFiles(full, rel));
    } else if (file.endsWith('.html')) {
      results.push(rel);
    }
  }
  return results;
}

const files = getFiles('.');
const precedingTags = new Set();
let noFooter = [];

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const idx = c.indexOf('<footer class="site-footer">');
  if (idx !== -1) {
    const before = c.slice(Math.max(0, idx - 60), idx).trim();
    const m = before.match(/<\/[a-z0-9]+>$/i);
    if (m) precedingTags.add(m[0]);
    else precedingTags.add(before.slice(-20));
  } else {
    noFooter.push(f);
  }
});

console.log('Total files:', files.length);
console.log('No footer count:', noFooter.length);
console.log('Preceding end tags before footer:', Array.from(precedingTags));
