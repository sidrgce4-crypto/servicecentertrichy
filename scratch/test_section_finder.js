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

function testFileSections(f) {
  const content = fs.readFileSync(f, 'utf8');

  // 1. FAQ section matcher
  let faqMatched = false;
  // Try pattern A: <!-- FAQ Section --> ... </section>
  const faqIdx = content.indexOf('Frequently Asked Questions');
  if (faqIdx !== -1) {
    // Find the enclosing <section ... </section>
    const sectionStart = content.lastIndexOf('<section', faqIdx);
    const sectionEnd = content.indexOf('</section>', faqIdx);
    if (sectionStart !== -1 && sectionEnd !== -1) {
      faqMatched = true;
    }
  }

  // 2. Locality section matcher
  let locMatched = false;
  let locIdx = content.indexOf('Service Areas in Trichy');
  if (locIdx === -1) locIdx = content.indexOf('Service Areas Across Trichy');
  if (locIdx === -1) locIdx = content.indexOf('Local Coverage');
  if (locIdx === -1) locIdx = content.indexOf('North Trichy Service Localities');
  if (locIdx === -1) locIdx = content.indexOf('North Trichy AC Service');
  if (locIdx === -1) locIdx = content.indexOf('North Trichy');

  if (locIdx !== -1) {
    locMatched = true;
  }

  return { f, faqMatched, locMatched };
}

let faqCount = 0;
let locCount = 0;
let missedFaq = [];
let missedLoc = [];

files.forEach(f => {
  if (f === 'index.html' || f === 'sitemap.html') return;
  const res = testFileSections(f);
  if (res.faqMatched) faqCount++;
  else missedFaq.push(f);

  if (res.locMatched) locCount++;
  else missedLoc.push(f);
});

console.log('Total files checked:', files.length - 2);
console.log('FAQ matched:', faqCount, 'Missed:', missedFaq.length);
if (missedFaq.length > 0) console.log('Missed FAQ sample:', missedFaq.slice(0, 5));

console.log('Locality matched:', locCount, 'Missed:', missedLoc.length);
if (missedLoc.length > 0) console.log('Missed Loc sample:', missedLoc.slice(0, 5));
