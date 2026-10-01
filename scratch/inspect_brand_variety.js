const fs = require('fs');

function inspectPage(f) {
  const c = fs.readFileSync(f, 'utf8');
  console.log('=== FILE:', f, '===');
  const h1 = c.match(/<h1[^>]*>(.*?)<\/h1>/);
  console.log('H1:', h1 ? h1[1] : 'None');
  const h2s = (c.match(/<h2[^>]*>(.*?)<\/h2>/g) || []).map(h => h.replace(/<[^>]+>/g, '').trim());
  console.log('H2s:', h2s.slice(0, 8));
}

inspectPage('washing-machine/bpl-washing-machine-repair-service-trichy.html');
inspectPage('washing-machine/bosch-washing-machine-repair-service-trichy.html');
inspectPage('washing-machine/samsung-washing-machine-repair-service-trichy.html');
inspectPage('ac/daikin-ac-repair-service-trichy.html');
inspectPage('ac/voltas-ac-repair-service-trichy.html');
inspectPage('fridge/lg-fridge-repair-service-trichy.html');
inspectPage('tv/sony-tv-repair-service-trichy.html');
