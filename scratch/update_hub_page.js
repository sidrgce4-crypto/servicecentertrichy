const fs = require('fs');
const path = require('path');

const scratchPath = 'C:/Users/thaku/.gemini/antigravity-ide/brain/d3d92cf3-7442-4e19-9aa4-5f6f56cee962/scratch/';
const allBrands = [
  ...require(scratchPath + 'sc_brands_batch1.js'),
  ...require(scratchPath + 'sc_brands_batch2.js'),
  ...require(scratchPath + 'sc_brands_batch3.js'),
  ...require(scratchPath + 'sc_brands_batch4.js')
];

allBrands.sort((a, b) => a.name.localeCompare(b.name));

const hubFile = path.resolve(__dirname, '../servicecenter/service-center-trichy.html');
let content = fs.readFileSync(hubFile, 'utf8');

const brandLinksHtml = allBrands.map(b => {
  return `          <li><a href="${b.slug}-service-center-trichy.html">${b.name} Service Center</a></li>`;
}).join('\n');

const newSection = `
      <!-- Brand-Wise Service Center Directory -->
      <div class="links-box" style="margin-top: 30px;">
        <h3>Brand-Wise Appliance Service Centers in trichy</h3>
        <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 16px;">Select your appliance manufacturer below for dedicated local repair details, common problems, indicative pricing, and doorstep service coordination across trichy and Kanyakumari district:</p>
        <ul class="links-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 10px; list-style: none; padding-left: 0;">
${brandLinksHtml}
        </ul>
      </div>`;

// Insert before `<!-- Appliance / Service Links Section -->`
if (content.includes('<!-- Appliance / Service Links Section -->')) {
  content = content.replace('<!-- Appliance / Service Links Section -->', newSection + '\n\n      <!-- Appliance / Service Links Section -->');
  fs.writeFileSync(hubFile, content, 'utf8');
  console.log('Successfully added 58 brand links to service-center-trichy.html');
} else {
  console.log('Target placeholder not found in hub file');
}
