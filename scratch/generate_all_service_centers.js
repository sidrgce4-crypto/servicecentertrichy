const fs = require('fs');
const path = require('path');

const scratchPath = 'C:/Users/thaku/.gemini/antigravity-ide/brain/d3d92cf3-7442-4e19-9aa4-5f6f56cee962/scratch/';
const batch1 = require(scratchPath + 'sc_brands_batch1.js');
const batch2 = require(scratchPath + 'sc_brands_batch2.js');
const batch3 = require(scratchPath + 'sc_brands_batch3.js');
const batch4 = require(scratchPath + 'sc_brands_batch4.js');

const allBrands = [...batch1, ...batch2, ...batch3, ...batch4];

const appDisplayNames = {
  ac: 'Air Conditioner (AC)',
  fridge: 'Refrigerator (Fridge)',
  'washing-machine': 'Washing Machine',
  tv: 'Smart TV & LED TV',
  microwave: 'Microwave Oven'
};

const appSimpleNames = {
  ac: 'AC',
  fridge: 'Refrigerator',
  'washing-machine': 'Washing Machine',
  tv: 'Smart TV',
  microwave: 'Microwave Oven'
};

const appMainPages = {
  ac: '../ac/ac-repair-service-trichy.html',
  fridge: '../fridge/fridge-repair-service-trichy.html',
  'washing-machine': '../washing-machine/washing-machine-repair-service-trichy.html',
  tv: '../tv/tv-repair-service-trichy.html',
  microwave: '../microwave/microwave-repair-service-trichy.html'
};

function renderPage(brand) {
  const brandName = brand.name;
  const brandSlug = brand.slug;
  const canonicalUrl = `https://www.servicecentertrichy.com/servicecenter/${brandSlug}-service-center-trichy.html`;
  
  // App summary string
  const appListStr = brand.appliances.map(a => appSimpleNames[a]).join(', ');
  const pageTitle = `${brandName} Service Center in trichy | Doorstep Appliance Repair`;
  const metaDesc = `Doorstep ${brandName} service center in trichy for ${appListStr}. Same-day technician checking, genuine compatible parts & upfront pricing across Kanyakumari.`;

  // Hero search intent phrasing
  const heroLead = brand.heroIntro || `Searching for reliable ${brandName} service center near you in trichy? If your ${brandName} ${appListStr} has stopped working, making strange noises, or showing an error code, our local technicians provide dependable doorstep inspection and prompt repairs across trichy and Kanyakumari district.`;

  // Quick nav cards
  const quickNavCards = brand.appliances.map(app => {
    const title = appDisplayNames[app];
    const dedicatedLink = `../${app}/${brandSlug}-${app}-repair-service-trichy.html`;
    return `
        <div class="card" style="padding: 20px; background: #ffffff; border: 1px solid var(--surface-border); border-radius: var(--radius-sm); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <span class="badge-tag badge-tag-blue" style="margin-bottom: 8px;">Doorstep Support</span>
            <h3 style="font-size: 1.15rem; color: var(--secondary); margin-bottom: 8px;">${brandName} ${title}</h3>
            <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 14px;">Diagnose cooling faults, motor issues, PCB problems, and electrical errors at your home.</p>
          </div>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <a href="#${app}" class="btn btn-primary btn-sm" style="flex: 1; text-align: center;">View Details</a>
            <a href="${dedicatedLink}" class="btn btn-outline btn-sm" style="flex: 1; text-align: center;">Full Page</a>
          </div>
        </div>`;
  }).join('\n');

  // Appliance sections
  const applianceSections = brand.appliances.map(app => {
    const details = brand.applianceDetails && brand.applianceDetails[app];
    const appTitle = appSimpleNames[app];
    const dedicatedLink = `../${app}/${brandSlug}-${app}-repair-service-trichy.html`;
    const h2Title = (details && details.title) ? details.title : `${brandName} ${appTitle} Service Center in trichy`;

    let typesList = `<li>All standard ${brandName} ${appTitle} residential and commercial models</li>`;
    if (details && details.types) {
      const typesArr = Array.isArray(details.types) 
        ? details.types 
        : details.types.split(',').map(s => s.trim()).filter(Boolean);
      typesList = typesArr.map(t => `<li style="margin-bottom: 6px;">${t}</li>`).join('\n');
    }

    const modelsText = (details && details.models)
      ? `<div style="background: var(--bg-alt); padding: 12px 16px; border-radius: var(--radius-sm); margin: 14px 0; font-size: 0.9rem; color: var(--text-main);"><strong>Supported Model Ranges:</strong> ${details.models}</div>`
      : '';

    const problemsList = (details && details.problems)
      ? details.problems.map(p => `<li style="margin-bottom: 8px; padding-left: 4px;">⚠️ ${p}</li>`).join('\n')
      : `<li>General performance and operational faults</li><li>Electrical and component issues</li>`;

    const partsRows = (details && details.parts)
      ? details.parts.map(p => `
            <tr>
              <td><strong>${p.part}</strong></td>
              <td class="price-highlight">${p.cost}</td>
            </tr>`).join('\n')
      : `
            <tr>
              <td>Standard Diagnostic Inspection</td>
              <td class="price-highlight">Rs. 250 - Rs. 350 approx.</td>
            </tr>
            <tr>
              <td>Component Repair / Replacement</td>
              <td class="price-highlight">Price depends on exact model</td>
            </tr>`;

    return `
      <!-- ${brandName} ${appTitle} Section -->
      <section class="section" id="${app}" style="padding-top: 30px; border-bottom: 1px solid var(--surface-border);">
        <div class="container">
          <span class="badge-tag badge-tag-blue" style="margin-bottom: 10px;">${appTitle} Repair Desk</span>
          <h2 style="font-size: 1.6rem; color: var(--secondary); margin-bottom: 12px;">${h2Title}</h2>
          
          <p style="font-size: 1rem; color: var(--text-main); line-height: 1.65; margin-bottom: 20px;">
            Searching for ${brandName} ${appTitle.toLowerCase()} repair near me in trichy? Looking for experienced ${brandName} ${appTitle.toLowerCase()} technicians for home service? We check and repair supported ${brandName} ${appTitle.toLowerCase()} models right at your home across trichy and nearby Kanyakumari localities.
          </p>

          <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; margin-bottom: 24px;">
            <div class="card" style="padding: 20px; background: #ffffff; border: 1px solid var(--surface-border); border-radius: var(--radius-sm);">
              <h3 style="font-size: 1.1rem; color: var(--secondary); margin-bottom: 12px;">Supported ${brandName} ${appTitle} Types</h3>
              <ul style="padding-left: 20px; font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">
                ${typesList}
              </ul>
              ${modelsText}
            </div>

            <div class="card" style="padding: 20px; background: #ffffff; border: 1px solid var(--surface-border); border-radius: var(--radius-sm);">
              <h3 style="font-size: 1.1rem; color: var(--secondary); margin-bottom: 12px;">Common ${brandName} ${appTitle} Problems Handled</h3>
              <ul style="list-style: none; padding-left: 0; font-size: 0.925rem; color: var(--text-main); line-height: 1.6;">
                ${problemsList}
              </ul>
            </div>
          </div>

          <h3 style="font-size: 1.2rem; color: var(--secondary); margin-bottom: 12px;">${brandName} ${appTitle} Indicative Parts & Repair Costs</h3>
          <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 10px;">Indicative price estimates for common repair jobs and spare parts. Price depends on the exact model and part. The technician checks the appliance first and confirms the cost before replacement.</p>

          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th style="width: 65%;">Service / Spare Part Work</th>
                  <th style="width: 35%;">Indicative Cost Range</th>
                </tr>
              </thead>
              <tbody>
                ${partsRows}
              </tbody>
            </table>
          </div>

          <div style="margin-top: 15px; margin-bottom: 10px; display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <a href="tel:+919876543210" class="btn btn-primary btn-sm">Book ${brandName} ${appTitle} Service</a>
            <a href="${dedicatedLink}" class="btn btn-outline btn-sm">View Dedicated ${brandName} ${appTitle} Page &rarr;</a>
          </div>
        </div>
      </section>`;
  }).join('\n');

  // Customer experiences (1 per supported appliance category)
  const experienceCards = brand.experiences.map(exp => {
    const appLabel = appSimpleNames[exp.appliance] || exp.appliance;
    return `
        <div class="card" style="padding: 22px; border-left: 4px solid var(--primary); background: #ffffff; box-shadow: var(--shadow-sm);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <span style="font-size: 0.8rem; background: var(--bg-alt); padding: 4px 10px; border-radius: 4px; font-weight: 600; color: var(--secondary);">📍 ${exp.locality}</span>
            <span style="font-size: 0.75rem; color: var(--text-muted);">${brandName} ${appLabel}</span>
          </div>
          <h3 style="font-size: 1.05rem; color: var(--secondary); margin-bottom: 10px; font-weight: 700;">${exp.title}</h3>
          <p style="font-size: 0.9rem; color: var(--text-main); line-height: 1.65; margin: 0;">
            ${exp.story}
          </p>
        </div>`;
  }).join('\n');

  // FAQs
  const faqItems = brand.faqs.map(faq => `
        <details class="faq-item">
          <summary><span>${faq.q}</span></summary>
          <div class="faq-content">
            <p>${faq.a}</p>
          </div>
        </details>`).join('\n');

  // Related brands (select 6 peer brands)
  const peerBrands = allBrands.filter(b => b.slug !== brandSlug).slice(0, 6);
  const peerLinks = peerBrands.map(pb => `
        <a href="${pb.slug}-service-center-trichy.html" class="card" style="padding: 14px 16px; background: #ffffff; border: 1px solid var(--surface-border); border-radius: var(--radius-sm); text-decoration: none; color: var(--secondary); font-weight: 600; font-size: 0.95rem; text-align: center; transition: transform 0.2s ease, border-color 0.2s ease;">
          ${pb.name} Service Center
        </a>`).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${pageTitle}</title>
  <meta name="description" content="${metaDesc}">
  <link rel="canonical" href="${canonicalUrl}">
  <meta property="og:title" content="${pageTitle}">
  <meta property="og:description" content="${metaDesc}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="en_IN">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>

  <!-- Top Bar -->
  <div class="top-bar">
    <div class="container">
      <div class="top-info">
        <span>📍 Doorstep ${brandName} Service in trichy & Nearby Localities</span>
        <span>⏱️ Daily Service | 9:00 AM - 8:00 PM</span>
      </div>
      <div class="top-contact">
        <span>📞 Service Desk: <a href="tel:+919876543210" style="color: #93c5fd; font-weight: 600;">+91 98765 43210</a></span>
      </div>
    </div>
  </div>

  <!-- Header -->
  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="../index.html" class="logo">
          <span class="logo-badge">SCN</span>
          <span>Service Center trichy</span>
        </a>

        <button class="menu-toggle" aria-label="Toggle Navigation" aria-expanded="false">☰</button>

        <nav class="main-nav">
          <a href="../index.html" class="nav-link">Home</a>
          <a href="../ac/ac-repair-service-trichy.html" class="nav-link">AC Repair</a>
          <a href="../fridge/fridge-repair-service-trichy.html" class="nav-link">Fridge Repair</a>
          <a href="../washing-machine/washing-machine-repair-service-trichy.html" class="nav-link">Washing Machine</a>
          <a href="../tv/tv-repair-service-trichy.html" class="nav-link">TV Repair</a>
          <a href="../microwave/microwave-repair-service-trichy.html" class="nav-link">Microwave</a>
          <a href="service-center-trichy.html" class="nav-link active">Service Center</a>
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
        <li class="breadcrumb-item"><a href="../index.html">Home</a></li>
        <li class="breadcrumb-item"><a href="service-center-trichy.html">Service Center in trichy</a></li>
        <li class="breadcrumb-item active" aria-current="page">${brandName} Service Center</li>
      </ul>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <span class="hero-pill">${brandName} Appliance Repair Desk</span>
      <h1>${brandName} Service Center in trichy</h1>
      <p>${heroLead}</p>
      <div class="hero-actions">
        <a href="tel:+919876543210" class="btn btn-accent">Call ${brandName} Desk</a>
        <a href="#appliances" class="btn btn-outline-white">Explore Supported Appliances</a>
      </div>
      <div class="trust-strip">
        <span>✓ 100% Doorstep Visit</span>
        <span>✓ Genuine-Grade Parts</span>
        <span>✓ Clear Price Before Work</span>
        <span>✓ trichy & Kanyakumari District</span>
      </div>
    </div>
  </section>

  <!-- Localized Tanglish Note -->
  <section class="section" style="padding: 24px 0 0;">
    <div class="container">
      <div class="tanglish-box tanglish-box-blue">
        <strong>${brandName} Appliance Problem-a? Namma trichy-la Doorstep Service Ready!</strong>
        ${brand.tanglishHeroNote || `${brandName} appliance velai seiyalaya, sound varutha, cooling nikkala, illa error code kaatutha? Kavalai padatheenga. Namma local trichy technician unga veetuku vandhu check panni, problem explain panni, clear cost solli repair pannuvaaru.`}
      </div>
    </div>
  </section>

  <!-- Quick Appliance Navigation -->
  <section class="section" id="appliances" style="padding-top: 20px;">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Supported ${brandName} Appliances in trichy</h2>
        <p class="section-subtitle">Click below to view details, common problems, parts pricing, and dedicated repair pages for each ${brandName} appliance category.</p>
      </div>

      <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 18px; margin-top: 20px;">
        ${quickNavCards}
      </div>
    </div>
  </section>

  <!-- Brand Appliance Sections -->
  ${applianceSections}

  <!-- Customer Service Experiences -->
  <section class="section" style="background: var(--bg-alt);">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Customer Service Experiences – ${brandName} Service in trichy</h2>
        <p class="section-subtitle">Real repair experiences from homes, apartments, and small businesses across trichy and Kanyakumari district.</p>
      </div>

      <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 18px; margin-top: 24px;">
        ${experienceCards}
      </div>
    </div>
  </section>

  <!-- Local Coverage -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Serving All Localities Across trichy & Kanyakumari District</h2>
        <p class="section-subtitle">Our mobile technician team visits homes, shops, and offices throughout trichy and nearby towns.</p>
      </div>

      <div style="background: #ffffff; border: 1px solid var(--surface-border); border-radius: var(--radius-sm); padding: 24px; box-shadow: var(--shadow-sm);">
        <h3 style="font-size: 1.1rem; color: var(--secondary); margin-bottom: 12px;">Active Service Areas</h3>
        <p style="font-size: 0.95rem; color: var(--text-main); line-height: 1.7; margin-bottom: 16px;">
          We provide doorstep ${brandName} appliance checking and repair across <strong>North trichy, South trichy, East trichy, West trichy, Vadasery, Kottar, Asaripallam, Ozhuginasery, Suchindram, Puthery, Thovalai, Boothapandi, Aralvaimozhi, Kuzhithurai, Marthandam, Colachel, Karungal, Thuckalay, Padmanabhapuram, and Kanyakumari</strong>.
        </p>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">
          * For remote rural locations across Kanyakumari district, technicians can schedule same-day or next-day visits depending on route scheduling.
        </p>
      </div>
    </div>
  </section>

  <!-- Why Choose Us & Repair Process -->
  <section class="section" style="background: var(--bg-alt);">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Why Choose Our ${brandName} Repair Service in trichy</h2>
        <p class="section-subtitle">Honest local service focused on quick response, skilled diagnosis, and clear communication.</p>
      </div>

      <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 18px; margin-top: 20px;">
        <div class="card" style="padding: 20px; background: #ffffff; border: 1px solid var(--surface-border); border-radius: var(--radius-sm);">
          <div style="font-size: 1.8rem; margin-bottom: 8px;">🏠</div>
          <h3 style="font-size: 1.05rem; color: var(--secondary); margin-bottom: 8px;">100% Doorstep Service</h3>
          <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.5; margin: 0;">No need to haul heavy appliances. Technicians inspect and repair your ${brandName} products right at your premises.</p>
        </div>

        <div class="card" style="padding: 20px; background: #ffffff; border: 1px solid var(--surface-border); border-radius: var(--radius-sm);">
          <div style="font-size: 1.8rem; margin-bottom: 8px;">💬</div>
          <h3 style="font-size: 1.05rem; color: var(--secondary); margin-bottom: 8px;">Upfront Cost Discussion</h3>
          <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.5; margin: 0;">We diagnose the issue first and explain what work is required and the expected cost before starting any repair.</p>
        </div>

        <div class="card" style="padding: 20px; background: #ffffff; border: 1px solid var(--surface-border); border-radius: var(--radius-sm);">
          <div style="font-size: 1.8rem; margin-bottom: 8px;">⚙️</div>
          <h3 style="font-size: 1.05rem; color: var(--secondary); margin-bottom: 8px;">Tested Quality Parts</h3>
          <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.5; margin: 0;">We install reliable, genuine-grade compatible components matched specifically to your ${brandName} model series.</p>
        </div>

        <div class="card" style="padding: 20px; background: #ffffff; border: 1px solid var(--surface-border); border-radius: var(--radius-sm);">
          <div style="font-size: 1.8rem; margin-bottom: 8px;">🤝</div>
          <h3 style="font-size: 1.05rem; color: var(--secondary); margin-bottom: 8px;">Post-Repair Testing</h3>
          <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.5; margin: 0;">We test all operational cycles in front of you to verify full functionality before packing our tools.</p>
        </div>
      </div>

      <div style="margin-top: 35px;">
        <h3 style="font-size: 1.25rem; color: var(--secondary); margin-bottom: 16px; text-align: center;">Our 8-Step Repair Process</h3>
        <div class="process-grid">
          <div class="process-step">
            <span class="process-number">1</span>
            <h4>Call / Booking</h4>
            <p>Call our local service desk and describe the fault with your ${brandName} appliance.</p>
          </div>
          <div class="process-step">
            <span class="process-number">2</span>
            <h4>Technician Visit</h4>
            <p>Our technician arrives at your doorstep in trichy at the scheduled time.</p>
          </div>
          <div class="process-step">
            <span class="process-number">3</span>
            <h4>Appliance Check</h4>
            <p>Thorough electrical and mechanical diagnosis to locate the root cause.</p>
          </div>
          <div class="process-step">
            <span class="process-number">4</span>
            <h4>Fault Explanation</h4>
            <p>The technician clearly explains what is faulty and what needs fixing.</p>
          </div>
          <div class="process-step">
            <span class="process-number">5</span>
            <h4>Cost Discussion</h4>
            <p>Clear estimate discussed and approved by you before opening or replacing parts.</p>
          </div>
          <div class="process-step">
            <span class="process-number">6</span>
            <h4>Repair Work</h4>
            <p>Component repair or replacement using high-quality compatible parts.</p>
          </div>
          <div class="process-step">
            <span class="process-number">7</span>
            <h4>Live Testing</h4>
            <p>Operating test run performed in your presence to confirm proper function.</p>
          </div>
          <div class="process-step">
            <span class="process-number">8</span>
            <h4>Handover</h4>
            <p>Safe handover with simple preventive care and maintenance advice.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Official Brand Information -->
  <section class="section">
    <div class="container">
      <div style="background: #f8fafc; border: 1px solid var(--surface-border); border-left: 4px solid var(--secondary); border-radius: var(--radius-sm); padding: 24px; box-shadow: var(--shadow-sm);">
        <h3 style="font-size: 1.25rem; color: var(--secondary); margin-bottom: 12px;">Official ${brandName} Support Information</h3>
        <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 16px;">
          <strong>Important Clarification:</strong> servicecentertrichy.com is an independent multi-brand home appliance service provider in trichy, Tamil Nadu. We provide third-party out-of-warranty doorstep repair assistance. We are not directly authorized or officially affiliated with the ${brandName} manufacturer unless explicitly stated.
        </p>
        <p style="font-size: 0.925rem; color: var(--text-main); line-height: 1.6; margin-bottom: 8px;">
          If your appliance is under active manufacturer warranty and you require free OEM warranty claims, please contact the official manufacturer customer care directly:
        </p>
        <div style="background: #ffffff; padding: 14px 18px; border: 1px solid var(--surface-border); border-radius: var(--radius-sm); font-size: 0.9rem; line-height: 1.7; color: var(--text-main); margin-top: 10px;">
          <div><strong>Official Website:</strong> ${brand.officialWebsite || 'https://www.' + brandSlug + '.com/in/'}</div>
          <div><strong>Official Customer Care / Toll-Free:</strong> ${brand.officialCare || 'Official customer-care number should be checked on manufacturer current India documentation.'}</div>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 12px; margin-bottom: 0;">
          * Note: The official contact numbers and website links above are provided as plain text reference for consumer convenience. Our local telephone helpline connects to our independent trichy technician desk.
        </p>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="section" id="faq" style="background: var(--bg-alt);">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Frequently Asked Questions About ${brandName} Service in trichy</h2>
        <p class="section-subtitle">Helpful answers regarding doorstep checking, repairs, spare parts, and visiting charges in trichy.</p>
      </div>

      <div class="faq-list">
        ${faqItems}
      </div>
    </div>
  </section>

  <!-- Peer Brands Section -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Other Brand Service Centers in trichy</h2>
        <p class="section-subtitle">We also provide doorstep repair and servicing for other popular home appliance brands.</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px; margin-top: 20px;">
        ${peerLinks}
      </div>

      <div style="text-align: center; margin-top: 24px;">
        <a href="service-center-trichy.html" class="btn btn-outline">View All Multi-Brand Service Centers &rarr;</a>
      </div>
    </div>
  </section>

  <!-- CTA Banner -->
  <section class="section" style="padding: 0;">
    <div class="container">
      <div class="cta-card">
        <div>
          <h2>Need Quick ${brandName} Appliance Repair in trichy?</h2>
          <p>Book a local technician visit today. Transparent checking, clear estimates, and same-day doorstep service across town.</p>
        </div>
        <div>
          <a href="tel:+919876543210" class="btn btn-accent">Call Service Desk: +91 98765 43210</a>
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
          <p><strong>Operating Hours:</strong> Monday – Sunday: 9:00 AM – 8:00 PM</p>
        </div>

        <div class="footer-col">
          <h3>Appliance Repairs</h3>
          <ul class="footer-links">
            <li><a href="../ac/ac-repair-service-trichy.html">AC Repair Service</a></li>
            <li><a href="../fridge/fridge-repair-service-trichy.html">Fridge Repair Service</a></li>
            <li><a href="../washing-machine/washing-machine-repair-service-trichy.html">Washing Machine Repair</a></li>
            <li><a href="../tv/tv-repair-service-trichy.html">TV Repair Service</a></li>
            <li><a href="../microwave/microwave-repair-service-trichy.html">Microwave Repair Service</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Quick Links</h3>
          <ul class="footer-links">
            <li><a href="../index.html">Home</a></li>
            <li><a href="service-center-trichy.html">Service Center in trichy</a></li>
            <li><a href="tel:+919876543210">Contact Support</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>&copy; 2026 servicecentertrichy.com. All Rights Reserved.</div>
        <div>trichy, Tamil Nadu, India</div>
      </div>
    </div>
  </footer>

  <script src="../js/main.js"></script>
</body>
</html>
`;
}

// Generate all files
const outDir = path.resolve(__dirname, '../servicecenter');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

let generatedCount = 0;
allBrands.forEach(brand => {
  const fileName = `${brand.slug}-service-center-trichy.html`;
  const filePath = path.join(outDir, fileName);
  const html = renderPage(brand);
  fs.writeFileSync(filePath, html, 'utf8');
  generatedCount++;
});

console.log(`Successfully generated ${generatedCount} brand service center pages in ${outDir}`);
