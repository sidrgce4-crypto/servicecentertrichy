const fs = require('fs');
const path = require('path');

function scanAll(dir) {
  let list = [];
  for (const f of fs.readdirSync(dir)) {
    if (f === 'node_modules' || f === '.git' || f === 'scratch') continue;
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) list = list.concat(scanAll(fp));
    else list.push(fp);
  }
  return list;
}

const allFiles = scanAll('.');
console.log(`Checking ${allFiles.length} files...`);

let foundWww = [];
let foundHttp = [];
let foundNagercoil = [];
let foundLocalhost = [];

for (const f of allFiles) {
  const content = fs.readFileSync(f, 'utf8');

  // Skip sitemap.redirect.xml from the "foundWww" error list since it legitimately contains www source redirect entries
  if (f !== 'sitemap.redirect.xml' && content.includes('www.servicecentertrichy.com')) {
    foundWww.push(f);
  }

  // Check for http://servicecentertrichy.com in production files (excluding redirect source rules)
  if (f !== 'sitemap.redirect.xml' && content.includes('http://servicecentertrichy.com')) {
    foundHttp.push(f);
  }

  if (content.toLowerCase().includes('servicecenternagercoil.com')) {
    foundNagercoil.push(f);
  }

  if (content.includes('localhost') || content.includes('127.0.0.1')) {
    foundLocalhost.push(f);
  }
}

console.log('--- Production Files Search Results ---');
console.log(`Files with "www.servicecentertrichy.com" (outside redirect source rules): ${foundWww.length}`);
if (foundWww.length > 0) console.log(foundWww);

console.log(`Files with "http://servicecentertrichy.com" (outside redirect source rules): ${foundHttp.length}`);
if (foundHttp.length > 0) console.log(foundHttp);

console.log(`Files with "servicecenternagercoil.com": ${foundNagercoil.length}`);
if (foundNagercoil.length > 0) console.log(foundNagercoil);

console.log(`Files with "localhost" or "127.0.0.1": ${foundLocalhost.length}`);
if (foundLocalhost.length > 0) console.log(foundLocalhost);
