const fs = require('fs');

const sampleFiles = [
  'ac/acer-ac-repair-service-trichy.html',
  'fridge/blue-star-fridge-repair-service-trichy.html',
  'washing-machine/bosch-washing-machine-repair-service-trichy.html',
  'tv/bpl-tv-repair-service-trichy.html',
  'microwave/bajaj-microwave-repair-service-trichy.html',
  'servicecenter/bosch-service-center-trichy.html'
];

sampleFiles.forEach(f => {
  if (!fs.existsSync(f)) {
    console.log('File does not exist:', f);
    return;
  }
  const content = fs.readFileSync(f, 'utf8');
  console.log('=== FILE:', f, '===');
  console.log('Has gtag:', content.includes('G-'));
  console.log('Has schema:', content.includes('application/ld+json'));
  console.log('Has canonical:', content.includes('rel="canonical"'));
  console.log('Has favicon:', content.includes('favicon'));
  console.log('Has footer:', content.includes('<footer'));
  console.log('Has 9:00 AM:', content.includes('9:00 AM'));
  
  const footerIdx = content.indexOf('<footer class="site-footer">');
  const endFooterIdx = content.indexOf('</footer>');
  if (footerIdx !== -1) {
    console.log('Before footer (120 chars):', content.slice(footerIdx - 120, footerIdx).replace(/\n/g, ' '));
    console.log('After footer (120 chars):', content.slice(endFooterIdx, endFooterIdx + 120).replace(/\n/g, ' '));
  }
});
