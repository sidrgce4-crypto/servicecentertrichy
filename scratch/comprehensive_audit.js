const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://www.servicecentertrichy.com';

function getFiles(dir, base = '') {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    if (file === 'scratch' || file.startsWith('.')) continue;
    const full = path.join(dir, file);
    const rel = base ? base + '/' + file : file;
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results = results.concat(getFiles(full, rel));
    } else if (file.endsWith('.html')) {
      results.push(rel.replace(/\\/g, '/'));
    }
  }
  return results;
}

const allHtmlFiles = getFiles('.').sort();

let counts = {
  total: allHtmlFiles.length,
  ac: 0,
  fridge: 0,
  washingMachine: 0,
  tv: 0,
  microwave: 0,
  serviceCenterTotal: 0,
  serviceCenterBrands: 0,
  root: 0
};

allHtmlFiles.forEach(f => {
  if (f.startsWith('ac/')) counts.ac++;
  else if (f.startsWith('fridge/')) counts.fridge++;
  else if (f.startsWith('washing-machine/')) counts.washingMachine++;
  else if (f.startsWith('tv/')) counts.tv++;
  else if (f.startsWith('microwave/')) counts.microwave++;
  else if (f.startsWith('servicecenter/')) {
    counts.serviceCenterTotal++;
    if (f !== 'servicecenter/service-center-trichy.html') counts.serviceCenterBrands++;
  } else {
    counts.root++;
  }
});

let brokenLinks = [];
let missingTitles = [];
let missingDescriptions = [];
let missingViewports = [];
let missingCanonicals = [];
let invalidCanonicals = [];
let duplicateH1 = [];
let missingH1 = [];
let duplicateGoogleTag = [];
let missingGoogleTag = [];
let missingFavicon = [];
let missingContactDetails = [];
let missingGoogleMap = [];
let missingSchema = [];
let invalidHours = [];

// For orphan page detection
const inboundLinks = {};
allHtmlFiles.forEach(f => { inboundLinks[f] = 0; });

allHtmlFiles.forEach(page => {
  const content = fs.readFileSync(page, 'utf8');
  const pageDir = path.dirname(page) === '.' ? '' : path.dirname(page);

  // Title
  const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/i);
  if (!titleMatch || !titleMatch[1].trim()) missingTitles.push(page);

  // Description
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
  if (!descMatch || !descMatch[1].trim()) missingDescriptions.push(page);

  // Viewport
  if (!content.includes('name="viewport"')) missingViewports.push(page);

  // Canonical
  const canonMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/i);
  if (!canonMatch) {
    missingCanonicals.push(page);
  } else {
    const expected = page === 'index.html' ? `${DOMAIN}/` : `${DOMAIN}/${page}`;
    if (canonMatch[1] !== expected) {
      invalidCanonicals.push({ page, found: canonMatch[1], expected });
    }
  }

  // H1 check
  const h1Matches = content.match(/<h1[\s>]/gi);
  if (!h1Matches) missingH1.push(page);
  else if (h1Matches.length > 1) duplicateH1.push({ page, count: h1Matches.length });

  // Google Tag
  const gtagMatches = content.match(/googletagmanager\.com\/gtag\/js\?id=G-L0Q91G8NQE/g);
  if (!gtagMatches) missingGoogleTag.push(page);
  else if (gtagMatches.length > 1) duplicateGoogleTag.push({ page, count: gtagMatches.length });

  // Favicon
  if (!content.includes('favicon.svg') || !content.includes('favicon.png')) {
    missingFavicon.push(page);
  }

  // Contact Details
  if (!content.includes('124, Court Road') || !content.includes('629001') || !content.includes('98765 43210')) {
    missingContactDetails.push(page);
  }

  // Google Map
  if (!content.includes('maps.google.com/maps?q=') && !content.includes('google.com/maps/search/')) {
    missingGoogleMap.push(page);
  }

  // Schema
  if (!content.includes('application/ld+json') || !content.includes('LocalBusiness')) {
    missingSchema.push(page);
  }

  // Hours check
  if (content.includes('9:00 AM - 8:00 PM') || content.includes('9:00 AM – 8:00 PM')) {
    invalidHours.push(page);
  }

  // Link audit
  const linkRegex = /<a\s+[^>]*href=["']([^"']+)["']/gi;
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    const href = match[1].trim();
    if (href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('javascript:')) {
      continue;
    }
    if (href.startsWith('http://servicecentertrichy.com')) {
      brokenLinks.push({ from: page, href, reason: 'Insecure HTTP canonical/internal URL' });
      continue;
    }
    if (href.startsWith('http://') || href.startsWith('https://')) {
      // External or absolute URL
      continue;
    }

    // Resolve relative path
    const cleanHref = href.split('?')[0].split('#')[0];
    if (!cleanHref) continue;

    let targetPath;
    if (pageDir === '') {
      targetPath = cleanHref;
    } else {
      targetPath = path.normalize(path.join(pageDir, cleanHref)).replace(/\\/g, '/');
    }

    if (!fs.existsSync(targetPath)) {
      brokenLinks.push({ from: page, href, resolved: targetPath });
    } else {
      if (inboundLinks[targetPath] !== undefined) {
        inboundLinks[targetPath]++;
      }
    }
  }
});

// Check orphan pages
const orphanPages = Object.keys(inboundLinks).filter(p => p !== 'index.html' && inboundLinks[p] === 0);

// Sitemap XML check
let sitemapXmlPass = false;
let sitemapXmlCount = 0;
let missingFromSitemap = [];
if (fs.existsSync('sitemap.xml')) {
  const xmlContent = fs.readFileSync('sitemap.xml', 'utf8');
  const locMatches = xmlContent.match(/<loc>(.*?)<\/loc>/g) || [];
  sitemapXmlCount = locMatches.length;
  sitemapXmlPass = sitemapXmlCount === allHtmlFiles.length;

  allHtmlFiles.forEach(f => {
    const expectedUrl = f === 'index.html' ? `${DOMAIN}/` : `${DOMAIN}/${f}`;
    if (!xmlContent.includes(`<loc>${expectedUrl}</loc>`)) {
      missingFromSitemap.push(expectedUrl);
    }
  });
}

// Robots.txt check
let robotsPass = false;
if (fs.existsSync('robots.txt')) {
  const r = fs.readFileSync('robots.txt', 'utf8');
  if (r.includes('User-agent: *') && r.includes('Allow: /') && r.includes('sitemap.xml')) {
    robotsPass = true;
  }
}

// Sitemap.html check
let sitemapHtmlPass = fs.existsSync('sitemap.html') && fs.readFileSync('sitemap.html', 'utf8').length > 1000;

// Output audit report
console.log('==================================================');
console.log('AUDIT REPORT SUMMARY');
console.log('==================================================');
console.log('TOTAL HTML FILES:', counts.total);
console.log('AC PAGES:', counts.ac);
console.log('FRIDGE PAGES:', counts.fridge);
console.log('WASHING MACHINE PAGES:', counts.washingMachine);
console.log('TV PAGES:', counts.tv);
console.log('MICROWAVE PAGES:', counts.microwave);
console.log('SERVICE CENTER BRAND PAGES:', counts.serviceCenterBrands);
console.log('BROKEN INTERNAL LINKS:', brokenLinks.length);
if (brokenLinks.length > 0) console.log('Sample broken links:', brokenLinks.slice(0, 5));
console.log('MISSING TITLES:', missingTitles.length);
console.log('MISSING META DESCRIPTIONS:', missingDescriptions.length);
console.log('MISSING CANONICALS:', missingCanonicals.length);
if (missingCanonicals.length > 0) console.log('Missing canonical pages:', missingCanonicals);
console.log('INVALID CANONICALS:', invalidCanonicals.length);
if (invalidCanonicals.length > 0) console.log('Sample invalid canonicals:', invalidCanonicals.slice(0, 5));
console.log('DUPLICATE H1:', duplicateH1.length);
console.log('MISSING H1:', missingH1.length);
console.log('DUPLICATE GOOGLE TAG:', duplicateGoogleTag.length);
console.log('MISSING GOOGLE TAG:', missingGoogleTag.length);
console.log('MISSING FAVICON:', missingFavicon.length);
console.log('SITEMAP URL COUNT:', sitemapXmlCount);
console.log('MISSING FROM SITEMAP:', missingFromSitemap.length);
console.log('ORPHAN PAGES:', orphanPages.length);
if (orphanPages.length > 0) console.log('Sample orphan pages:', orphanPages.slice(0, 5));
console.log('INVALID WORKING HOURS COUNT:', invalidHours.length);
console.log('ROBOTS.TXT:', robotsPass ? 'PASS' : 'FAIL');
console.log('SITEMAP.XML:', sitemapXmlPass ? 'PASS' : 'FAIL');
console.log('SITEMAP.HTML:', sitemapHtmlPass ? 'PASS' : 'FAIL');
console.log('MOBILE CHECK:', missingViewports.length === 0 ? 'PASS' : 'FAIL');
console.log('CONTACT DETAILS:', missingContactDetails.length === 0 ? 'PASS' : 'FAIL');
console.log('GOOGLE MAP:', missingGoogleMap.length === 0 ? 'PASS' : 'FAIL');
console.log('SCHEMA:', missingSchema.length === 0 ? 'PASS' : 'FAIL');
console.log('==================================================');
