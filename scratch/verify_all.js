const fs = require('fs');
const path = require('path');

function walk(dir) {
  let res = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const d of list) {
    if (d.name === 'scratch' || d.name === '.git') continue;
    const p = path.join(dir, d.name);
    if (d.isDirectory()) res = res.concat(walk(p));
    else res.push(p);
  }
  return res;
}

const allFiles = walk('.');
const htmlFiles = allFiles.filter(f => f.endsWith('.html'));
const existingFileSet = new Set(allFiles.map(f => path.normalize(f).replace(/\\/g, '/')));

console.log(`Auditing ${allFiles.length} total website files (${htmlFiles.length} HTML files)...`);

// 1. Search for old city name
let nagercoilCount = 0;
const nagercoilFiles = [];
allFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const m = content.match(/nagercoil/gi);
  if (m) {
    nagercoilCount += m.length;
    nagercoilFiles.push({ file: f, count: m.length });
  }
});

// 2. Search for old domain
let oldDomainCount = 0;
const oldDomainFiles = [];
allFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const m = content.match(/servicecenternagercoil\.com/gi);
  if (m) {
    oldDomainCount += m.length;
    oldDomainFiles.push({ file: f, count: m.length });
  }
});

// 3. Broken internal links
let brokenLinks = [];
let totalLinksChecked = 0;
htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const currentDir = path.dirname(f).replace(/\\/g, '/');
  const hrefMatches = content.matchAll(/href="([^"#:]+)"/gi);
  for (const match of hrefMatches) {
    const href = match[1];
    if (href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http') || href.startsWith('#')) continue;
    totalLinksChecked++;
    const resolved = path.normalize(path.join(currentDir, href)).replace(/\\/g, '/');
    if (!existingFileSet.has(resolved)) {
      brokenLinks.push({ file: f, href, resolved });
    }
  }
});

// 4. Schema JSON-LD validity
let schemaBlocksCount = 0;
let schemaParseErrors = 0;
htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const scripts = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi);
  if (scripts) {
    scripts.forEach(s => {
      schemaBlocksCount++;
      const jsonStr = s.replace(/<script type="application\/ld\+json">/i, '').replace(/<\/script>/i, '').trim();
      try {
        const parsed = JSON.parse(jsonStr);
        if (parsed.name !== 'Service Center Trichy') {
          console.warn(`Unexpected schema name in ${f}: ${parsed.name}`);
        }
        if (parsed.address.addressLocality !== 'Trichy') {
          console.warn(`Unexpected addressLocality in ${f}: ${parsed.address.addressLocality}`);
        }
      } catch (e) {
        schemaParseErrors++;
        console.error(`JSON parse error in ${f}: ${e.message}`);
      }
    });
  }
});

// 5. Canonicals and Titles
let canonicalMismatchCount = 0;
let unlocalizedTitles = 0;
htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const cMatch = content.match(/<link rel="canonical"\s+href="([^"]+)"/i);
  if (!cMatch || !cMatch[1].startsWith('https://servicecentertrichy.com/')) {
    canonicalMismatchCount++;
  }
  const tMatch = content.match(/<title>([^<]+)<\/title>/i);
  if (tMatch && tMatch[1].toLowerCase().includes('nagercoil')) {
    unlocalizedTitles++;
  }
});

// 6. Header and Nav integrity
let missingNavCount = 0;
let missingHeaderCount = 0;
htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (!content.includes('class="site-header"')) missingHeaderCount++;
  if (!content.includes('class="main-nav"')) missingNavCount++;
});

// 7. Leftover -nagercoil.html files
const leftoverOldFiles = allFiles.filter(f => f.toLowerCase().includes('nagercoil'));

console.log('\n========================================');
console.log('       FINAL VERIFICATION AUDIT         ');
console.log('========================================');
console.log(`1. Remaining Nagercoil references: ${nagercoilCount}`);
console.log(`2. Remaining old domain references: ${oldDomainCount}`);
console.log(`3. Total internal links checked: ${totalLinksChecked}`);
console.log(`4. Broken internal links found: ${brokenLinks.length}`);
console.log(`5. Leftover old files: ${leftoverOldFiles.length}`);
console.log(`6. Schema JSON-LD blocks checked: ${schemaBlocksCount}`);
console.log(`7. Schema parse errors: ${schemaParseErrors}`);
console.log(`8. Canonical issues: ${canonicalMismatchCount}`);
console.log(`9. Unlocalized titles: ${unlocalizedTitles}`);
console.log(`10. Header integrity passed: ${htmlFiles.length - missingHeaderCount}/${htmlFiles.length}`);
console.log(`11. Nav integrity passed: ${htmlFiles.length - missingNavCount}/${htmlFiles.length}`);
console.log('========================================\n');
