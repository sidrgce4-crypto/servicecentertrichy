const fs = require('fs');
const path = require('path');

function walk(dir) {
  let res = [];
  for (const d of fs.readdirSync(dir, { withFileTypes: true })) {
    if (d.name === 'scratch' || d.name === '.git') continue;
    const p = path.join(dir, d.name);
    if (d.isDirectory()) res = res.concat(walk(p));
    else res.push(p);
  }
  return res;
}

const htmlFiles = walk('.').filter(f => f.endsWith('.html'));
const schemaBlocks = [];

htmlFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi);
  if (matches) {
    matches.forEach(m => {
      schemaBlocks.push({ file: f, block: m });
    });
  }
});

console.log('Total HTML files:', htmlFiles.length);
console.log('Total JSON-LD blocks:', schemaBlocks.length);

// Check if all JSON-LD blocks are parseable
let parseErrors = 0;
const uniqueTopTypes = new Set();

schemaBlocks.forEach(({ file, block }) => {
  const jsonStr = block.replace(/<script type="application\/ld\+json">/i, '').replace(/<\/script>/i, '').trim();
  try {
    const parsed = JSON.parse(jsonStr);
    uniqueTopTypes.add(parsed['@type']);
  } catch (e) {
    parseErrors++;
    console.error('Parse error in', file, e.message);
  }
});

console.log('JSON parse errors:', parseErrors);
console.log('Unique top-level @type in schema:', Array.from(uniqueTopTypes));

// Print an example of each type
uniqueTopTypes.forEach(t => {
  const found = schemaBlocks.find(b => b.block.includes(`"@type": "${t}"`));
  if (found) {
    console.log(`\n--- Example of ${t} (from ${found.file}) ---`);
    console.log(found.block);
  }
});
