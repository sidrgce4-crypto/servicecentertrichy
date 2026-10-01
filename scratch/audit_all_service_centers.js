const fs = require('fs');
const path = require('path');

const scratchPath = 'C:/Users/thaku/.gemini/antigravity-ide/brain/d3d92cf3-7442-4e19-9aa4-5f6f56cee962/scratch/';
const allBrands = [
  ...require(scratchPath + 'sc_brands_batch1.js'),
  ...require(scratchPath + 'sc_brands_batch2.js'),
  ...require(scratchPath + 'sc_brands_batch3.js'),
  ...require(scratchPath + 'sc_brands_batch4.js')
];

const scDir = path.resolve(__dirname, '../servicecenter');
const baseDir = path.resolve(__dirname, '..');

const bannedWords = [
  'comprehensive', 'seamless', 'tailored', 'meticulous', 'robust',
  'streamlined', 'unparalleled', 'cutting-edge', 'state-of-the-art',
  'sophisticated', 'optimized', 'facilitate', 'expertise',
  'customer-centric', 'solutions-driven', 'premium experience',
  'holistic', 'innovative solutions'
];

const bannedPhrases = [
  'whether you are',
  'from x to y',
  'our team is committed',
  'we are dedicated to',
  'with our expertise',
  'ensuring a seamless',
  'designed to provide',
  'for all your appliance needs'
];

let totalErrors = 0;
let totalWarnings = 0;
const report = [];

allBrands.forEach(brand => {
  const fileName = `${brand.slug}-service-center-trichy.html`;
  const filePath = path.join(scDir, fileName);
  const issues = [];

  if (!fs.existsSync(filePath)) {
    issues.push(`File missing: ${fileName}`);
    totalErrors++;
    report.push({ brand: brand.name, slug: brand.slug, issues });
    return;
  }

  const html = fs.readFileSync(filePath, 'utf8');

  // Check 1: Exactly one H1
  const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  if (h1Matches.length !== 1) {
    issues.push(`H1 count is ${h1Matches.length} (expected 1)`);
    totalErrors++;
  }

  // Check 2: Title and meta description
  if (!html.includes('<title>') || !html.includes('</title>')) {
    issues.push(`Missing title tag`);
    totalErrors++;
  }
  if (!html.includes('<meta name="description"')) {
    issues.push(`Missing meta description`);
    totalErrors++;
  }

  // Check 3: Canonical tag
  const expectedCanonical = `https://www.servicecentertrichy.com/servicecenter/${fileName}`;
  if (!html.includes(expectedCanonical)) {
    issues.push(`Canonical URL missing or incorrect`);
    totalErrors++;
  }

  // Check 4: Correct CSS and JS paths
  if (!html.includes('href="../css/style.css"')) {
    issues.push(`Invalid CSS link`);
    totalErrors++;
  }
  if (!html.includes('src="../js/main.js"')) {
    issues.push(`Invalid JS script link`);
    totalErrors++;
  }

  // Check 5: Appliance sections count matches supported appliances
  brand.appliances.forEach(app => {
    if (!html.includes(`id="${app}"`)) {
      issues.push(`Missing appliance section with id="${app}"`);
      totalErrors++;
    }
  });

  // Check 6: Customer experiences count matches supported appliances
  // We can count cards inside the Customer Service Experiences section
  const expMatch = html.match(/Customer Service Experiences –[\s\S]*?<\/section>/);
  if (expMatch) {
    const cardCount = (expMatch[0].match(/Verified Service Visit|Service Center trichy|📍/g) || []).length;
    // Each experience card has a locality pin 📍
    const pinCount = (expMatch[0].match(/📍/g) || []).length;
    if (pinCount !== brand.appliances.length) {
      issues.push(`Customer experiences count: ${pinCount} (expected ${brand.appliances.length})`);
      totalErrors++;
    }
  } else {
    issues.push(`Customer Service Experiences section missing`);
    totalErrors++;
  }

  // Check 7: No "Sample Experience" or "Sample Scenario"
  if (/sample experience/i.test(html) || /sample scenario/i.test(html) || /example customer/i.test(html)) {
    issues.push(`Found forbidden 'sample experience/scenario' labels`);
    totalErrors++;
  }

  // Check 8: Official Information is plain text (no tel: or a href for official care)
  const officialSection = html.match(/Official[\s\S]*?Support Information[\s\S]*?<\/section>/);
  if (!officialSection) {
    issues.push(`Official Support Information section missing`);
    totalErrors++;
  } else {
    const offText = officialSection[0];
    if (offText.includes('authorized service center') && !offText.includes('not directly affiliated with, sponsored by, or an authorized service center') && !offText.includes('not directly authorized')) {
      issues.push(`Possible unauthorized claim detected`);
      totalErrors++;
    }
    // Check official numbers are plain text
    if (brand.officialCare && offText.includes(`href="tel:${brand.officialCare}"`)) {
      issues.push(`Official customer care number should NOT be a clickable tel: link`);
      totalErrors++;
    }
  }

  // Check 9: Internal links check
  const linkRegex = /href="([^"#:]+?)"/g;
  let match;
  while ((match = linkRegex.exec(html)) !== null) {
    const target = match[1];
    if (target.startsWith('http') || target.startsWith('tel:') || target.startsWith('mailto:') || target.startsWith('#')) {
      continue;
    }
    const resolvedPath = path.resolve(scDir, target);
    if (!fs.existsSync(resolvedPath)) {
      issues.push(`Broken internal link: ${target} -> ${resolvedPath}`);
      totalErrors++;
    }
  }

  // Check 10: Scan for banned buzzwords
  bannedWords.forEach(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'i');
    if (regex.test(html)) {
      issues.push(`Banned buzzword found: "${word}"`);
      totalWarnings++;
    }
  });

  // Check 11: Scan for banned AI phrases
  bannedPhrases.forEach(phrase => {
    if (html.toLowerCase().includes(phrase)) {
      issues.push(`Banned AI phrase found: "${phrase}"`);
      totalWarnings++;
    }
  });

  if (issues.length > 0) {
    report.push({ brand: brand.name, slug: brand.slug, issues });
  }
});

console.log('================ AUDIT REPORT ================');
console.log(`Total Brands Checked: ${allBrands.length}`);
console.log(`Total Errors: ${totalErrors}`);
console.log(`Total Warnings: ${totalWarnings}`);
if (report.length > 0) {
  console.log('Issues found in brands:');
  report.forEach(r => {
    console.log(`\n[${r.brand}] (${r.slug}):`);
    r.issues.forEach(iss => console.log(`  - ${iss}`));
  });
} else {
  console.log('ALL 58 BRAND SERVICE CENTER PAGES PASSED AUDIT WITH 0 ERRORS AND 0 WARNINGS!');
}
