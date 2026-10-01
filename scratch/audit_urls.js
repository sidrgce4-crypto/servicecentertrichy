const fs = require('fs');
const path = require('path');

function scanAllFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    if (file === 'node_modules' || file === '.git' || file === 'scratch') continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(scanAllFiles(fullPath));
    } else {
      results.push(fullPath);
    }
  }
  return results;
}

const files = scanAllFiles('.');
console.log(`Scanning ${files.length} production files...`);

const results = {
  wwwTrichy: [],
  httpTrichy: [],
  nagercoil: [],
  localhost: [],
  ip127: []
};

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  
  if (content.includes('www.servicecentertrichy.com')) {
    results.wwwTrichy.push(file);
  }
  if (content.includes('http://servicecentertrichy.com')) {
    results.httpTrichy.push(file);
  }
  if (content.toLowerCase().includes('servicecenternagercoil.com')) {
    results.nagercoil.push(file);
  }
  if (content.includes('localhost')) {
    results.localhost.push(file);
  }
  if (content.includes('127.0.0.1')) {
    results.ip127.push(file);
  }
}

console.log('--- URL Scan Summary ---');
console.log(`Files with "www.servicecentertrichy.com": ${results.wwwTrichy.length}`);
if (results.wwwTrichy.length > 0) {
  console.log('Sample files:', results.wwwTrichy.slice(0, 10));
}
console.log(`Files with "http://servicecentertrichy.com": ${results.httpTrichy.length}`);
if (results.httpTrichy.length > 0) {
  console.log('Files:', results.httpTrichy);
}
console.log(`Files with "servicecenternagercoil.com": ${results.nagercoil.length}`);
console.log(`Files with "localhost": ${results.localhost.length}`);
console.log(`Files with "127.0.0.1": ${results.ip127.length}`);
