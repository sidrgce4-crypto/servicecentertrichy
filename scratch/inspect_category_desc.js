const fs = require('fs');

const folders = ['ac', 'fridge', 'washing-machine', 'tv', 'microwave', 'servicecenter'];

folders.forEach(folder => {
  const files = fs.readdirSync(folder).filter(f => f.endsWith('.html')).slice(0, 4);
  console.log(`=== ${folder} ===`);
  files.forEach(f => {
    const c = fs.readFileSync(`${folder}/${f}`, 'utf8');
    const d = (c.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i) || [])[1] || '';
    console.log(`  ${f}:`);
    console.log(`    "${d}" (${d.length} chars)`);
  });
});
