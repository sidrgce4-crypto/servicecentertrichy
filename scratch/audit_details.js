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
let topBarCount = 0;
let faqsPerFile = [];
let localitySections = 0;
let experienceSections = 0;
let floatingBtnCount = 0;

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('class="top-bar"')) topBarCount++;
  const faqs = (content.match(/<details\s+class="faq-item"/g) || []).length;
  faqsPerFile.push({ file: f, faqs });
  if (content.includes('North Trichy') || content.includes('North trichy')) localitySections++;
  if (content.includes('experience-card') || content.includes('experience-grid')) experienceSections++;
  if (content.includes('floating-call-btn')) floatingBtnCount++;
});

console.log('Total HTML files:', files.length);
console.log('Top bar count:', topBarCount);
console.log('Locality sections count:', localitySections);
console.log('Experience sections count:', experienceSections);
console.log('Floating button count:', floatingBtnCount);
console.log('FAQ min, max, count < 10:', 
  Math.min(...faqsPerFile.map(x => x.faqs)),
  Math.max(...faqsPerFile.map(x => x.faqs)),
  faqsPerFile.filter(x => x.faqs < 10).length
);
const below10 = faqsPerFile.filter(x => x.faqs < 10);
console.log('Sample files with < 10 FAQs:', below10.slice(0, 5));
