const fs = require('fs');
const path = require('path');

function walk(dir) {
  let res = [];
  for (const d of fs.readdirSync(dir, { withFileTypes: true })) {
    if (d.name === 'scratch' || d.name === '.git') continue;
    const p = path.join(dir, d.name);
    if (d.isDirectory()) res = res.concat(walk(p));
    else if (d.name.endsWith('.html')) res.push(p);
  }
  return res;
}

const htmlFiles = walk('.');
const addressPatterns = new Set();
const mapPatterns = new Set();
const footerAddressPatterns = new Set();
const bottomPatterns = new Set();

htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  
  const addrMatch = content.match(/<address[^>]*>([\s\S]*?)<\/address>/i);
  if (addrMatch) addressPatterns.add(addrMatch[1].trim());

  const mapMatch = content.match(/<iframe[^>]*src="([^"]*)"/i);
  if (mapMatch) mapPatterns.add(mapMatch[1]);

  const fAddrMatch = content.match(/<p><strong>Address:<\/strong>([^<]*)<\/p>/i);
  if (fAddrMatch) footerAddressPatterns.add(fAddrMatch[1].trim());

  const bMatch = content.match(/<div class="footer-bottom">[\s\S]*?<div>([^<]*Court Road[^<]*)<\/div>/i);
  if (bMatch) bottomPatterns.add(bMatch[1].trim());
});

console.log('Address patterns in <address>:', Array.from(addressPatterns));
console.log('Map patterns in <iframe>:', Array.from(mapPatterns));
console.log('Footer address patterns in <p><strong>Address:</strong>:', Array.from(footerAddressPatterns));
console.log('Footer bottom patterns:', Array.from(bottomPatterns));
