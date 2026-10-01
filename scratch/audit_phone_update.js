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

let totalFilesScanned = files.length;
let totalTitlesFound = 0;
let totalDescriptionsFound = 0;
let missingPhoneInTitle = [];
let missingPhoneAtBeginningOfDesc = [];
let duplicateTitles = [];
let duplicateDescriptions = [];
let multipleTitlesInFile = [];
let multipleDescriptionsInFile = [];
let errorsFound = [];

const titleMap = {};
const descMap = {};

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');

  // Check titles in file
  const titleMatches = content.match(/<title>([\s\S]*?)<\/title>/gi) || [];
  if (titleMatches.length === 0) {
    errorsFound.push(`No <title> in ${f}`);
  } else if (titleMatches.length > 1) {
    multipleTitlesInFile.push({ file: f, count: titleMatches.length });
  } else {
    totalTitlesFound++;
    const t = content.match(/<title>([\s\S]*?)<\/title>/i)[1].trim();
    if (!t.includes('8882055269')) {
      missingPhoneInTitle.push(f);
    }
    if (titleMap[t]) {
      duplicateTitles.push({ title: t, file1: titleMap[t], file2: f });
    } else {
      titleMap[t] = f;
    }
  }

  // Check descriptions in file
  const descMatches = content.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']\s*\/?>/gi) || [];
  if (descMatches.length === 0) {
    errorsFound.push(`No meta description in ${f}`);
  } else if (descMatches.length > 1) {
    multipleDescriptionsInFile.push({ file: f, count: descMatches.length });
  } else {
    totalDescriptionsFound++;
    const d = content.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i)[1].trim();
    if (!d.startsWith('Call 8882055269.')) {
      missingPhoneAtBeginningOfDesc.push(f);
    }
    if (descMap[d]) {
      duplicateDescriptions.push({ desc: d, file1: descMap[d], file2: f });
    } else {
      descMap[d] = f;
    }
  }
});

console.log('==================================================');
console.log('FINAL META TITLE + DESCRIPTION AUDIT REPORT');
console.log('==================================================');
console.log('Total HTML files scanned:', totalFilesScanned);
console.log('Total title tags updated:', totalTitlesFound);
console.log('Total meta descriptions updated:', totalDescriptionsFound);
console.log('Pages missing phone number in title:', missingPhoneInTitle.length);
if (missingPhoneInTitle.length > 0) console.log('  Samples:', missingPhoneInTitle);
console.log('Pages missing phone number at beginning of description:', missingPhoneAtBeginningOfDesc.length);
if (missingPhoneAtBeginningOfDesc.length > 0) console.log('  Samples:', missingPhoneAtBeginningOfDesc);
console.log('Duplicate title tags:', duplicateTitles.length);
if (duplicateTitles.length > 0) console.log('  Duplicates:', duplicateTitles);
console.log('Duplicate meta descriptions:', duplicateDescriptions.length);
if (duplicateDescriptions.length > 0) console.log('  Duplicates:', duplicateDescriptions);
console.log('Multiple title tags in single file:', multipleTitlesInFile.length);
console.log('Multiple descriptions in single file:', multipleDescriptionsInFile.length);
console.log('Errors found:', errorsFound.length);
if (errorsFound.length > 0) console.log('  Errors:', errorsFound);
console.log('==================================================');
