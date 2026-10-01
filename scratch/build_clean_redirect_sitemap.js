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

const CANONICAL_ORIGIN = 'https://servicecentertrichy.com';
const today = new Date().toISOString().split('T')[0];

const redirectRules = [
  // Domain level redirects to non-www canonical
  { from: 'http://servicecentertrichy.com/', to: `${CANONICAL_ORIGIN}/` },
  { from: 'http://www.servicecentertrichy.com/', to: `${CANONICAL_ORIGIN}/` },
  { from: 'https://www.servicecentertrichy.com/', to: `${CANONICAL_ORIGIN}/` },
  { from: `${CANONICAL_ORIGIN}/index.html`, to: `${CANONICAL_ORIGIN}/` },
  { from: 'https://www.servicecentertrichy.com/index.html', to: `${CANONICAL_ORIGIN}/` },

  // Category folders to pillar pages
  { from: 'https://www.servicecentertrichy.com/ac/', to: `${CANONICAL_ORIGIN}/ac/ac-repair-service-trichy.html` },
  { from: 'https://www.servicecentertrichy.com/ac', to: `${CANONICAL_ORIGIN}/ac/ac-repair-service-trichy.html` },
  { from: `${CANONICAL_ORIGIN}/ac/`, to: `${CANONICAL_ORIGIN}/ac/ac-repair-service-trichy.html` },
  { from: `${CANONICAL_ORIGIN}/ac`, to: `${CANONICAL_ORIGIN}/ac/ac-repair-service-trichy.html` },

  { from: 'https://www.servicecentertrichy.com/fridge/', to: `${CANONICAL_ORIGIN}/fridge/fridge-repair-service-trichy.html` },
  { from: 'https://www.servicecentertrichy.com/fridge', to: `${CANONICAL_ORIGIN}/fridge/fridge-repair-service-trichy.html` },
  { from: `${CANONICAL_ORIGIN}/fridge/`, to: `${CANONICAL_ORIGIN}/fridge/fridge-repair-service-trichy.html` },
  { from: `${CANONICAL_ORIGIN}/fridge`, to: `${CANONICAL_ORIGIN}/fridge/fridge-repair-service-trichy.html` },

  { from: 'https://www.servicecentertrichy.com/washing-machine/', to: `${CANONICAL_ORIGIN}/washing-machine/washing-machine-repair-service-trichy.html` },
  { from: 'https://www.servicecentertrichy.com/washing-machine', to: `${CANONICAL_ORIGIN}/washing-machine/washing-machine-repair-service-trichy.html` },
  { from: `${CANONICAL_ORIGIN}/washing-machine/`, to: `${CANONICAL_ORIGIN}/washing-machine/washing-machine-repair-service-trichy.html` },
  { from: `${CANONICAL_ORIGIN}/washing-machine`, to: `${CANONICAL_ORIGIN}/washing-machine/washing-machine-repair-service-trichy.html` },

  { from: 'https://www.servicecentertrichy.com/tv/', to: `${CANONICAL_ORIGIN}/tv/tv-repair-service-trichy.html` },
  { from: 'https://www.servicecentertrichy.com/tv', to: `${CANONICAL_ORIGIN}/tv/tv-repair-service-trichy.html` },
  { from: `${CANONICAL_ORIGIN}/tv/`, to: `${CANONICAL_ORIGIN}/tv/tv-repair-service-trichy.html` },
  { from: `${CANONICAL_ORIGIN}/tv`, to: `${CANONICAL_ORIGIN}/tv/tv-repair-service-trichy.html` },

  { from: 'https://www.servicecentertrichy.com/microwave/', to: `${CANONICAL_ORIGIN}/microwave/microwave-repair-service-trichy.html` },
  { from: 'https://www.servicecentertrichy.com/microwave', to: `${CANONICAL_ORIGIN}/microwave/microwave-repair-service-trichy.html` },
  { from: `${CANONICAL_ORIGIN}/microwave/`, to: `${CANONICAL_ORIGIN}/microwave/microwave-repair-service-trichy.html` },
  { from: `${CANONICAL_ORIGIN}/microwave`, to: `${CANONICAL_ORIGIN}/microwave/microwave-repair-service-trichy.html` },

  { from: 'https://www.servicecentertrichy.com/servicecenter/', to: `${CANONICAL_ORIGIN}/servicecenter/service-center-trichy.html` },
  { from: 'https://www.servicecentertrichy.com/servicecenter', to: `${CANONICAL_ORIGIN}/servicecenter/service-center-trichy.html` },
  { from: `${CANONICAL_ORIGIN}/servicecenter/`, to: `${CANONICAL_ORIGIN}/servicecenter/service-center-trichy.html` },
  { from: `${CANONICAL_ORIGIN}/servicecenter`, to: `${CANONICAL_ORIGIN}/servicecenter/service-center-trichy.html` }
];

// Add www -> non-www mapping for all HTML files
for (const file of htmlFiles) {
  if (file === 'index.html') continue;
  const relPath = file.replace(/\\/g, '/');
  redirectRules.push({
    from: `https://www.servicecentertrichy.com/${relPath}`,
    to: `${CANONICAL_ORIGIN}/${relPath}`
  });
}

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <!-- Valid Trichy 301 Redirection Mapping: All Destinations Are Strictly Non-WWW (${CANONICAL_ORIGIN}) -->
`;

redirectRules.forEach(r => {
  xml += `  <url>
    <loc>${r.from}</loc>
    <xhtml:link rel="canonical" href="${r.to}" />
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>\n`;
});

xml += `</urlset>\n`;

fs.writeFileSync('sitemap.redirect.xml', xml, 'utf8');
console.log(`Created sitemap.redirect.xml with ${redirectRules.length} redirect rules. All destinations strictly point to ${CANONICAL_ORIGIN}/`);
