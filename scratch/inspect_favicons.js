const fs = require('fs');
const path = require('path');

const rootFiles = fs.readdirSync('.');
const iconFiles = rootFiles.filter(f => /favicon|icon/i.test(f));
console.log('Icon files in root:', iconFiles);

function scanHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    if (file === 'node_modules' || file === '.git' || file === 'scratch') continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(scanHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

const htmlFiles = scanHtmlFiles('.');
console.log(`Found ${htmlFiles.length} HTML files.`);

const iconRefCounts = {};
for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const matches = content.match(/<link[^>]+rel=["'][^"']*icon[^"']*["'][^>]*>/gi) || [];
  for (const m of matches) {
    iconRefCounts[m] = (iconRefCounts[m] || 0) + 1;
  }
}

console.log('\nFavicon link references found across HTML files:');
console.log(JSON.stringify(iconRefCounts, null, 2));
