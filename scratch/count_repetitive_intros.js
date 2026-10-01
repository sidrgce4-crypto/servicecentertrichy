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
let pattern1Count = 0;
let pattern2Count = 0;
let pattern3Count = 0;

for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('you do not have to struggle with laundry or transport heavy equipment to a workshop')) {
    pattern1Count++;
  }
  if (content.includes('Whether it is a front-load drum failing to spin, a top-load washer trapped on an unbalanced load error')) {
    pattern2Count++;
  }
  if (content.includes('Whether you have an older, legacy')) {
    pattern3Count++;
  }
}

console.log(`Files with "struggle with laundry...": ${pattern1Count}`);
console.log(`Files with "Whether it is a front-load drum failing to spin...": ${pattern2Count}`);
console.log(`Files with "Whether you have an older, legacy...": ${pattern3Count}`);
