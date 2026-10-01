const fs = require('fs');
const path = require('path');

function getFiles(dir, base = '') {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    if (file === 'scratch' || file.startsWith('.')) continue;
    const full = path.join(dir, file);
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
console.log('Total HTML files:', files.length);

const sampleIndices = [0, 1, 10, 30, 50, 80, 100, 150, 200, 202];
sampleIndices.forEach(idx => {
  if (idx < files.length) {
    const f = files[idx];
    const c = fs.readFileSync(f, 'utf8');
    const t = (c.match(/<title>(.*?)<\/title>/i) || [])[1];
    const d = (c.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i) || [])[1];
    console.log(`[${idx}] ${f}:`);
    console.log('   Title:', t);
    console.log('   Desc :', d);
  }
});
