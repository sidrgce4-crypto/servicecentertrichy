const fs = require('fs');
const path = require('path');
const scFiles = fs.readdirSync('servicecenter').filter(f => f.endsWith('.html') && f !== 'service-center-trichy.html');

const sample = ['bosch-service-center-trichy.html', 'samsung-service-center-trichy.html', 'voltas-service-center-trichy.html', 'sony-service-center-trichy.html', 'whirlpool-service-center-trichy.html', 'daikin-service-center-trichy.html'];

sample.forEach(f => {
  const c = fs.readFileSync(path.join('servicecenter', f), 'utf8');
  const sections = [];
  const matches = c.match(/<section[^>]*id="([^"]+)"/g) || [];
  matches.forEach(m => {
    const id = m.match(/id="([^"]+)"/)[1];
    sections.push(id);
  });
  console.log(f, ':', sections);
});
