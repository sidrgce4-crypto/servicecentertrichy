const fs = require('fs');

const folders = ['fridge', 'tv', 'microwave'];

for (const folder of folders) {
  const files = fs.readdirSync(folder).filter(f => f.endsWith('.html'));
  console.log(`\n=== Folder: ${folder} (${files.length} files) ===`);
  for (const f of files.slice(0, 5)) {
    const content = fs.readFileSync(`${folder}/${f}`, 'utf8');
    const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const heroDescMatch = content.match(/<p class="hero-desc">([\s\S]*?)<\/p>/i) || content.match(/<section class="hero">[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i);
    console.log(`File: ${f}`);
    console.log('H1:', h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : 'none');
    console.log('Hero:', heroDescMatch ? heroDescMatch[1].replace(/<[^>]+>/g, '').trim().slice(0, 110) : 'none');
  }
}
