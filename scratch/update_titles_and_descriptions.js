const fs = require('fs');
const path = require('path');

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

const files = getFiles('.').sort();
console.log('Total HTML files to update:', files.length);

function getNewTitle(file, oldTitle) {
  let primary = oldTitle.split('|')[0].trim();
  if (file === 'sitemap.html') {
    primary = 'Service Center trichy Sitemap';
  }
  return `${primary} | Call 8882055269`;
}

function getNewDescription(file, existingDesc) {
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
    const match = existingDesc.match(/Doorstep\s+(.*?)\s+service\s+center\s+in\s+trichy\s+for\s+(.*?)\.\s*/i);
    if (match) {
      const brand = match[1].trim();
      const appliances = match[2].trim();
      return `${phonePrefix}Looking for ${brand} service center in trichy? Doorstep repair for ${appliances} with upfront pricing and prompt technician visit.`;
    }
  }

  let clean = existingDesc.trim();
  clean = clean.replace(/^Call\s*8882055269\.\s*/i, '');

  let combined = `${phonePrefix}${clean}`;

  // If too long (over 185 chars), check if removing the last sentence keeps it >= 80 chars
  if (combined.length > 185) {
    const sentences = clean.split(/(?<=[.?!])\s+/);
    if (sentences.length > 2) {
      const shortened = sentences.slice(0, -1).join(' ');
      if (shortened.length >= 80) {
        combined = `${phonePrefix}${shortened}`;
      }
    }
  }

  return combined;
}

let titleUpdates = 0;
let descUpdates = 0;
const errors = [];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');

  // Title replacement
  const titleRegex = /<title>([\s\S]*?)<\/title>/i;
  const titleMatch = content.match(titleRegex);
  if (!titleMatch) {
    errors.push(`Missing <title> in ${f}`);
    return;
  }
  const oldTitle = titleMatch[1].trim();
  const newTitle = getNewTitle(f, oldTitle);
  content = content.replace(titleRegex, `<title>${newTitle}</title>`);
  titleUpdates++;

  // Meta description replacement
  const descRegex = /<meta\s+name=["']description["']\s+content=["'](.*?)["']\s*\/?>/i;
  const descMatch = content.match(descRegex);
  if (!descMatch) {
    errors.push(`Missing meta description in ${f}`);
    return;
  }
  const oldDesc = descMatch[1].trim();
  const newDesc = getNewDescription(f, oldDesc);
  content = content.replace(descRegex, `<meta name="description" content="${newDesc}">`);
  descUpdates++;

  fs.writeFileSync(f, content, 'utf8');
});

console.log(`Updated titles: ${titleUpdates}`);
console.log(`Updated descriptions: ${descUpdates}`);
if (errors.length > 0) {
  console.log('Errors:', errors);
} else {
  console.log('Zero errors during update.');
}
