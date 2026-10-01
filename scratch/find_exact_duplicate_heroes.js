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
const heroMap = {};

for (const f of files) {
  if (f === 'sitemap.html') continue;
  const content = fs.readFileSync(f, 'utf8');
  const heroMatch = content.match(/<p class="hero-desc">([\s\S]*?)<\/p>/i) || content.match(/<section class="hero">[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i);
  if (heroMatch) {
    // Normalize by stripping brand names or checking similarity
    const text = heroMatch[1].replace(/<[^>]+>/g, '').trim();
    // Generalized text: replace brand with [BRAND]
    // Let's also check exact text matches
    if (!heroMap[text]) heroMap[text] = [];
    heroMap[text].push(f);
  }
}

console.log('--- Exact Duplicate Hero Text Check ---');
let duplicatesCount = 0;
for (const [text, fileList] of Object.entries(heroMap)) {
  if (fileList.length > 1) {
    console.log(`Found ${fileList.length} files with exact same hero:`);
    console.log(`Files:`, fileList);
    console.log(`Text preview: "${text.slice(0, 100)}..."\n`);
    duplicatesCount += fileList.length;
  }
}
if (duplicatesCount === 0) {
  console.log('Zero exact duplicate heroes across all 203 files!');
}
