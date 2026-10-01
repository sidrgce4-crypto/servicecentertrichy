// Specialized Natural Introductions Generator
// Generates unique, humanized, brand-specific and problem-first introductions.
// Eliminates repetitive "You came to the right place" and AI-style templates.

function getUniqueIntroduction(folder, brand) {
  const b = brand || '';
  
  if (folder === 'washing-machine') {
    if (!brand) {
      return {
        heroP: `When your washing machine refuses to spin, overflows with water, or vibrates violently across the floor, daily household chores in Trichy come to a complete halt. Our local doorstep technicians visit your home to inspect, troubleshoot, and fix semi-automatic, top-load, and front-load washing machines across all Trichy neighborhoods with honest advice and clear repair costs.`,
        firstP: `A dependable washing machine is essential for every Trichy household, especially with busy family routines and the mineral hardness of local borewell water that often causes scale build-up inside inlet valves and drum assemblies. Whether your machine has stopped draining dirty wash water, displays perplexing error codes mid-wash, or produces loud metallic grinding sounds during high-speed extraction, our experienced technicians arrive equipped with multimeters, replacement belts, capacitors, and pump assemblies to diagnose the issue directly in your laundry area.`
      };
    }
    // Brand specific washing machine
    return {
      heroP: `Having trouble with your ${b} washing machine in Trichy? Whether it is a front-load drum failing to spin, a top-load washer trapped on an unbalanced load error, or a semi-automatic twin tub with a dead spin timer, our local technicians provide dependable doorstep diagnosis and on-site repair across Trichy.`,
      firstP: `${b} washing machines are popular across Trichy homes for their wash efficiency and fabric care, but regular use and local water conditions can eventually lead to common component wear. Common faults we inspect on-site include blocked drain coin traps, worn suspension damper shock absorbers causing heavy tub banging, faulty water level pressure switches causing continuous filling, and burnt motor capacitors. We test every component thoroughly before suggesting repairs, giving you an upfront estimate before any work starts.`
    };
  }

  if (folder === 'ac') {
    if (!brand) {
      return {
        heroP: `In Trichy's scorching summer heat and high temperatures, an air conditioner breakdown makes sleeping and working from home unbearable. When your AC blows warm air, drips water onto your wall, or trips the circuit breaker, our local technicians provide fast doorstep diagnostic checks, jet cleaning, gas leak testing, and electrical repairs across Trichy.`,
        firstP: `Air conditioning systems in Tiruchirappalli district work under demanding conditions for several months each year. Continuous runtime frequently leads to choked cooling coil fins, low refrigerant levels from copper joint stress, weak compressor capacitors, and algae blocks in condensate drain trays. Our technicians arrive with manifold pressure gauges, digital multimeters, and high-pressure jet wash equipment to restore crisp cooling performance quickly and safely in your home.`
      };
    }
    // Brand specific AC
    return {
      heroP: `Is your ${b} air conditioner not cooling properly, blowing room-temperature air, or leaking water down the wall in your Trichy home? Our local technicians provide expert on-site diagnosis, refrigerant leak testing, PCB troubleshooting, and pressure jet cleaning across all Trichy localities.`,
      firstP: `${b} air conditioners are widely relied upon across Trichy for surviving peak summer heat. However, continuous runtime in hot conditions places heavy strain on outdoor compressor capacitors, indoor blower fan bushings, and inverter control boards. When your ${b} AC flashes error codes, takes hours to cool a bedroom, or produces rattling noises from the outdoor unit, our experienced technicians check electrical circuits and gas pressure on-site, providing honest explanations and transparent pricing.`
    };
  }

  if (folder === 'fridge') {
    if (!brand) {
      return {
        heroP: `A refrigerator that stops cooling can spoil milk, vegetables, and cooked food within hours in Trichy's warm climate. Our local cooling technicians provide prompt same-day doorstep inspection and repair for single-door, double-door frost-free, and side-by-side refrigerators across all Trichy localities.`,
        firstP: `When your refrigerator's compressor clicks and shuts down, the freezer forms thick ice while the bottom compartment remains warm, or water pools underneath the crisper drawers, quick diagnostic attention is critical. Our Trichy technicians inspect PTC start relays, overload protectors, bimetal defrost sensors, and sealed refrigerant circuits directly in your kitchen, ensuring your refrigerator is restored to proper cooling temperatures without moving the appliance.`
      };
    }
    // Brand specific fridge
    return {
      heroP: `Facing cooling problems with your ${b} refrigerator in Trichy? Whether the freezer is freezing ice but the fresh food section is warm, the compressor is clicking repeatedly, or water is leaking onto your kitchen floor, our local technicians provide same-day home visits across Trichy with genuine compatible spare parts.`,
      firstP: `${b} refrigerators are trusted in homes across Trichy for efficient food preservation and durable cooling circuits. Yet electrical fluctuations and high ambient kitchen heat can cause defrost timers to jam, bimetal thermostats to fail, or compressor starter relays to burn out. Our technicians inspect the exact root cause in front of you, test component resistance with multimeters, and explain repair options with straightforward pricing before carrying out any work.`
    };
  }

  if (folder === 'tv') {
    if (!brand) {
      return {
        heroP: `TV has sound but the screen is pitch dark? Red standby light blinking with no display? Our Trichy television technicians provide careful in-home diagnosis, LED backlight strip replacement, power supply repair, and motherboard troubleshooting across all Trichy neighborhoods.`,
        firstP: `Modern LED, LCD, and Smart televisions are delicate entertainment hubs that can be risky and inconvenient to transport to repair shops. Our local technicians visit your home across Trichy equipped with LED backlight testers, regulated power meters, and component-level diagnostic tools. We handle common faults like dark screens, vertical color lines, HDMI port issues, and stuck brand logo bootloops with care and transparent pricing.`
      };
    }
    // Brand specific TV
    return {
      heroP: `Is your ${b} TV showing a blank dark screen while sound plays in the background, refusing to turn on, or stuck in a restart loop on the smart logo? Our skilled Trichy technicians diagnose and repair ${b} LED and Smart TVs right at your home across Trichy.`,
      firstP: `${b} televisions deliver excellent picture and audio quality in Trichy living rooms, but electrical power surges and thermal stress inside slim cabinets can lead to backlight LED burnout, failed power supply MOSFETs, or T-Con logic board communication issues. We perform on-site panel testing and circuit diagnostics, explaining clearly whether component-level repair or part replacement is the most cost-effective path for your television.`
    };
  }

  if (folder === 'microwave') {
    if (!brand) {
      return {
        heroP: `Microwave turning on but failing to heat food? Noticeable sparks crackling inside the cavity? Our Trichy technicians provide safe doorstep diagnosis and repair for solo, grill, and convection microwave ovens across all Trichy localities with genuine compatible parts.`,
        firstP: `A malfunctioning microwave oven disrupts daily kitchen routines, from morning milk heating to evening meal reheating. Because microwave ovens contain high-voltage capacitors that retain electrical energy even when unplugged, home repairs must be handled by trained technicians with proper grounding and discharge safety equipment. Our Trichy technicians diagnose magnetrons, high-voltage diodes, door safety switches, and keypad membranes safely at your home.`
      };
    }
    // Brand specific microwave
    return {
      heroP: `Need reliable repair for your ${b} microwave oven in Trichy? If your oven plate rotates but food stays cold, the keypad touch panel is unresponsive, or you notice sparking near the side wall, our technicians provide quick doorstep inspection across Trichy.`,
      firstP: `${b} microwave ovens are convenient kitchen essentials across Trichy homes, whether used for simple defrosting, grilling, or convection baking. When high-voltage heating circuits weaken, mica waveguide cover sheets become carbonized, or turntable motors fail, our technicians test components methodically on-site, giving you clear repair estimates and reliable doorstep service.`
    };
  }

  if (folder === 'servicecenter') {
    if (!brand) {
      return {
        heroP: `Your centralized multi-brand home appliance repair coordinator in Trichy. One local telephone helpline connects you to skilled doorstep technicians for AC, refrigerator, washing machine, TV, and microwave oven repairs across all Trichy neighborhoods.`,
        firstP: `Instead of searching for multiple independent mechanics and dealing with uncertain pricing, Service Center Trichy provides organized, doorstep technical support for major home appliances across Tiruchirappalli district. We coordinate qualified technicians with specialized experience in your specific appliance category, ensuring honest fault diagnosis, genuine compatible parts, and upfront cost estimates before any repair starts.`
      };
    }
    // Brand specific service center
    return {
      heroP: `Looking for dedicated ${b} home appliance repair assistance in Trichy? We provide independent, third-party doorstep service for ${b} air conditioners, refrigerators, washing machines, televisions, and microwave ovens across all Trichy localities with transparent rates.`,
      firstP: `Our local Trichy service desk provides dedicated doorstep repair coordination for households using ${b} appliances throughout Trichy and Tiruchirappalli district. Whether your ${b} cooling system needs seasonal servicing, your washer requires drum or pump attention, or your TV has display issues, our technicians arrive at your home with proper testing gear to deliver prompt, reliable, and economical repairs.`
    };
  }

  return {
    heroP: `Reliable doorstep home appliance repair across Trichy with upfront pricing, experienced local technicians, and dependable service coverage.`,
    firstP: `We provide comprehensive doorstep repair for air conditioners, refrigerators, washing machines, televisions, and microwave ovens across all Trichy neighborhoods.`
  };
}

module.exports = {
  getUniqueIntroduction
};
