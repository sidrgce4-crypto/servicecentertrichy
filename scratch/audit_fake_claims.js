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
const fakeClaims = [
  '20+ Skilled Technicians',
  '20+ Technicians',
  '15+ Years',
  '10+ Years of Experience',
  'Authorized Service Center',
  'Authorised Service Center',
  'Official Service Center',
  'Award Winning'
];

const counts = {};
for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  for (const c of fakeClaims) {
    if (content.toLowerCase().includes(c.toLowerCase())) {
      counts[c] = (counts[c] || 0) + 1;
    }
  }
}
console.log('Fake / invented claim counts across files:');
console.log(counts);
