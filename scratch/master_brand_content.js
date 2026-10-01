// Master Content Generator for High Lexical Diversity & Uniqueness Across All Pages
const fs = require('fs');

// Specialized knowledge per brand and appliance
const BRAND_INTEL = {
  // AC BRANDS
  'voltas': {
    ac: {
      hero: 'Is your Voltas split or inverter AC blowing room-temperature air, dripping water inside your bedroom, or showing an E1 or E6 error in Trichy? Our local technicians provide doorstep diagnostic checks, nitrogen gas leak testing, capacitor replacements, and foam jet cleaning across Trichy.',
      p1: 'Voltas air conditioners are an Indian summer staple across Trichy homes, engineered to perform even in high ambient temperatures. During intense peak season use, heavy dust in Trichy clogs outdoor condenser fins, causing high head pressure and tripping the compressor overload protector.',
      p2: 'Inverter models frequently encounter communication errors between indoor and outdoor PCBs or low refrigerant pressure from vibration-stressed copper flare joints. Our technicians arrive with manifold pressure gauges, digital multimeters, and high-pressure jet wash equipment to restore crisp cooling in your home.'
    },
    sc: {
      hero: 'Searching for dependable Voltas appliance repair in Trichy? From All-Weather and Maha Adjustable AC cooling failures to Voltas Beko refrigerators and washing machines, our experienced doorstep technicians diagnose and service your equipment on-site.',
      p1: 'Voltas is one of the most widely used cooling and home appliance brands in Tiruchirappalli district. With high summer temperatures placing heavy demands on compressors and local hard water affecting washing machine inlet valves, timely on-site maintenance prevents minor faults from escalating into costly repairs.',
      p2: 'Our technicians inspect compressor capacitors, check refrigerant operating pressures, test PCB communication circuits, and clean clogged cooling coils right at your residence with upfront quotes and no hidden charges.'
    }
  },
  'daikin': {
    ac: {
      hero: 'Daikin AC green light blinking with a U4 or E7 error code, or not cooling your room in Trichy? Our technicians diagnose inverter PCBs, recharge R32 refrigerant, and clear clogged drainage lines directly at your home.',
      p1: 'Daikin air conditioners are prized across Trichy for whisper-quiet comfort, neo-swing inverter compressors, and Coanda airflow distribution. However, delicate electronics in Daikin inverter control boards are vulnerable to voltage spikes during Trichy thunderstorms.',
      p2: 'Low gas from hair-line flare leaks and clogged indoor air filters can cause the unit to shut down safely with blinking timer LEDs. Using Daikin handheld remote self-diagnosis codes, our technicians quickly isolate the faulty thermistor or PCB module and restore cold airflow without guesswork.'
    },
    sc: {
      hero: 'Looking for Daikin air conditioning and refrigeration service in Trichy? Whether your Daikin inverter split AC is blinking error codes or blowing warm air, our technicians provide prompt doorstep diagnostic and repair visits.',
      p1: 'Daikin climate systems require precise handling due to their sensitive electronic expansion valves and high-efficiency inverter circuitry. When outdoor condenser units get choked with street dust in Trichy, heat dissipation suffers and cooling efficiency drops drastically.',
      p2: 'We offer specialized wet jet chemical coil washing, flare nut tightening, vacuum pump evacuation, and inverter control card diagnostics across all Trichy neighborhoods.'
    }
  },
  'lg': {
    ac: {
      hero: 'Is your LG Dual Inverter AC showing CH05 or CH21 error codes, or failing to chill your room in Trichy? Our technicians provide fast doorstep diagnosis, PCB troubleshooting, and pressure jet coil washing.',
      p1: 'LG Dual Inverter split ACs are popular in Trichy for fast 6-in-1 convertible cooling and corrosion-resistant Ocean Black fins. Continuous high-temperature operation can put thermal strain on outdoor IPM power modules, triggering communication or DC peak faults.',
      p2: 'Moisture and dust in indoor evaporator trays can also clog the gravity drain hose, causing water to trickle down painted walls. Our technicians carry digital pressure gauges, LG sensor probes, and jet cleaning bags to resolve your cooling issues at home.'
    },
    wm: {
      hero: 'Stuck with an OE drain error, IE water inlet error, or CL child lock on your LG washing machine in Trichy? Our doorstep technicians diagnose and repair LG Direct Drive front-load and smart inverter top-load washers across Trichy.',
      p1: 'LG washing machines are widely used across Tiruchirappalli for their beltless Direct Drive motors and TurboWash technology. When an LG front-loader displays an OE error, it typically points to a foreign object trapped inside the lower drain pump impeller or a failed drain synchronous motor.',
      p2: 'On top-load smart inverter washers, faulty hall sensors or broken lid switches can cause erratic cycle halts. Our Trichy technicians carry original LG-compatible drain motors, pressure switches, inlet valves, and suspension dampers for prompt same-day resolution.'
    },
    fridge: {
      hero: 'LG refrigerator not cooling, making continuous buzzing noises, or leaking water on your kitchen floor in Trichy? Our cooling technicians inspect smart inverter compressors, starter relays, and defrost timers directly in your kitchen.',
      p1: 'LG refrigerators with Smart Inverter compressors and Door Cooling+ air ducts keep vegetables and milk fresh through Trichy summers. However, sudden voltage swings or prolonged dust buildup on rear condenser coils can overheat the compressor starter relay.',
      p2: 'In frost-free units, a burnt defrost fuse or jammed mechanical air damper can starve the lower shelves of cold air. Our technicians inspect compressor winding resistance, test defrost sensors with multimeters, and carry genuine LG-compatible relays for immediate on-site repair.'
    },
    tv: {
      hero: 'LG TV screen turned purple or blue, or TV has sound but no picture in your Trichy living room? Our television technicians replace LED backlight strips, repair power supply boards, and resolve webOS boot problems at your doorstep.',
      p1: 'LG Smart TVs with webOS and Magic Remote are praised for user experience and wide IPS viewing angles. A well-documented issue with certain LG LED backlight generations is the phosphorus coating on LED lenses degrading, causing the entire picture to acquire a heavy purple or bluish tint.',
      p2: 'In other cases, power supply diode failure prevents the TV from waking up from standby. Our technicians replace the entire LED backlight kit with fresh cool-white strips right in your home, restoring crisp natural color.'
    },
    mw: {
      hero: 'Is your LG microwave oven running and turning but completely failing to heat food in Trichy? Our technicians safely discharge high-voltage circuits and replace magnetrons, diodes, and door switches at your doorstep.',
      p1: 'LG microwave ovens, particularly NeoChef and convection models, are reliable kitchen appliances in Trichy households. When an LG microwave turns on, lights up the bulb, and rotates the glass tray but leaves food cold, the problem is usually a blown high-voltage fuse or failed magnetron.',
      p2: 'Because microwave capacitors store lethal high-voltage charges, amateur repairs are dangerous. Our technicians discharge the circuit safely, test components with specialized meters, and replace faulty magnetrons on-site.'
    },
    sc: {
      hero: 'Searching for LG service center doorstep repair in Trichy? We provide professional on-site diagnosis and repair for LG washing machines, refrigerators, Dual Inverter ACs, Smart TVs, and microwave ovens across all Trichy localities.',
      p1: 'LG appliances are household fixtures in almost every neighborhood in Trichy, from Cantonment to KK Nagar. While LG technology is durable, local environmental factors like hard water deposits in washer valves, summer voltage swings affecting inverter PCBs, and tropical heat on AC coils require periodic skilled servicing.',
      p2: 'Our mobile repair team visits your home equipped with specialized diagnostic tools, multimeter testers, and genuine compatible spare parts to fix appliances directly in your home without workshop transport.'
    }
  },
  'samsung': {
    ac: {
      hero: 'Samsung AC showing C4 22 gas error, E1 01 communication fault, or blowing warm air in Trichy? Our technicians perform high-pressure jet cleaning, flare joint brazing, and inverter PCB repairs at your doorstep.',
      p1: 'Samsung WindFree and Triple Inverter air conditioners deliver draft-free comfort through thousands of micro-holes. In Trichy dusty conditions, these micro-holes and the underlying indoor filter can choke rapidly, restricting airflow and freezing the evaporator coil.',
      p2: 'Inverter communication line errors (E1 01) and outdoor sensor drifts are also frequently resolved by our technicians with component-level testing and professional high-pressure coil washes.'
    },
    wm: {
      hero: 'Dealing with a 4E water supply error, 5E drain failure, or violent UE unbalanced spin error on your Samsung washing machine in Trichy? Our technicians inspect inlet valves, drain pumps, and suspension dampers at your doorstep.',
      p1: 'Samsung washing machines are ubiquitous in Trichy residences, favored for their Wobble pulsator top-loaders and Diamond Drum front-loaders. Local water hardness in areas like Thillai Nagar and K.K. Nagar frequently clogs the fine mesh filter of Samsung inlet valves, triggering the 4E error.',
      p2: 'In top-load units, worn suspension rod spring dampers often cause the inner tub to collide with the cabinet, triggering persistent UE errors even with small laundry loads. Our technicians arrive with multimeter test tools, suspension rod sets, pressure sensors, and drain valves to service your washer quickly.'
    },
    fridge: {
      hero: 'Is your Samsung refrigerator freezer cold but the bottom compartment warm, or is water pooling under the crisper drawer in Trichy? Our cooling technicians troubleshoot defrost sensors, heaters, and Digital Inverter boards at your home.',
      p1: 'Samsung refrigerators are common fixtures in Trichy homes, prized for Twin Cooling Plus dual evaporators and energy-saving Digital Inverter compressors. A frequent complaint in double-door models is the fresh food compartment losing cooling while the freezer continues to freeze ice solid.',
      p2: 'This is almost always caused by a blocked defrost drain channel or a failed bimetal defrost sensor causing ice to choke the air circulation fan duct. Our technicians disassemble the freezer back panel, defrost the coil, test defrost heaters and thermistors, and restore cold airflow without moving the appliance.'
    },
    tv: {
      hero: 'Samsung TV screen flickering, clicking repeatedly without turning on, or half the display dark in Trichy? Our television specialists repair power supply boards, replace LED backlights, and fix T-Con panel issues at your doorstep.',
      p1: 'Samsung Crystal 4K, QLED, and Smart TVs with Tizen OS are popular across Tiruchirappalli for vivid brightness and smart connectivity. A frequent failure in slim LED models is individual edge-lit or direct-lit LED beads burning out, creating dark horizontal shadows across the screen.',
      p2: 'This can also trigger power supply protection where the TV clicks and reboots continuously. Our technicians carry regulated LED testers and original aluminum-base replacement strips to replace the entire backlight array cleanly on-site.'
    },
    mw: {
      hero: 'Samsung microwave displaying SE error code, sparking inside, or not heating in Trichy? Our technicians replace mica waveguide sheets, repair touch membrane keypads, and test high-voltage transformers at your home.',
      p1: 'Samsung microwave ovens are favored for scratch-resistant ceramic enamel cavities and Triple Distribution heating. A frequent fault in touch-panel Samsung models is the SE or -SE- error, caused by moisture or steam shorting individual membrane keypad traces.',
      p2: 'Sparking inside the cavity often happens when burnt grease carbonizes the mica sheet, allowing microwave radiation to arc against the metal chassis. Our technicians replace degraded mica covers, clean cavity arcs, and service membrane keypads right at your home.'
    },
    sc: {
      hero: 'Looking for a trusted Samsung service center in Trichy? We provide comprehensive in-home repair for Samsung refrigerators, EcoBubble washing machines, WindFree air conditioners, Crystal 4K TVs, and microwave ovens across Tiruchirappalli.',
      p1: 'Samsung digital appliances power modern households throughout Trichy. When your refrigerator stops chilling vegetables, the washer halts with an unbalance error code, or your Smart TV clicks without turning on, you need quick, honest doorstep assistance.',
      p2: 'We provide prompt inspection, transparent part pricing, and reliable on-site repair across Srirangam, Thillai Nagar, K.K. Nagar, Cantonment, and all surrounding Trichy localities.'
    }
  },
  'whirlpool': {
    ac: {
      hero: 'Is your Whirlpool 3D Cool or 6th Sense AC blowing warm air, making a humming noise, or leaking water in Trichy? Our doorstep technicians diagnose compressor capacitors, clean coils with pressure jets, and fix refrigerant leaks.',
      p1: 'Whirlpool air conditioners are engineered for rapid tropical cooling, but continuous operation during Trichy peak summer heat can stress compressor run capacitors and choke the outdoor condenser coil with dust.',
      p2: 'When cooling drops or the indoor blower makes squeaking noises, our technicians inspect fan bearings, clean air filters, check suction and discharge gas pressures, and replace weak capacitors on-site.'
    },
    wm: {
      hero: 'Is your Whirlpool washing machine making a clicking noise without spinning, failing to fill water, or shaking excessively in Trichy? Our technicians inspect 6th Sense control boards, lid switches, and drain motors on-site.',
      p1: 'Whirlpool washers, especially the popular Bloomwash and Stainwash top-load models, use 6th Sense smart sensors and dynamic pulsators. Common issues reported by Trichy residents include agitator dog teeth slipping under heavy bedsheet loads and water failing to shut off due to diaphragm pressure switch failure.',
      p2: 'Broken lid lock latches can also prevent spin cycles from completing. Our technicians inspect the transmission gearbox, test motor capacitor values, and replace broken lid sensors directly at your premises.'
    },
    fridge: {
      hero: 'Whirlpool refrigerator clicking repeatedly, forming heavy ice in the freezer, or spoiling milk in the bottom compartment in Trichy? Our technicians repair defrost timers, replace bimetal thermostats, and recharge refrigerant.',
      p1: 'Whirlpool refrigerators, including Protton 3-door models and IntelliFresh double-door units, use 6th Sense sensors and microblock technology. In classic frost-free models, mechanical defrost timers (running an 8-hour cycle) can get stuck in defrost mode, leaving the compressor permanently off.',
      p2: 'Alternatively, sticking in cooling mode creates a solid block of ice around the evaporator fan. Our technicians check defrost timer gears, test bimetal thermostats, and renew worn starter relays right at your kitchen doorstep.'
    },
    mw: {
      hero: 'Whirlpool Magicook microwave not heating, turntable stopped rotating, or grill heater failing in Trichy? Our technicians inspect high-voltage diodes, magnetrons, and turntable motors at your home.',
      p1: 'Whirlpool Magicook microwave ovens are widely used in Trichy for quick reheating and grill cooking. When the oven operates normally but leaves food cold, the high-voltage diode or capacitor has typically failed.',
      p2: 'Our technicians safely test the high-voltage circuit, check cavity interlock door switches, and carry replacement turntable couplers to ensure your microwave is restored safely.'
    },
    sc: {
      hero: 'Need Whirlpool appliance service in Trichy? We provide reliable doorstep repairs for Whirlpool refrigerators, washing machines, air conditioners, and microwave ovens across Tiruchirappalli district.',
      p1: 'Whirlpool appliances have been trusted by families across Trichy for generations. Whether it is a legacy single-door refrigerator, a modern 3-door Protton fridge, or a 6th Sense washing machine, our technicians understand the mechanical and electronic workings of every Whirlpool model.',
      p2: 'We bring genuine compatible spares, electrical testing meters, and clear diagnostic estimates right to your doorstep, eliminating the hassle of transporting bulky appliances to distant repair shops.'
    }
  },
  'bosch': {
    wm: {
      hero: 'Is your Bosch front-load washing machine refusing to drain with an E18 error, shaking heavily during spin, or stopping mid-cycle in Trichy? Our technicians provide doorstep diagnosis and component repair across all Trichy neighborhoods.',
      p1: 'Bosch washing machines are renowned across Trichy for sturdy build quality, VarioDrum fabric care, and brushless EcoSilence motors. However, after continuous household usage and exposure to Trichy borewell water, debris can easily trap inside the front drain pump filter, causing an E18 drainage halt.',
      p2: 'Shock absorbers can also lose hydraulic tension, leading to violent drum knocking during high-speed 1200 RPM spins. Our local technicians carry genuine Bosch-compatible drain pumps, carbon-free motor sensors, door seal bellows gaskets, and heavy-duty suspension dampers to diagnose and fix the fault at your doorstep.'
    },
    fridge: {
      hero: 'Is your premium Bosch refrigerator showing an E01 or E02 sensor error, failing to cool the bottom compartment, or buzzing continuously in Trichy? Our technicians troubleshoot VitaFresh cooling circuits and NTC thermistors on-site.',
      p1: 'Bosch refrigerators are engineered with precision German technology, featuring VitaFresh drawers that maintain optimal humidity for produce. When cooling fails, it is often due to an electronic damper motor sticking or an evaporator coil icing over due to a failed defrost sensor.',
      p2: 'Our technicians carry digital temperature probes and multimeter diagnostic gear to test internal thermistors, clean rear condenser trays, and service inverter compressor boards right in your home.'
    },
    mw: {
      hero: 'Experiencing uneven convection baking, erratic touch controls, or heating cut-offs on your Bosch Serie microwave in Trichy? Our technicians provide doorstep inspection and repair with genuine compatible parts.',
      p1: 'Bosch microwave ovens, including Serie 2 freestanding and Serie 4 built-in kitchen models, feature sophisticated electronic control logic. When power fluctuations in Trichy affect internal relay contacts or touch panel sensors, heating cycles may abort unexpectedly.',
      p2: 'Our technicians test magnetron emission, inspect door safety microswitches, and check high-voltage capacitors safely in your kitchen with transparent pricing.'
    },
    sc: {
      hero: 'Looking for expert Bosch appliance repair in Trichy? We service Bosch front-load washing machines, Serie 4 and 6 refrigerators, dishwashers, and microwave ovens with doorstep diagnostic visits across Trichy.',
      p1: 'Bosch appliances represent premium German engineering and require knowledgeable handling. Generic repairs often fail because Bosch uses tight tolerances, advanced sensor networks, and specialized inverter drive algorithms.',
      p2: 'Our local technicians are experienced with Bosch error codes, VarioDrum mechanics, and VitaFresh cooling systems, providing high-standard doorstep repairs throughout Tiruchirappalli.'
    }
  },
  'ifb': {
    wm: {
      hero: 'Is your IFB washing machine showing an Error 02, failing to spin, or leaking suds from the front door lock in Trichy? Our doorstep technicians diagnose and repair IFB front-loaders and top-loaders across Trichy.',
      p1: 'IFB front-load and top-load machines are specially designed for Indian wash habits with features like Aqua Energie hard-water treatment and Cradle Wash. Even so, after several years in Trichy homes, front-load door latch microswitches can burn out, preventing the machine from starting.',
      p2: 'Lint and hairpin blockages in the coin trap frequently trigger Error 02 drain failures, while worn drum bearings can create a loud jet-engine roar during the spin cycle. Our local technicians test electrical continuity, clear drain blockages, and replace door interlocks and drive belts on-site.'
    },
    ac: {
      hero: 'Is your IFB FastCool inverter AC not cooling, blowing room-temperature air, or leaking water down the wall in Trichy? Our technicians provide doorstep gas leak detection, chemical coil cleaning, and PCB repair.',
      p1: 'IFB air conditioners feature heavy-duty gold fin condensers and high-efficiency rotary compressors. In Trichy humid weather, dust buildup on the indoor cooling coil often restricts airflow and creates mould growth in the condensate tray.',
      p2: 'Our technicians perform thorough pressure jet washes, inspect electrical connections, and check refrigerant operating pressures to restore ice-cold comfort to your home.'
    },
    mw: {
      hero: 'IFB convection microwave tripping the kitchen MCB or failing to bake and heat in Trichy? Our technicians inspect door safety linkages, measure resistance on heating coils, and carry high-voltage diodes for prompt doorstep repairs.',
      p1: 'IFB convection microwaves are kitchen workhorses for Trichy families who bake cakes, roast snacks, and reheat meals. When an IFB microwave trips the home circuit breaker the instant you press start, it usually indicates a short-circuited primary door microswitch or a grounded high-voltage capacitor.',
      p2: 'If convection baking is weak, the rear circular heating element or blower fan motor may have burned out. Our technicians inspect door safety linkages, measure resistance on heating coils, and carry high-voltage diodes for prompt doorstep repairs.'
    },
    sc: {
      hero: 'Searching for IFB service center assistance in Trichy? We provide specialized doorstep repairs for IFB front-load washers, top-loaders, FastCool ACs, and convection microwave ovens throughout Tiruchirappalli.',
      p1: 'IFB home appliances are trusted across Trichy for superior wash quality and sturdy construction. However, hard borewell water in areas like Woraiyur and Thillai Nagar can exhaust Aqua Energie filters and scale up heating elements over time.',
      p2: 'Our mobile technicians carry genuine IFB-compatible door locks, drain pumps, heating elements, and motor belts to fix your appliances at home without delay.'
    }
  },
  'godrej': {
    ac: {
      hero: 'Is your Godrej inverter AC blowing warm air, leaking water, or showing an error code in Trichy? Our technicians provide doorstep diagnostic checks, copper coil leak repair, and pressure jet cleaning across Trichy.',
      p1: 'Godrej air conditioners with anti-corrosive blue fin condensers are built for Indian tropical conditions. However, continuous operation in peak Trichy heat can cause compressor starting capacitors to weaken or dust to coat the outdoor fan assembly.',
      p2: 'Our technicians inspect capacitor capacitance, check refrigerant levels, clear algae blocks in drain pans, and test PCB electronic expansion circuits on-site.'
    },
    wm: {
      hero: 'Washing machine not spinning or dirty water draining out extremely slowly on your Godrej washing machine in Trichy? Our technicians service drain tracks, adjust belts, and replace faulty capacitors on-site.',
      p1: 'Godrej washing machines, both semi-automatic Edge models and fully automatic top-loaders, are known for robust plastic bodies and economical operation. In Trichy conditions, lint accumulation often jams the gravity drain flapper assembly, causing water to remain inside the drum.',
      p2: 'On fully automatic models, worn belt tension or a weak motor capacitor can leave clothes dripping wet after the cycle finishes. Our technicians service drain tracks, adjust belts, and replace faulty capacitors on-site.'
    },
    fridge: {
      hero: 'Is your Godrej refrigerator not cooling, leaking water from the freezer tray, or making loud clicking sounds in Trichy? Our technicians repair punctured freezer plates, replace starter relays, and recharge refrigerant safely.',
      p1: 'Godrej is an iconic refrigerator brand in Tamil Nadu, with millions of single-door Direct Cool and double-door Frost Free units operating reliably. On single-door Edge models, poking ice with knives often punctures the delicate aluminum freezer plate, venting refrigerant gas instantly.',
      p2: 'In double-door models, thermal relays can burn out during summer voltage fluctuations. Our technicians solder freezer leaks with high-grade aluminum brazing, flush capillary tubes, test thermostats, and recharge gas safely.'
    },
    mw: {
      hero: 'Godrej InstaCook microwave oven not heating, display flickering, or turntable jammed in Trichy? Our technicians provide doorstep diagnosis and component replacement with clear pricing.',
      p1: 'Godrej microwave ovens are popular for Indian auto-cook menus and stainless steel interiors. When food stops heating, our technicians inspect the high-voltage diode and magnetron emission.',
      p2: 'We carry compatible turntable synchronous motors, thermal cutouts, and door interlock switches to repair your oven quickly at your residence.'
    },
    sc: {
      hero: 'Need Godrej service center repair in Trichy? We provide reliable doorstep repairs for Godrej refrigerators, Edge washing machines, air conditioners, and microwave ovens across Tiruchirappalli.',
      p1: 'Godrej home appliances have served Trichy families for over six decades. From classic single-door refrigerators to modern inverter split ACs, our technicians have extensive experience diagnosing mechanical, refrigeration, and electrical faults.',
      p2: 'We offer prompt same-day visits across Srirangam, Cantonment, K.K. Nagar, and all surrounding areas with genuine compatible spare parts and clear upfront pricing.'
    }
  },
  'blue-star': {
    ac: {
      hero: 'Facing an EC error code, water leakage, or weak cooling from your Blue Star air conditioner in Trichy? Our local technicians perform nitrogen pressure testing, repair copper joint pinholes, and recharge refrigerant on-site.',
      p1: 'Blue Star air conditioners are engineered for extreme tropical conditions and heavy cooling duty. When a Blue Star AC flashes an EC error code, it indicates a refrigerant leak or pressure drop in the copper circuit.',
      p2: 'Weak indoor blower fan speeds or mould growth in the blower cage can also reduce cooling airflow drastically in Trichy humid monsoon transitions. Our local technicians perform nitrogen pressure testing, repair copper joint pinholes, and recharge R32 or R410A refrigerant to factory specifications.'
    },
    fridge: {
      hero: 'Is your Blue Star commercial deep freezer, visi cooler, or domestic refrigerator failing to maintain cold temperatures in Trichy? Our technicians service thermostats, fans, and compressors on-site.',
      p1: 'Blue Star commercial and domestic refrigeration equipment is designed for rigorous heavy-duty operation. Continuous door openings and high ambient heat in Trichy kitchens put extra load on the condenser cooling fan and capillary tubes.',
      p2: 'Our technicians inspect condenser airflow, check gas operating pressures, test digital thermostat controllers, and replace burnt starter relays right at your location.'
    },
    sc: {
      hero: 'Searching for Blue Star service in Trichy? We provide expert doorstep maintenance and repairs for Blue Star split ACs, inverter systems, deep freezers, and water coolers throughout Tiruchirappalli.',
      p1: 'Blue Star systems are trusted across both residential homes and commercial establishments in Trichy for powerful, heavy-duty cooling performance. Proper pressure calibration and clean condenser fins are vital for maintaining low power bills.',
      p2: 'Our technicians arrive equipped with specialized pressure testing equipment, vacuum pumps, and genuine compatible spares to service your Blue Star cooling units on-site.'
    }
  },
  'carrier': {
    ac: {
      hero: 'Is your Carrier AC showing E3 error, rattling loudly, or struggling to cool your Trichy bedroom? Our technicians conduct multi-point electrical checks, capacitor replacements, and chemical jet coil cleaning at your doorstep.',
      p1: 'Carrier residential split systems remain popular in Trichy for Flexicool capacity switching. In intense heat, outdoor condenser coils can become blanketed in dust, forcing compressor discharge temperatures too high and causing sudden cutoffs.',
      p2: 'Broken indoor blower bushings can create annoying squeaks during the night. Our technicians conduct thorough multi-point checks including electrical terminal tightness, capacitor capacitance, and chemical jet coil cleaning.'
    },
    sc: {
      hero: 'Need Carrier air conditioner service in Trichy? We offer prompt doorstep inspection, duct cleaning, inverter PCB diagnosis, and refrigerant recharge for Carrier split and window ACs across Trichy.',
      p1: 'Carrier air conditioning systems are built for long operational lifespans when maintained properly. However, heavy Trichy road dust and summer heat can choke cooling fins and strain blower fan motors.',
      p2: 'Our local technicians provide comprehensive doorstep servicing including pressure washing, electrical load checks, and gas pressure adjustments across all Trichy neighborhoods.'
    }
  },
  'hitachi': {
    ac: {
      hero: 'Timer lamp blinking or warm air blowing from your Hitachi air conditioner in Trichy? Our technicians decipher blinking flash codes, test thermistors, and restore balanced cooling in your home.',
      p1: 'Hitachi air conditioners are celebrated for precision cooling and robust tropical compressors. If the timer lamp on a Hitachi indoor unit blinks continuously in sequences, it indicates a protective shutdown due to gas loss, thermistor failure, or fan motor stall.',
      p2: 'Hitachi multi-layered electronic PCB assemblies require delicate diagnostic care rather than rough replacements. Our technicians decipher blinking flash codes, test sensors, and restore balanced cooling in your home.'
    },
    sc: {
      hero: 'Looking for Hitachi AC and home appliance repair in Trichy? We provide specialized doorstep diagnosis for Hitachi expandable inverter air conditioners and refrigerators throughout Tiruchirappalli.',
      p1: 'Hitachi appliances feature advanced Japanese sensor controls and intelligent cooling algorithms. When operational issues arise, accurate electronic diagnosis is essential to avoid unnecessary part replacements.',
      p2: 'Our skilled technicians troubleshoot Hitachi self-diagnosis error codes, replace faulty sensor bundles, and recharge refrigerant using factory vacuum procedures.'
    }
  },
  'sony': {
    tv: {
      hero: 'Sony Bravia TV red standby light blinking in sequences, or TV has sound but a pitch black screen in Trichy? Our skilled technicians diagnose blinking codes, replace LED backlight strips, and repair power boards in your home.',
      p1: 'Sony Bravia LED, OLED, and Google TVs are celebrated for stunning picture processing and Triluminos color accuracy. When a Sony Bravia develops a hardware fault, the red standby LED flashes in a specific sequence: 6 blinks indicates a backlight LED strip or inverter failure, while 5 blinks indicates T-Con panel timing errors.',
      p2: 'Transporting a large 55-inch Sony screen through Trichy traffic carries high panel shatter risk. Our skilled technicians diagnose blinking codes and service backlights directly in your living room.'
    },
    sc: {
      hero: 'Searching for Sony Bravia TV repair in Trichy? We provide safe doorstep diagnosis, LED backlight strip replacement, motherboard repair, and power supply servicing for Sony televisions across Tiruchirappalli.',
      p1: 'Sony Bravia televisions are premium home entertainment centerpieces. When issues like blank screens, audio distortion, or blinking red standby lights occur, you need careful, component-level in-home service.',
      p2: 'Our technicians handle panel repairs and circuit replacements on-site, saving you the risk and inconvenience of transporting fragile flat-screen TVs across town.'
    }
  },
  'mi': {
    tv: {
      hero: 'Mi TV stuck on Mi boot screen, restarting endlessly, or screen dark with sound in Trichy? Our technicians perform firmware re-flashing, power circuit repairs, and full LED strip replacements at your doorstep.',
      p1: 'Xiaomi Mi and Redmi TVs are immensely popular across Trichy for offering large-screen 4K HDR smart television at competitive prices. Typical faults encountered after 2–4 years of use include EMMC memory flash corruption causing the TV to hang indefinitely on the PatchWall boot logo.',
      p2: 'Burnt-out LED backlight strips can also cause a dark screen while YouTube or cable audio continues to play. Our technicians perform software re-flashing, power circuit repairs, and full LED strip replacements at your doorstep.'
    },
    sc: {
      hero: 'Need Mi TV or appliance service in Trichy? We provide fast doorstep diagnosis and repairs for Xiaomi Mi TVs, Redmi televisions, and smart home appliances across Tiruchirappalli.',
      p1: 'Xiaomi TVs are among the most common smart TVs in Trichy living rooms. Due to power surges and thermal stress inside slim TV cabinets, internal power modules and backlight LEDs often require component replacement after a few years.',
      p2: 'Our technicians diagnose display panels, test backlight arrays, and repair main motherboards directly in your home with transparent pricing.'
    }
  }
};

module.exports = { BRAND_INTEL };
