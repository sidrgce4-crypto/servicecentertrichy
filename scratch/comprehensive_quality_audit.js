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
console.log('--- COMPREHENSIVE QUALITY AUDIT ---');
console.log('Total HTML files scanned:', files.length);

// 1. Top bar check
let topBarFound = 0;
files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes('class="top-bar"')) {
    topBarFound++;
    console.log('File still has top-bar:', f);
  }
});
console.log('[Audit] Top bar in HTML files:', topBarFound, '(Expected: 0)');

// 2. Old Nagercoil locality keywords check
const oldLocSample = [
  'Vadasery', 'Krishnankoil', 'Putheri', 'Kottar', 'Suchindram', 'Erachakulam',
  'Bhoothapandi', 'Thovalai', 'Aralvaimozhi', 'Karinkal', 'Villukuri', 'Parvathipuram',
  'Asaripallam', 'Ozhuginasery', 'Kuzhithurai', 'Marthandam', 'Colachel', 'Thuckalay',
  'Padmanabhapuram', 'Tammathukonam', 'Edalakudy', 'Marungoor', 'Mylaudy', 'Agasteeswaram',
  'Kottaram', 'Thamaraikulam', 'Sahayanagar', 'Balmore Road', 'Kunnathoor',
  'Shenbagaramanputhur', 'Vellamodi', 'Esanthimangu', 'Muppandal', 'Peruvilai'
];

let nagercoilFound = 0;
files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  oldLocSample.forEach(loc => {
    if (c.includes(loc)) {
      nagercoilFound++;
      console.log(`Old locality "${loc}" found in ${f}`);
    }
  });
});
console.log('[Audit] Old Nagercoil locality occurrences:', nagercoilFound, '(Expected: 0)');

// 3. Servicecenternagercoil.com check
let oldDomainCount = 0;
files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes('servicecenternagercoil.com')) {
    oldDomainCount++;
    console.log('Old domain found in:', f);
  }
});
console.log('[Audit] Old domain references:', oldDomainCount, '(Expected: 0)');

// 4. FAQ count check (Minimum 10+ on all relevant pages)
let below10FaqCount = 0;
files.forEach(f => {
  if (f === 'sitemap.html') return;
  const c = fs.readFileSync(f, 'utf8');
  const count = (c.match(/<details\s+class="faq-item"/g) || []).length;
  if (count < 10) {
    below10FaqCount++;
    console.log(`Page has <10 FAQs (${count}): ${f}`);
  }
});
console.log('[Audit] Pages with <10 FAQs (excl. sitemap):', below10FaqCount, '(Expected: 0)');

// 5. Locality sections check (North, East, West, South 50 each = 200)
let localityCountCorrect = 0;
let localityMissing = [];
files.forEach(f => {
  if (f === 'index.html' || f === 'sitemap.html') return;
  const c = fs.readFileSync(f, 'utf8');
  const northCount = (c.match(/North Trichy Service Localities \(50 Areas\)/g) || []).length;
  const eastCount = (c.match(/East Trichy Service Localities \(50 Areas\)/g) || []).length;
  const westCount = (c.match(/West Trichy Service Localities \(50 Areas\)/g) || []).length;
  const southCount = (c.match(/South Trichy Service Localities \(50 Areas\)/g) || []).length;
  
  if (northCount === 1 && eastCount === 1 && westCount === 1 && southCount === 1) {
    localityCountCorrect++;
  } else {
    localityMissing.push({ f, northCount, eastCount, westCount, southCount });
  }
});
console.log('[Audit] Pages with all 4 directions (50 each = 200 localities):', localityCountCorrect, 'out of 201');
if (localityMissing.length > 0) {
  console.log('Locality missing sample:', localityMissing.slice(0, 5));
}

// 6. Floating buttons check (WhatsApp, Call, Bottom bar)
let floatingButtonsMissing = 0;
files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const hasSideWa = c.includes('floating-side-whatsapp');
  const hasSideCall = c.includes('floating-side-call');
  const hasBottomBar = c.includes('bottom-action-bar');
  if (!hasSideWa || !hasSideCall || !hasBottomBar) {
    floatingButtonsMissing++;
    console.log('Missing floating buttons:', f);
  }
});
console.log('[Audit] Files missing floating action buttons/bar:', floatingButtonsMissing, '(Expected: 0)');

// 7. Experience sections rating check
let expRatingsValid = 0;
let expRatingsMissing = [];
files.forEach(f => {
  if (f === 'sitemap.html') return;
  const c = fs.readFileSync(f, 'utf8');
  const hasRating = c.includes('class="exp-rating"');
  if (hasRating) {
    expRatingsValid++;
  } else {
    expRatingsMissing.push(f);
  }
});
console.log('[Audit] Pages with 1-10 rated Tanglish experiences:', expRatingsValid, 'out of 202');
if (expRatingsMissing.length > 0) {
  console.log('Experience missing sample:', expRatingsMissing.slice(0, 5));
}

// 8. Repetitive intro check ("You came to the right place")
let repetitiveIntrosFound = 0;
files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes('You came to the right place')) {
    repetitiveIntrosFound++;
    console.log('Repetitive intro in:', f);
  }
});
console.log('[Audit] Pages with "You came to the right place":', repetitiveIntrosFound, '(Expected: 0)');

// 9. Fake claims check ("20+ local technicians")
let fakeClaimsFound = 0;
files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes('20+ local technicians') || c.includes('20+ technicians')) {
    fakeClaimsFound++;
    console.log('Fake claim in:', f);
  }
});
console.log('[Audit] Pages with "20+ technicians" claim:', fakeClaimsFound, '(Expected: 0)');

// 10. Google tag & Canonical check
let googleTagCount = 0;
let canonicalCount = 0;
files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes('G-L0Q91G8NQE')) googleTagCount++;
  if (c.includes('rel="canonical"')) canonicalCount++;
});
console.log('[Audit] Google tag preserved:', googleTagCount, 'out of', files.length);
console.log('[Audit] Canonical tag preserved:', canonicalCount, 'out of', files.length);
