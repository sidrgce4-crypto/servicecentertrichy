// Appliance Section Generator for Service Center Pages
// Provides dedicated, distinct sections for each major appliance with internal links.

function getServiceCenterApplianceSections(brand, isHub) {
  const b = brand ? `${brand} ` : '';
  const brandSlug = brand ? brand.toLowerCase().replace(/[^a-z0-9]+/g, '-') : '';

  // Determine internal links
  const acLink = brand ? `../ac/${brandSlug}-ac-repair-service-trichy.html` : `../ac/ac-repair-service-trichy.html`;
  const fridgeLink = brand ? `../fridge/${brandSlug}-fridge-repair-service-trichy.html` : `../fridge/fridge-repair-service-trichy.html`;
  const wmLink = brand ? `../washing-machine/${brandSlug}-washing-machine-repair-service-trichy.html` : `../washing-machine/washing-machine-repair-service-trichy.html`;
  const tvLink = brand ? `../tv/${brandSlug}-tv-repair-service-trichy.html` : `../tv/tv-repair-service-trichy.html`;
  const mwLink = brand ? `../microwave/${brandSlug}-microwave-repair-service-trichy.html` : `../microwave/microwave-repair-service-trichy.html`;

  return `
  <!-- Dedicated Appliance Services Section -->
  <section class="section" id="appliance-services">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">${b}Home Appliance Repair Services in Trichy</h2>
        <p class="section-subtitle">Doorstep inspection, genuine spare parts, and transparent repairs across all major household appliance categories in Trichy.</p>
      </div>

      <!-- 1. AC Service Block -->
      <div class="content-box" style="margin-bottom: 28px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 12px;">
          <h3 style="color: var(--primary); font-size: 1.3rem; margin: 0;">${b}Air Conditioner (AC) Service in Trichy</h3>
          <a href="${acLink}" class="btn btn-outline btn-sm">Dedicated AC Page &rarr;</a>
        </div>
        <p>In Trichy's tropical climate, continuous AC operation leads to dust build-up, gas pressure loss, and capacitor fatigue. Our local technicians visit your home across Srirangam, Thillai Nagar, KK Nagar, and surrounding areas to inspect split, window, and inverter AC systems.</p>
        <p><strong>Common AC Faults:</strong> Warm air blowing from indoor unit, water leaking down bedroom walls, compressor humming without starting, or indoor display showing sensor error codes.</p>
        <p><strong>Common Parts &amp; Solutions:</strong> Replacement of dual run capacitors, thermistor sensors, flare nuts, outdoor fan motors, and professional high-pressure jet cleaning to clear chokes.</p>
        <p><strong>Cost &amp; Pricing:</strong> Inspection fee is ₹249 to ₹349 (adjusted in bill). Electrical fixes range from ₹450 to ₹950; gas charging ranges from ₹1,450 to ₹2,850. Final cost depends on the fault and part required.</p>
      </div>

      <!-- 2. Washing Machine Service Block -->
      <div class="content-box" style="margin-bottom: 28px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 12px;">
          <h3 style="color: var(--primary); font-size: 1.3rem; margin: 0;">${b}Washing Machine Repair in Trichy</h3>
          <a href="${wmLink}" class="btn btn-outline btn-sm">Dedicated Washing Machine Page &rarr;</a>
        </div>
        <p>Whether you use a semi-automatic washer, top-load fully automatic, or high-efficiency front-load machine in Trichy, heavy wash loads and hard groundwater can cause mechanical wear and drainage blockages over time.</p>
        <p><strong>Common Washing Machine Faults:</strong> Spin tub not spinning, water continuously filling without stopping, machine stopping mid-cycle with drain error, severe vibration, or front door lock stuck.</p>
        <p><strong>Common Parts &amp; Solutions:</strong> Solenoid inlet valves, drain pumps, drive belts, motor start capacitors, suspension damper rods, pressure switches, and PCB circuit repair.</p>
        <p><strong>Cost &amp; Pricing:</strong> Inspection fee is ₹249 to ₹349. Minor mechanical and electrical fixes start from ₹350–₹650; part replacements range between ₹650 and ₹2,200 depending on model compatibility.</p>
      </div>

      <!-- 3. Refrigerator Service Block -->
      <div class="content-box" style="margin-bottom: 28px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 12px;">
          <h3 style="color: var(--primary); font-size: 1.3rem; margin: 0;">${b}Refrigerator (Fridge) Service in Trichy</h3>
          <a href="${fridgeLink}" class="btn btn-outline btn-sm">Dedicated Fridge Page &rarr;</a>
        </div>
        <p>A non-cooling refrigerator risks quick food spoilage. Our Trichy technicians provide same-day home visits to check single-door direct cool, double-door frost-free, and inverter refrigerators across town.</p>
        <p><strong>Common Refrigerator Faults:</strong> Freezer working but bottom cabin warm, compressor clicking and shutting down, excessive frost accumulation, water leaking on kitchen floor, or gas leakage.</p>
        <p><strong>Common Parts &amp; Solutions:</strong> PTC start relays, overload protectors, bimetal defrost sensors, defrost timers, heating glass tubes, door rubber gaskets, and sealed-system gas refilling.</p>
        <p><strong>Cost &amp; Pricing:</strong> Doorstep inspection fee is ₹249 to ₹349. Defrost electrical parts range from ₹550 to ₹1,450; compressor relays range from ₹450 to ₹850. Final quote provided before part installation.</p>
      </div>

      <!-- 4. TV Service Block -->
      <div class="content-box" style="margin-bottom: 28px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 12px;">
          <h3 style="color: var(--primary); font-size: 1.3rem; margin: 0;">${b}Television (LED / Smart TV) Repair in Trichy</h3>
          <a href="${tvLink}" class="btn btn-outline btn-sm">Dedicated TV Page &rarr;</a>
        </div>
        <p>From 32-inch LED TVs to 55-inch 4K Smart TVs, our technicians carry out careful diagnostic tests at your home in Trichy without risking panel damage from transporting delicate screens.</p>
        <p><strong>Common TV Faults:</strong> Sound present but screen completely dark (backlight failure), no standby power light, horizontal or vertical colored lines, Wi-Fi disconnection, or TV stuck on boot logo.</p>
        <p><strong>Common Parts &amp; Solutions:</strong> High-lumen LED backlight strips, SMPS power supply boards, T-Con boards, speaker modules, and mainboard firmware recovery.</p>
        <p><strong>Cost &amp; Pricing:</strong> Home inspection charge is ₹249 to ₹349. Power supply board repair starts from ₹650; complete LED backlight replacement ranges from ₹1,450 to ₹3,200 depending on screen size.</p>
      </div>

      <!-- 5. Microwave Oven Service Block -->
      <div class="content-box">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 12px;">
          <h3 style="color: var(--primary); font-size: 1.3rem; margin: 0;">${b}Microwave Oven Service in Trichy</h3>
          <a href="${mwLink}" class="btn btn-outline btn-sm">Dedicated Microwave Page &rarr;</a>
        </div>
        <p>We provide safe, prompt doorstep repairs for solo, grill, and convection microwave ovens in Trichy homes. Technicians use insulated safety gear to test high-voltage heating circuits on-site.</p>
        <p><strong>Common Microwave Faults:</strong> Oven runs but does not heat food, visible sparking inside the cooking cavity, glass plate not turning, touch keypad buttons not responding, or fuse blowing.</p>
        <p><strong>Common Parts &amp; Solutions:</strong> Magnetron vacuum tubes, high-voltage diodes, HV capacitors, mica waveguide cover sheets, turntable synchronous motors, and membrane keypads.</p>
        <p><strong>Cost &amp; Pricing:</strong> Inspection charge is ₹249 to ₹349. Mica sheet replacement is ₹350–₹500; magnetron replacement ranges from ₹1,250 to ₹2,400. Final estimate confirmed before work begins.</p>
      </div>
    </div>
  </section>
`;
}

module.exports = {
  getServiceCenterApplianceSections
};
