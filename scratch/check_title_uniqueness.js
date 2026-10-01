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
const titles = {};
const duplicates = [];

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const t = (c.match(/<title>([\s\S]*?)<\/title>/i) || [])[1].trim();
  const primary = t.split('|')[0].trim();
  const newTitle = `${primary} | Call 8882055269`;
  if (titles[newTitle]) {
    duplicates.push({ title: newTitle, file1: titles[newTitle], file2: f });
  } else {
    titles[newTitle] = f;
  }
});

console.log('Total files:', files.length);
console.log('Unique new titles:', Object.keys(titles).length);
console.log('Duplicate titles count:', duplicates.length);
if (duplicates.length > 0) console.log('Duplicates:', duplicates);
