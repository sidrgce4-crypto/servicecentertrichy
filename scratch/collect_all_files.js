const fs = require('fs');

const folders = ['ac', 'washing-machine', 'fridge', 'tv', 'microwave', 'servicecenter'];

const summary = {};
for (const folder of folders) {
  const files = fs.readdirSync(folder).filter(f => f.endsWith('.html'));
  summary[folder] = files;
}

console.log('Categories summary:');
for (const [k, v] of Object.entries(summary)) {
  console.log(`${k}: ${v.length} files`);
}
fs.writeFileSync('scratch/all_category_files.json', JSON.stringify(summary, null, 2));
