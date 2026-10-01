const fs = require('fs');
const path = require('path');
const { getPageContent, formatBrandName } = require('./content_synthesizer.js');

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
console.log(`Found ${htmlFiles.length} HTML files to inspect and upgrade.`);

let modifiedCount = 0;
let fakeClaimCount = 0;
let wmIntroCount = 0;
let acIntroCount = 0;
let scIntroCount = 0;

for (const filePath of htmlFiles) {
  if (filePath === 'sitemap.html') continue;

  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Determine category and brand
  const parts = filePath.split(path.sep);
  let folder = 'root';
  let filename = parts[parts.length - 1];
  let brandSlug = '';

  if (parts.length > 1) {
    folder = parts[0];
    const base = filename.replace('.html', '');
    if (folder === 'servicecenter') {
      brandSlug = base === 'service-center-trichy' ? '' : base.replace('-service-center-trichy', '');
    } else {
      brandSlug = base === `${folder}-repair-service-trichy` ? '' : base.replace(`-${folder}-repair-service-trichy`, '');
    }
  }

  const brandName = formatBrandName(brandSlug);
  const data = getPageContent(folder, brandSlug, filename);

  // 1. Remove fake claim "20+ Skilled Technicians"
  if (content.includes('20+ Skilled Technicians') || content.includes('20+ Technicians')) {
    content = content.replace(/20\+\s*Skilled\s*Technicians/gi, 'Local Trichy Technicians');
    content = content.replace(/20\+\s*Technicians/gi, 'Local Technicians');
    fakeClaimCount++;
  }

  // 2. Upgrade Washing Machine Brand Openings
  if (folder === 'washing-machine' && brandSlug) {
    // Hero paragraph
    if (content.includes('Whether it is a front-load drum failing to spin, a top-load washer trapped on an unbalanced load error')) {
      content = content.replace(/Having trouble with your [^?]+\? Whether it is a front-load drum failing to spin, a top-load washer trapped on an unbalanced load error, or a semi-automatic twin tub with a dead spin timer, our local technicians provide dependable doorstep diagnosis and on-site repair across Trichy\./g, data.hero);
      wmIntroCount++;
    }

    // Main section paragraphs
    const wmPattern = new RegExp(
      '<p>If your ' + brandName + ' washing machine is not working properly, you do not have to struggle with laundry or transport heavy equipment to a workshop\\.[\\s\\S]*?<\\/p>\\s*<p>Whether you have an older, legacy ' + brandName + ' washing machine model or a newer inverter unit[\\s\\S]*?<\\/p>',
      'i'
    );
    if (wmPattern.test(content)) {
      content = content.replace(wmPattern, `<p>${data.p1}</p>\n        <p>${data.p2}</p>`);
      wmIntroCount++;
    } else {
      // General fallback if brand name casing differed
      const genericWmPattern = /<p>If your [^<]+ washing machine is not working properly, you do not have to struggle with laundry or transport heavy equipment to a workshop\.[\s\S]*?<\/p>\s*<p>Whether you have an older, legacy [^<]+ washing machine model or a newer inverter unit[\s\S]*?<\/p>/i;
      if (genericWmPattern.test(content)) {
        content = content.replace(genericWmPattern, `<p>${data.p1}</p>\n        <p>${data.p2}</p>`);
        wmIntroCount++;
      }
    }
  }

  // 3. Upgrade AC Brand Openings (remove any accidental Tanglish reviews in hero/intro)
  if (folder === 'ac' && brandSlug) {
    if (content.includes('-la cooling romba low ah irundhudhu, fan matum oduthu')) {
      const heroMatch = content.match(/<section class="hero">[\s\S]*?<p class="hero-desc">([\s\S]*?)<\/p>/i) ||
                         content.match(/<section class="hero">[\s\S]*?<p>([\s\S]*?)<\/p>/i);
      if (heroMatch && heroMatch[1].includes('-la cooling romba low ah irundhudhu')) {
        content = content.replace(heroMatch[0], heroMatch[0].replace(heroMatch[1], data.hero));
        acIntroCount++;
      }
    }
  }

  // 4. Upgrade Service Center Brand Openings
  if (folder === 'servicecenter' && brandSlug) {
    if (content.includes('We provide independent doorstep repair, diagnosis, maintenance, and genuine spare parts replacement')) {
      const scIntroPattern = /<p>We provide independent doorstep repair, diagnosis, maintenance, and genuine spare parts replacement for [^<]+ home appliances across Trichy and Tiruchirappalli district\.<\/p>/gi;
      if (scIntroPattern.test(content)) {
        content = content.replace(scIntroPattern, `<p>${data.p1}</p>\n        <p>${data.p2}</p>`);
        scIntroCount++;
      }
    }
  }

  // 5. Clean up any remaining corporate buzzwords:
  // "comprehensive" -> "complete" or "detailed"
  content = content.replace(/\bcomprehensive\b/gi, 'complete');
  content = content.replace(/\bseamless\b/gi, 'smooth');
  content = content.replace(/\bfacilitate\b/gi, 'help with');
  content = content.replace(/\brobust\b/gi, 'durable');
  content = content.replace(/\bstreamlined\b/gi, 'fast');
  content = content.replace(/\bend-to-end\b/gi, 'complete');
  content = content.replace(/\bstate-of-the-art\b/gi, 'modern');
  content = content.replace(/\badvanced solutions\b/gi, 'reliable service');
  content = content.replace(/\btechnical intervention\b/gi, 'technician repair');
  content = content.replace(/\bprofessional assistance\b/gi, 'technician visit');
  content = content.replace(/\bbespoke\b/gi, 'custom');
  content = content.replace(/\bleveraging\b/gi, 'using');

  // Check if file modified
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedCount++;
  }
}

console.log('\n--- Execution Summary ---');
console.log(`Total HTML files modified: ${modifiedCount}`);
console.log(`Fake claims ("20+ Technicians") removed/fixed: ${fakeClaimCount}`);
console.log(`Washing machine brand intros upgraded: ${wmIntroCount}`);
console.log(`AC brand intros upgraded: ${acIntroCount}`);
console.log(`Service center brand intros upgraded: ${scIntroCount}`);
