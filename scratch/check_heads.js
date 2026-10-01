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
let stats = {
  total: files.length,
  hasGtag: 0,
  hasFavicon: 0,
  hasCanonical: 0,
  hasSchema: 0,
  hasOgTitle: 0,
  hasOgDesc: 0,
  hasOgUrl: 0,
  hasOgLocale: 0,
  hasOgType: 0
};

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes('G-L0Q91G8NQE')) stats.hasGtag++;
  if (c.includes('favicon.svg') || c.includes('favicon.png')) stats.hasFavicon++;
  if (c.includes('rel="canonical"')) stats.hasCanonical++;
  if (c.includes('application/ld+json')) stats.hasSchema++;
  if (c.includes('property="og:title"')) stats.hasOgTitle++;
  if (c.includes('property="og:description"')) stats.hasOgDesc++;
  if (c.includes('property="og:url"')) stats.hasOgUrl++;
  if (c.includes('property="og:locale"')) stats.hasOgLocale++;
  if (c.includes('property="og:type"')) stats.hasOgType++;
});

console.log(stats);
