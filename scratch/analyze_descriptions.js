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
      results.push(rel.replace(/\\/g, '/'));
    }
  }
  return results;
}

const files = getFiles('.').sort();
const patterns = {};
files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const d = (c.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i) || [])[1] || '';
  const firstWord = d.split(' ')[0];
  patterns[firstWord] = (patterns[firstWord] || 0) + 1;
});

console.log('Description first word distribution:', patterns);
