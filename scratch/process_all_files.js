const fs = require('fs');
const path = require('path');
const { northTrichy, eastTrichy, westTrichy, southTrichy } = require('./data_localities');
const {
  getAcFaqs,
  getFridgeFaqs,
  getWashingMachineFaqs,
  getTvFaqs,
  getMicrowaveFaqs,
  getServiceCenterFaqs,
  getHomeFaqs
} = require('./data_faqs');
const {
  getAcExperiences,
  getFridgeExperiences,
  getWashingMachineExperiences,
  getTvExperiences,
  getMicrowaveExperiences,
  getServiceCenterExperiences
} = require('./data_experiences');
const {
  getWashingMachineTypesSection,
  getFridgeTypesSection,
  getAcTypesSection,
  getTvTypesSection,
  getMicrowaveTypesSection
} = require('./data_types');
const { getServiceCenterApplianceSections } = require('./data_servicecenter_appliances');
const { getUniqueIntroduction } = require('./data_intros');

const BRAND_NAMES = {
  'acer': 'Acer', 'acerpure': 'Acerpure', 'aiwa': 'Aiwa', 'akai': 'Akai', 'bajaj': 'Bajaj',
  'blue-star': 'Blue Star', 'bosch': 'Bosch', 'bpl': 'BPL', 'carrier': 'Carrier', 'daewoo': 'Daewoo',
  'daikin': 'Daikin', 'electrolux': 'Electrolux', 'faber': 'Faber', 'godrej': 'Godrej', 'haier': 'Haier',
  'havells': 'Havells', 'hisense': 'Hisense', 'hitachi': 'Hitachi', 'hyundai': 'Hyundai', 'ifb': 'IFB',
  'iffalcon': 'iFFALCON', 'intex': 'Intex', 'kelvinator': 'Kelvinator', 'kenstar': 'Kenstar', 'kodak': 'Kodak',
  'koryo': 'Koryo', 'liebherr': 'Liebherr', 'lloyd': 'Lloyd', 'mi': 'Mi', 'micromax': 'Micromax',
  'midea': 'Midea', 'mitsubishi': 'Mitsubishi', 'morphy-richards': 'Morphy Richards', 'motorola': 'Motorola',
  'o-general': 'O General', 'oneplus': 'OnePlus', 'onida': 'Onida', 'panasonic': 'Panasonic',
  'philips': 'Philips', 'redmi': 'Redmi', 'samsung': 'Samsung', 'sansui': 'Sansui', 'sanyo': 'Sanyo',
  'sharp': 'Sharp', 'siemens': 'Siemens', 'sony': 'Sony', 'tcl': 'TCL', 'thomson': 'Thomson',
  'toshiba': 'Toshiba', 'videocon': 'Videocon', 'voltas': 'Voltas', 'voltas-beko': 'Voltas Beko',
  'vu': 'Vu', 'vw': 'VW', 'westinghouse': 'Westinghouse', 'whirlpool': 'Whirlpool',
  'white-westinghouse': 'White Westinghouse', 'xiaomi': 'Xiaomi'
};

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

function getFileInfo(filePath) {
  const norm = filePath.replace(/\\/g, '/');
  const base = path.basename(norm, '.html');
  const parts = norm.split('/');
  const folder = parts.length > 1 ? parts[0] : 'root';
  
  let brand = null;
  for (const [slug, name] of Object.entries(BRAND_NAMES).sort((a,b) => b[0].length - a[0].length)) {
    if (base.startsWith(slug + '-')) {
      brand = name;
      break;
    }
  }
  return { folder, base, brand, norm };
}

// Build 200 Locality Section HTML
function build200LocalitySection(keyword, title) {
  function renderCards(list) {
    return list.map(loc => `
          <div class="card" style="padding: 14px;">
            <strong style="color: var(--secondary); font-size: 0.95rem; display: block; margin-bottom: 4px;">📍 ${keyword} in ${loc}</strong>
            <span style="font-size: 0.825rem; color: var(--text-muted);">Doorstep checkup, genuine spare parts, and transparent repair service available in ${loc}. Call to schedule visit.</span>
          </div>`).join('');
  }

  return `
  <!-- Trichy Locality System (4 Directions, 200 Localities) -->
  <section class="section section-alt" id="localities">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">${title}</h2>
        <p class="section-subtitle">We provide doorstep inspection and repair across North, South, East, and West Trichy localities.</p>
      </div>

      <!-- North Trichy -->
      <div class="content-box" style="margin-bottom: 24px;">
        <h3 style="color: var(--primary); margin-bottom: 15px;">North Trichy Service Localities (50 Areas)</h3>
        <p style="font-size: 0.925rem; color: var(--text-muted); margin-bottom: 18px;">Doorstep technician service available across North Trichy neighborhoods:</p>
        <div class="cards-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px;">${renderCards(northTrichy)}
        </div>
      </div>

      <!-- East Trichy -->
      <div class="content-box" style="margin-bottom: 24px;">
        <h3 style="color: var(--primary); margin-bottom: 15px;">East Trichy Service Localities (50 Areas)</h3>
        <p style="font-size: 0.925rem; color: var(--text-muted); margin-bottom: 18px;">Doorstep technician service available across East Trichy neighborhoods:</p>
        <div class="cards-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px;">${renderCards(eastTrichy)}
        </div>
      </div>

      <!-- West Trichy -->
      <div class="content-box" style="margin-bottom: 24px;">
        <h3 style="color: var(--primary); margin-bottom: 15px;">West Trichy Service Localities (50 Areas)</h3>
        <p style="font-size: 0.925rem; color: var(--text-muted); margin-bottom: 18px;">Doorstep technician service available across West Trichy neighborhoods:</p>
        <div class="cards-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px;">${renderCards(westTrichy)}
        </div>
      </div>

      <!-- South Trichy -->
      <div class="content-box">
        <h3 style="color: var(--primary); margin-bottom: 15px;">South Trichy Service Localities (50 Areas)</h3>
        <p style="font-size: 0.925rem; color: var(--text-muted); margin-bottom: 18px;">Doorstep technician service available across South Trichy neighborhoods:</p>
        <div class="cards-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px;">${renderCards(southTrichy)}
        </div>
      </div>
    </div>
  </section>`;
}

// Build FAQ Section HTML (10+ items)
function buildFaqSectionHtml(title, faqs) {
  const items = faqs.map(f => `
        <details class="faq-item">
          <summary><span>${f.q}</span></summary>
          <div class="faq-content">
            <p>${f.a}</p>
          </div>
        </details>`).join('');

  return `
  <!-- FAQ Section -->
  <section class="section" id="faq" style="background: var(--bg-alt);">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Frequently Asked Questions About ${title} in Trichy</h2>
        <p class="section-subtitle">Helpful answers regarding doorstep checking, repairs, spare parts, and visiting charges in Trichy.</p>
      </div>

      <div class="faq-list">${items}
      </div>
    </div>
  </section>`;
}

// Build Experience Section HTML
function buildExperienceSectionHtml(title, exps) {
  const cards = exps.map(e => `
        <div class="experience-card">
          <div class="exp-meta">
            <span class="exp-type-tag">${e.tag}</span>
            <span class="exp-rating">⭐ ${e.rating}</span>
          </div>
          <p>"${e.text}"</p>
        </div>`).join('');

  return `
  <!-- Customer Service Experiences Section -->
  <section class="section" id="experiences">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Common Customer Service Experiences</h2>
        <p class="section-subtitle">Service Experience Examples - typical situations handled by our technicians for ${title} across Trichy.</p>
      </div>

      <div class="experience-grid">${cards}
      </div>
    </div>
  </section>`;
}

// Clean remaining Nagercoil/Kanyakumari locality names and AI jargon from text
function sanitizeText(str) {
  let res = str;

  // Old Nagercoil locality replacements in text
  const oldLocs = [
    /Suchindram/gi, /Vadiveeswaram/gi, /Chettikulam/gi, /Thirupathisaram/gi, /Vettoornimadam/gi,
    /Asaripallam/gi, /Ozhuginasery/gi, /Vadasery/gi, /Kottar/gi, /Putheri/gi, /Puthery/gi,
    /Erachakulam/gi, /Bhoothapandi/gi, /Boothapandi/gi, /Thovalai/gi, /Aralvaimozhi/gi,
    /Karinkal Road/gi, /Karinkal/gi, /Villukuri/gi, /Parvathipuram/gi, /Kuzhithurai/gi,
    /Marthandam/gi, /Colachel/gi, /Thuckalay/gi, /Padmanabhapuram/gi, /Tammathukonam/gi,
    /Edalakudy/gi, /Marungoor/gi, /Mylaudy/gi, /Agasteeswaram/gi, /Kottaram/gi,
    /Thamaraikulam/gi, /Sahayanagar/gi, /Balmore Road/gi, /Kunnathoor/gi,
    /Shenbagaramanputhur/gi, /Vellamodi/gi, /Esanthimangu/gi, /Esanthimangalam/gi,
    /Muppandal/gi, /Peruvilai/gi, /Krishnankoil/gi, /Parakkai/gi
  ];
  const trichyReplacements = ['Srirangam', 'Thillai Nagar', 'KK Nagar', 'Cantonment', 'Woraiyur', 'Kattur', 'Thiruverumbur', 'Ponmalai', 'Palakarai', 'Ariyamangalam', 'Karumandapam'];
  
  oldLocs.forEach((regex, i) => {
    const rep = trichyReplacements[i % trichyReplacements.length];
    res = res.replace(regex, rep);
  });

  // Coastal weather words
  res = res.replace(/salty coastal air/gi, 'hot summer weather');
  res = res.replace(/coastal humidity/gi, 'ambient humidity');
  res = res.replace(/coastal climates/gi, 'hot climates');
  res = res.replace(/coastal weather/gi, 'humid weather');
  res = res.replace(/coastal storms/gi, 'seasonal weather');
  res = res.replace(/coastal afternoons/gi, 'hot afternoons');
  res = res.replace(/coastal belt/gi, 'urban areas');

  // Technician counts
  res = res.replace(/team of 20\+\s*local technicians/gi, 'experienced local technicians');
  res = res.replace(/20\+\s*local technicians/gi, 'experienced local technicians');
  res = res.replace(/20\+\s*technicians/gi, 'experienced local technicians');

  // Heavy corporate / AI words
  res = res.replace(/comprehensive diagnostic solutions/gi, 'complete fault diagnosis');
  res = res.replace(/specialized intervention/gi, 'skilled repair');
  res = res.replace(/state-of-the-art/gi, 'modern');
  res = res.replace(/seamless/gi, 'smooth');
  res = res.replace(/facilitate/gi, 'arrange');
  res = res.replace(/leveraging/gi, 'using');
  res = res.replace(/bespoke/gi, 'custom');
  res = res.replace(/robust/gi, 'reliable');
  res = res.replace(/optimized/gi, 'tuned');

  return res;
}

console.log('=== STARTING COMPLETE AUDIT AND TRANSFORMATION ===');

const files = walk('.');
console.log('Total files to process:', files.length);

let modifiedCount = 0;
let topBarRemovedCount = 0;
let faqsExpandedCount = 0;
let localityUpdatedCount = 0;
let expUpdatedCount = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  const originalLength = content.length;
  const info = getFileInfo(f);

  // 1. Remove Top Information Bar from every HTML file
  if (content.includes('top-bar')) {
    content = content.replace(/<!-- Top Bar -->\s*<div class="top-bar">[\s\S]*?<\/div>\s*<\/div>/g, '');
    content = content.replace(/<div class="top-bar">[\s\S]*?<\/div>\s*<\/div>/g, '');
    topBarRemovedCount++;
  }

  // 2. Remove old floating-call-btn and inject Floating Side Action Buttons + Fixed Bottom Action Bar
  content = content.replace(/<!-- Mobile Floating Call Button -->\s*<a href="tel:[^"]*" class="floating-call-btn"[\s\S]*?<\/a>/g, '');
  content = content.replace(/<a href="tel:[^"]*" class="floating-call-btn"[\s\S]*?<\/a>/g, '');

  const floatingHtml = `
  <!-- Floating Action Buttons (Desktop & Tablet) -->
  <a href="https://wa.me/919876543210" class="floating-side-whatsapp" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Us">
    <span>💬 WhatsApp</span>
  </a>
  <a href="tel:+919876543210" class="floating-side-call" aria-label="Call Service Center Trichy">
    <span>📞 Call Now</span>
  </a>

  <!-- Mobile Fixed Bottom Action Bar -->
  <div class="bottom-action-bar">
    <a href="https://wa.me/919876543210" class="btn-bottom-bar btn-bottom-whatsapp" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      <span>💬 WhatsApp</span>
    </a>
    <a href="tel:+919876543210" class="btn-bottom-bar btn-bottom-call" aria-label="Call Technician Now">
      <span>📞 Call Now</span>
    </a>
  </div>`;

  if (!content.includes('floating-side-whatsapp')) {
    content = content.replace('</body>', `${floatingHtml}\n</body>`);
  }

  // 3. Humanize intros (replace "You came to the right place..." & repetitive openers)
  if (f !== 'sitemap.html') {
    const intro = getUniqueIntroduction(info.folder, info.brand);
    
    // Replace "You came to the right place..."
    if (content.includes('You came to the right place')) {
      content = content.replace(/You came to the right place\.[^<]+/g, intro.heroP);
    }

    // Hero paragraph check
    const heroMatch = content.match(/<section class="hero">[\s\S]*?<p>([\s\S]*?)<\/p>/);
    if (heroMatch && (heroMatch[1].includes('right place') || heroMatch[1].includes('diagnostic inspection fee for') || heroMatch[1].includes('Our doorstep diagnostic'))) {
      content = content.replace(heroMatch[0], heroMatch[0].replace(heroMatch[1], intro.heroP));
    }
  }

  // 4. Sanitize text for remaining Nagercoil references and corporate jargon
  content = sanitizeText(content);

  // 5. Appliance Specific Expansion (Types & Service Center)
  if (info.folder === 'washing-machine' && !info.brand) {
    if (!content.includes('1. Semi-Automatic Washing Machine (Twin Tub)')) {
      const typesHtml = getWashingMachineTypesSection(null);
      const oldTypesMatch = content.match(/<section[^>]*id="types"[^>]*>[\s\S]*?<\/section>/) || content.match(/<!-- Detailed Type Sections -->[\s\S]*?<\/section>/);
      if (oldTypesMatch) {
        content = content.replace(oldTypesMatch[0], typesHtml);
      }
    }
  } else if (info.folder === 'ac' && !info.brand) {
    if (!content.includes('1. Split Air Conditioner (Fixed Speed)')) {
      const typesHtml = getAcTypesSection(null);
      const oldTypesMatch = content.match(/<section[^>]*id="types"[^>]*>[\s\S]*?<\/section>/);
      if (oldTypesMatch) {
        content = content.replace(oldTypesMatch[0], typesHtml);
      }
    }
  } else if (info.folder === 'fridge' && !info.brand) {
    if (!content.includes('1. Single Door Direct Cool Refrigerator')) {
      const typesHtml = getFridgeTypesSection(null);
      const oldTypesMatch = content.match(/<section[^>]*id="types"[^>]*>[\s\S]*?<\/section>/);
      if (oldTypesMatch) {
        content = content.replace(oldTypesMatch[0], typesHtml);
      }
    }
  } else if (info.folder === 'tv' && !info.brand) {
    if (!content.includes('1. LED Television (Full HD & HD Ready)')) {
      const typesHtml = getTvTypesSection(null);
      const oldTypesMatch = content.match(/<section[^>]*id="types"[^>]*>[\s\S]*?<\/section>/);
      if (oldTypesMatch) {
        content = content.replace(oldTypesMatch[0], typesHtml);
      }
    }
  } else if (info.folder === 'microwave' && !info.brand) {
    if (!content.includes('1. Solo Microwave Oven')) {
      const typesHtml = getMicrowaveTypesSection(null);
      const oldTypesMatch = content.match(/<section[^>]*id="types"[^>]*>[\s\S]*?<\/section>/);
      if (oldTypesMatch) {
        content = content.replace(oldTypesMatch[0], typesHtml);
      }
    }
  }

  // Service Center Hub page expansion
  if (f.endsWith('service-center-trichy.html') && info.folder === 'servicecenter') {
    if (!content.includes('Air Conditioner (AC) Service in Trichy')) {
      const appSections = getServiceCenterApplianceSections(null, true);
      const targetPoint = content.indexOf('<!-- Appliance / Service Links Section -->') !== -1 
        ? '<!-- Appliance / Service Links Section -->'
        : '<!-- CTA Banner Section -->';
      content = content.replace(targetPoint, `${appSections}\n\n  ${targetPoint}`);
    }
  }

  // 6. Customer Service Experiences (Tanglish + 1-10 Ratings)
  if (f !== 'sitemap.html') {
    let exps = [];
    let expTitle = '';
    if (info.folder === 'ac') {
      exps = getAcExperiences(info.brand);
      expTitle = `${info.brand ? info.brand + ' ' : ''}Air Conditioner`;
    } else if (info.folder === 'fridge') {
      exps = getFridgeExperiences(info.brand);
      expTitle = `${info.brand ? info.brand + ' ' : ''}Refrigerator`;
    } else if (info.folder === 'washing-machine') {
      exps = getWashingMachineExperiences(info.brand);
      expTitle = `${info.brand ? info.brand + ' ' : ''}Washing Machine`;
    } else if (info.folder === 'tv') {
      exps = getTvExperiences(info.brand);
      expTitle = `${info.brand ? info.brand + ' ' : ''}Television`;
    } else if (info.folder === 'microwave') {
      exps = getMicrowaveExperiences(info.brand);
      expTitle = `${info.brand ? info.brand + ' ' : ''}Microwave Oven`;
    } else if (info.folder === 'servicecenter' || info.folder === 'root') {
      exps = getServiceCenterExperiences(info.brand);
      expTitle = `${info.brand ? info.brand + ' ' : ''}Home Appliances`;
    }

    const expHtml = buildExperienceSectionHtml(expTitle, exps);
    let expReplaced = false;

    // Check if existing experience section exists
    let expIdx = content.indexOf('Customer Service Experience');
    if (expIdx === -1) expIdx = content.indexOf('experience-card');
    if (expIdx === -1) expIdx = content.indexOf('experience-grid');

    if (expIdx !== -1) {
      let sectionStart = content.lastIndexOf('<section', expIdx);
      if (sectionStart !== -1) {
        const beforeSection = content.slice(Math.max(0, sectionStart - 100), sectionStart);
        const commentMatch = beforeSection.match(/(<!--[\s\S]*?-->\s*)$/);
        if (commentMatch) {
          sectionStart = sectionStart - commentMatch[1].length;
        }
        const sectionEnd = content.indexOf('</section>', expIdx);
        if (sectionEnd !== -1) {
          content = content.slice(0, sectionStart) + expHtml + '\n  ' + content.slice(sectionEnd + '</section>'.length);
          expReplaced = true;
        }
      }
    }

    // If no existing experience section, inject before localities or before contact section
    if (!expReplaced) {
      if (content.includes('<!-- Trichy Locality System')) {
        const locIdx = content.indexOf('<!-- Trichy Locality System');
        content = content.slice(0, locIdx) + expHtml + '\n\n  ' + content.slice(locIdx);
        expReplaced = true;
      } else if (content.includes('<!-- Contact & Location Section -->')) {
        const contactIdx = content.indexOf('<!-- Contact & Location Section -->');
        content = content.slice(0, contactIdx) + expHtml + '\n\n  ' + content.slice(contactIdx);
        expReplaced = true;
      }
    }

    if (expReplaced) expUpdatedCount++;
  }

  // 7. 200 Locality Section (4 Directions x 50 Localities)
  if (f !== 'sitemap.html' && f !== 'index.html') {
    let locKeyword = '';
    let locTitle = '';

    if (info.folder === 'ac') {
      locKeyword = info.brand ? `${info.brand} AC Repair` : 'AC Repair';
      locTitle = `${locKeyword} Service Areas in Trichy`;
    } else if (info.folder === 'fridge') {
      locKeyword = info.brand ? `${info.brand} Fridge Repair` : 'Fridge Repair';
      locTitle = `${locKeyword} Service Areas in Trichy`;
    } else if (info.folder === 'washing-machine') {
      locKeyword = info.brand ? `${info.brand} Washing Machine Repair` : 'Washing Machine Repair';
      locTitle = `${locKeyword} Service Areas in Trichy`;
    } else if (info.folder === 'tv') {
      locKeyword = info.brand ? `${info.brand} TV Repair` : 'TV Repair';
      locTitle = `${locKeyword} Service Areas in Trichy`;
    } else if (info.folder === 'microwave') {
      locKeyword = info.brand ? `${info.brand} Microwave Repair` : 'Microwave Repair';
      locTitle = `${locKeyword} Service Areas in Trichy`;
    } else if (info.folder === 'servicecenter') {
      locKeyword = info.brand ? `${info.brand} Service` : 'Appliance Repair';
      locTitle = `${info.brand ? info.brand + ' ' : ''}Service Center Areas in Trichy`;
    }

    const localityHtml = build200LocalitySection(locKeyword, locTitle);

    // Find and replace existing locality section
    let locReplaced = false;

    // A: In brand service center files: <!-- Local Coverage --> ... </section>
    if (content.includes('<!-- Local Coverage -->')) {
      const startIdx = content.indexOf('<!-- Local Coverage -->');
      const endIdx = content.indexOf('</section>', startIdx);
      if (startIdx !== -1 && endIdx !== -1) {
        content = content.slice(0, startIdx) + localityHtml + '\n  ' + content.slice(endIdx + '</section>'.length);
        locReplaced = true;
      }
    }

    // B: If file already has Trichy Locality System, replace it cleanly
    if (!locReplaced && content.includes('<!-- Trichy Locality System (4 Directions, 200 Localities) -->')) {
      const startIdx = content.indexOf('<!-- Trichy Locality System (4 Directions, 200 Localities) -->');
      const endIdx = content.indexOf('</section>', startIdx);
      if (startIdx !== -1 && endIdx !== -1) {
        content = content.slice(0, startIdx) + localityHtml + '\n  ' + content.slice(endIdx + '</section>'.length);
        locReplaced = true;
      }
    }

    // C: In other pages with Trichy Localities Grid Section, 4 Directions, etc.
    if (!locReplaced) {
      const markers = [
        '<!-- 4 Directions Localities Section',
        '<!-- Trichy Localities Grid Section',
        '<!-- Localities Grid Section',
        '<!-- Localities Section',
        'Service Areas Across Trichy',
        'Service Areas in Trichy',
        'North Trichy AC Service Localities',
        'North Trichy Service Localities',
        'North Trichy'
      ];
      for (const m of markers) {
        const markerIdx = content.indexOf(m);
        if (markerIdx !== -1) {
          let sectionStart = content.lastIndexOf('<section', markerIdx);
          if (sectionStart !== -1) {
            const beforeSection = content.slice(Math.max(0, sectionStart - 100), sectionStart);
            const commentMatch = beforeSection.match(/(<!--[\s\S]*?-->\s*)$/);
            if (commentMatch) {
              sectionStart = sectionStart - commentMatch[1].length;
            }
            const sectionEnd = content.indexOf('</section>', markerIdx);
            if (sectionEnd !== -1) {
              content = content.slice(0, sectionStart) + localityHtml + '\n  ' + content.slice(sectionEnd + '</section>'.length);
              locReplaced = true;
              break;
            }
          }
        }
      }
    }

    // D: If still not replaced (e.g. tv/ and washing-machine/ files without existing locality section), inject right after experience section or before FAQ
    if (!locReplaced) {
      if (content.includes('<!-- Customer Service Experiences Section -->')) {
        const expIdx = content.indexOf('<!-- Customer Service Experiences Section -->');
        const expEnd = content.indexOf('</section>', expIdx);
        if (expEnd !== -1) {
          content = content.slice(0, expEnd + '</section>'.length) + '\n\n  ' + localityHtml + content.slice(expEnd + '</section>'.length);
          locReplaced = true;
        }
      } else if (content.includes('<!-- FAQ Section -->')) {
        const faqIdx = content.indexOf('<!-- FAQ Section -->');
        content = content.slice(0, faqIdx) + localityHtml + '\n\n  ' + content.slice(faqIdx);
        locReplaced = true;
      } else if (content.includes('<!-- Contact & Location Section -->')) {
        const contactIdx = content.indexOf('<!-- Contact & Location Section -->');
        content = content.slice(0, contactIdx) + localityHtml + '\n\n  ' + content.slice(contactIdx);
        locReplaced = true;
      }
    }

    if (locReplaced) localityUpdatedCount++;
  }

  // 8. 10+ High-Quality FAQs on EVERY relevant page
  if (f !== 'sitemap.html') {
    let faqs = [];
    let faqTitle = '';
    if (info.folder === 'ac') {
      faqs = getAcFaqs(info.brand);
      faqTitle = `${info.brand ? info.brand + ' ' : ''}Air Conditioner Repair`;
    } else if (info.folder === 'fridge') {
      faqs = getFridgeFaqs(info.brand);
      faqTitle = `${info.brand ? info.brand + ' ' : ''}Refrigerator Repair`;
    } else if (info.folder === 'washing-machine') {
      faqs = getWashingMachineFaqs(info.brand);
      faqTitle = `${info.brand ? info.brand + ' ' : ''}Washing Machine Repair`;
    } else if (info.folder === 'tv') {
      faqs = getTvFaqs(info.brand);
      faqTitle = `${info.brand ? info.brand + ' ' : ''}Television Repair`;
    } else if (info.folder === 'microwave') {
      faqs = getMicrowaveFaqs(info.brand);
      faqTitle = `${info.brand ? info.brand + ' ' : ''}Microwave Oven Repair`;
    } else if (info.folder === 'servicecenter') {
      faqs = getServiceCenterFaqs(info.brand);
      faqTitle = `${info.brand ? info.brand + ' ' : ''}Service Center Support`;
    } else if (info.folder === 'root') {
      faqs = getHomeFaqs();
      faqTitle = 'Home Appliance Repair';
    }

    const faqHtml = buildFaqSectionHtml(faqTitle, faqs);
    let faqReplaced = false;

    // Check if existing FAQ section exists
    const faqIdx = content.indexOf('Frequently Asked Questions');
    if (faqIdx !== -1) {
      let sectionStart = content.lastIndexOf('<section', faqIdx);
      if (sectionStart !== -1) {
        const beforeSection = content.slice(Math.max(0, sectionStart - 100), sectionStart);
        const commentMatch = beforeSection.match(/(<!--[\s\S]*?-->\s*)$/);
        if (commentMatch) {
          sectionStart = sectionStart - commentMatch[1].length;
        }
        const sectionEnd = content.indexOf('</section>', faqIdx);
        if (sectionEnd !== -1) {
          content = content.slice(0, sectionStart) + faqHtml + '\n  ' + content.slice(sectionEnd + '</section>'.length);
          faqReplaced = true;
        }
      }
    }

    // If no existing FAQ section (e.g. index.html or service-center-trichy.html), inject before Contact section or CTA
    if (!faqReplaced) {
      if (content.includes('<!-- Contact & Location Section -->')) {
        const contactIdx = content.indexOf('<!-- Contact & Location Section -->');
        content = content.slice(0, contactIdx) + faqHtml + '\n\n  ' + content.slice(contactIdx);
        faqReplaced = true;
      } else if (content.includes('<!-- CTA Banner Section -->')) {
        const ctaIdx = content.indexOf('<!-- CTA Banner Section -->');
        content = content.slice(0, ctaIdx) + faqHtml + '\n\n  ' + content.slice(ctaIdx);
        faqReplaced = true;
      } else if (content.includes('<footer')) {
        const footerIdx = content.indexOf('<footer');
        content = content.slice(0, footerIdx) + faqHtml + '\n\n  ' + content.slice(footerIdx);
        faqReplaced = true;
      }
    }

    if (faqReplaced) faqsExpandedCount++;
  }

  // Check if content changed
  if (content !== fs.readFileSync(f, 'utf8')) {
    fs.writeFileSync(f, content, 'utf8');
    modifiedCount++;
  }
});

console.log('=== TRANSFORMATION COMPLETE ===');
console.log('Total files processed:', files.length);
console.log('Total files modified:', modifiedCount);
console.log('Top bar removed count:', topBarRemovedCount);
console.log('Localities updated to 200 real Trichy areas:', localityUpdatedCount);
console.log('Customer experiences updated (Tanglish + ratings):', expUpdatedCount);
console.log('FAQ sections updated (10+ items):', faqsExpandedCount);
