const fs = require('fs');

function showIntro(f) {
  const c = fs.readFileSync(f, 'utf8');
  console.log('=== ' + f + ' ===');
  const heroP = c.match(/<section class="hero">[\s\S]*?<p>([\s\S]*?)<\/p>/);
  if (heroP) console.log('Hero p:', heroP[1].trim().slice(0, 150));
  const introMatch = c.match(/<h2>(.*?)<\/h2>[\s\S]*?<p>(.*?)<\/p>/);
  if (introMatch) {
    console.log('First h2:', introMatch[1].trim());
    console.log('First p after h2:', introMatch[2].trim().slice(0, 150));
  }
}

showIntro('ac/voltas-ac-repair-service-trichy.html');
showIntro('washing-machine/bosch-washing-machine-repair-service-trichy.html');
showIntro('fridge/whirlpool-fridge-repair-service-trichy.html');
showIntro('tv/sony-tv-repair-service-trichy.html');
