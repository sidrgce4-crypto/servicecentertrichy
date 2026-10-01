const fs = require('fs');
const path = require('path');

function walk(dir) {
  let res = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const d of list) {
    if (d.name === 'scratch' || d.name === '.git' || d.name === 'node_modules') continue;
    const p = path.join(dir, d.name);
    if (d.isDirectory()) res = res.concat(walk(p));
    else if (p.endsWith('.html')) res.push(p);
  }
  return res;
}

const files = walk('.');

function getLocalityBounds(content) {
  // Candidate phrases that appear in the heading or intro of the locality section
  const markers = [
    '<!-- Trichy Locality System',
    '<!-- 4 Directions Localities Section',
    '<!-- Trichy Localities Grid Section',
    '<!-- Local Coverage',
    '<!-- Localities Grid Section',
    'Service Areas Across Trichy',
    'Service Areas in Trichy',
    'North Trichy AC Service Localities',
    'North Trichy Service Localities',
    'North Trichy'
  ];

  let targetIdx = -1;
  let usedMarker = '';
  for (const m of markers) {
    const idx = content.indexOf(m);
    if (idx !== -1) {
      targetIdx = idx;
      usedMarker = m;
      break;
    }
  }

  if (targetIdx === -1) return null;

  // If the marker was a comment, check if there's a comment before the section tag
  let startIdx = content.lastIndexOf('<section', targetIdx);
  if (startIdx === -1) return null;

  // If there is an HTML comment immediately before <section, include it
  const beforeSection = content.slice(Math.max(0, startIdx - 100), startIdx);
  const commentMatch = beforeSection.match(/(<!--[\s\S]*?-->\s*)$/);
  if (commentMatch) {
    startIdx = startIdx - commentMatch[1].length;
  }

  // To find the end of the section, locate the closing </section>
  // Locality section contains "South Trichy" or "South" cards, so find </section> after the last South occurrence or after targetIdx
  // But wait! Let's be careful not to overshoot into the next section!
  // In HTML, <section ...> ... </section>. There are NO nested <section> tags inside locality sections.
  // So the first </section> after the locality content begins is the close of the section!
  // Wait, let's verify if there are any nested <section> tags:
  const sectionOpenTagEnd = content.indexOf('>', startIdx);
  const nextSectionEnd = content.indexOf('</section>', sectionOpenTagEnd);
  
  if (nextSectionEnd === -1) return null;

  return {
    startIdx,
    endIdx: nextSectionEnd + '</section>'.length,
    usedMarker
  };
}

let success = 0;
let failed = [];

files.forEach(f => {
  if (f === 'index.html' || f === 'sitemap.html' || f.includes('service-center-trichy.html')) return;
  const content = fs.readFileSync(f, 'utf8');
  const bounds = getLocalityBounds(content);
  if (bounds) {
    const extracted = content.slice(bounds.startIdx, bounds.endIdx);
    // Verify extracted has <section and ends with </section>
    if (extracted.includes('<section') && extracted.endsWith('</section>')) {
      success++;
    } else {
      failed.push({ f, reason: 'Invalid tags' });
    }
  } else {
    failed.push({ f, reason: 'Bounds null' });
  }
});

console.log('Successfully bounded locality section in:', success, 'out of 200');
if (failed.length > 0) {
  console.log('Failed files:', failed);
}
