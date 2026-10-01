const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://www.servicecentertrichy.com';

function getFiles(dir, base = '') {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    if (file === 'scratch' || file.startsWith('.')) continue;
    const full = path.join(dir, file);
    const rel = base ? base + '/' + file : file;
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results = results.concat(getFiles(full, rel));
    } else if (file.endsWith('.html')) {
      results.push(rel.replace(/\\/g, '/'));
    }
  }
  return results;
}

const allHtmlFiles = getFiles('.').sort();
console.log('Total HTML files to process:', allHtmlFiles.length);

const brandFiles = fs.readdirSync('servicecenter')
  .filter(f => f.endsWith('.html') && f !== 'service-center-trichy.html')
  .sort();

function getBrandName(file) {
  let slug = file.replace('-service-center-trichy.html', '');
  return slug.split('-').map(w => {
    if (['bpl', 'ifb', 'iffalcon', 'mi', 'tcl', 'vu', 'vw'].includes(w)) return w.toUpperCase();
    if (w === 'beko') return 'Beko';
    if (w === 'westinghouse') return 'Westinghouse';
    return w.charAt(0).toUpperCase() + w.slice(1);
  }).join(' ') + ' Service Center';
}

const GTAG_SNIPPET = `  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-L0Q91G8NQE"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-L0Q91G8NQE');
  </script>`;

const SCHEMA_SNIPPET = `  <script type="application/ld+json">
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
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "06:00",
        "closes": "23:00"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "trichy"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Kanyakumari District"
      }
    ]
  }
  </script>`;

let processed = 0;

allHtmlFiles.forEach(relPath => {
  let content = fs.readFileSync(relPath, 'utf8');

  const folder = relPath.includes('/') ? relPath.split('/')[0] : '';
  const isRoot = folder === '';
  const isServiceCenter = folder === 'servicecenter';
  const relPrefix = isRoot ? '' : '../';

  // 1. Google Tag: Ensure single G-L0Q91G8NQE tag
  content = content.replace(/<!-- Google tag \(gtag\.js\) -->[\s\S]*?<\/script>\s*<\/script>/gi, '');
  content = content.replace(/<script async src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=.*?"><\/script>\s*<script>[\s\S]*?<\/script>/gi, '');
  content = content.replace(/<!-- Google tag \(gtag\.js\) -->\s*/gi, '');
  
  if (content.includes('<meta charset="UTF-8">')) {
    content = content.replace('<meta charset="UTF-8">', '<meta charset="UTF-8">\n' + GTAG_SNIPPET);
  }

  // 2. Favicons: Remove old favicon links
  content = content.replace(/<link rel="(icon|shortcut icon|apple-touch-icon)".*?>\s*/gi, '');
  
  const faviconSnippet = `  <link rel="icon" type="image/svg+xml" href="${relPrefix}favicon.svg">\n  <link rel="icon" type="image/png" href="${relPrefix}favicon.png">\n  <link rel="apple-touch-icon" href="${relPrefix}apple-touch-icon.png">`;

  // 3. Extract title and description
  const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/i);
  let pageTitle = titleMatch ? titleMatch[1].trim() : 'Home Appliance Repair Service in trichy';
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
  let pageDesc = descMatch ? descMatch[1].trim() : 'Professional doorstep home appliance repair in trichy.';

  // 4. Clean existing canonical and og tags
  content = content.replace(/<link\s+rel=["']canonical["'].*?>\s*/gi, '');
  content = content.replace(/<meta\s+property=["']og:.*?["'].*?>\s*/gi, '');
  // Clean any broken fragments
  content = content.replace(/href="https:\/\/servicecentertrichy\.com\/.*?"\s*>/g, '');

  const canonicalUrl = relPath === 'index.html' ? `${DOMAIN}/` : `${DOMAIN}/${relPath}`;

  const metaBlock = `  <link rel="canonical" href="${canonicalUrl}">
  <meta property="og:title" content="${pageTitle}">
  <meta property="og:description" content="${pageDesc}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="en_IN">
${faviconSnippet}`;

  // Place metaBlock right after description
  const descRegex = /<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i;
  if (descRegex.test(content)) {
    content = content.replace(descRegex, match => match + '\n' + metaBlock);
  } else if (content.includes('</title>')) {
    content = content.replace('</title>', '</title>\n' + metaBlock);
  }

  // 5. Schema: Replace any existing schema or insert standard LocalBusiness schema
  content = content.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/gi, '');
  content = content.replace('</head>', `${SCHEMA_SNIPPET}\n</head>`);

  // 6. Working Hours & Timings:
  content = content.replace(/9:00 AM\s*[-–]\s*8:00 PM/g, '6:00 AM – 11:00 PM');
  content = content.replace(/9:00\s*AM\s*to\s*8:00\s*PM/gi, '6:00 AM to 11:00 PM');

  // 7. Content style: Indian English, remove buzzwords
  content = content.replace(/\bsophisticated\b/gi, 'advanced');
  content = content.replace(/\brobust\b/gi, 'reliable');
  content = content.replace(/\bmeticulous\b/gi, 'careful');
  content = content.replace(/\btailored\b/gi, 'specific');
  content = content.replace(/\bcutting-edge\b/gi, 'modern');
  content = content.replace(/\bstate-of-the-art\b/gi, 'modern');
  content = content.replace(/\bstreamlined\b/gi, 'simple');
  content = content.replace(/\bcomprehensive\b/gi, 'complete');
  content = content.replace(/\bseamless\b/gi, 'smooth');

  // 8. Contact & Location Section and Footer:
  const footerBrandLinks = brandFiles.map(b => {
    const linkTarget = isServiceCenter ? b : `${relPrefix}servicecenter/${b}`;
    const brandName = getBrandName(b);
    return `          <a href="${linkTarget}">${brandName}</a>`;
  }).join('\n');

  const scHubLink = isServiceCenter ? 'service-center-trichy.html' : `${relPrefix}servicecenter/service-center-trichy.html`;

  const contactLocationSection = `  <!-- Contact & Location Section -->
  <section class="section contact-location-section">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 30px;">
        <span class="badge-tag badge-tag-blue" style="margin-bottom: 8px;">Visit or Contact Us</span>
        <h2 class="section-title">Service Center trichy Location &amp; Contact</h2>
        <p class="section-subtitle">Reach out for prompt doorstep home appliance repair across trichy and nearby Kanyakumari localities.</p>
      </div>

      <div class="contact-location-grid">
        <!-- Contact Card -->
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

        <!-- Map Embed -->
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
  </section>`;

  const fullFooter = `  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <!-- Disclaimer -->
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
            <li><a href="${relPrefix}ac/ac-repair-service-trichy.html">AC Repair Service</a></li>
            <li><a href="${relPrefix}fridge/fridge-repair-service-trichy.html">Fridge Repair Service</a></li>
            <li><a href="${relPrefix}washing-machine/washing-machine-repair-service-trichy.html">Washing Machine Repair</a></li>
            <li><a href="${relPrefix}tv/tv-repair-service-trichy.html">TV Repair Service</a></li>
            <li><a href="${relPrefix}microwave/microwave-repair-service-trichy.html">Microwave Repair Service</a></li>
            <li><a href="${scHubLink}">Service Center trichy</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Quick Links</h3>
          <ul class="footer-links">
            <li><a href="${relPrefix}index.html">Home</a></li>
            <li><a href="${scHubLink}">All Service Centers</a></li>
            <li><a href="${relPrefix}sitemap.html">HTML Sitemap</a></li>
            <li><a href="${relPrefix}sitemap.xml">XML Sitemap</a></li>
            <li><a href="tel:+919876543210">Contact Support</a></li>
          </ul>
        </div>
      </div>

      <!-- Footer Brand Directory (All 58 Valid Service Center Brands) -->
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
  </footer>`;

  content = content.replace(/<!-- Contact & Location Section -->[\s\S]*?<\/section>\s*/gi, '');

  const footerPattern = /(<!-- Footer -->\s*)?<footer class="site-footer">[\s\S]*?<\/footer>/i;
  if (footerPattern.test(content)) {
    content = content.replace(footerPattern, `${contactLocationSection}\n\n${fullFooter}`);
  }

  fs.writeFileSync(relPath, content, 'utf8');
  processed++;
});

console.log(`Successfully processed and integrated ${processed} HTML files.`);
