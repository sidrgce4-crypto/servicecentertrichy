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

function findLocalityRange(content) {
  let startIdx = content.indexOf('<!-- Trichy Locality System');
  if (startIdx === -1) startIdx = content.indexOf('<!-- Locality System');
  if (startIdx === -1) startIdx = content.indexOf('<!-- Trichy Localities Grid Section');
  if (startIdx === -1) startIdx = content.indexOf('<!-- Localities Grid Section');
  if (startIdx === -1) startIdx = content.indexOf('<!-- 4 Directions Localities Section');
  if (startIdx === -1) startIdx = content.indexOf('<!-- Localities Section');
  if (startIdx === -1) startIdx = content.indexOf('<!-- Local Coverage');
  
  if (startIdx === -1) {
    const m = content.match(/<section[^>]*>[\s\S]*?<h2[^>]*>[^<]*Service Areas/);
    if (m) startIdx = content.indexOf(m[0]);
  }

  if (startIdx === -1) return null;

  const afterStart = content.slice(startIdx);
  // The locality section ends where the next section or footer begins
  // Let's find the closing </section> of the locality container
  // Locality section typically contains "South Trichy" then ends with </section>
  const southIdx = afterStart.indexOf('South Trichy');
  if (southIdx !== -1) {
    const closeAfterSouth = afterStart.indexOf('</section>', southIdx);
    if (closeAfterSouth !== -1) {
      return { startIdx, endIdx: startIdx + closeAfterSouth + '</section>'.length };
    }
  }

  // Fallback: look for </section> before the next known section
  const nextSectionMatch = afterStart.match(/<\/section>\s*(?:\n\s*<!--|\n\s*<section)/);
  if (nextSectionMatch) {
    return { startIdx, endIdx: startIdx + nextSectionMatch.index + '</section>'.length };
  }
  
  return null;
}

let found = 0;
let notFound = [];

files.forEach(f => {
  if (f === 'index.html' || f === 'sitemap.html' || f.includes('service-center-trichy.html')) return;
  const content = fs.readFileSync(f, 'utf8');
  const range = findLocalityRange(content);
  if (range) {
    found++;
  } else {
    notFound.push(f);
  }
});

console.log('Locality ranges found:', found, 'out of 200');
console.log('Not found files count:', notFound.length);
console.log('Not found sample:', notFound.slice(0, 10));
