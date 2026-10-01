const fs = require('fs');
const code = fs.readFileSync('scratch/test_full_validation.js', 'utf8');
const fnCode = code.match(/function transformContent[\s\S]*?\n\}/)[0];
eval(fnCode);

const samples = [
  'index.html',
  'sitemap.html',
  'ac/ac-repair-service-trichy.html',
  'ac/carrier-ac-repair-service-trichy.html',
  'fridge/fridge-repair-service-trichy.html',
  'washing-machine/washing-machine-repair-service-trichy.html',
  'tv/sony-tv-repair-service-trichy.html',
  'microwave/microwave-repair-service-trichy.html',
  'servicecenter/sony-service-center-trichy.html',
  'servicecenter/service-center-trichy.html'
];

samples.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const transformed = transformContent(content, f);
  const t = transformed.match(/<title>([^<]+)<\/title>/i);
  const d = transformed.match(/<meta name="description"\s+content="([^"]+)"/i);
  const c = transformed.match(/<link rel="canonical"\s+href="([^"]+)"/i);
  console.log('File:', f);
  console.log(' Title:', t ? t[1] : 'NONE');
  console.log(' Desc :', d ? d[1] : 'NONE');
  console.log(' Canon:', c ? c[1] : 'NONE');
  console.log('');
});
