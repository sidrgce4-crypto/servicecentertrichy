const fs = require('fs');

const xml = fs.readFileSync('sitemap.redirect.xml', 'utf8');
const destinations = (xml.match(/href="([^"]+)"/g) || []).map(m => m.replace(/href="|"/g, ''));

console.log(`Total redirect destinations in sitemap.redirect.xml: ${destinations.length}`);

const invalidDestinations = destinations.filter(d => !d.startsWith('https://servicecentertrichy.com/'));
console.log(`Destinations NOT strictly starting with 'https://servicecentertrichy.com/': ${invalidDestinations.length}`);
if (invalidDestinations.length > 0) {
  console.log(invalidDestinations);
}

const wwwDestinations = destinations.filter(d => d.includes('www.'));
console.log(`Destinations containing 'www': ${wwwDestinations.length}`);

const httpDestinations = destinations.filter(d => d.startsWith('http://'));
console.log(`Destinations containing 'http://': ${httpDestinations.length}`);

console.log('Sample destination rules:');
destinations.slice(0, 5).forEach(d => console.log(' ->', d));
