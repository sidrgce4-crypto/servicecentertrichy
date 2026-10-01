const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');
const telMatches = content.match(/href=["']tel:([^"']+)["']/g) || [];
console.log('Tel matches in index.html:', Array.from(new Set(telMatches)));

const waMatches = content.match(/href=["'](https:\/\/wa\.me\/[^"']+)["']/g) || [];
console.log('WA matches in index.html:', Array.from(new Set(waMatches)));

const kelvinatorContent = fs.readFileSync('washing-machine/kelvinator-washing-machine-repair-service-trichy.html', 'utf8');
const telK = kelvinatorContent.match(/href=["']tel:([^"']+)["']/g) || [];
console.log('Tel matches in Kelvinator page:', Array.from(new Set(telK)));
const waK = kelvinatorContent.match(/href=["'](https:\/\/wa\.me\/[^"']+)["']/g) || [];
console.log('WA matches in Kelvinator page:', Array.from(new Set(waK)));
