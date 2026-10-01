const fs = require('fs');
const path = require('path');

function scanHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    if (file === 'node_modules' || file === '.git' || file === 'scratch') continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(scanHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

const htmlFiles = scanHtmlFiles('.');
let updatedCount = 0;

for (const file of htmlFiles) {
  let html = fs.readFileSync(file, 'utf8');
  const isRoot = !file.includes(path.sep);
  const prefix = isRoot ? '' : '../';

  // Desired favicon links
  const icoLink = `<link rel="icon" href="${prefix}favicon.ico" sizes="any">`;
  const svgLink = `<link rel="icon" type="image/svg+xml" href="${prefix}favicon.svg">`;
  const pngLink = `<link rel="icon" type="image/png" href="${prefix}favicon.png">`;
  const appleLink = `<link rel="apple-touch-icon" href="${prefix}apple-touch-icon.png">`;

  // Check if favicon.ico is present
  if (!html.includes('favicon.ico')) {
    // Insert icoLink right before svgLink or before </head>
    if (html.includes(svgLink)) {
      html = html.replace(svgLink, `${icoLink}\n  ${svgLink}`);
      fs.writeFileSync(file, html, 'utf8');
      updatedCount++;
    } else if (html.includes('</head>')) {
      html = html.replace('</head>', `  ${icoLink}\n  ${svgLink}\n  ${pngLink}\n  ${appleLink}\n</head>`);
      fs.writeFileSync(file, html, 'utf8');
      updatedCount++;
    }
  }
}

console.log(`Checked ${htmlFiles.length} files. Injected/verified favicon.ico in ${updatedCount} files.`);
