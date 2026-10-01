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
console.log('=== AUDITING INTERNAL LINKS ACROSS ALL 203 FILES ===');

let totalLinksChecked = 0;
let brokenLinks = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const fileDir = path.dirname(f);
  
  // Find all href="..."
  const matches = content.match(/href="([^"#][^"]*)"/g) || [];
  matches.forEach(m => {
    let href = m.match(/href="([^"#][^"]*)"/)[1];
    
    // Skip external links, tel:, mailto:, javascript:, https:, http:, wa.me
    if (href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('javascript:') ||
        href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//')) {
      return;
    }

    // Strip any query params or hash
    href = href.split('?')[0].split('#')[0];
    if (!href) return;

    totalLinksChecked++;
    
    // Resolve relative path
    const resolvedPath = path.resolve(fileDir, href);
    if (!fs.existsSync(resolvedPath)) {
      brokenLinks.push({ file: f, link: href, resolved: resolvedPath });
    }
  });
});

console.log('Total internal links checked:', totalLinksChecked);
console.log('Broken links found:', brokenLinks.length);
if (brokenLinks.length > 0) {
  console.log('Broken link sample:', brokenLinks.slice(0, 10));
} else {
  console.log('All internal links are 100% valid!');
}
