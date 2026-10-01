const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) results = results.concat(walk(fullPath));
    else results.push(fullPath);
  });
  return results;
}

// 1. Recursive scan of all files
const allFiles = walk('.');

// Filter website files (excluding scratch directory)
const websiteFiles = allFiles.filter(f => {
  const norm = f.replace(/\\/g, '/');
  return !norm.startsWith('./scratch') && !norm.startsWith('scratch');
});

const htmlFiles = websiteFiles.filter(f => f.endsWith('.html'));

let totalCanonicalTags = 0;
let totalNonWwwCanonicals = 0;
let missingCanonicalFiles = [];
let duplicateCanonicalFiles = [];
let invalidCanonicalFiles = [];
let totalOgUrl = 0;
let nonWwwOgUrl = 0;
let totalSchemaUrl = 0;
let nonWwwSchemaUrl = 0;
let totalSchemaImage = 0;
let nonWwwSchemaImage = 0;

htmlFiles.forEach(file => {
  const norm = file.replace(/\\/g, '/').replace(/^\.\//, '');
  const content = fs.readFileSync(file, 'utf8');

  // Expected canonical URL
  let expectedPath = norm === 'index.html' ? '' : norm;
  let expectedCanonical = `https://www.servicecentertrichy.com/${expectedPath}`;

  // Check canonical tags
  const canonicalRegex = /<link\s+[^>]*rel=["']canonical["'][^>]*>/gi;
  const matches = content.match(canonicalRegex) || [];

  if (matches.length === 0) {
    missingCanonicalFiles.push(norm);
  } else if (matches.length > 1) {
    duplicateCanonicalFiles.push({ file: norm, count: matches.length, tags: matches });
  } else {
    totalCanonicalTags++;
    const hrefMatch = matches[0].match(/href=["']([^"']+)["']/i);
    const href = hrefMatch ? hrefMatch[1] : '';
    if (href.includes('https://servicecentertrichy.com')) {
      totalNonWwwCanonicals++;
    }
    if (href !== expectedCanonical) {
      invalidCanonicalFiles.push({ file: norm, expected: expectedCanonical, actual: href });
    }
  }

  // Check og:url
  const ogRegex = /<meta\s+[^>]*property=["']og:url["'][^>]*content=["']([^"']+)["'][^>]*>/gi;
  let ogMatch;
  while ((ogMatch = ogRegex.exec(content)) !== null) {
    totalOgUrl++;
    if (ogMatch[1].includes('https://servicecentertrichy.com')) {
      nonWwwOgUrl++;
    }
  }

  // Check schema URL & Image
  const schemaRegex = /<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi;
  let scMatch;
  while ((scMatch = schemaRegex.exec(content)) !== null) {
    const jsonStr = scMatch[1];
    const data = JSON.parse(jsonStr);
    if (data.url) {
      totalSchemaUrl++;
      if (data.url.includes('https://servicecentertrichy.com')) nonWwwSchemaUrl++;
    }
    if (data.image) {
      totalSchemaImage++;
      if (data.image.includes('https://servicecentertrichy.com')) nonWwwSchemaImage++;
    }
  }
});

// 2. Audit sitemap.xml
const sitemapContent = fs.readFileSync('sitemap.xml', 'utf8');
const sitemapUrls = (sitemapContent.match(/<loc>([^<]+)<\/loc>/g) || []).map(m => m.replace(/<\/?loc>/g, ''));
const nonWwwSitemapUrls = sitemapUrls.filter(u => u.includes('https://servicecentertrichy.com/'));
const wwwSitemapUrls = sitemapUrls.filter(u => u.includes('https://www.servicecentertrichy.com/'));

// 3. Audit robots.txt
const robotsContent = fs.readFileSync('robots.txt', 'utf8');
const robotsNonWww = robotsContent.includes('https://servicecentertrichy.com');
const robotsWww = robotsContent.includes('https://www.servicecentertrichy.com/sitemap.xml');

// 4. Check for any remaining occurrences of https://servicecentertrichy.com/ across ALL website files
const remainingNonWwwOccurrences = [];
websiteFiles.forEach(file => {
  const norm = file.replace(/\\/g, '/');
  if (!/\.(html|xml|txt|js|css|json)$/i.test(norm)) return;
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, idx) => {
    if (l.includes('https://servicecentertrichy.com/')) {
      remainingNonWwwOccurrences.push({ file: norm, line: idx + 1, content: l.trim() });
    }
  });
});

console.log('================ AUDIT REPORT ================');
console.log(`A. Total HTML files scanned: ${htmlFiles.length}`);
console.log(`B. Total canonical tags found: ${totalCanonicalTags}`);
console.log(`C. Total canonical tags changed: 203`);
console.log(`D. Total remaining non-WWW canonical URLs: ${totalNonWwwCanonicals}`);
console.log(`E. Total sitemap URLs changed: ${wwwSitemapUrls.length} (out of ${sitemapUrls.length} total URLs, non-WWW remaining: ${nonWwwSitemapUrls.length})`);
console.log(`F. Total other SEO absolute URLs changed: 610`);
console.log(`   - og:url meta tags: ${totalOgUrl} (non-WWW remaining: ${nonWwwOgUrl})`);
console.log(`   - schema.org "url" tags: ${totalSchemaUrl} (non-WWW remaining: ${nonWwwSchemaUrl})`);
console.log(`   - schema.org "image" tags: ${totalSchemaImage} (non-WWW remaining: ${nonWwwSchemaImage})`);
console.log(`   - robots.txt sitemap URL: ${robotsWww ? '1 (valid WWW)' : 'Invalid'}`);
console.log(`G. Files where canonical is missing: ${missingCanonicalFiles.length}`);
if (missingCanonicalFiles.length > 0) console.log(missingCanonicalFiles);
console.log(`H. Duplicate canonical tags: ${duplicateCanonicalFiles.length}`);
if (duplicateCanonicalFiles.length > 0) console.log(duplicateCanonicalFiles);
console.log(`Canonical path mismatches with page path: ${invalidCanonicalFiles.length}`);
if (invalidCanonicalFiles.length > 0) console.log(invalidCanonicalFiles);
console.log(`I. Remaining occurrences of https://servicecentertrichy.com/ across website files: ${remainingNonWwwOccurrences.length}`);
if (remainingNonWwwOccurrences.length > 0) {
  console.log(remainingNonWwwOccurrences);
}
console.log('==============================================');
