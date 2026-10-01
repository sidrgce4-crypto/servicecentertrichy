// Complete Content Synthesizer for High Diversity & Zero Duplication
const { BRAND_INTEL } = require('./master_brand_content.js');

function formatBrandName(slug) {
  if (!slug) return '';
  const s = slug.toLowerCase();
  const uppers = ['ac', 'tv', 'bpl', 'ifb', 'iffalcon', 'mi', 'tcl', 'vu', 'vw', 'lg'];
  if (uppers.includes(s)) return s.toUpperCase();
  if (s === 'voltas-beko') return 'Voltas Beko';
  if (s === 'blue-star') return 'Blue Star';
  if (s === 'white-westinghouse') return 'White Westinghouse';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// Generate brand-tailored content dynamically for any brand
function getPageContent(folder, brandSlug, filename) {
  const brandKey = (brandSlug || '').toLowerCase();
  const brandName = formatBrandName(brandSlug);

  // Check manual intel first
  if (BRAND_INTEL[brandKey]) {
    const intel = BRAND_INTEL[brandKey];
    let catKey = folder;
    if (folder === 'washing-machine') catKey = 'wm';
    if (folder === 'servicecenter') catKey = 'sc';
    if (folder === 'microwave') catKey = 'mw';
    if (intel[catKey]) {
      return intel[catKey];
    }
  }

  // High-entropy brand generator based on appliance and brand identity
  if (folder === 'washing-machine') {
    if (!brandSlug) {
      return {
        hero: 'When your washing machine refuses to spin, overflows with water, or vibrates violently across the floor, daily household routines in Trichy come to a complete halt. Our local doorstep technicians inspect and fix semi-automatic, top-load, and front-load washing machines across all Trichy neighborhoods with honest advice and clear repair costs.',
        p1: 'A dependable washing machine is essential for every Trichy household, especially with busy family routines and the mineral hardness of local borewell water that often causes scale build-up inside inlet valves and drum assemblies.',
        p2: 'Whether your machine has stopped draining dirty wash water, displays perplexing error codes mid-wash, or produces loud metallic grinding sounds during high-speed extraction, our experienced technicians arrive equipped with multimeters, replacement belts, capacitors, and pump assemblies to diagnose the issue directly in your laundry area.'
      };
    }

    return {
      hero: `Is your ${brandName} washing machine displaying error codes, stopping mid-cycle, or failing to drain dirty water in Trichy? Our local technicians provide doorstep diagnostic inspections, belt replacements, and component repairs across all Trichy localities.`,
      p1: `${brandName} washing machines are widely used in Trichy homes for practical laundry care. However, continuous usage and mineral deposits from local water supplies often lead to common mechanical issues like clogged coin filters, slipping drive belts, or worn pulsator splines.`,
      p2: `When your ${brandName} washer makes unusual rumbling noises during high-speed spin or fills water without starting the agitation cycle, our technicians test water pressure switches, motor capacitors, and drain valves on-site, giving you an upfront estimate before any work begins.`
    };
  }

  if (folder === 'ac') {
    if (!brandSlug) {
      return {
        hero: 'In Trichy scorching summer heat and high temperatures, an air conditioner breakdown makes sleeping and working from home unbearable. When your AC blows warm air, drips water onto your wall, or trips the circuit breaker, our local technicians provide fast doorstep diagnostic checks, jet cleaning, gas leak testing, and electrical repairs across Trichy.',
        p1: 'Air conditioning systems in Tiruchirappalli district work under demanding conditions for several months each year. Continuous runtime frequently leads to choked cooling coil fins, low refrigerant levels from copper joint stress, weak compressor capacitors, and algae blocks in condensate drain trays.',
        p2: 'Our technicians arrive with manifold pressure gauges, digital multimeters, and high-pressure jet wash equipment to restore crisp cooling performance quickly and safely in your home.'
      };
    }

    return {
      hero: `Is your ${brandName} air conditioner blowing warm air, making a buzzing sound, or leaking water down the wall in your Trichy home? Our local cooling specialists provide prompt doorstep diagnosis, pressure jet cleaning, and refrigerant leak repairs.`,
      p1: `${brandName} air conditioning units are designed to withstand tropical climates, but peak summer heat in Trichy puts continuous demand on compressors and condenser fans. Airborne street dust often forms a thick blanket over outdoor cooling fins, reducing heat transfer and causing sudden thermal cutoffs.`,
      p2: `Our technicians inspect indoor blower fan speeds, test starting and running capacitors with digital capacitance meters, verify gas operating pressures, and clean evaporator coils thoroughly using protective wet-wash bags.`
    };
  }

  if (folder === 'fridge') {
    if (!brandSlug) {
      return {
        hero: 'A refrigerator that stops cooling can spoil milk, vegetables, and cooked food within hours in Trichy warm climate. Our local cooling technicians provide prompt same-day doorstep inspection and repair for single-door, double-door frost-free, and side-by-side refrigerators across all Trichy localities.',
        p1: 'When your refrigerator compressor clicks and shuts down, the freezer forms thick ice while the bottom compartment remains warm, or water pools underneath the crisper drawers, quick diagnostic attention is critical.',
        p2: 'Our Trichy technicians inspect PTC start relays, overload protectors, bimetal defrost sensors, and sealed refrigerant circuits directly in your kitchen, ensuring your refrigerator is restored to proper cooling temperatures without moving the appliance.'
      };
    }

    return {
      hero: `Facing cooling problems with your ${brandName} refrigerator in Trichy? Whether the freezer is accumulating thick frost while the lower compartment stays warm, or the compressor clicks every few minutes, our technicians provide same-day home visits across Trichy.`,
      p1: `${brandName} refrigerators are trusted in homes across Tiruchirappalli for food preservation and durable cooling circuits. Yet electrical voltage fluctuations and high ambient kitchen heat can cause defrost timers to jam, bimetal thermostats to fail, or compressor starter relays to burn out.`,
      p2: `Our technicians inspect the exact root cause in front of you, test component resistance with multimeters, and explain repair options with straightforward pricing before carrying out any work.`
    };
  }

  if (folder === 'tv') {
    if (!brandSlug) {
      return {
        hero: 'TV has sound but the screen is pitch dark? Red standby light blinking with no display? Our Trichy television technicians provide careful in-home diagnosis, LED backlight strip replacement, power supply repair, and motherboard troubleshooting across all Trichy neighborhoods.',
        p1: 'Modern LED, LCD, and Smart televisions are delicate entertainment hubs that can be risky and inconvenient to transport to repair shops. Our local technicians visit your home across Trichy equipped with LED backlight testers, regulated power meters, and component-level diagnostic tools.',
        p2: 'We handle common faults like dark screens, vertical color lines, HDMI port issues, and stuck brand logo bootloops with care and transparent pricing.'
      };
    }

    return {
      hero: `Is your ${brandName} TV showing a dark blank screen while sound plays in the background, refusing to turn on from standby, or stuck on the boot logo in Trichy? Our skilled television technicians diagnose and repair ${brandName} Smart LED TVs right at your home.`,
      p1: `${brandName} televisions deliver sharp picture clarity in Trichy living rooms, but electrical power surges and thermal stress inside slim cabinets can lead to backlight LED burnout, failed power supply MOSFETs, or T-Con logic board communication issues.`,
      p2: `We perform on-site panel testing and circuit diagnostics, explaining clearly whether component-level repair or part replacement is the most cost-effective path for your television.`
    };
  }

  if (folder === 'microwave') {
    if (!brandSlug) {
      return {
        hero: 'Microwave turning on but failing to heat food? Noticeable sparks crackling inside the cavity? Our Trichy technicians provide safe doorstep diagnosis and repair for solo, grill, and convection microwave ovens across all Trichy localities with genuine compatible parts.',
        p1: 'A malfunctioning microwave oven disrupts daily kitchen routines, from morning milk heating to evening meal reheating. Because microwave ovens contain high-voltage capacitors that retain electrical energy even when unplugged, home repairs must be handled by trained technicians.',
        p2: 'Our Trichy technicians diagnose magnetrons, high-voltage diodes, door safety switches, and keypad membranes safely at your home.'
      };
    }

    return {
      hero: `Is your ${brandName} microwave oven running without heating food, making a loud buzzing sound, or sparking inside the chamber in Trichy? Our technicians safely test high-voltage components and replace magnetrons, diodes, and door switches at your home.`,
      p1: `${brandName} microwave ovens make daily reheating, baking, and grilling effortless in Trichy kitchens. Common issues like food remaining cold despite the turntable rotating normally indicate a failed high-voltage capacitor, diode, or magnetron vacuum tube.`,
      p2: `Because these components operate at thousands of volts, our technicians use specialized discharge safety procedures to test circuits and replace worn parts safely at your residence.`
    };
  }

  if (folder === 'servicecenter') {
    if (!brandSlug) {
      return {
        hero: 'Looking for a reliable multi-brand appliance service center in Trichy? We provide expert doorstep inspection, maintenance, and genuine spare parts replacement for air conditioners, refrigerators, washing machines, televisions, and microwave ovens across Tiruchirappalli.',
        p1: 'Managing household appliances in Trichy requires dependable service technicians who understand both modern inverter electronics and heavy mechanical assemblies. From intense summer heat stressing AC cooling circuits to hard borewell water scaling up washing machine valves, timely local service keeps your home running smoothly.',
        p2: 'Our mobile technicians visit your premises equipped with professional diagnostic meters, pressure gauges, and replacement spares to troubleshoot and fix appliances on-site with clear pricing and no workshop transit hassle.'
      };
    }

    return {
      hero: `Searching for ${brandName} appliance repair in Trichy? From air conditioners and refrigerators to washing machines, televisions, and microwave ovens, our experienced doorstep technicians diagnose and service ${brandName} equipment on-site across Tiruchirappalli.`,
      p1: `${brandName} appliances are trusted across Trichy households for reliable everyday performance. When unexpected breakdowns occur, our local technicians provide prompt doorstep visits to inspect the fault, explain the root cause, and carry out necessary repairs using compatible replacement spares.`,
      p2: `Whether you need an AC gas leak test, washing machine unbalance calibration, refrigerator cooling restoration, or TV backlight replacement, we deliver transparent pricing and reliable service across all Trichy neighborhoods.`
    };
  }

  return {
    hero: 'Service Center Trichy provides professional doorstep home appliance diagnosis and repair across Tiruchirappalli.',
    p1: 'We service major household appliances across all North, South, East, and West Trichy localities with clear pricing and genuine compatible parts.',
    p2: 'Contact our local technicians for prompt doorstep visits and reliable on-site troubleshooting.'
  };
}

module.exports = { getPageContent, formatBrandName };
