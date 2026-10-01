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

let expSuccess = 0;
let expFailed = [];

files.forEach(f => {
  if (f === 'index.html' || f === 'sitemap.html' || f === 'servicecenter\\service-center-trichy.html') return;
  const content = fs.readFileSync(f, 'utf8');
  let expIdx = content.indexOf('Customer Service Experience');
  if (expIdx === -1) expIdx = content.indexOf('experience-card');
  if (expIdx === -1) expIdx = content.indexOf('experience-grid');

  if (expIdx !== -1) {
    let sectionStart = content.lastIndexOf('<section', expIdx);
    // Include preceding comment if present
    const beforeSection = content.slice(Math.max(0, sectionStart - 100), sectionStart);
    const commentMatch = beforeSection.match(/(<!--[\s\S]*?-->\s*)$/);
    if (commentMatch) {
      sectionStart = sectionStart - commentMatch[1].length;
    }
    const sectionEnd = content.indexOf('</section>', expIdx);
    if (sectionStart !== -1 && sectionEnd !== -1) {
      expSuccess++;
    } else {
      expFailed.push(f);
    }
  } else {
    expFailed.push(f);
  }
});

console.log('Experience sections bounded:', expSuccess, 'out of', files.length - 3);
if (expFailed.length > 0) {
  console.log('Failed files:', expFailed);
}
