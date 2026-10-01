const fs = require('fs');

const folders = ['ac', 'fridge', 'tv', 'microwave', 'servicecenter'];

for (const folder of folders) {
  const files = fs.readdirSync(folder).filter(f => f.endsWith('.html'));
  console.log(`\n=== Folder: ${folder} (${files.length} files) ===`);
  const openings = [];
  for (const f of files.slice(0, 5)) {
    const c = fs.readFileSync(`${folder}/${f}`, 'utf8');
    const heroMatch = c.match(/<section class="hero">[\s\S]*?<p>([\s\S]*?)<\/p>/i);
    const heroP = heroMatch ? heroMatch[1].replace(/<[^>]+>/g, '').trim().slice(0, 100) : 'none';
    const introMatch = c.match(/<!-- Brand-Specific Introduction -->[\s\S]*?<p>([\s\S]*?)<\/p>/i) ||
                       c.match(/<!-- Detailed Overview -->[\s\S]*?<p>([\s\S]*?)<\/p>/i) ||
                       c.match(/<section class="section">[\s\S]*?<p>([\s\S]*?)<\/p>/i);
    const introP = introMatch ? introMatch[1].replace(/<[^>]+>/g, '').trim().slice(0, 100) : 'none';
    console.log(`- ${f}:\n  Hero: ${heroP}...\n  Intro: ${introP}...`);
  }
}
