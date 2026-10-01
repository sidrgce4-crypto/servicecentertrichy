const fs = require('fs');

const folders = ['washing-machine', 'ac', 'fridge', 'tv', 'microwave', 'servicecenter'];

const brandMap = {};

for (const folder of folders) {
  const files = fs.readdirSync(folder).filter(f => f.endsWith('.html'));
  brandMap[folder] = files.map(f => {
    let brand = f.replace(`-${folder}-repair-service-trichy.html`, '')
                 .replace(`-service-center-trichy.html`, '')
                 .replace(`${folder}-repair-service-trichy.html`, '')
                 .replace('service-center-trichy.html', '');
    return { file: f, brand: brand || 'Pillar' };
  });
}

console.log('Appliance folders and files summary:');
for (const f of folders) {
  console.log(`${f}: ${brandMap[f].length} files`);
}

// Let's print out the brands in washing-machine, ac, fridge, tv, microwave, servicecenter
fs.writeFileSync('scratch/brand_list.json', JSON.stringify(brandMap, null, 2));
console.log('Saved brand list to scratch/brand_list.json');
