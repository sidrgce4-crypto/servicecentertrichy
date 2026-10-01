const fs = require('fs');

function getFiles(dir, base = '') {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    if (file === 'scratch' || file.startsWith('.')) continue;
    const full = dir + '/' + file;
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

const files = getFiles('.').sort();

function transformDescription(file, existingDesc) {
  const phonePrefix = 'Call 8882055269. ';

  if (file === 'index.html') {
    return `${phonePrefix}Looking for home appliance repair service in trichy? Prompt doorstep repair for AC, fridge, washing machine, TV, and microwave oven with clear prices.`;
  }
  if (file === 'sitemap.html') {
    return `${phonePrefix}Service Center trichy HTML sitemap directory. Easily find all home appliance repair pages, AC, fridge, washing machine, TV, and brand service centers.`;
  }
  if (file === 'servicecenter/service-center-trichy.html') {
    return `${phonePrefix}Looking for multi-brand home appliance service center in trichy? Prompt doorstep repair for AC, fridge, washing machine, TV, and microwave oven.`;
  }

  // If in servicecenter brand pages
  if (file.startsWith('servicecenter/')) {
    // Existing: Doorstep [Brand] service center in trichy for [Appliances]. Same-day technician checking...
    const match = existingDesc.match(/Doorstep\s+(.*?)\s+service\s+center\s+in\s+trichy\s+for\s+(.*?)\.\s*/i);
    if (match) {
      const brand = match[1].trim();
      const appliances = match[2].trim();
      return `${phonePrefix}Looking for ${brand} service center in trichy? Doorstep repair for ${appliances} with upfront pricing and prompt technician visit.`;
    }
  }

  let clean = existingDesc.trim();
  // If clean already starts with "Call 8882055269. ", remove it first to avoid duplicate
  clean = clean.replace(/^Call\s*8882055269\.\s*/i, '');

  let combined = `${phonePrefix}${clean}`;

  // If too long (over 185 chars), check if removing the last sentence keeps it > 120 chars
  if (combined.length > 185) {
    const sentences = clean.split(/(?<=[.?!])\s+/);
    if (sentences.length > 2) {
      // try dropping the last sentence
      const shortened = sentences.slice(0, -1).join(' ');
      if (shortened.length >= 80) {
        combined = `${phonePrefix}${shortened}`;
      }
    }
  }

  return combined;
}

const descriptions = {};
const duplicates = [];
const lengthStats = { min: 999, max: 0, over180: 0, under130: 0 };

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const d = (c.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i) || [])[1].trim();
  const newD = transformDescription(f, d);

  if (newD.length < lengthStats.min) lengthStats.min = newD.length;
  if (newD.length > lengthStats.max) lengthStats.max = newD.length;
  if (newD.length > 180) lengthStats.over180++;
  if (newD.length < 130) lengthStats.under130++;

  if (descriptions[newD]) {
    duplicates.push({ desc: newD, file1: descriptions[newD], file2: f });
  } else {
    descriptions[newD] = f;
  }
});

console.log('Total files:', files.length);
console.log('Unique descriptions:', Object.keys(descriptions).length);
console.log('Duplicate descriptions:', duplicates.length);
console.log('Length stats:', lengthStats);

// Sample outputs
console.log('\n--- Sample Outputs ---');
[0, 1, 30, 80, 100, 150, 200, 202].forEach(idx => {
  const f = files[idx];
  const c = fs.readFileSync(f, 'utf8');
  const d = (c.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i) || [])[1].trim();
  const newD = transformDescription(f, d);
  console.log(`[${idx}] ${f}: (${newD.length} chars)`);
  console.log(`   "${newD}"`);
});
