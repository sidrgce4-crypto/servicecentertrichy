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

const allData = files.map(f => {
  const c = fs.readFileSync(f, 'utf8');
  const t = (c.match(/<title>([\s\S]*?)<\/title>/i) || [])[1].trim();
  const d = (c.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i) || [])[1].trim();
  return { file: f, title: t, desc: d };
});

console.log('Total files parsed:', allData.length);

// Check titles with multiple pipes or no pipes
const noPipeTitles = allData.filter(d => !d.title.includes('|'));
const multiPipeTitles = allData.filter(d => d.title.split('|').length > 2);
console.log('No pipe titles count:', noPipeTitles.length);
console.log('Multi pipe titles count:', multiPipeTitles.length);
if (noPipeTitles.length > 0) console.log('No pipe samples:', noPipeTitles);
if (multiPipeTitles.length > 0) console.log('Multi pipe samples:', multiPipeTitles);
