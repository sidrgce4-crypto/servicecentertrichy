const fs = require('fs');
const path = require('path');

// Specific, non-formulaic brand openings with distinct syntax and problem combinations
const WM_OPENINGS = {
  'kelvinator': {
    hero: 'Spin dryer tub dead, wash timer ticking endlessly, or water leaking from the bottom rubber bellows of your Kelvinator twin-tub machine in Trichy? Our local technicians carry heavy-duty capacitors, timer mechanisms, and drain seals for fast doorstep repairs.',
    p1: 'Kelvinator semi-automatic and top-load washing machines have been laundry stalwarts in Trichy households for decades, known for heavy-gauge plastic cabinets and durable wash motors. Common faults we inspect on-site include worn-out spin shaft water seals that allow soapy water to drip onto the spin motor windings, causing sudden short circuits.',
    p2: 'Mechanical spring timers can also gather dust and jam mid-wash, leaving the motor permanently energized or refusing to advance to the rinse phase. Our technicians test motor windings, replace water seals, and install fresh mechanical timers directly in your wash area.'
  },
  'bpl': {
    hero: 'Struggling with a snapped drive belt, jammed pulsator plate, or dead spin motor capacitor on your classic BPL washing machine in Trichy? We provide doorstep mechanical repairs and genuine compatible replacement parts across all Trichy neighborhoods.',
    p1: 'BPL washing machines were among the early domestic laundry pioneers across Tiruchirappalli. While their mechanical gearboxes and wash motors are exceptionally sturdy, years of daily laundry and exposure to hard water often strip the plastic splines underneath the wash pulsator.',
    p2: 'When the wash motor hums but the clothes do not agitate, or the drain selector cable snaps inside the top console, our experienced technicians arrive with replacement pulleys, capacitors, and universal drain valves to restore smooth washing without workshop delays.'
  },
  'panasonic': {
    hero: 'Is your Panasonic top-load washer trapped on an unbalance error, failing to fill water through its ActiveFoam inlet, or showing an H error in Trichy? Our doorstep technicians diagnose electronic sensors, clean inlet valves, and replace suspension rods on-site.',
    p1: 'Panasonic washing machines, equipped with StainMaster pulsators and Econavi sensors, provide thorough fabric care. However, fine mineral grit in Trichy borewell water often blocks the fine mesh screens inside Panasonic water inlet valves, resulting in sluggish filling or cycle timeouts.',
    p2: 'Worn suspension damper springs can also trigger persistent unbalance halts during high-speed spin extraction. Our technicians test solenoid coils with multimeters, clear valve calcification, and replace worn suspension struts at your home.'
  },
  'lloyd': {
    hero: 'Loud tub rattling during high-speed extraction or lid sensor error stopping your Lloyd top-loader from starting the spin cycle in Trichy? Our local technicians provide prompt doorstep inspections and component replacements across Trichy.',
    p1: 'Lloyd washing machines, backed by Havells engineering, are favored for rapid wash cycles and toughened glass lids. Frequent complaints in Trichy homes involve magnetic lid safety switches failing to engage, which safely locks out the spin tub and halts the cycle.',
    p2: 'When washing machines shake violently or fail to drain dirty wash water through the bottom synchronous motor, our technicians inspect tub balance, clear the drain coin trap, and replace faulty lid switches right at your residence.'
  },
  'siemens': {
    hero: 'Facing an E18 drain pump blockage, door seal water leak, or iQdrive motor communication error on your Siemens front-loader in Trichy? Our technicians provide precision doorstep diagnostics and genuine-grade component servicing.',
    p1: 'Siemens front-load washing machines feature brushless iQdrive motors, speedExpert cycles, and sensitive water leak sensors. Hard water scale in Trichy often builds up on the internal immersion heating element, leading to heating failure or tripping the household earth leakage breaker.',
    p2: 'When foreign objects like coins or hairpins jam the front magnetic drain pump impeller, triggering an E18 fault, our technicians disassemble the pump housing, clear debris, and test motor control boards safely at your premises.'
  },
  'toshiba': {
    hero: 'Toshiba GreatWaves top-load or front-load washer refusing to drain water or making heavy grinding noises during spin in Trichy? Our local technicians diagnose Origin Inverter motors, clean drain pumps, and replace worn belts at your doorstep.',
    p1: 'Toshiba washing machines use GreatWaves pulsator action and ultra-fine bubble technology for deep stain removal. In Tiruchirappalli homes, prolonged usage can cause the drain motor pull-cable to loosen or lint to choke the drain housing, leaving dirty water standing inside the drum.',
    p2: 'Our technicians inspect gearbox spline wear, test drain valve opening clearances, and replace slipping drive belts on-site with transparent, upfront pricing.'
  },
  'videocon': {
    hero: 'Semi-automatic twin-tub spin dryer not spinning, or water leaking through the drain valve on your Videocon washing machine in Trichy? Our local technicians provide doorstep repairs with genuine compatible mechanical spares.',
    p1: 'Videocon twin-tub washers remain active in numerous Trichy residences due to their rust-free plastic bodies and simple mechanical controls. Common issues stem from deteriorated rubber drain flappers that let water seep out constantly through the drain hose.',
    p2: 'Weak dual-run motor capacitors can also cause the spin dryer to hum without spinning clothes dry. Our technicians replace drain flapper springs, install heavy-gauge capacitors, and adjust spin tub brake shoes directly in your laundry area.'
  },
  'haier': {
    hero: 'Haier washer showing an E1 drain delay, E4 unbalance warning, or Near Zero Pressure inlet valve choked with borewell sediment in Trichy? Our doorstep technicians service NZP valves, drain motors, and suspension rods across Trichy.',
    p1: 'Haier washing machines are popular in Trichy for their Near Zero Pressure technology, which operates efficiently even in homes with low overhead tank gravity head. However, scale buildup inside the NZP valve can restrict incoming water flow, causing cycle stalls.',
    p2: 'When the machine spins, uneven laundry distribution or slack suspension springs can throw the drum off balance, triggering an E4 alert. Our doorstep technicians inspect pressure tubes, clean inlet screens, and replace worn suspension struts on-site.'
  },
  'hitachi': {
    hero: 'Hitachi front-load or top-load washer displaying an error code, drum bearing making a roaring noise, or door latch failing to unlock in Trichy? Our technicians provide specialized doorstep diagnostics and component replacements.',
    p1: 'Hitachi washing machines feature dynamic beat pulsators and high-precision electronic control boards. Hard borewell water and heavy laundry loads in Trichy can put stress on drum bearing seals, eventually causing water ingress into the bearing raceway and creating loud metallic roars during spin.',
    p2: 'Our technicians test electronic door lock solenoids, examine water level pressure transducers, and service drive motors at your home without workshop transport.'
  },
  'electrolux': {
    hero: 'Water leaking from the detergent drawer, door gasket torn, or front-load drum failing to rotate smoothly on your Electrolux washing machine in Trichy? Our technicians provide doorstep repair and genuine compatible spare parts.',
    p1: 'Electrolux front-load and top-load washers are engineered with Scandinavian design principles for fabric care. In Trichy conditions, excessive detergent foam and calcification can clog the siphon tubes in the dispenser drawer, causing water to spill down the front cabinet.',
    p2: 'Our technicians inspect front door boot gaskets, check motor carbon brushes or inverter drive circuits, and test drain pumps to restore smooth, leak-free washing.'
  },
  'onida': {
    hero: 'Crystal wash pulsator slipping, spin brake shoe rubbing against the motor, or drain selector knob broken on your Onida washer in Trichy? Our technicians provide doorstep mechanical and electrical repairs across all Trichy localities.',
    p1: 'Onida washing machines, especially HydroFall and semi-automatic twin-tub models, are prized for powerful water currents and economical maintenance. A common failure in older units is the wash pulsator slipping on a stripped center drive bush.',
    p2: 'When spin tubs slow down abruptly or wash timers stop advancing, our technicians replace drive belts, adjust brake tension cables, and install fresh start capacitors on-site.'
  },
  'intex': {
    hero: 'Intex twin-tub washing machine spin motor dead or wash timer gear stripped and clicking without moving clothes in Trichy? Our technicians provide quick doorstep mechanical repairs and capacitor replacements.',
    p1: 'Intex semi-automatic washers offer practical, low-cost laundry solutions for small families in Trichy. However, mechanical timers made of plastic gears can strip teeth after a few years of regular use, causing the timer to tick without sending power to the motor.',
    p2: 'Our technicians test motor winding continuity, replace faulty mechanical timers, and install moisture-proof spin seals right at your doorstep.'
  },
  'kenstar': {
    hero: 'Kenstar washer tub vibrating violently during spin extraction or water continuously draining out the pipe in Trichy? Our technicians service drain flappers, replace suspension dampers, and test drive motors on-site.',
    p1: 'Kenstar top-load and semi-automatic washers provide reliable daily cleaning, but debris like coins and safety pins frequently lodge inside the gravity drain valve flapper, preventing the machine from holding water during the wash cycle.',
    p2: 'Our technicians clear trapped objects, renew rubber flapper seals, and rebalance inner wash tubs so your machine washes and spins without floor vibration.'
  },
  'midea': {
    hero: 'Midea washing machine display touch buttons unresponsive, water inlet solenoid buzzing without filling, or drain pump seized in Trichy? Our doorstep technicians diagnose electronic PCBs and mechanical components across Trichy.',
    p1: 'Midea washing machines feature electronic fuzzy logic and water-saving agitation cycles. In Trichy, electrical voltage fluctuations can sometimes cause micro-controller freezes or damage the power supply section of the main PCB.',
    p2: 'Our technicians test DC voltage rails, clean sediment from incoming solenoid valves, and replace seized drain synchronous motors on-site with clear pricing.'
  },
  'motorola': {
    hero: 'Motorola smart Wi-Fi washing machine halting mid-cycle with a motor drive error or unbalance sensor alarm in Trichy? Our technicians provide electronic and mechanical doorstep troubleshooting across Trichy.',
    p1: 'Motorola smart washing machines incorporate digital inverter drives and smart sensor networks. When unbalanced laundry loads cause repeated cycle halts or the smart display panel shows error codes, component-level testing is essential.',
    p2: 'Our technicians inspect motor hall sensors, verify tub suspension spring tension, and service electronic control boards directly at your premises.'
  },
  'sharp': {
    hero: 'Sharp holeless tub washer refusing to drain, pulsator loose on shaft, or lid lock switch broken in Trichy? Our technicians provide doorstep diagnosis and component servicing across all Trichy neighborhoods.',
    p1: 'Sharp washing machines with unique holeless stainless steel tubs prevent mould growth between the inner and outer drums. However, lint accumulation inside the bottom drain passage can slow drainage and trigger system error alarms.',
    p2: 'Our technicians inspect electronic lid lock mechanisms, clear internal drain channels, and tighten wash pulsator mountings on-site with genuine compatible parts.'
  },
  'tcl': {
    hero: 'TCL front-load washer door gasket torn, drain filter clogged, or spin cycle stopping before high-speed extraction in Trichy? Our technicians diagnose door interlocks, drain pumps, and inverter drive boards at your home.',
    p1: 'TCL front-load and top-load washing machines feature honeycomb drums and brushless inverter motors. Common service calls in Trichy include drainage halts caused by hairpins or coin blockages in the front coin trap filter.',
    p2: 'Our technicians clear pump obstructions, test electronic door latch switches, and balance drum suspension dampers directly at your doorstep.'
  },
  'thomson': {
    hero: 'Thomson washing machine motor humming without turning the wash plate, or spin lid safety switch failed in Trichy? Our technicians provide fast doorstep mechanical and electrical repairs across Trichy.',
    p1: 'Thomson semi-automatic and top-load washers are popular for value-driven laundry care. Common issues include worn V-belts slipping off motor pulleys or weak motor start capacitors preventing the spin tub from reaching full extraction speed.',
    p2: 'Our technicians carry replacement drive belts, heavy-duty capacitors, and mechanical lid switches to repair your Thomson washer in a single home visit.'
  },
  'daewoo': {
    hero: 'Air bubble wash pulsator not agitating or drain pump motor burnt out on your Daewoo washing machine in Trichy? Our technicians provide skilled doorstep mechanical repairs and component replacements.',
    p1: 'Daewoo washing machines, known for air bubble wash technology, rely on dynamic pulsator agitation. Over time, sediment from borewell water can cause the air bubble generator nozzle to clog or scale up the water inlet valve.',
    p2: 'Our technicians clean internal water manifolds, replace worn drive belts, and install fresh drain pump motors right at your residence.'
  },
  'havells': {
    hero: 'Havells washing machine wash timer jammed, drain flapper leaking, or motor capacitor weak in Trichy? Our technicians provide doorstep mechanical servicing with genuine compatible spares.',
    p1: 'Havells washing machines combine robust electrical engineering with user-friendly wash controls. When heavy laundry loads strain the wash motor capacitor or mechanical timer knobs become loose, our technicians diagnose the issue on-site.',
    p2: 'We test electrical resistance, clean drain tracks, and replace mechanical switches in your laundry area with upfront estimates.'
  },
  'voltas': {
    hero: 'AquaWave drum banging against the cabinet, drain error E05, or child lock jammed on your Voltas Beko washer in Trichy? Our technicians provide doorstep diagnosis and part replacement across Trichy.',
    p1: 'Voltas Beko washing machines feature ProSmart inverter motors and gentle AquaWave drum designs. In Trichy, hard water scale often clogs the dual-action water inlet valve, causing sluggish filling and cycle delays.',
    p2: 'Our technicians inspect pressure level sensors, clean drain pump coin traps, and replace worn suspension dampers directly at your home.'
  },
  'acer': {
    hero: 'Acer washing machine inlet valve choked with hard water calcium or spin tub failing to reach balance in Trichy? Our technicians provide prompt doorstep diagnostic visits and component repairs.',
    p1: 'Acer washing machines offer modern wash programs and smart balancing logic. Exposure to Trichy mineral-rich water can lead to calcium deposits inside the inlet solenoid screen, restricting water flow and causing filling error codes.',
    p2: 'Our technicians clean internal valve screens, inspect electronic pressure sensors, and adjust tub suspension dampers on-site.'
  }
};

const AC_OPENINGS = {
  'panasonic': {
    hero: 'Panasonic Miraie smart AC flashing an H11 communication fault or nanoe-X air purification filter choked with dust in Trichy? Our technicians provide doorstep PCB diagnostics, sensor testing, and pressure jet cleaning across Trichy.',
    p1: 'Panasonic air conditioners with twin-rotary inverter compressors and nanoe-X air purification provide superior indoor air quality. However, continuous operation in Trichy high summer temperatures can stress outdoor inverter PCBs, resulting in the common H11 indoor-outdoor communication error.',
    p2: 'Our technicians arrive equipped with electronic diagnostic multimeters, replacement thermistor sensors, and high-pressure jet wash equipment to restore clean, icy airflow in your home.'
  },
  'sharp': {
    hero: 'Sharp Plasmacluster inverter AC cooling airflow weak or outdoor compressor shutting down in peak afternoon heat in Trichy? Our technicians service inverter PCBs, clear clogged condenser fins, and recharge refrigerant on-site.',
    p1: 'Sharp air conditioners featuring Plasmacluster ion technology and J-Tech inverters deliver high energy efficiency. In Tiruchirappalli dusty conditions, outdoor heat exchanger coils can quickly become blanketed in grime, forcing the compressor to shut down on thermal overload.',
    p2: 'Our technicians perform deep chemical jet cleaning, check R32 refrigerant pressures with manifold gauges, and repair inverter control boards at your doorstep.'
  },
  'onida': {
    hero: 'Onida split AC blower fan squeaking noisily at night or refrigerant gas leaked from copper flare joints in Trichy? Our technicians provide doorstep leak detection, brazing repairs, and capacitor replacements.',
    p1: 'Onida air conditioners provide powerful cooling for Indian summers, but prolonged running in Trichy can cause indoor cross-flow blower bushings to dry out and squeak. Copper vibration stress can also develop hairline pinholes at the service flare nuts.',
    p2: 'Our technicians pressure-test the copper piping with nitrogen, braze leaking joints, vacuum the system, and recharge refrigerant to factory specifications.'
  },
  'kelvinator': {
    hero: 'Kelvinator window or split AC compressor capacitor blown or cooling coil frozen into a solid block of ice in Trichy? Our technicians replace heavy-duty capacitors, fix refrigerant leaks, and jet-clean cooling coils at your home.',
    p1: 'Kelvinator air conditioners are known for sturdy construction and dependable rotary compressors. When air filters or cooling coil fins become choked with dust, airflow drops drastically, causing the evaporator coil to freeze into a solid sheet of ice.',
    p2: 'Our technicians thaw the coil safely, clean the fins with protective jet wash covers, test capacitor microfarad ratings, and ensure proper refrigerant circulation.'
  },
  'kenstar': {
    hero: 'Kenstar air conditioner fan running but compressor failing to start or water overflowing from the indoor drain pan in Trichy? Our technicians provide doorstep electrical diagnosis and drain clearing across Trichy.',
    p1: 'Kenstar split and window ACs provide economical cooling, but peak summer heat often overburdens compressor starting capacitors. Mould and algae growth in the indoor condensate drain tray can also plug the gravity outlet, causing water to drip down your bedroom wall.',
    p2: 'Our technicians replace weak capacitors, flush drain lines with pressure water, and check compressor thermal overload protectors on-site.'
  },
  'sansui': {
    hero: 'Sansui AC remote sensor display unresponsive or outdoor condenser fins blanketed with street dust in Trichy? Our technicians provide doorstep display PCB repairs, capacitor replacements, and foam jet cleaning.',
    p1: 'Sansui air conditioners deliver budget-friendly cooling, but high ambient heat and humidity in Trichy require regular maintenance. When the outdoor unit hums without starting or the indoor display fails to register remote signals, component testing is required.',
    p2: 'Our technicians inspect the indoor receiver board, test compressor run capacitors, and clean outdoor condenser fins thoroughly using pressure washers.'
  },
  'bpl': {
    hero: 'BPL rotary compressor humming without cooling or copper tubing vibrating against the outdoor wall bracket in Trichy? Our technicians provide doorstep capacitor servicing, vibration damping, and gas leak fixes.',
    p1: 'BPL air conditioners are built with reliable rotary compressors and copper tubing. Prolonged summer running can wear out outdoor rubber anti-vibration mountings, leading to harsh buzzing resonances against exterior walls.',
    p2: 'Our technicians install fresh rubber vibration isolators, check electrical terminal tightness, and recharge refrigerant to restore quiet, dependable cooling.'
  },
  'haier': {
    hero: 'Haier Triple Inverter AC showing E7 communication fault or self-clean frost freeze cycle stuck in Trichy? Our technicians provide doorstep inverter PCB repairs, thermistor replacements, and jet cleaning across Trichy.',
    p1: 'Haier air conditioners with Triple Inverter Plus technology adjust cooling capacity smoothly. However, dust accumulation on indoor coils can interfere with self-clean cycles, while electrical surges during Trichy thunderstorms can trigger E7 communication faults between indoor and outdoor PCBs.',
    p2: 'Our technicians carry digital diagnostic tools, replacement thermistors, and original-grade PCB modules to resolve error codes and restore cold air on-site.'
  },
  'lloyd': {
    hero: 'Lloyd split AC taking over an hour to cool the bedroom or outdoor unit humming loudly before tripping the MCB breaker in Trichy? Our technicians inspect compressor capacitors, test gas pressures, and pressure-wash coils on-site.',
    p1: 'Lloyd air conditioners, backed by Havells engineering, feature rapid cooling and 100% copper condensers with Golden Fin protection. During prolonged peak summer running, compressor starting capacitors can deteriorate, resulting in an outdoor unit that hums for 10 seconds before tripping the MCB.',
    p2: 'Our technicians check start and run winding resistances, test microfarad capacitance, and verify refrigerant pressures on-site with transparent pricing.'
  }
};

let filesUpdated = 0;

// Apply to washing machine files
for (const [brand, data] of Object.entries(WM_OPENINGS)) {
  const file = `washing-machine/${brand}-washing-machine-repair-service-trichy.html`;
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    const heroMatch = content.match(/<section class="hero">[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i);
    if (heroMatch) {
      content = content.replace(heroMatch[0], heroMatch[0].replace(heroMatch[1], data.hero));
    }
    // Update intro paragraphs under content-box
    const introMatch = content.match(/<div class="content-box">[\s\S]*?<h2>[\s\S]*?<\/h2>[\s\S]*?<p>([\s\S]*?)<\/p>[\s\S]*?<p>([\s\S]*?)<\/p>/i);
    if (introMatch) {
      const oldSection = introMatch[0];
      const newSection = oldSection
        .replace(introMatch[1], data.p1)
        .replace(introMatch[2], data.p2);
      content = content.replace(oldSection, newSection);
    }
    fs.writeFileSync(file, content, 'utf8');
    filesUpdated++;
  }
}

// Apply to AC files
for (const [brand, data] of Object.entries(AC_OPENINGS)) {
  const file = `ac/${brand}-ac-repair-service-trichy.html`;
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    const heroMatch = content.match(/<p class="hero-desc">([\s\S]*?)<\/p>/i) || content.match(/<section class="hero">[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i);
    if (heroMatch) {
      content = content.replace(heroMatch[0], heroMatch[0].replace(heroMatch[1], data.hero));
    }
    fs.writeFileSync(file, content, 'utf8');
    filesUpdated++;
  }
}

console.log(`Successfully diversified openings for ${filesUpdated} brand files.`);
