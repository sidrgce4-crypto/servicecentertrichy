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

let totalFaqSections = 0;
let pagesWith10PlusFaqs = 0;
let totalAppliancePages = 0;
let totalServiceCenterPages = 0;
let totalLocalitySections = 0;
let floatingBtnCount = 0;
let bottomBarCount = 0;

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const faqs = (c.match(/<details\s+class="faq-item"/g) || []).length;
  if (faqs > 0) totalFaqSections++;
  if (faqs >= 10) pagesWith10PlusFaqs++;
  
  const norm = f.replace(/\\/g, '/');
  if (norm.startsWith('ac/') || norm.startsWith('fridge/') || norm.startsWith('washing-machine/') || norm.startsWith('tv/') || norm.startsWith('microwave/')) {
    totalAppliancePages++;
  } else if (norm.startsWith('servicecenter/')) {
    totalServiceCenterPages++;
  }
  
  if (c.includes('North Trichy Service Localities (50 Areas)')) {
    totalLocalitySections++;
  }
  
  if (c.includes('floating-side-whatsapp') && c.includes('floating-side-call')) {
    floatingBtnCount++;
  }
  if (c.includes('bottom-action-bar')) {
    bottomBarCount++;
  }
});

console.log(JSON.stringify({
  totalHtmlFiles: files.length,
  totalFaqSections,
  pagesWith10PlusFaqs,
  totalAppliancePages,
  totalServiceCenterPages,
  totalLocalitySections,
  floatingBtnCount,
  bottomBarCount
}, null, 2));
