const fs = require('fs');
const path = require('path');

function walk(dir) {
  let res = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const d of list) {
    if (d.name === 'scratch' || d.name === '.git' || d.name === 'node_modules') continue;
    const p = path.join(dir, d.name);
    if (d.isDirectory()) res = res.concat(walk(p));
    else if (p.endsWith('.html')) res.push(p);
  }
  return res;
}

const files = walk('.');
let count = 0;
const matchedFiles = [];
files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes('You came to the right place')) {
    count++;
    matchedFiles.push(f);
  }
});

console.log('Pages with "You came to the right place":', count);
console.log('Sample matched files:', matchedFiles.slice(0, 10));
