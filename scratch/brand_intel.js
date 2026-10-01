// Comprehensive Brand and Appliance Intelligence
// Provides genuinely unique, technically accurate, problem-first data for every brand.

const BRAND_DATA = {
  // --- WASHING MACHINES ---
  bosch_wm: {
    name: 'Bosch',
    appliance: 'Washing Machine',
    tag: 'German engineering and EcoSilence Drive',
    hook: 'Is your Bosch front-load washing machine refusing to drain with an E18 error, shaking heavily during spin, or stopping mid-cycle?',
    intro: 'Bosch washing machines are renowned across Trichy for sturdy build quality, VarioDrum fabric care, and brushless EcoSilence motors. However, after continuous household usage and exposure to Trichy borewell water, debris can easily trap inside the front drain pump filter, causing an E18 drainage halt. Shock absorbers can also lose hydraulic tension, leading to violent drum knocking during high-speed 1200 RPM spins. Our local technicians carry genuine Bosch-compatible drain pumps, carbon-free motor sensors, door seal bellows gaskets, and heavy-duty suspension dampers to diagnose and fix the fault at your doorstep.',
    problems: ['E18 error (blocked pump or kinked outlet hose)', 'Front door rubber gasket leaking water', 'Heavy drum banging and violent vibration on 1200 RPM spin', 'E02 motor rotation error', 'Water continuously filling due to inlet solenoid valve scale'],
    parts: ['EcoSilence drive motor sensor', 'Front door bellow boot gasket', 'Hydraulic suspension shock dampers', 'Drain pump motor unit', 'Dual solenoid inlet valve assembly'],
    typicalCost: 'Inspection: ₹250–₹350 | Drain pump / valve fix: ₹950–₹1,850 | Shock absorbers / door seal: ₹1,400–₹2,600'
  },
  samsung_wm: {
    name: 'Samsung',
    appliance: 'Washing Machine',
    tag: 'EcoBubble, Wobble pulsator, and Digital Inverter',
    hook: 'Dealing with a 4E water supply error, 5E drain failure, or violent UE unbalanced spin error on your Samsung washing machine in Trichy?',
    intro: 'Samsung washing machines are ubiquitous in Trichy residences, favored for their Wobble pulsator top-loaders and Diamond Drum front-loaders. Local water hardness in areas like Thillai Nagar and K.K. Nagar frequently clogs the fine mesh filter of Samsung inlet valves, triggering the 4E error. In top-load units, worn suspension rod spring dampers often cause the inner tub to collide with the cabinet, triggering persistent UE errors even with small laundry loads. Our technicians arrive with multimeter test tools, suspension rod sets, pressure sensors, and drain valves to service your Samsung washer quickly in your wash area.',
    problems: ['4E / 4C water inlet supply error', '5E / 5C drain blockage or failed drain motor', 'UE unbalanced load stopping the spin cycle repeatedly', 'dE door lock switch not engaging', 'Motor humming without turning the wash drum'],
    parts: ['4-rod tub suspension set', 'Samsung drain pump motor', 'Electronic pressure level sensor', 'Digital inverter drive board', 'Double inlet water solenoid valve'],
    typicalCost: 'Inspection: ₹200–₹300 | Inlet / Drain repair: ₹800–₹1,650 | Suspension rods / PCB service: ₹1,200–₹2,500'
  },
  ifb_wm: {
    name: 'IFB',
    appliance: 'Washing Machine',
    tag: 'Aqua Energie water softener and Triadic Pulsator',
    hook: 'Is your IFB washing machine showing an Error 02, failing to spin, or leaking suds from the front door lock in Trichy?',
    intro: 'IFB front-load and top-load machines are specially designed for Indian wash habits with features like Aqua Energie hard-water treatment and Cradle Wash. Even so, after several years in Trichy homes, front-load door latch microswitches can burn out, preventing the machine from starting. Lint and hairpin blockages in the coin trap frequently trigger Error 02 drain failures, while worn drum bearings can create a loud jet-engine roar during the spin cycle. Our local technicians test electrical continuity, clear drain blockages, and replace door interlocks and drive belts on-site.',
    problems: ['Error 02 (drainage failure within time limit)', 'Door lock error or broken door handle latch', 'Loud rumbling or roaring noise from drum bearings', 'Water not heating due to calcified heating element', 'Motor belt slipped or snapped off the pulley'],
    parts: ['IFB door safety interlock switch', 'Drive belt (poly-V groove)', 'High-wattage immersion heater rod', 'Magnetic drain pump motor', 'Aqua Energie filter cartridge'],
    typicalCost: 'Inspection: ₹250–₹350 | Door lock / belt service: ₹850–₹1,750 | Heater / pump replacement: ₹1,350–₹2,800'
  },
  lg_wm: {
    name: 'LG',
    appliance: 'Washing Machine',
    tag: 'Direct Drive 6-Motion and Smart Inverter',
    hook: 'Stuck with an OE drain error, IE water inlet error, or CL child lock on your LG washing machine in Trichy?',
    intro: 'LG washing machines are widely used across Tiruchirappalli for their beltless Direct Drive motors and TurboWash technology. When an LG front-loader displays an OE error, it typically points to a foreign object trapped inside the lower drain pump impeller or a failed drain synchronous motor. On top-load smart inverter washers, faulty hall sensors or broken lid switches can cause erratic cycle halts. Our Trichy technicians carry original LG-compatible drain motors, pressure switches, inlet valves, and suspension dampers for prompt same-day resolution.',
    problems: ['OE error (water drainage timeout)', 'IE error (insufficient water supply or inlet choke)', 'dE / dE1 door error switch failure', 'LE motor hall sensor overload error', 'Loud banging during final spin extraction'],
    parts: ['LG Direct Drive hall sensor', 'Drain synchronous motor', 'Tub suspension damper rod kit', 'Dual inlet solenoid valve', 'Lid switch / door latch sensor'],
    typicalCost: 'Inspection: ₹200–₹300 | Drain / inlet valve repair: ₹750–₹1,600 | Hall sensor / suspension kit: ₹1,150–₹2,400'
  },
  whirlpool_wm: {
    name: 'Whirlpool',
    appliance: 'Washing Machine',
    tag: '6th Sense tumble care and Stainwash Bloomwash',
    hook: 'Is your Whirlpool washing machine making a clicking noise without spinning, failing to fill water, or shaking excessively in Trichy?',
    intro: 'Whirlpool washers, especially the popular Bloomwash and Stainwash top-load models, use 6th Sense smart sensors and dynamic pulsators. Common issues reported by Trichy residents include agitator dog teeth slipping under heavy bedsheet loads, water failing to shut off due to diaphragm pressure switch failure, and broken lid lock latches preventing spin. Our technicians inspect the transmission gearbox, test motor capacitor values, and replace broken lid sensors directly at your premises.',
    problems: ['F02 or drainage timeout error', 'Spin tub clicking and struggling to reach full RPM', 'Water filling continuously without starting wash cycle', 'Semi-automatic spin motor dead or capacitor weak', 'Pulsator loose on spline shaft'],
    parts: ['Lid lock interlock switch', 'Wash motor start capacitor', 'Drain pump / rubber flapper valve', 'Agitator cam dog kit', 'Water level pressure switch'],
    typicalCost: 'Inspection: ₹200–₹300 | Capacitor / drain valve: ₹650–₹1,450 | Lid switch / pulsator repair: ₹1,100–₹2,200'
  },
  godrej_wm: {
    name: 'Godrej',
    appliance: 'Washing Machine',
    tag: 'Turbo 6 Pulsator and Eco-Wash Technology',
    hook: 'Washing machine not spinning or dirty water draining out extremely slowly on your Godrej washing machine in Trichy?',
    intro: 'Godrej washing machines, both semi-automatic Edge models and fully automatic top-loaders, are known for robust plastic bodies and economical operation. In Trichy conditions, lint accumulation often jams the gravity drain flapper assembly, causing water to remain inside the drum. On fully automatic models, worn belt tension or a weak motor capacitor can leave clothes dripping wet after the cycle finishes. Our technicians service drain tracks, adjust belts, and replace faulty capacitors on-site.',
    problems: ['Slow drain or drain pipe choked with lint', 'Spin motor humming but failing to turn clothes drum', 'Top-load lid safety switch broken', 'Wash pulsator rotating weakly in one direction only', 'Inlet valve choked with borewell sediment'],
    parts: ['Godrej spin start capacitor', 'Gravity drain flapper and seal rubber', 'Wash drive V-belt', 'Inlet solenoid valve', 'Mechanical wash timer'],
    typicalCost: 'Inspection: ₹200–₹300 | Drain seal / belt replacement: ₹600–₹1,350 | Timer / capacitor fix: ₹900–₹1,950'
  },
  haier_wm: {
    name: 'Haier',
    appliance: 'Washing Machine',
    tag: 'Near Zero Pressure inlet and Direct Motion Drum',
    hook: 'Facing an E1 drain error or E4 unbalance warning on your Haier washing machine in Trichy?',
    intro: 'Haier washing machines are popular for their Near Zero Pressure technology, which works well in Trichy homes with low overhead tank gravity head. However, scale buildup inside the NZP valve can restrict incoming water flow, causing cycle stalls. When the machine spins, uneven laundry distribution or slack suspension springs can throw the drum off balance, triggering an E4 alert. Our doorstep technicians inspect pressure tubes, clean inlet screens, and replace worn suspension struts.',
    problems: ['E1 drain error or slow drainage', 'E4 unbalanced spin error', 'Water leaking from inlet connection or detergent drawer', 'Direct motion motor stuttering on heavy loads', 'PCB touch panel buttons not responding'],
    parts: ['Near Zero Pressure water inlet valve', 'Electronic drain pump', 'Haier 4-corner suspension rods', 'Door lock assembly', 'Pressure transducer sensor'],
    typicalCost: 'Inspection: ₹200–₹300 | Inlet valve / drain pump: ₹800–₹1,600 | Suspension set / door lock: ₹1,100–₹2,300'
  },
  kelvinator_wm: {
    name: 'Kelvinator',
    appliance: 'Washing Machine',
    tag: 'Heavy-duty twin tub and reliable wash pulsators',
    hook: 'Spin dryer stopped spinning or wash timer ticking without motor movement on your Kelvinator washing machine in Trichy?',
    intro: 'Kelvinator washing machines, predominantly semi-automatic twin tub units and classic top-loaders, are prized for durable construction and straightforward mechanical controls. In Trichy homes, common faults include worn-out spin motor rubber bellows allowing water to drip into the spin motor, causing motor winding burnouts, or broken mechanical spring timers that jam mid-wash. Our technicians test motor windings, renew drain bellows, and replace mechanical switches right in your home.',
    problems: ['Spin tub not rotating or spinning very slowly', 'Wash timer stuck and ticking endlessly', 'Water leaking into bottom tray through drain bellows', 'Pulsator slipping on stripped gearbox shaft', 'Motor hums but does not start without manual push'],
    parts: ['Kelvinator dual timer unit', 'Heavy duty spin motor start capacitor', 'Spin tub rubber water seal bellow', 'Drain bellows assembly', 'Drive belt'],
    typicalCost: 'Inspection: ₹200–₹300 | Timer / capacitor: ₹650–₹1,500 | Spin seal / motor service: ₹1,100–₹2,200'
  },
  bpl_wm: {
    name: 'BPL',
    appliance: 'Washing Machine',
    tag: 'Indian home laundry pioneer and twin-tub durability',
    hook: 'Is your BPL washing machine spin tub dead, drain lever broken, or wash motor refusing to turn in Trichy?',
    intro: 'BPL has been a trusted Indian household name for decades, with many classic semi-automatic and automatic washers still actively serving Trichy families. Typical service calls involve stripped pulsator splines from years of laundry, snapped drain control pull-cables, or failed dual-run motor capacitors. Our technicians carry standard universal mechanical timers, heavy-gauge copper capacitors, and heavy-duty belts to keep these sturdy machines running smoothly.',
    problems: ['Spin dryer tub dead or humming without spinning', 'Drain valve lever broken or stuck open', 'Wash motor rotating weakly in one direction only', 'Loud scraping noise from bottom wash plate', 'Power cord or foot pedal safety switch burnt'],
    parts: ['BPL 4-wire / 7-wire wash timer', 'Dual motor capacitor (10+5 uF)', 'Drain rubber diaphragm valve and spring', 'Universal V-belt', 'Pulsator mounting bolt and bush'],
    typicalCost: 'Inspection: ₹200–₹250 | Drain lever / belt: ₹550–₹1,250 | Motor capacitor / timer: ₹800–₹1,700'
  },
  voltas_beko_wm: {
    name: 'Voltas Beko',
    appliance: 'Washing Machine',
    tag: 'ProSmart Inverter motor and AquaWave drum',
    hook: 'Is your Voltas Beko washing machine displaying error codes, stopping before spin, or leaking water in Trichy?',
    intro: 'Voltas Beko combines Voltas Indian cooling trust with European appliance engineering, featuring gentle AquaWave drums and ProSmart brushless motors. When faults happen in Trichy, they commonly relate to hard-water scaling in the dual-action inlet valve, lint choking the electronic drain pump, or child lock safety errors. Our technicians diagnose sensor circuits, clean internal filters, and replace electronic valves on-site.',
    problems: ['E01 / E05 drain and water timeout errors', 'Door latch mechanism jammed or failing to lock', 'Sudden drum vibration during final spin cycle', 'Water leakage from bottom filter access door', 'Control panel display flickering'],
    parts: ['Voltas Beko drain pump unit', 'Electronic door interlock', 'Water level pressure switch', 'Inlet solenoid valve kit', 'Tub suspension damper set'],
    typicalCost: 'Inspection: ₹250–₹350 | Drain pump / valve fix: ₹850–₹1,750 | Door latch / suspension: ₹1,200–₹2,400'
  },

  // --- AIR CONDITIONERS ---
  voltas_ac: {
    name: 'Voltas',
    appliance: 'AC',
    tag: 'All-Weather cooling and Maha Adjustable Inverter',
    hook: 'Is your Voltas AC blowing warm air, displaying an E1 or E6 error, or leaking water onto your bedroom wall in Trichy?',
    intro: 'Voltas air conditioners are an Indian summer staple across Trichy homes, engineered to perform even in 48°C outdoor ambient temperatures. In intense peak season use, heavy dust and airborne pollen in Trichy clog outdoor condenser fins, causing high head pressure and tripping the compressor overload protector. Inverter models frequently encounter communication errors between indoor and outdoor PCBs or low refrigerant pressure from vibration-stressed copper flare joints. Our technicians provide doorstep manifold pressure testing, nitrogen leak checks, capacitor replacements, and foam jet cleaning across Trichy.',
    problems: ['Blowing room-temperature air without cooling', 'E1 / E6 indoor-outdoor communication or sensor error', 'Water dripping from indoor split blower unit', 'Outdoor fan running but compressor not kicking in', 'Ice buildup on thin copper flare connection pipe'],
    parts: ['Voltas compressor dual capacitor (45/50 uF)', 'Indoor ambient room temperature sensor', 'Inverter outdoor IPM power PCB', 'BLDC indoor blower motor', 'Copper flare brass nut and filter drier'],
    typicalCost: 'Inspection: ₹250–₹350 | Jet service & wash: ₹650–₹1,150 | Capacitor / sensor fix: ₹900–₹1,850 | Gas leak & charge: ₹1,800–₹3,200'
  },
  daikin_ac: {
    name: 'Daikin',
    appliance: 'AC',
    tag: 'Neo-Swing Inverter compressor and Coanda airflow',
    hook: 'Daikin AC green light blinking with a U4 or E7 error code, or not cooling your room in Trichy?',
    intro: 'Daikin air conditioners are prized across Trichy for ultra-quiet operation and power-efficient Neo-Swing compressors. However, delicate electronics in Daikin inverter control boards are vulnerable to voltage spikes during Trichy thunderstorms. Low gas from hair-line flare leaks and clogged indoor air filters can cause the unit to shut down safely with blinking timer LEDs. Using Daikin handheld remote self-diagnosis codes, our technicians quickly isolate the faulty thermistor or PCB module and restore cold airflow without guesswork.',
    problems: ['U4 communication error between indoor and outdoor units', 'E7 outdoor fan motor lock error', 'Green operation LED blinking continuously', 'Insufficient cooling with Coanda airflow disabled', 'Water overflow from drain pan due to fungal sludge'],
    parts: ['Daikin inverter main control board', 'Cross-flow indoor blower fan wheel', 'Coanda swing flap stepping motor', 'Indoor coil pipe thermistor', 'Outdoor DC condenser fan motor'],
    typicalCost: 'Inspection: ₹300–₹400 | Jet cleaning: ₹750–₹1,250 | Sensor / fan motor service: ₹1,200–₹2,600 | PCB repair / gas top-up: ₹2,200–₹3,800'
  },
  lg_ac: {
    name: 'LG',
    appliance: 'AC',
    tag: 'Dual Inverter compressor and Ocean Black Fin',
    hook: 'Is your LG Dual Inverter AC showing CH05 or CH21 error codes, or failing to chill your room in Trichy?',
    intro: 'LG Dual Inverter split ACs are popular in Trichy for fast 6-in-1 convertible cooling and corrosion-resistant Ocean Black fins. Continuous high-temperature operation can put thermal strain on outdoor IPM power modules, triggering the dreaded CH05 communication error or CH21 DC peak fault. Moisture and dust in indoor evaporator trays can also clog the gravity drain hose, causing water to trickle down painted walls. Our technicians carry digital pressure gauges, LG sensor probes, and jet cleaning bags to diagnose and resolve your LG AC problems at home.',
    problems: ['CH05 communication failure between indoor and outdoor PCBs', 'CH21 inverter compressor drive overcurrent error', 'CH38 low refrigerant gas detection', 'Water overflowing from indoor unit body', 'Indoor cross-flow blower vibrating noisily'],
    parts: ['LG outdoor inverter PCB assembly', 'Indoor cross-flow blower fan and bush', 'Dual inverter rotary compressor relay', 'Indoor coil temperature sensor', 'Drain hose connector kit'],
    typicalCost: 'Inspection: ₹250–₹350 | Foam jet cleaning: ₹700–₹1,200 | Sensor / blower repair: ₹1,100–₹2,400 | PCB repair / gas charge: ₹2,000–₹3,600'
  },
  samsung_ac: {
    name: 'Samsung',
    appliance: 'AC',
    tag: 'WindFree micro-hole cooling and Triple Inverter',
    hook: 'Samsung AC showing C4 22 gas error, E1 01 communication fault, or blowing warm air in Trichy?',
    intro: 'Samsung WindFree and Triple Inverter air conditioners deliver draft-free comfort through thousands of micro-holes. In Trichy dusty conditions, these micro-holes and the underlying indoor filter can choke rapidly, restricting airflow and freezing the evaporator coil into a block of ice. Inverter communication line errors (E1 01) and outdoor sensor drifts are also frequently resolved by our technicians with component-level testing and professional high-pressure coil washes.',
    problems: ['C4 22 refrigerant gas leak or circulation issue', 'E1 01 communication error', 'Evaporator coil frosting over with white ice', 'WindFree louver flaps not opening or closing properly', 'Outdoor unit humming loudly without cooling'],
    parts: ['Samsung stepper flap motor', 'Outdoor IPM control PCB', 'Evaporator thermistor harness', 'Copper service valve and flare joints', 'Capacitor and surge protector'],
    typicalCost: 'Inspection: ₹250–₹350 | Deep jet cleaning: ₹700–₹1,200 | Flare leak & gas charge: ₹1,900–₹3,400 | PCB repair: ₹1,800–₹3,200'
  },
  blue_star_ac: {
    name: 'Blue Star',
    appliance: 'AC',
    tag: 'Precision cooling and heavy-duty tropical compressors',
    hook: 'Facing an EC error code, water leakage, or weak cooling from your Blue Star air conditioner in Trichy?',
    intro: 'Blue Star air conditioners are engineered for extreme tropical conditions and heavy cooling duty. When a Blue Star AC flashes an EC error code, it indicates a refrigerant leak or pressure drop in the copper circuit. Weak indoor blower fan speeds or mould growth in the blower cage can also reduce cooling airflow drastically in Trichy humid monsoon transitions. Our local technicians perform nitrogen pressure testing, repair copper joint pinholes, and recharge R32 or R410A refrigerant to factory specifications.',
    problems: ['EC error indicating low refrigerant charge', 'Water dripping from the center of the indoor unit', 'Outdoor condenser fan screeching or seized', 'Compressor cutting off every 5 minutes on thermal overload', 'Indoor display remote receiver not responding'],
    parts: ['Blue Star high-performance compressor capacitor', 'Outdoor condenser fan motor', 'Remote sensor display PCB', 'Expansion capillary and copper tubing', 'Blower cross-flow fan wheel'],
    typicalCost: 'Inspection: ₹250–₹350 | Wet jet service: ₹650–₹1,150 | Capacitor / motor fix: ₹950–₹2,200 | Nitrogen leak fix & gas: ₹1,850–₹3,300'
  },
  carrier_ac: {
    name: 'Carrier',
    appliance: 'AC',
    tag: 'Flexicool inverter and durable copper condenser coils',
    hook: 'Is your Carrier AC showing E3 error, rattling loudly, or struggling to cool your Trichy bedroom?',
    intro: 'Carrier invented modern air conditioning and their residential split systems remain popular in Trichy for Flexicool capacity switching. In intense heat, outdoor condenser coils can become blanketed in dust, forcing compressor discharge temperatures too high and causing sudden cutoffs. Broken indoor blower bushings can create annoying squeaks during the night. Our technicians conduct thorough multi-point checks including electrical terminal tightness, capacitor capacitance, and chemical jet coil cleaning.',
    problems: ['E3 blower fan motor feedback error', 'Outdoor compressor vibrating against mounting bracket', 'Air blowing warm during peak afternoon hours', 'Musty damp odor when AC is turned on', 'Water leaking into the false ceiling or wall'],
    parts: ['Carrier blower motor capacitor', 'Rubber vibration isolator pads', 'Indoor blower motor bushing', 'Temperature sensor thermistor', 'Drain pan tray and drain tube'],
    typicalCost: 'Inspection: ₹250–₹350 | Jet wash: ₹650–₹1,100 | Blower bush / sensor: ₹850–₹1,950 | Gas recharge & flare: ₹1,800–₹3,100'
  },
  hitachi_ac: {
    name: 'Hitachi',
    appliance: 'AC',
    tag: 'Expandable Inverter and FrostWash technology',
    hook: 'Timer lamp blinking or warm air blowing from your Hitachi air conditioner in Trichy?',
    intro: 'Hitachi air conditioners are celebrated for precision cooling and robust tropical compressors. If the timer lamp on a Hitachi indoor unit blinks continuously in sequences, it indicates a protective shutdown due to gas loss, thermistor failure, or fan motor stall. Hitachi multi-layered electronic PCB assemblies require delicate diagnostic care rather than rough replacements. Our technicians decipher blinking flash codes, test sensors, and restore balanced cooling in your home.',
    problems: ['Timer lamp blinking in 1 to 9 flash patterns', 'Low gas pressure from outdoor service valve leaks', 'Outdoor fan not spinning on hot afternoons', 'FrostWash cycle failing to complete', 'Noisy copper piping vibration'],
    parts: ['Hitachi sensor probe bundle', 'Inverter bridge rectifier / PCB', 'Outdoor fan capacitor', 'Cross-flow fan wheel', 'High-pressure copper filter drier'],
    typicalCost: 'Inspection: ₹300–₹400 | Chemical jet service: ₹750–₹1,250 | Sensor / fan fix: ₹1,100–₹2,500 | Inverter PCB repair: ₹2,200–₹3,800'
  },
  lloyd_ac: {
    name: 'Lloyd',
    appliance: 'AC',
    tag: 'Rapid cooling and golden fin anti-corrosive protection',
    hook: 'Lloyd AC showing E1 error or taking hours to cool down your living room in Trichy?',
    intro: 'Lloyd air conditioners, backed by Havells engineering, are favored for rapid cooling and 100% copper condensers with Golden Fin protection. During prolonged peak summer running, compressor starting capacitors can deteriorate, resulting in an outdoor unit that hums for 10 seconds before tripping the MCB. Our technicians check start and run winding resistances, test microfarad capacitance, and verify refrigerant pressures on-site.',
    problems: ['E1 indoor sensor open/short error', 'Outdoor unit humming then tripping the MCB breaker', 'Airflow is weak even on high fan setting', 'Water overflowing inside room due to sloped installation', 'Remote control receiver board unresponsive'],
    parts: ['Lloyd compressor dual capacitor', 'Room ambient thermistor probe', 'Indoor display sensor board', 'Drain pipe and U-trap assembly', 'Blower motor unit'],
    typicalCost: 'Inspection: ₹200–₹300 | Jet service: ₹650–₹1,100 | Capacitor / sensor fix: ₹800–₹1,750 | Gas leak fix & charge: ₹1,750–₹3,000'
  },

  // --- REFRIGERATORS ---
  samsung_ref: {
    name: 'Samsung',
    appliance: 'Fridge',
    tag: 'Digital Inverter and Twin Cooling Plus',
    hook: 'Is your Samsung refrigerator freezer cold but the bottom compartment warm, or is water pooling under the crisper drawer in Trichy?',
    intro: 'Samsung refrigerators are common fixtures in Trichy homes, prized for Twin Cooling Plus dual evaporators and energy-saving Digital Inverter compressors. A frequent complaint in double-door models is the fresh food compartment losing cooling while the freezer continues to freeze ice solid. This is almost always caused by a blocked defrost drain channel or a failed bimetal defrost sensor causing ice to choke the air circulation fan duct. Our technicians disassemble the freezer back panel, defrost the coil, test defrost heaters and thermistors, and restore cold airflow without disturbing your kitchen.',
    problems: ['Freezer cooling fine but bottom fridge compartment warm', 'Water accumulating underneath vegetable tray', 'Digital Inverter PCB red LED blinking on back panel', 'Compressor clicking every 2 minutes without starting', 'Thick frost accumulating on freezer back wall'],
    parts: ['Samsung defrost temperature sensor (DA32)', 'Defrost glass heater rod', 'Evaporator DC circulation fan motor', 'Inverter compressor driver inverter board', 'PTC start relay and overload protector'],
    typicalCost: 'Inspection: ₹200–₹300 | Defrost heater / sensor fix: ₹950–₹1,850 | Fan motor / relay replacement: ₹1,100–₹2,200 | Inverter PCB repair: ₹1,600–₹2,900'
  },
  lg_ref: {
    name: 'LG',
    appliance: 'Fridge',
    tag: 'Smart Inverter compressor and Door Cooling+',
    hook: 'LG refrigerator not cooling, making continuous buzzing noises, or leaking water on your kitchen floor in Trichy?',
    intro: 'LG refrigerators with Smart Inverter compressors and Door Cooling+ air ducts keep vegetables and milk fresh through Trichy summers. However, sudden voltage swings or prolonged dust buildup on rear condenser coils can overheat the compressor starter relay or damage the linear drive control circuit. In frost-free units, a burnt defrost fuse or jammed mechanical air damper can starve the lower shelves of cold air. Our technicians inspect compressor winding resistance, test defrost sensors with multimeters, and carry genuine LG-compatible relays for immediate on-site repair.',
    problems: ['No cooling in both freezer and lower compartment', 'Water leaking onto the floor from the rear defrost tray', 'Loud buzzing or rattling from the back compressor area', 'Defrost thermal fuse blown causing complete coil freeze', 'Door gasket loose allowing cold air to escape'],
    parts: ['LG PTC starter relay and overload', 'Defrost thermal fuse (72°C)', 'Evaporator circulation fan motor', 'Door Cooling air damper flap', 'Magnetic silicone door gasket seal'],
    typicalCost: 'Inspection: ₹200–₹300 | Starter relay / fuse fix: ₹750–₹1,600 | Fan motor / sensor service: ₹1,050–₹2,100 | Gas recharge & condenser repair: ₹1,700–₹2,900'
  },
  whirlpool_ref: {
    name: 'Whirlpool',
    appliance: 'Fridge',
    tag: 'IntelliFresh inverter and 6th Sense DeepFreeze',
    hook: 'Whirlpool refrigerator clicking repeatedly, forming heavy ice in the freezer, or spoiling milk in the bottom compartment in Trichy?',
    intro: 'Whirlpool refrigerators, including Protton 3-door models and IntelliFresh double-door units, use 6th Sense sensors and microblock technology. In classic frost-free models, mechanical defrost timers (running an 8-hour cycle) can get stuck in defrost mode, leaving the compressor permanently off, or stuck in cooling mode, creating a solid block of ice around the fan. Our technicians check defrost timer gears, test bimetal thermostats, and renew worn starter relays right at your kitchen doorstep.',
    problems: ['Defrost timer stuck causing cooling stoppage', 'Compressor clicking periodically without turning on', 'Freezer fan hitting ice and making loud grinding sound', 'Vegetables freezing into ice in crisper box', 'Water dripping inside food compartment'],
    parts: ['Whirlpool 8-hour defrost timer', 'Bimetal defrost thermostat switch', 'PTC compressor starter combo', 'Evaporator fan motor unit', 'Drain trough heater wire'],
    typicalCost: 'Inspection: ₹200–₹300 | Timer / bimetal thermostat fix: ₹800–₹1,700 | Fan motor / relay replacement: ₹1,000–₹2,100 | Gas top-up & filter drier: ₹1,650–₹2,850'
  },
  godrej_ref: {
    name: 'Godrej',
    appliance: 'Fridge',
    tag: 'Edge Pro direct cool and anti-bacterial protection',
    hook: 'Is your Godrej refrigerator not cooling, leaking water from the freezer tray, or making loud clicking sounds in Trichy?',
    intro: 'Godrej is an iconic refrigerator brand in Tamil Nadu, with millions of single-door Direct Cool and double-door Frost Free units operating reliably. On single-door Edge models, poking ice with knives often punctures the delicate aluminum freezer plate, venting refrigerant gas instantly. In double-door models, thermal relays can burn out during summer voltage fluctuations. Our technicians solder freezer leaks with high-grade aluminum brazing, flush capillary tubes, test thermostats, and recharge gas safely.',
    problems: ['Freezer plate punctured by sharp object or ice knife', 'PTC relay burnt causing compressor hum and click', 'Thermostat knob failing to regulate temperature', 'Door gasket torn or lost magnetism', 'Thick snow-like frost in single-door freezer'],
    parts: ['Godrej thermostat switch mechanism', 'PTC relay and overload protector', 'Freezer roll-bond evaporator plate', 'Copper filter drier and capillary tube', 'Universal door gasket rubber'],
    typicalCost: 'Inspection: ₹200–₹250 | Relay / thermostat fix: ₹650–₹1,500 | Aluminum brazing & gas recharge: ₹1,500–₹2,700 | Gasket replacement: ₹750–₹1,600'
  },
  haier_ref: {
    name: 'Haier',
    appliance: 'Fridge',
    tag: 'Bottom Mounted Refrigerator BMR and 1-Hour Icing',
    hook: 'Facing cooling failure, clicking compressor, or error codes on your Haier refrigerator in Trichy?',
    intro: 'Haier Bottom Mounted Refrigerators (BMR) are very convenient because the frequently used vegetable and food compartment is placed at eye level. However, if the lower freezer fan motor fails or the defrost heater burns out, air channels leading up to the top compartment become blocked with frost, turning the refrigerator warm within 24 hours. Our technicians troubleshoot electronic inverter control boards, replace bimetal sensors, and restore proper balanced cooling on-site.',
    problems: ['Top fresh food section warm while bottom freezer works', 'Compressor clicking and stopping after 5 seconds', 'Drain hole choked causing ice sheet under bottom drawer', 'Electronic temperature display blinking error codes', 'Condenser fan motor seized'],
    parts: ['Haier DC circulation fan motor', 'Inverter compressor driver board', 'Defrost heater element and fuse', 'Drain trough heating wire', 'PTC starter relay'],
    typicalCost: 'Inspection: ₹200–₹300 | Fan / heater service: ₹900–₹1,850 | Relay / sensor fix: ₹750–₹1,650 | Inverter PCB repair: ₹1,650–₹2,950'
  },

  // --- TELEVISIONS ---
  sony_tv: {
    name: 'Sony',
    appliance: 'TV',
    tag: 'Bravia XR cognitive intelligence and Triluminos panel',
    hook: 'Sony Bravia TV red standby light blinking in sequences, or TV has sound but a pitch black screen in Trichy?',
    intro: 'Sony Bravia LED, OLED, and Google TVs are celebrated for stunning picture processing and Triluminos color accuracy. When a Sony Bravia develops a hardware fault, the red standby LED flashes in a specific sequence: 6 blinks indicates a backlight LED strip or inverter failure, while 5 blinks or 2 blinks points to T-Con panel timing or main board power rail faults. Transporting a large 55-inch Sony screen through Trichy traffic carries high panel shatter risk. Our skilled technicians diagnose blinking codes and service backlights directly in your living room.',
    problems: ['Red standby light blinking 6 times (backlight error)', 'Red light blinking 5 times (T-Con panel communication error)', 'TV has audio/sound but screen is completely dark', 'Sony Android TV stuck in bootloop on Sony logo', 'Vertical colored lines running through display screen'],
    parts: ['Sony direct-lit LED backlight strip set', 'T-Con timing controller board', 'Bravia power supply SMPS board', 'Main processor motherboard', 'LVDS flex ribbon cable'],
    typicalCost: 'Inspection: ₹300–₹400 | Power supply repair: ₹1,200–₹2,400 | LED backlight replacement: ₹1,800–₹3,800 | T-Con / Mainboard fix: ₹2,000–₹4,200'
  },
  samsung_tv: {
    name: 'Samsung',
    appliance: 'TV',
    tag: 'Crystal 4K UHD, QLED, and Tizen OS',
    hook: 'Samsung TV screen flickering, clicking repeatedly without turning on, or half the display dark in Trichy?',
    intro: 'Samsung Crystal 4K, QLED, and Smart TVs with Tizen OS are popular across Tiruchirappalli for vivid brightness and smart connectivity. A frequent failure in slim LED models is individual edge-lit or direct-lit LED beads burning out, creating dark horizontal shadows across the screen or triggering power supply protection where the TV clicks and reboots continuously. Our technicians carry regulated LED testers and original aluminum-base replacement strips to replace the entire backlight array cleanly on-site.',
    problems: ['Screen has dark patches or is completely blank with sound', 'TV power light clicks on and off in endless reboot loop', 'Half of the screen is darker than the other half', 'Smart Hub apps crashing or Wi-Fi failing to connect', 'HDMI ports not detecting set-top box or game console'],
    parts: ['Samsung complete LED backlight array (aluminum base)', 'Power supply SMPS module', 'Tizen smart motherboard', 'T-Con logic board', 'Wi-Fi / Bluetooth module'],
    typicalCost: 'Inspection: ₹250–₹350 | Power supply fix: ₹1,100–₹2,200 | Backlight strip replacement: ₹1,700–₹3,600 | Motherboard / T-Con repair: ₹1,850–₹3,900'
  },
  lg_tv: {
    name: 'LG',
    appliance: 'TV',
    tag: 'webOS smart platform and NanoCell / OLED display',
    hook: 'LG TV screen turned purple or blue, or TV has sound but no picture in your Trichy living room?',
    intro: 'LG Smart TVs with webOS and Magic Remote are praised for user experience and wide IPS viewing angles. A well-documented issue with certain LG LED backlight generations is the phosphorus coating on LED lenses degrading, causing the entire picture to acquire a heavy purple or bluish tint. In other cases, power supply diode failure prevents the TV from waking up from standby. Our technicians replace the entire LED backlight kit with fresh cool-white strips right in your home, restoring crisp natural color.',
    problems: ['Display turned blue or purple due to degraded LED backlight', 'Sound is working but display is totally dark (flashlight test shows faint image)', 'Red standby light stays on but TV will not power up', 'Magic remote cursor not registering on screen', 'Thin vertical lines on one side of panel'],
    parts: ['Original cool-white LG LED backlight strip set', 'Power supply board (SMPS)', 'webOS main processor motherboard', 'T-Con board and COF flex tracks', 'Internal speaker pair'],
    typicalCost: 'Inspection: ₹250–₹350 | Power board repair: ₹1,100–₹2,200 | Purple tint / backlight replacement: ₹1,700–₹3,500 | Mainboard service: ₹1,900–₹3,800'
  },
  mi_tv: {
    name: 'Mi',
    appliance: 'TV',
    tag: 'PatchWall smart UI and 4K HDR entertainment',
    hook: 'Mi TV stuck on Mi boot screen, restarting endlessly, or screen dark with sound in Trichy?',
    intro: 'Xiaomi Mi and Redmi TVs are immensely popular across Trichy for offering large-screen 4K HDR smart television at competitive prices. Typical faults encountered after 2–4 years of use include EMMC memory flash corruption causing the TV to hang indefinitely on the PatchWall or Android boot logo, and burnt-out LED backlight strips causing a dark screen while YouTube or cable audio continues to play. Our technicians perform software re-flashing, power circuit repairs, and full LED strip replacements at your doorstep.',
    problems: ['TV stuck on Mi logo and rebooting in endless bootloop', 'Sound plays normally but screen is pitch dark', 'Power surge damaged the integrated power/main combo board', 'Wi-Fi disconnected and cannot search wireless networks', 'Lines or image flickering on panel'],
    parts: ['Mi LED backlight strip set', 'Universal / Mi power-motherboard combo board', 'EMMC firmware flash chip', 'T-Con controller module', 'Replacement remote IR sensor'],
    typicalCost: 'Inspection: ₹200–₹300 | Software flashing / boot fix: ₹800–₹1,600 | Backlight strip replacement: ₹1,500–₹3,200 | Motherboard repair: ₹1,400–₹2,800'
  },

  // --- MICROWAVES ---
  lg_mw: {
    name: 'LG',
    appliance: 'Microwave',
    tag: 'Charcoal Lighting heater and Intellowave technology',
    hook: 'Is your LG microwave oven running and turning but completely failing to heat food in Trichy?',
    intro: 'LG microwave ovens, particularly NeoChef and convection models, are reliable kitchen appliances in Trichy households. When an LG microwave turns on, lights up the bulb, and rotates the glass tray but leaves food stone cold after 3 minutes, the problem is usually a blown high-voltage fuse, a shorted high-voltage capacitor, or a failed magnetron vacuum tube. Because microwave capacitors store lethal high-voltage charges, amateur repairs are dangerous. Our technicians discharge the circuit safely, test high-voltage components with specialized meters, and replace faulty magnetrons on-site.',
    problems: ['Microwave runs but food remains cold', 'Loud buzzing or humming noise when heating starts', 'Sparks and crackling sounds near the mica waveguide sheet', 'Touch keypad buttons not registering touches', 'Glass turntable platter not rotating'],
    parts: ['LG 2M214 / 2M226 magnetron tube', 'High voltage capacitor (0.9–1.05 uF)', 'High voltage diode (12kV)', 'Mica waveguide cover sheet', 'Turntable synchronous motor'],
    typicalCost: 'Inspection: ₹200–₹250 | Mica sheet / fuse / diode fix: ₹550–₹1,250 | Turntable motor / door switch: ₹750–₹1,600 | Magnetron replacement: ₹1,500–₹2,800'
  },
  samsung_mw: {
    name: 'Samsung',
    appliance: 'Microwave',
    tag: 'Ceramic enamel cavity and Triple Distribution System',
    hook: 'Samsung microwave displaying SE error code, sparking inside, or not heating in Trichy?',
    intro: 'Samsung microwave ovens are favored for scratch-resistant ceramic enamel cavities and Triple Distribution heating. A frequent fault in touch-panel Samsung models is the SE or -SE- error, caused by moisture or steam shorting individual membrane keypad traces. Sparking inside the cavity often happens when burnt grease carbonizes the mica sheet, allowing microwave radiation to arc against the metal chassis. Our technicians replace degraded mica covers, clean cavity arcs, and service membrane keypads right at your home.',
    problems: ['SE / 5E error code caused by jammed keypad membrane', 'No heat produced during microwave reheat mode', 'Sparks and lightning-like flashes inside oven chamber', 'Door safety latch broken preventing start', 'Cooling fan running continuously or making loud noise'],
    parts: ['Samsung touch membrane keypad panel', 'High voltage transformer unit', 'Genuine compatible magnetron', 'Primary and secondary door interlock microswitches', 'Mica sheet wave cover'],
    typicalCost: 'Inspection: ₹200–₹250 | Mica cover / switch fix: ₹550–₹1,300 | Keypad membrane repair: ₹850–₹1,800 | Magnetron / transformer replacement: ₹1,500–₹2,850'
  },
  ifb_mw: {
    name: 'IFB',
    appliance: 'Microwave',
    tag: 'Multi-stage convection baking and grill heating',
    hook: 'IFB convection microwave tripping the kitchen MCB or failing to bake and heat in Trichy?',
    intro: 'IFB convection microwaves are kitchen workhorses for Trichy families who bake cakes, roast snacks, and reheat meals. When an IFB microwave trips the home circuit breaker the instant you press start, it usually indicates a short-circuited primary door microswitch or a grounded high-voltage capacitor. If convection baking is weak, the rear circular heating element or blower fan motor may have burned out. Our technicians inspect door safety linkages, measure resistance on heating coils, and carry high-voltage diodes for prompt doorstep repairs.',
    problems: ['Tripping electrical MCB when start button is pressed', 'Baking element not heating in convection mode', 'Turntable plate jerky or stuck in one position', 'Burnt plastic or electrical smell during heating', 'Control knob encoder slipping and skipping time numbers'],
    parts: ['Door interlock microswitch trio', 'Convection circular heating coil element', 'High voltage capacitor & diode', 'Rotary encoder timer knob', 'Glass turntable drive coupler'],
    typicalCost: 'Inspection: ₹200–₹300 | Door microswitch / diode fix: ₹600–₹1,350 | Turntable motor / coupler: ₹750–₹1,650 | Convection heater / magnetron: ₹1,450–₹2,900'
  }
};

module.exports = { BRAND_DATA };
