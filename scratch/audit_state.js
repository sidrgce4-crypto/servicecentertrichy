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
      results.push(rel);
    }
  }
  return results;
}

const files = getFiles('.');
let stats = {
  totalHtml: files.length,
  gtagPresent: 0,
  schemaPresent: 0,
  faviconPresent: 0,
  canonicalPresent: 0,
  titlePresent: 0,
  descriptionPresent: 0,
  viewportPresent: 0,
  ogTitlePresent: 0,
  ogDescPresent: 0,
  ogUrlPresent: 0,
  timing9to8Count: 0,
  contactSectionCount: 0
};

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('G-L0Q91G8NQE') || content.includes('googletagmanager.com')) stats.gtagPresent++;
  if (content.includes('application/ld+json')) stats.schemaPresent++;
  if (content.includes('rel="icon"') || content.includes('favicon')) stats.faviconPresent++;
  if (content.includes('rel="canonical"')) stats.canonicalPresent;
  if (!content.includes('rel="canonical"')) console.log('Missing canonical:', f);
  if (content.includes('<title>')) stats.titlePresent++;
  if (content.includes('name="description"')) stats.descriptionPresent++;
  if (content.includes('name="viewport"')) stats.viewportPresent++;
  if (content.includes('property="og:title"')) stats.ogTitlePresent++;
  if (content.includes('property="og:description"')) stats.ogDescPresent++;
  if (content.includes('property="og:url"')) stats.ogUrlPresent++;
  if (content.includes('9:00 AM')) stats.timing9to8Count++;
  if (content.includes('124, Court Road') || content.includes('Near District Court')) stats.contactSectionCount++;
});

console.log('Current HTML Audit:');
console.log(JSON.stringify(stats, null, 2));
