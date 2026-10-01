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

const htmlFiles = scanHtmlFiles('.');
console.log(`Checking ${htmlFiles.length} HTML files...`);

let issues = {
  canonicalNotNonWww: [],
  ogUrlNotNonWww: [],
  schemaNotNonWww: [],
  internalAbsoluteWww: [],
  httpUrls: [],
  nagercoilUrls: [],
  localhostUrls: []
};

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');

  // 1. Canonical tag
  const canMatch = content.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
  if (!canMatch || !canMatch[1].startsWith('https://servicecentertrichy.com/')) {
    issues.canonicalNotNonWww.push({ file, url: canMatch ? canMatch[1] : 'NONE' });
  }

  // 2. Open Graph url
  const ogMatch = content.match(/<meta[^>]+property=["']og:url["'][^>]*content=["']([^"']+)["']/i);
  if (ogMatch && !ogMatch[1].startsWith('https://servicecentertrichy.com/')) {
    issues.ogUrlNotNonWww.push({ file, url: ogMatch[1] });
  }

  // 3. Schema URLs
  const schemaMatches = content.match(/<script type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi) || [];
  for (const s of schemaMatches) {
    if (s.includes('www.servicecentertrichy.com')) {
      issues.schemaNotNonWww.push(file);
    }
  }

  // 4. Absolute internal www links in <a> or <img>
  const wwwLinks = content.match(/href=["']https?:\/\/www\.servicecentertrichy\.com[^"']*["']/gi) || [];
  if (wwwLinks.length > 0) {
    issues.internalAbsoluteWww.push({ file, links: wwwLinks });
  }

  // 5. HTTP production URLs
  const httpLinks = content.match(/href=["']http:\/\/servicecentertrichy\.com[^"']*["']/gi) || [];
  if (httpLinks.length > 0) {
    issues.httpUrls.push({ file, links: httpLinks });
  }

  // 6. Nagercoil
  if (content.toLowerCase().includes('servicecenternagercoil.com')) {
    issues.nagercoilUrls.push(file);
  }

  // 7. Localhost
  if (content.includes('localhost') || content.includes('127.0.0.1')) {
    issues.localhostUrls.push(file);
  }
}

console.log('--- HTML URL Audit Results ---');
console.log(`Canonical tags not strictly 'https://servicecentertrichy.com/...': ${issues.canonicalNotNonWww.length}`);
console.log(`OG URLs not strictly 'https://servicecentertrichy.com/...': ${issues.ogUrlNotNonWww.length}`);
console.log(`Schema blocks with www: ${issues.schemaNotNonWww.length}`);
console.log(`Internal links with www: ${issues.internalAbsoluteWww.length}`);
console.log(`Internal links with http: ${issues.httpUrls.length}`);
console.log(`Nagercoil domain references: ${issues.nagercoilUrls.length}`);
console.log(`Localhost/127.0.0.1 references: ${issues.localhostUrls.length}`);

// Robots.txt check
if (fs.existsSync('robots.txt')) {
  const rob = fs.readFileSync('robots.txt', 'utf8');
  console.log('\n--- robots.txt ---');
  console.log(rob.trim());
}
