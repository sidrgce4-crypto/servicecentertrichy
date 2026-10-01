const fs = require('fs');
const path = require('path');
const { northTrichy, eastTrichy, westTrichy, southTrichy } = require('./data_localities');
const { getWashingMachineFaqs } = require('./data_faqs');
const { getWashingMachineExperiences } = require('./data_experiences');
const { getWashingMachineTypesSection } = require('./data_types');
const { getUniqueIntroduction } = require('./data_intros');

const testFile = 'washing-machine/kelvinator-washing-machine-repair-service-trichy.html';
let content = fs.readFileSync(testFile, 'utf8');

console.log('Original file size:', content.length);

// 1. Remove Top Bar
content = content.replace(/<!-- Top Bar -->\s*<div class="top-bar">[\s\S]*?<\/div>\s*<\/div>/, '');
content = content.replace(/<div class="top-bar">[\s\S]*?<\/div>\s*<\/div>/, '');

// 2. Remove any old floating-call-btn
content = content.replace(/<!-- Mobile Floating Call Button -->\s*<a href="tel:[^"]*" class="floating-call-btn"[\s\S]*?<\/a>/g, '');
content = content.replace(/<a href="tel:[^"]*" class="floating-call-btn"[\s\S]*?<\/a>/g, '');

// 3. Add Floating Action Buttons & Bottom Action Bar before </body>
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
  </div>
`;

if (!content.includes('floating-side-whatsapp')) {
  content = content.replace('</body>', `${floatingHtml}\n</body>`);
}

// 4. Build 200 Locality Section with genuine Trichy localities
function buildLocalitySection(brand, appliance) {
  const keyword = `${brand ? brand + ' ' : ''}${appliance} Repair`;
  
  function buildCards(list, dirName) {
    return list.map(loc => `
          <div class="card" style="padding: 14px;">
            <strong style="color: var(--secondary); font-size: 0.95rem; display: block; margin-bottom: 4px;">📍 ${keyword} in ${loc}</strong>
            <span style="font-size: 0.825rem; color: var(--text-muted);">Doorstep checkup, genuine spare parts, and transparent repair service available in ${loc}. Call to schedule visit.</span>
          </div>`).join('\n');
  }

  return `
  <!-- Trichy Locality System (4 Directions, 200 Localities) -->
  <section class="section section-alt" id="localities">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">${keyword} Service Areas in Trichy</h2>
        <p class="section-subtitle">We provide doorstep ${keyword.toLowerCase()} inspection and repair across North, South, East, and West Trichy localities.</p>
      </div>

      <!-- North Trichy -->
      <div class="content-box" style="margin-bottom: 24px;">
        <h3 style="color: var(--primary); margin-bottom: 15px;">North Trichy Service Localities (50 Areas)</h3>
        <p style="font-size: 0.925rem; color: var(--text-muted); margin-bottom: 18px;">Doorstep ${keyword.toLowerCase()} service in North Trichy neighborhoods:</p>
        <div class="cards-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px;">
${buildCards(northTrichy, 'North')}
        </div>
      </div>

      <!-- East Trichy -->
      <div class="content-box" style="margin-bottom: 24px;">
        <h3 style="color: var(--primary); margin-bottom: 15px;">East Trichy Service Localities (50 Areas)</h3>
        <p style="font-size: 0.925rem; color: var(--text-muted); margin-bottom: 18px;">Doorstep ${keyword.toLowerCase()} service in East Trichy neighborhoods:</p>
        <div class="cards-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px;">
${buildCards(eastTrichy, 'East')}
        </div>
      </div>

      <!-- West Trichy -->
      <div class="content-box" style="margin-bottom: 24px;">
        <h3 style="color: var(--primary); margin-bottom: 15px;">West Trichy Service Localities (50 Areas)</h3>
        <p style="font-size: 0.925rem; color: var(--text-muted); margin-bottom: 18px;">Doorstep ${keyword.toLowerCase()} service in West Trichy neighborhoods:</p>
        <div class="cards-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px;">
${buildCards(westTrichy, 'West')}
        </div>
      </div>

      <!-- South Trichy -->
      <div class="content-box">
        <h3 style="color: var(--primary); margin-bottom: 15px;">South Trichy Service Localities (50 Areas)</h3>
        <p style="font-size: 0.925rem; color: var(--text-muted); margin-bottom: 18px;">Doorstep ${keyword.toLowerCase()} service in South Trichy neighborhoods:</p>
        <div class="cards-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px;">
${buildCards(southTrichy, 'South')}
        </div>
      </div>
    </div>
  </section>
`;
}

// Replace Locality section in kelvinator
const newLocalityHtml = buildLocalitySection('Kelvinator', 'Washing Machine');
const locStart = content.indexOf('<!-- Trichy Locality System');
if (locStart !== -1) {
  const locEnd = content.indexOf('<!-- Why Choose Us', locStart);
  if (locEnd !== -1) {
    content = content.slice(0, locStart) + newLocalityHtml + '\n  ' + content.slice(locEnd);
    console.log('Replaced locality section successfully!');
  }
}

// 5. Replace FAQs with 12 useful FAQs
function buildFaqSection(brand, appliance, faqs) {
  const title = brand ? `${brand} ${appliance}` : appliance;
  const faqItems = faqs.map(f => `
        <details class="faq-item">
          <summary><span>${f.q}</span></summary>
          <div class="faq-content">
            <p>${f.a}</p>
          </div>
        </details>`).join('\n');

  return `
  <!-- FAQ Section -->
  <section class="section" id="faq" style="background: var(--bg-alt);">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Frequently Asked Questions About ${title} Repair in Trichy</h2>
        <p class="section-subtitle">Helpful answers regarding doorstep checking, repairs, spare parts, and visiting charges in Trichy.</p>
      </div>

      <div class="faq-list">
${faqItems}
      </div>
    </div>
  </section>
`;
}

const faqs = getWashingMachineFaqs('Kelvinator');
const newFaqHtml = buildFaqSection('Kelvinator', 'Washing Machine', faqs);

const faqStart = content.indexOf('<!-- FAQ Section -->');
if (faqStart !== -1) {
  const faqEnd = content.indexOf('<!-- Peer Brands Section -->', faqStart);
  if (faqEnd !== -1) {
    content = content.slice(0, faqStart) + newFaqHtml + '\n  ' + content.slice(faqEnd);
    console.log('Replaced FAQ section successfully!');
  }
}

// 6. Replace Customer Service Experiences with Tanglish & varied ratings
function buildExperienceSection(brand, appliance, exps) {
  const title = brand ? `${brand} ${appliance}` : appliance;
  const expCards = exps.map(e => `
        <div class="experience-card">
          <div class="exp-meta">
            <span class="exp-type-tag">${e.tag}</span>
            <span class="exp-rating">⭐ ${e.rating}</span>
          </div>
          <p>"${e.text}"</p>
        </div>`).join('\n');

  return `
  <!-- Customer Service Experiences Section -->
  <section class="section" id="experiences">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Common Customer Service Experiences</h2>
        <p class="section-subtitle">Service Experience Examples - typical situations handled by our technicians for ${title} across Trichy.</p>
      </div>

      <div class="experience-grid">
${expCards}
      </div>
    </div>
  </section>
`;
}

const exps = getWashingMachineExperiences('Kelvinator');
const newExpHtml = buildExperienceSection('Kelvinator', 'Washing Machine', exps);

const expStart = content.indexOf('<!-- Customer Service Experiences Section -->');
if (expStart !== -1) {
  const expEnd = content.indexOf('<!-- Why Choose Us -->', expStart);
  if (expEnd !== -1) {
    content = content.slice(0, expStart) + newExpHtml + '\n  ' + content.slice(expEnd);
    console.log('Replaced experience section successfully!');
  }
}

// 7. Humanize intro
const intro = getUniqueIntroduction('washing-machine', 'Kelvinator');
content = content.replace(/<section class="hero">[\s\S]*?<p>([\s\S]*?)<\/p>/, (match, p) => {
  return match.replace(p, intro.heroP);
});

fs.writeFileSync(testFile, content, 'utf8');
console.log('Test file written successfully! New length:', content.length);
console.log('Has top bar:', content.includes('top-bar'));
console.log('Has Vadasery:', content.includes('Vadasery'));
console.log('Has Srirangam:', content.includes('Srirangam'));
console.log('FAQ count:', (content.match(/<details\s+class="faq-item"/g) || []).length);
console.log('Experience count:', (content.match(/class="experience-card"/g) || []).length);
console.log('Floating whatsapp:', content.includes('floating-side-whatsapp'));
