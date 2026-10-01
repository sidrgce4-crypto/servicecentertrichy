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
const templateMap = {};

for (const f of files) {
  if (f === 'sitemap.html') continue;
  const content = fs.readFileSync(f, 'utf8');
  const heroMatch = content.match(/<p class="hero-desc">([\s\S]*?)<\/p>/i) || content.match(/<section class="hero">[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i);
  if (heroMatch) {
    let text = heroMatch[1].replace(/<[^>]+>/g, '').trim();
    // Normalize by masking out common brand tokens
    const parts = f.split(path.sep);
    let brand = '';
    if (parts.length > 1) {
      const base = parts[parts.length - 1].replace('.html', '');
      brand = base.split('-')[0];
    }
    if (brand && brand.length > 2) {
      text = text.replace(new RegExp(brand, 'gi'), 'BRAND');
    }
    // Mask some common brand variations
    text = text.replace(/acerpure|voltas beko|white westinghouse|blue star/gi, 'BRAND');
    
    // Hash or group by simplified structure (first 60 chars)
    const key = text.slice(0, 65).toLowerCase();
    if (!templateMap[key]) templateMap[key] = [];
    templateMap[key].push({ file: f, text });
  }
}

console.log('--- Template Similarity Check ---');
let groupCount = 0;
for (const [key, list] of Object.entries(templateMap)) {
  if (list.length > 3) {
    console.log(`\nPattern (${list.length} files): "${key}..."`);
    console.log(`Files:`, list.map(x => x.file));
    groupCount++;
  }
}
console.log(`\nTotal template groups with >3 similar files: ${groupCount}`);
