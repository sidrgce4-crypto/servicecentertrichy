const fs = require('fs');

const redirects = [
  // HTTP to HTTPS and WWW to Non-WWW main mappings
  { from: 'http://servicecentertrichy.com/', to: 'https://servicecentertrichy.com/' },
  { from: 'http://www.servicecentertrichy.com/', to: 'https://servicecentertrichy.com/' },
  { from: 'https://www.servicecentertrichy.com/', to: 'https://servicecentertrichy.com/' },
  { from: 'https://servicecentertrichy.com/index.html', to: 'https://servicecentertrichy.com/' },

  // Appliance Folder roots to corresponding Pillar pages
  { from: 'https://servicecentertrichy.com/ac/', to: 'https://servicecentertrichy.com/ac/ac-repair-service-trichy.html' },
  { from: 'https://servicecentertrichy.com/ac', to: 'https://servicecentertrichy.com/ac/ac-repair-service-trichy.html' },
  
  { from: 'https://servicecentertrichy.com/fridge/', to: 'https://servicecentertrichy.com/fridge/fridge-repair-service-trichy.html' },
  { from: 'https://servicecentertrichy.com/fridge', to: 'https://servicecentertrichy.com/fridge/fridge-repair-service-trichy.html' },
  
  { from: 'https://servicecentertrichy.com/washing-machine/', to: 'https://servicecentertrichy.com/washing-machine/washing-machine-repair-service-trichy.html' },
  { from: 'https://servicecentertrichy.com/washing-machine', to: 'https://servicecentertrichy.com/washing-machine/washing-machine-repair-service-trichy.html' },
  
  { from: 'https://servicecentertrichy.com/tv/', to: 'https://servicecentertrichy.com/tv/tv-repair-service-trichy.html' },
  { from: 'https://servicecentertrichy.com/tv', to: 'https://servicecentertrichy.com/tv/tv-repair-service-trichy.html' },
  
  { from: 'https://servicecentertrichy.com/microwave/', to: 'https://servicecentertrichy.com/microwave/microwave-repair-service-trichy.html' },
  { from: 'https://servicecentertrichy.com/microwave', to: 'https://servicecentertrichy.com/microwave/microwave-repair-service-trichy.html' },
  
  { from: 'https://servicecentertrichy.com/servicecenter/', to: 'https://servicecentertrichy.com/servicecenter/service-center-trichy.html' },
  { from: 'https://servicecentertrichy.com/servicecenter', to: 'https://servicecentertrichy.com/servicecenter/service-center-trichy.html' }
];

const today = new Date().toISOString().split('T')[0];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <!-- Valid Trichy URL Redirection and Canonical Mapping -->
`;

redirects.forEach(r => {
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
console.log('Successfully created sitemap.redirect.xml with', redirects.length, 'valid Trichy redirect mappings.');
