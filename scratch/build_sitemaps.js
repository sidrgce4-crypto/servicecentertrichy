const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://www.servicecentertrichy.com';

const categories = [
  { key: 'home', name: 'Home', folder: '', files: ['index.html', 'sitemap.html'] },
  { key: 'ac', name: 'AC Repair', folder: 'ac' },
  { key: 'fridge', name: 'Fridge Repair', folder: 'fridge' },
  { key: 'washing-machine', name: 'Washing Machine Repair', folder: 'washing-machine' },
  { key: 'tv', name: 'TV Repair', folder: 'tv' },
  { key: 'microwave', name: 'Microwave Repair', folder: 'microwave' },
  { key: 'servicecenter', name: 'Service Center', folder: 'servicecenter' }
];

function formatTitle(filename, folder) {
  if (filename === 'index.html') return 'Home - Service Center trichy';
  if (filename === 'sitemap.html') return 'Website HTML Sitemap';
  
  let base = filename.replace('.html', '');
  let words = base.split('-').map(w => {
    const upper = ['ac', 'tv', 'bpl', 'ifb', 'iffalcon', 'mi', 'tcl', 'vu', 'vw', 'pcb', 'led', 'lcd'];
    if (upper.includes(w.toLowerCase())) return w.toUpperCase();
    if (w.toLowerCase() === 'voltas') return 'Voltas';
    if (w.toLowerCase() === 'beko') return 'Beko';
    return w.charAt(0).toUpperCase() + w.slice(1);
  });
  return words.join(' ');
}

// Collect all URLs
let allPages = [];
categories.forEach(cat => {
  if (cat.folder === '') {
    cat.pages = cat.files.map(f => ({
      relPath: f,
      url: f === 'index.html' ? `${DOMAIN}/` : `${DOMAIN}/${f}`,
      title: formatTitle(f, '')
    }));
  } else {
    const list = fs.readdirSync(cat.folder).filter(f => f.endsWith('.html')).sort();
    // Put pillar page first if exists
    const pillarName = cat.folder === 'servicecenter' ? 'service-center-trichy.html' : `${cat.folder}-repair-service-trichy.html`;
    const sorted = [];
    if (list.includes(pillarName)) {
      sorted.push(pillarName);
    }
    list.forEach(f => {
      if (f !== pillarName) sorted.push(f);
    });

    cat.pages = sorted.map(f => ({
      relPath: `${cat.folder}/${f}`,
      url: `${DOMAIN}/${cat.folder}/${f}`,
      title: formatTitle(f, cat.folder)
    }));
  }
  allPages = allPages.concat(cat.pages);
});

console.log('Total URLs collected for sitemap:', allPages.length);

// Generate sitemap.xml
const today = new Date().toISOString().split('T')[0];
let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

allPages.forEach(p => {
  const isHome = p.relPath === 'index.html';
  const isPillar = p.relPath.includes('repair-service-trichy.html') || p.relPath === 'servicecenter/service-center-trichy.html';
  const priority = isHome ? '1.0' : (isPillar ? '0.8' : '0.6');
  const changefreq = isHome ? 'weekly' : 'monthly';

  xml += `  <url>\n`;
  xml += `    <loc>${p.url}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>${changefreq}</changefreq>\n`;
  xml += `    <priority>${priority}</priority>\n`;
  xml += `  </url>\n`;
});
xml += `</urlset>\n`;

fs.writeFileSync('sitemap.xml', xml, 'utf8');
console.log('Successfully written sitemap.xml');

// Generate sitemap.html
// Brand list for footer
const brandFiles = fs.readdirSync('servicecenter').filter(f => f.endsWith('.html') && f !== 'service-center-trichy.html').sort();
const footerBrandLinks = brandFiles.map(f => {
  let slug = f.replace('-service-center-trichy.html', '');
  let name = slug.split('-').map(w => {
    if (['bpl', 'ifb', 'iffalcon', 'mi', 'tcl', 'vu', 'vw'].includes(w)) return w.toUpperCase();
    return w.charAt(0).toUpperCase() + w.slice(1);
  }).join(' ');
  return `          <a href="servicecenter/${f}">${name} Service Center</a>`;
}).join('\n');

let htmlCategories = '';
categories.forEach(cat => {
  htmlCategories += `
      <div class="sitemap-category-box" style="background: #ffffff; padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--surface-border); margin-bottom: 24px;">
        <h2 style="font-size: 1.35rem; color: var(--secondary); margin-bottom: 14px; border-bottom: 2px solid var(--primary-light); padding-bottom: 8px;">
          ${cat.name} (${cat.pages.length} Pages)
        </h2>
        <ul style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 10px; list-style: none; padding-left: 0; font-size: 0.9rem;">
          ${cat.pages.map(p => `<li><a href="${p.relPath}" style="color: var(--primary); text-decoration: none; display: inline-block; padding: 4px 0;">📄 ${p.title}</a></li>`).join('\n          ')}
        </ul>
      </div>`;
});

const sitemapHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-L0Q91G8NQE"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-L0Q91G8NQE');
  </script>

  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sitemap | Service Center trichy HTML Page Directory</title>
  <meta name="description" content="Complete HTML sitemap directory for Service Center trichy. Easily access all home appliance repair pages, AC, fridge, washing machine, TV, and brand service centers.">
  <link rel="canonical" href="https://www.servicecentertrichy.com/sitemap.html">
  
  <meta property="og:title" content="Sitemap | Service Center trichy HTML Page Directory">
  <meta property="og:description" content="Complete HTML sitemap directory for Service Center trichy. Easily access all home appliance repair pages, AC, fridge, washing machine, TV, and brand service centers.">
  <meta property="og:url" content="https://www.servicecentertrichy.com/sitemap.html">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="en_IN">

  <link rel="icon" type="image/svg+xml" href="favicon.svg">
  <link rel="icon" type="image/png" href="favicon.png">
  <link rel="apple-touch-icon" href="apple-touch-icon.png">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Service Center trichy",
    "url": "https://www.servicecentertrichy.com/",
    "telephone": "+919876543210",
    "priceRange": "₹₹",
    "image": "https://www.servicecentertrichy.com/favicon.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "124, Court Road, Near District Court",
      "addressLocality": "trichy",
      "addressRegion": "Tamil Nadu",
      "postalCode": "629001",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "06:00",
        "closes": "23:00"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "trichy" },
      { "@type": "AdministrativeArea", "name": "Kanyakumari District" }
    ]
  }
  </script>
</head>
<body>

  <!-- Top Bar -->
  <div class="top-bar">
    <div class="container">
      <div class="top-info">
        <span>📍 Serving All Areas in trichy &amp; Nearby Localities</span>
        <span>⏱️ Working Hours: 6:00 AM – 11:00 PM</span>
      </div>
      <div class="top-contact">
        <span>📞 Helpline: <a href="tel:+919876543210" style="color: #93c5fd; font-weight: 600;">+91 98765 43210</a></span>
      </div>
    </div>
  </div>

  <!-- Header -->
  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="index.html" class="logo">
          <span class="logo-badge">SCN</span>
          <span>Service Center trichy</span>
        </a>

        <button class="menu-toggle" aria-label="Toggle Navigation" aria-expanded="false">☰</button>

        <nav class="main-nav">
          <a href="index.html" class="nav-link">Home</a>
          <a href="ac/ac-repair-service-trichy.html" class="nav-link">AC Repair</a>
          <a href="fridge/fridge-repair-service-trichy.html" class="nav-link">Fridge Repair</a>
          <a href="washing-machine/washing-machine-repair-service-trichy.html" class="nav-link">Washing Machine</a>
          <a href="tv/tv-repair-service-trichy.html" class="nav-link">TV Repair</a>
          <a href="microwave/microwave-repair-service-trichy.html" class="nav-link">Microwave</a>
          <a href="servicecenter/service-center-trichy.html" class="nav-link">Service Center</a>
        </nav>

        <div class="header-cta">
          <a href="tel:+919876543210" class="btn btn-primary btn-sm">Book Repair</a>
        </div>
      </div>
    </div>
  </header>

  <!-- Breadcrumb -->
  <nav class="breadcrumb-section" aria-label="Breadcrumb">
    <div class="container">
      <ul class="breadcrumb-list">
        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Sitemap</li>
      </ul>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <span class="hero-pill">Website Directory</span>
      <h1>Service Center trichy Sitemap</h1>
      <p>Browse all website pages organized by home appliance category and multi-brand service centers for quick doorstep booking in trichy.</p>
    </div>
  </section>

  <!-- Sitemap Categories Section -->
  <section class="section" style="padding-top: 35px;">
    <div class="container">
      ${htmlCategories}
    </div>
  </section>

  <!-- Contact & Location Section -->
  <section class="section contact-location-section">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 30px;">
        <span class="badge-tag badge-tag-blue" style="margin-bottom: 8px;">Visit or Contact Us</span>
        <h2 class="section-title">Service Center trichy Location &amp; Contact</h2>
        <p class="section-subtitle">Reach out for prompt doorstep home appliance repair across trichy and nearby Kanyakumari localities.</p>
      </div>

      <div class="contact-location-grid">
        <div class="contact-info-card">
          <div>
            <h3 style="font-size: 1.25rem; color: var(--secondary); margin-bottom: 16px;">Service Center trichy</h3>
            
            <div style="display: flex; gap: 12px; margin-bottom: 16px;">
              <div style="font-size: 1.25rem; line-height: 1;">📍</div>
              <div>
                <strong>Service Address:</strong>
                <address style="font-style: normal; color: var(--text-main); line-height: 1.5; margin-top: 4px;">
                  124, Court Road,<br>
                  Near District Court,<br>
                  trichy, Tamil Nadu 629001
                </address>
              </div>
            </div>

            <div style="display: flex; gap: 12px; margin-bottom: 16px;">
              <div style="font-size: 1.25rem; line-height: 1;">📞</div>
              <div>
                <strong>Phone Helpline:</strong>
                <div style="margin-top: 4px;">
                  <a href="tel:+919876543210" style="color: var(--primary); font-weight: 700; font-size: 1.1rem;">+91 98765 43210</a>
                </div>
              </div>
            </div>

            <div style="display: flex; gap: 12px; margin-bottom: 20px;">
              <div style="font-size: 1.25rem; line-height: 1;">⏱️</div>
              <div>
                <strong>Working Hours:</strong>
                <div style="color: var(--text-main); margin-top: 4px;">6:00 AM – 11:00 PM (Monday – Sunday)</div>
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <a href="tel:+919876543210" class="btn btn-primary btn-sm">Call Now</a>
            <a href="https://www.google.com/maps/search/?api=1&query=124,+Court+Road,+Near+District+Court,+trichy,+Tamil+Nadu+629001" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">Open in Google Maps &rarr;</a>
          </div>
        </div>

        <div class="contact-map-card">
          <iframe
            title="Service Center trichy Location Map"
            src="https://maps.google.com/maps?q=124,+Court+Road,+Near+District+Court,+trichy,+Tamil+Nadu+629001&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style="border:0; min-height: 280px; border-radius: var(--radius-sm); display: block;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="disclaimer-box">
        <strong>Disclaimer:</strong> servicecentertrichy.com is an independent third-party multi-brand home appliance service provider in trichy, Tamil Nadu. We are not directly affiliated with, sponsored by, or an authorized service center of any specific manufacturer or OEM brand unless expressly stated. Brand names, logos, and trademarks mentioned on this website belong to their respective owners and are used purely for identification and descriptive purposes.
      </div>

      <div class="footer-grid">
        <div class="footer-col">
          <h3>Service Center trichy</h3>
          <p>Your dependable local solution for home appliance repair and maintenance across trichy and surrounding areas in Tamil Nadu.</p>
          <p><strong>Address:</strong> 124, Court Road, Near District Court, trichy, Tamil Nadu 629001</p>
          <p><strong>Phone:</strong> <a href="tel:+919876543210" style="color: #93c5fd;">+91 98765 43210</a></p>
          <p><strong>Working Hours:</strong> Monday – Sunday: 6:00 AM – 11:00 PM</p>
        </div>

        <div class="footer-col">
          <h3>Appliance Repairs</h3>
          <ul class="footer-links">
            <li><a href="ac/ac-repair-service-trichy.html">AC Repair Service</a></li>
            <li><a href="fridge/fridge-repair-service-trichy.html">Fridge Repair Service</a></li>
            <li><a href="washing-machine/washing-machine-repair-service-trichy.html">Washing Machine Repair</a></li>
            <li><a href="tv/tv-repair-service-trichy.html">TV Repair Service</a></li>
            <li><a href="microwave/microwave-repair-service-trichy.html">Microwave Repair Service</a></li>
            <li><a href="servicecenter/service-center-trichy.html">Service Center trichy</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Quick Links</h3>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="servicecenter/service-center-trichy.html">All Service Centers</a></li>
            <li><a href="sitemap.html">HTML Sitemap</a></li>
            <li><a href="sitemap.xml">XML Sitemap</a></li>
            <li><a href="tel:+919876543210">Contact Support</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-brands-section">
        <h4 class="footer-brands-title">Brand Service Centers in trichy</h4>
        <p class="footer-brands-subtitle">Doorstep repair coordination for all major appliance brands across trichy and Kanyakumari district:</p>
        <div class="footer-brands-grid">
${footerBrandLinks}
        </div>
      </div>

      <div class="footer-bottom">
        <div>&copy; 2026 servicecentertrichy.com. All Rights Reserved.</div>
        <div>124, Court Road, Near District Court, trichy, Tamil Nadu 629001</div>
      </div>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>`;

fs.writeFileSync('sitemap.html', sitemapHtml, 'utf8');
console.log('Successfully written sitemap.html');
