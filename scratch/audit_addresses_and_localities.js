const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const dirent of list) {
    if (dirent.name === 'scratch' || dirent.name === '.git') continue;
    const fullPath = path.join(dir, dirent.name);
    if (dirent.isDirectory()) results = results.concat(walk(fullPath));
    else if (dirent.name.endsWith('.html')) results.push(fullPath);
  }
  return results;
}

const htmlFiles = walk('.');
const addressSamples = new Set();
const kanyakumariMentions = [];
const postalCodeMentions = [];
const localitiesMentions = [];

htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('Court Road')) addressSamples.add(f);
  if (content.toLowerCase().includes('kanyakumari')) kanyakumariMentions.push(f);
  if (content.includes('629001')) postalCodeMentions.push(f);
});

console.log('Total HTML files:', htmlFiles.length);
console.log('Files with Court Road:', addressSamples.size);
console.log('Files with Kanyakumari:', kanyakumariMentions.length);
console.log('Files with 629001:', postalCodeMentions.length);
