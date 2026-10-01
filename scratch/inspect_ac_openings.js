const fs = require('fs');

const files = fs.readdirSync('ac').filter(f => f.endsWith('.html'));
console.log(`Checking ${files.length} AC files:`);

for (const f of files.slice(0, 10)) {
  const content = fs.readFileSync(`ac/${f}`, 'utf8');
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const heroDescMatch = content.match(/<p class="hero-desc">([\s\S]*?)<\/p>/i) || content.match(/<section class="hero">[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i);
  console.log(`\nFile: ${f}`);
  console.log('H1:', h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : 'none');
  console.log('Hero:', heroDescMatch ? heroDescMatch[1].replace(/<[^>]+>/g, '').trim().slice(0, 130) : 'none');
}
