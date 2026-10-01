const fs = require('fs');
const path = require('path');

function walk(dir) {
  let res = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const d of list) {
    if (d.name === 'scratch' || d.name === '.git') continue;
    const p = path.join(dir, d.name);
    if (d.isDirectory()) res = res.concat(walk(p));
    else res.push(p);
  }
  return res;
}

function transformContent(content) {
  let res = content;

  // 1. Domains
  res = res.replace(/https?:\/\/(www\.)?servicecentertrichy\.com\/?/g, 'https://servicecentertrichy.com/');
  res = res.replace(/www\.servicecentertrichy\.com/g, 'servicecentertrichy.com');
  res = res.replace(/servicecentertrichy\.com/g, 'servicecentertrichy.com');

  // 2. Renamed file links (URL slugs)
  res = res.replace(/-trichy\.html/g, '-trichy.html');

  // 3. Logo badge
  res = res.replace(/<span class="logo-badge">SCN<\/span>/g, '<span class="logo-badge">SCT</span>');

  // 4. Schema update
  res = res.replace(
    /"address":\s*\{\s*"@type":\s*"PostalAddress"[\s\S]*?"addressCountry":\s*"IN"\s*\}/g,
    `"address": {\n      "@type": "PostalAddress",\n      "addressLocality": "Trichy",\n      "addressRegion": "Tamil Nadu",\n      "addressCountry": "IN"\n    }`
  );

  res = res.replace(
    /"areaServed":\s*\[[\s\S]*?Kanyakumari District[\s\S]*?\]/g,
    `"areaServed": [\n      {\n        "@type": "City",\n        "name": "Trichy"\n      },\n      {\n        "@type": "AdministrativeArea",\n        "name": "Tiruchirappalli District"\n      }\n    ]`
  );

  // 5. Visible Address, Maps, Footer
  res = res.replace(
    /124,\s*Court Road,<\s*br\s*\/?>\s*Near District Court,<\s*br\s*\/?>\s*trichy,\s*Tamil Nadu\s*629001/gi,
    'Trichy, Tamil Nadu'
  );

  res = res.replace(
    /https:\/\/www\.google\.com\/maps\/search\/\?api=1&amp;query=124,\+Court\+Road,\+Near\+District\+Court,\+trichy,\+Tamil\+Nadu\+629001/g,
    'https://www.google.com/maps/search/?api=1&amp;query=Trichy,+Tamil+Nadu'
  );
  res = res.replace(
    /https:\/\/www\.google\.com\/maps\/search\/\?api=1&query=124,\+Court\+Road,\+Near\+District\+Court,\+trichy,\+Tamil\+Nadu\+629001/g,
    'https://www.google.com/maps/search/?api=1&query=Trichy,+Tamil+Nadu'
  );

  res = res.replace(
    /https:\/\/maps\.google\.com\/maps\?q=124,\+Court\+Road,\+Near\+District\+Court,\+trichy,\+Tamil\+Nadu\+629001&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed/g,
    'https://maps.google.com/maps?q=Trichy,+Tamil+Nadu&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed'
  );
  res = res.replace(
    /https:\/\/maps\.google\.com\/maps\?q=124,\+Court\+Road,\+Near\+District\+Court,\+trichy,\+Tamil\+Nadu\+629001&t=&z=15&ie=UTF8&iwloc=&output=embed/g,
    'https://maps.google.com/maps?q=Trichy,+Tamil+Nadu&t=&z=15&ie=UTF8&iwloc=&output=embed'
  );

  res = res.replace(
    /title="Service Center trichy Location Map"/g,
    'title="Service Center Trichy Location Map"'
  );

  res = res.replace(
    /<p><strong>Address:<\/strong>\s*124,\s*Court Road,\s*Near District Court,\s*trichy,\s*Tamil Nadu\s*629001<\/p>/gi,
    '<p><strong>Address:</strong> Trichy, Tamil Nadu</p>'
  );

  res = res.replace(
    /<div>124,\s*Court Road,\s*Near District Court,\s*trichy,\s*Tamil Nadu\s*629001<\/div>/gi,
    '<div>Trichy, Tamil Nadu</div>'
  );

  // 6. District and coastal climate replacements
  res = res.replace(/Kanyakumari District/g, 'Tiruchirappalli District');
  res = res.replace(/kanyakumari district/gi, 'Tiruchirappalli district');
  res = res.replace(/Kanyakumari localities/gi, 'Trichy localities');
  res = res.replace(/Kanyakumari areas/gi, 'Trichy areas');
  res = res.replace(/Kanyakumari Road areas/gi, 'Trichy areas');

  // Washing machine / TV / AC specific Kovalam Kanyakumari / Kanyakumari Road
  res = res.replace(/Kovalam Kanyakumari/g, 'Cantonment Area');
  res = res.replace(/Kanyakumari Road/g, 'Collectorate Road');
  res = res.replace(/Kanyakumari Highway/g, 'Tiruchirappalli Highway');
  res = res.replace(/Kanyakumari/g, 'Trichy');
  res = res.replace(/kanyakumari/g, 'trichy');

  // Coastal wording adjustments for inland Trichy
  res = res.replace(/hot coastal afternoons/gi, 'hot summer afternoons');
  res = res.replace(/hot coastal weather/gi, 'hot weather');
  res = res.replace(/coastal humidity/gi, 'ambient humidity');
  res = res.replace(/coastal climates/gi, 'hot climates');
  res = res.replace(/coastal weather/gi, 'humid weather');
  res = res.replace(/coastal storms/gi, 'seasonal storms');
  res = res.replace(/coastal belt/gi, 'surrounding areas');
  res = res.replace(/rainy and coastal humid months/gi, 'rainy and humid months');
  res = res.replace(/intense coastal thunder/gi, 'intense thunder');

  // 7. General city replacements
  res = res.replace(/Service Center trichy/g, 'Service Center Trichy');
  res = res.replace(/Service Centre trichy/g, 'Service Centre Trichy');
  res = res.replace(/service center trichy/g, 'service center Trichy');
  res = res.replace(/service centre trichy/g, 'service centre Trichy');

  res = res.replace(/North trichy/g, 'North Trichy');
  res = res.replace(/South trichy/g, 'South Trichy');
  res = res.replace(/East trichy/g, 'East Trichy');
  res = res.replace(/West trichy/g, 'West Trichy');

  res = res.replace(/trichy town/gi, 'Trichy town');
  res = res.replace(/trichy Town/g, 'Trichy Town');
  res = res.replace(/trichy city/gi, 'Trichy city');
  res = res.replace(/trichy City/g, 'Trichy City');

  res = res.replace(/trichy-la/g, 'Trichy-la');
  res = res.replace(/trichy's/g, "Trichy's");
  res = res.replace(/trichy's/g, "trichy's");

  // General trichy
  res = res.replace(/trichy/g, 'Trichy');
  res = res.replace(/trichy/g, 'trichy');
  res = res.replace(/trichy/g, 'TRICHY');

  return res;
}

console.log('--- STARTING TRICHY LOCALIZATION & BRAND THEME EXECUTION ---');

// Phase 1: Transform content of all HTML, XML, and TXT files
const files = walk('.');
let modifiedFilesCount = 0;

files.forEach(f => {
  if (!f.endsWith('.html') && !f.endsWith('.xml') && !f.endsWith('.txt')) return;
  const original = fs.readFileSync(f, 'utf8');
  const transformed = transformContent(original);
  if (original !== transformed) {
    fs.writeFileSync(f, transformed, 'utf8');
    modifiedFilesCount++;
  }
});

console.log(`Phase 1 complete: ${modifiedFilesCount} files content modified.`);

// Phase 2: Rename all files with -trichy.html to -trichy.html
let renamedCount = 0;
const currentFiles = walk('.');
currentFiles.forEach(f => {
  if (f.endsWith('-trichy.html')) {
    const newName = f.replace('-trichy.html', '-trichy.html');
    if (fs.existsSync(newName)) {
      console.warn(`Target file already exists! Overwriting or skipping: ${newName}`);
    }
    fs.renameSync(f, newName);
    renamedCount++;
  }
});

console.log(`Phase 2 complete: ${renamedCount} files renamed from -trichy.html to -trichy.html.`);
console.log('Execution finished successfully.');
