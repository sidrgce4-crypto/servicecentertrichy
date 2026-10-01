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
const EXPECTED_PHONE = '+919876543210';
const EXPECTED_WA = 'https://wa.me/919876543210';

let checks = {
  totalFiles: htmlFiles.length,
  hasFloatingCall: 0,
  hasFloatingWa: 0,
  hasBottomCall: 0,
  hasBottomWa: 0,
  correctPhone: 0,
  correctWa: 0,
  telHrefValid: 0,
  waHrefValid: 0,
  noDuplicates: 0,
  hasSvgIcons: 0
};

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');

  const floatCall = (content.match(/class=["'][^"']*floating-side-call[^"']*["']/g) || []).length;
  const floatWa = (content.match(/class=["'][^"']*floating-side-whatsapp[^"']*["']/g) || []).length;
  const bottomCall = (content.match(/class=["'][^"']*btn-bottom-call[^"']*["']/g) || []).length;
  const bottomWa = (content.match(/class=["'][^"']*btn-bottom-whatsapp[^"']*["']/g) || []).length;

  if (floatCall === 1) checks.hasFloatingCall++;
  if (floatWa === 1) checks.hasFloatingWa++;
  if (bottomCall === 1) checks.hasBottomCall++;
  if (bottomWa === 1) checks.hasBottomWa++;

  if (floatCall === 1 && floatWa === 1 && bottomCall === 1 && bottomWa === 1) {
    checks.noDuplicates++;
  }

  // Check phone and WhatsApp links
  if (content.includes(`href="tel:${EXPECTED_PHONE}"`)) {
    checks.correctPhone++;
    checks.telHrefValid++;
  }
  if (content.includes(`href="${EXPECTED_WA}"`)) {
    checks.correctWa++;
    checks.waHrefValid++;
  }

  // Check inline SVG icons in CTA buttons
  if (content.includes('viewBox="0 0 24 24"')) {
    checks.hasSvgIcons++;
  }
}

// Verify CSS
const css = fs.readFileSync('css/style.css', 'utf8');
const cssChecks = {
  floatingCallFixed: css.includes('.floating-side-call') && css.includes('position: fixed;'),
  floatingWaFixed: css.includes('.floating-side-whatsapp') && css.includes('position: fixed;'),
  floatingRight12px: css.includes('right: 12px;'),
  floatingLeft12px: css.includes('left: 12px;'),
  floatingTop50: css.includes('top: 50%;') && css.includes('transform: translateY(-50%);'),
  bottomBarFixed: css.includes('.bottom-action-bar') && css.includes('position: fixed;') && css.includes('bottom: 0;'),
  bottomBarFullWidth: css.includes('left: 0;') && css.includes('right: 0;'),
  pulseAnimation: css.includes('@keyframes pulse-green') && css.includes('@keyframes pulse-red'),
  safeBodyPadding: css.includes('padding-bottom: 74px !important;'),
  mobileRight8px: css.includes('right: 8px !important;'),
  mobileLeft8px: css.includes('left: 8px !important;'),
  overflowXHidden: css.includes('overflow-x: hidden;')
};

console.log('=== CTA SYSTEM VERIFICATION REPORT ===');
console.log(`Total HTML files: ${checks.totalFiles}`);
console.log(`Floating Call (exactly 1 per file): ${checks.hasFloatingCall} / ${checks.totalFiles}`);
console.log(`Floating WhatsApp (exactly 1 per file): ${checks.hasFloatingWa} / ${checks.totalFiles}`);
console.log(`Bottom Call (exactly 1 per file): ${checks.hasBottomCall} / ${checks.totalFiles}`);
console.log(`Bottom WhatsApp (exactly 1 per file): ${checks.hasBottomWa} / ${checks.totalFiles}`);
console.log(`Zero duplicate CTA buttons: ${checks.noDuplicates} / ${checks.totalFiles}`);
console.log(`Correct existing phone (${EXPECTED_PHONE}): ${checks.correctPhone} / ${checks.totalFiles}`);
console.log(`Correct existing WhatsApp (${EXPECTED_WA}): ${checks.correctWa} / ${checks.totalFiles}`);
console.log(`Clean inline SVG icons: ${checks.hasSvgIcons} / ${checks.totalFiles}`);
console.log('\n--- CSS Rules Validation ---');
console.log(JSON.stringify(cssChecks, null, 2));
