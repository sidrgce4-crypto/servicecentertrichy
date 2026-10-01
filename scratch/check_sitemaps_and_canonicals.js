const fs = require('fs');
const path = require('path');

function scan(dir) {
  let list = [];
  for (const f of fs.readdirSync(dir)) {
    if (f === 'node_modules' || f === '.git' || f === 'scratch') continue;
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) list = list.concat(scan(fp));
    else if (f.endsWith('.html')) list.push(fp);
  }
  return list;
}

const files = scan('.');
const domainCounts = {};
let missingCanonical = 0;
let canonicalMap = {};

for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  const m = content.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
  if (m) {
    const url = m[1];
    canonicalMap[f] = url;
    const domain = url.split('/')[2];
    domainCounts[domain] = (domainCounts[domain] || 0) + 1;
  } else {
    missingCanonical++;
  }
}

console.log('Total HTML files:', files.length);
console.log('Canonical domains:', domainCounts);
console.log('Missing canonical:', missingCanonical);

// Check sitemap.xml
if (fs.existsSync('sitemap.xml')) {
  const xml = fs.readFileSync('sitemap.xml', 'utf8');
  const locs = (xml.match(/<loc>[^<]+<\/loc>/g) || []).map(l => l.replace(/<\/?loc>/g, ''));
  console.log('\nsitemap.xml loc count:', locs.length);
  const bad = locs.filter(u => u.includes('nagercoil') || u.includes('localhost') || u.includes('127.0.0.1'));
  console.log('Invalid URLs in sitemap.xml:', bad.length);
  
  // Check if every HTML file is in sitemap.xml
  const locSet = new Set(locs);
  let notInSitemap = 0;
  for (const f of files) {
    const expected = canonicalMap[f];
    if (!locSet.has(expected)) {
      notInSitemap++;
      // console.log('Not in sitemap:', f, expected);
    }
  }
  console.log('HTML canonicals matching sitemap exactly:', files.length - notInSitemap, '/', files.length);
}
