const fs = require('fs');
const path = require('path');

function scan(dir) {
  let list = [];
  for (const f of fs.readdirSync(dir)) {
    if (f === 'node_modules' || f === '.git' || f === 'scratch') continue;
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) list = list.concat(scan(fp));
    else if (f.endsWith('.html')) list.push(fp);
  }
  return list;
}

const files = scan('.');
console.log('Total HTML files scanned:', files.length);

// Check for banned words across all files
const bannedWords = [
  'nagercoil', 'Nagercoil', 'NAGERCOIL',
  'servicecenternagercoil.com',
  'localhost', '127.0.0.1',
  'kanyakumari', 'vadasery', 'kottar', 'asambu', 'parvathipuram'
];

let bannedFound = 0;
for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  for (const w of bannedWords) {
    if (content.includes(w)) {
      console.log(`[BANNED] Found "${w}" in ${f}`);
      bannedFound++;
    }
  }
}
console.log('Total banned word occurrences found:', bannedFound);

// Check corporate / AI buzzwords
const buzzwords = [
  'comprehensive', 'seamless', 'facilitate', 'robust', 'streamlined',
  'end-to-end', 'state-of-the-art', 'advanced solutions', 'technical intervention',
  'professional assistance', 'bespoke', 'leveraging'
];

let buzzCounts = {};
for (const f of files) {
  const content = fs.readFileSync(f, 'utf8').toLowerCase();
  for (const b of buzzwords) {
    const matches = content.match(new RegExp('\\b' + b + '\\b', 'g'));
    if (matches) {
      buzzCounts[b] = (buzzCounts[b] || 0) + matches.length;
    }
  }
}
console.log('\nBuzzword counts in files:', buzzCounts);

// Check sample opening paragraphs
console.log('\n--- Sample Openings ---');
const sampleFiles = [
  'washing-machine/bosch-washing-machine-repair-service-trichy.html',
  'washing-machine/samsung-washing-machine-repair-service-trichy.html',
  'washing-machine/ifb-washing-machine-repair-service-trichy.html',
  'ac/voltas-ac-repair-service-trichy.html',
  'ac/daikin-ac-repair-service-trichy.html',
  'fridge/whirlpool-fridge-repair-service-trichy.html',
  'fridge/godrej-fridge-repair-service-trichy.html',
  'servicecenter/lg-service-center-trichy.html',
  'servicecenter/samsung-service-center-trichy.html'
];

for (const sf of sampleFiles) {
  if (fs.existsSync(sf)) {
    const c = fs.readFileSync(sf, 'utf8');
    const h1 = (c.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1] || 'No H1';
    // first paragraph after h1
    const pMatch = c.match(/<h1[\s\S]*?<\/h1>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i);
    const pText = pMatch ? pMatch[1].replace(/<[^>]+>/g, '').trim().slice(0, 140) : 'No P';
    console.log(`\nFile: ${sf}\nH1: ${h1.replace(/<[^>]+>/g, '').trim()}\nOpening: ${pText}...`);
  }
}
