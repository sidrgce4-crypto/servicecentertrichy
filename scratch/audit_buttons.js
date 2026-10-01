const fs = require('fs');
const path = require('path');

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

const files = scanHtmlFiles('.');
console.log(`Total HTML files found: ${files.length}`);

let floatCallCount = 0;
let floatWaCount = 0;
let bottomBarCount = 0;
let multipleFloatCalls = 0;
let multipleFloatWas = 0;
let multipleBottomBars = 0;

for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');

  // Check floating call
  const callMatches = content.match(/class=["'][^"']*floating-side-call[^"']*["']/g) || [];
  if (callMatches.length === 1) floatCallCount++;
  else if (callMatches.length > 1) multipleFloatCalls++;

  // Check floating whatsapp
  const waMatches = content.match(/class=["'][^"']*floating-side-whatsapp[^"']*["']/g) || [];
  if (waMatches.length === 1) floatWaCount++;
  else if (waMatches.length > 1) multipleFloatWas++;

  // Check bottom bar
  const bottomMatches = content.match(/class=["'][^"']*bottom-action-bar[^"']*["']/g) || [];
  if (bottomMatches.length === 1) bottomBarCount++;
  else if (bottomMatches.length > 1) multipleBottomBars++;
}

console.log(`Floating Call (exactly 1): ${floatCallCount} / ${files.length}`);
console.log(`Floating WhatsApp (exactly 1): ${floatWaCount} / ${files.length}`);
console.log(`Bottom Action Bar (exactly 1): ${bottomBarCount} / ${files.length}`);
console.log(`Multiple Floating Calls: ${multipleFloatCalls}`);
console.log(`Multiple Floating WhatsApps: ${multipleFloatWas}`);
console.log(`Multiple Bottom Action Bars: ${multipleBottomBars}`);
