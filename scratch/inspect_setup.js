const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const dirent of list) {
    if (dirent.name === 'scratch' || dirent.name === '.git') continue;
    const fullPath = path.join(dir, dirent.name);
    if (dirent.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else {
      results.push(fullPath);
    }
  }
  return results;
}

const files = walk('.');
const domainPatterns = new Set();
let trichyCount = 0;
let fileCount = files.length;

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(/https?:\/\/[^\s"'<>]+/g);
  if (matches) {
    matches.forEach(m => {
      if (m.includes('servicecentertrichy.com') || m.includes('servicecentertrichy.com')) {
        domainPatterns.add(m);
      }
    });
  }
  const nMatches = content.match(/trichy/gi);
  if (nMatches) {
    trichyCount += nMatches.length;
  }
});

console.log('Total non-scratch files:', fileCount);
console.log('Total trichy mentions:', trichyCount);
console.log('Sample domain patterns:', Array.from(domainPatterns).slice(0, 20));
