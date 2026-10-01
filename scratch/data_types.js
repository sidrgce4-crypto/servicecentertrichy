// Detailed Appliance Types Content Generators
// Provides comprehensive coverage of appliance types, how they work, common problems,
// parts involved, repair work, solutions, checking process, pricing, and Trichy locality context.

function getWashingMachineTypesSection(brand) {
  const b = brand ? `${brand} ` : '';
  return `
  <!-- Appliance Types Section -->
  <section class="section section-alt" id="appliance-types">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">${b}Washing Machine Types We Repair in Trichy</h2>
        <p class="section-subtitle">Comprehensive doorstep checking, mechanical servicing, and spare parts replacement across all washing machine designs.</p>
      </div>

      <div class="content-box" style="margin-bottom: 24px;">
        <h3 style="color: var(--primary); font-size: 1.25rem; margin-bottom: 10px;">1. Semi-Automatic Washing Machine (Twin Tub)</h3>
        <p><strong>How It Works:</strong> Semi-automatic machines feature two dedicated tubs—one for washing with an agitator/pulsator powered by an induction motor and drive belt, and a separate high-speed spin dryer tub driven by a dedicated spin motor with a mechanical brake mechanism. Operation is controlled through mechanical rotary timers.</p>
        <p><strong>Common Problems:</strong> Wash pulsator rotating in only one direction, spin tub not spinning, loud screeching noise from worn spin tub seal and bearing, water continuously draining from the wash tub, timer knob jammed or clicking without motor movement.</p>
        <p><strong>Common Parts Involved:</strong> Dual timers (wash & spin), motor start capacitors, drive belt, drain bellow rubber valve, brake wire assembly, pulsator assembly, and gear box.</p>
        <p><strong>Checking Process & Repair:</strong> Our Trichy technician inspects the capacitor capacitance value with a meter, checks drive belt tension, tests timer contact points, and examines the bottom gearcase for oil leakage or binding.</p>
        <p><strong>Cost & Locality Context:</strong> Semi-automatic repair in Trichy typically ranges from ₹350 for belt or drain seal adjustments to ₹850–₹1,450 for timer or motor capacitor replacement. Final repair cost depends on the fault and part required after physical inspection.</p>
      </div>

      <div class="content-box" style="margin-bottom: 24px;">
        <h3 style="color: var(--primary); font-size: 1.25rem; margin-bottom: 10px;">2. Top Load Fully Automatic Washing Machine</h3>
        <p><strong>How It Works:</strong> Top-load fully automatic machines utilize a single vertical drum for both washing and spin-drying. An electronic control board (PCB) governs electromagnetic water inlet valves, an electronic water level pressure sensor, and a multi-function drain motor coupled to a clutch gearbox.</p>
        <p><strong>Common Problems:</strong> Water continuously filling without stopping, machine halting mid-cycle with drain error codes (E1, E2, OE, 5C), violent drum banging during high-speed extraction, lid switch sensor open error (dE), or dead display panel after power surges.</p>
        <p><strong>Common Parts Involved:</strong> Solenoid inlet valves, electronic pressure switch tube, drain motor actuator, suspension damper rods (set of 4), lid magnet switch, and main control board (PCB).</p>
        <p><strong>Checking Process & Repair:</strong> The technician tests water supply pressure, checks solenoid coils for electrical continuity, clears sediment from inlet filter mesh, tests damper spring tension, and scans PCB relay circuits.</p>
        <p><strong>Cost & Locality Context:</strong> Top-load repairs in Trichy homes typically range from ₹450 to ₹1,850 depending on whether an inlet valve, suspension set, or drain motor is required. In Trichy areas with hard borewell water, inlet valves frequently require decalcification or replacement.</p>
      </div>

      <div class="content-box">
        <h3 style="color: var(--primary); font-size: 1.25rem; margin-bottom: 10px;">3. Front Load Fully Automatic Washing Machine</h3>
        <p><strong>How It Works:</strong> Front-load washers use a horizontal stainless steel drum that tumbles clothes through water and detergent using gravity, providing superior wash quality while consuming less water. They feature high-speed direct-drive or belt-driven BLDC inverter motors, internal heating elements, and electromagnetic door interlocks.</p>
        <p><strong>Common Problems:</strong> Door locked and refusing to open after cycle, intense shaking and loud jet-engine roaring noise during 1000+ RPM spin cycles, water pooling beneath the front door boot seal, water not heating during warm cycles, or drain pump blocked by coins.</p>
        <p><strong>Common Parts Involved:</strong> Bi-metal door lock mechanism, silicone door boot gasket (bellow), front heavy-duty shock absorbers, cast-iron drum spider bracket, dual ball bearings and oil seal, drain filter pump, and water heating element.</p>
        <p><strong>Checking Process & Repair:</strong> The technician checks the drum for play indicating spider arm corrosion or bearing wear, tests heater insulation resistance, checks door lock contacts, and inspects shock absorber resistance.</p>
        <p><strong>Cost & Locality Context:</strong> Front load servicing in Trichy ranges from ₹500 for drain block removal to ₹1,200–₹2,500+ for door locks, boot seals, or shock absorber replacement. Final cost is always quoted upfront before component replacement.</p>
      </div>
    </div>
  </section>
`;
}

function getFridgeTypesSection(brand) {
  const b = brand ? `${brand} ` : '';
  return `
  <!-- Appliance Types Section -->
  <section class="section section-alt" id="appliance-types">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">${b}Refrigerator Types We Repair in Trichy</h2>
        <p class="section-subtitle">Doorstep diagnostic checking, cooling circuit repairs, and genuine part replacements for all refrigerator formats.</p>
      </div>

      <div class="content-box" style="margin-bottom: 24px;">
        <h3 style="color: var(--primary); font-size: 1.25rem; margin-bottom: 10px;">1. Single Door Direct Cool Refrigerator</h3>
        <p><strong>How It Works:</strong> Direct cool refrigerators use natural convection to circulate chilled air from an integrated freezer plate inside the main cabinet. Cooling is regulated by a mechanical capillary thermostat that cycles the reciprocating compressor on and off.</p>
        <p><strong>Common Problems:</strong> Heavy ice accumulating around the freezer box requiring frequent manual defrosting, compressor making clicking sounds every few minutes without starting, cooling completely stopping after a sharp object is used to chip ice, or the cabinet remaining warm.</p>
        <p><strong>Common Parts Involved:</strong> PTC starter relay, overload protector (OLP), mechanical rotary thermostat, magnetic door gasket, aluminium roll-bond freezer evaporator, and copper filter drier.</p>
        <p><strong>Checking Process & Repair:</strong> Our Trichy technician measures compressor winding resistance, tests relay continuity with a multimeter, checks door gasket seal tightness, and examines the freezer plate for puncture leaks.</p>
        <p><strong>Cost & Locality Context:</strong> Common direct cool repairs in Trichy range from ₹350 to ₹950 for relay, overload, or thermostat replacement. Puncture leak repairs and gas charging range from ₹1,450 to ₹2,400. Final price depends on the fault and part required.</p>
      </div>

      <div class="content-box" style="margin-bottom: 24px;">
        <h3 style="color: var(--primary); font-size: 1.25rem; margin-bottom: 10px;">2. Double Door Frost Free Refrigerator</h3>
        <p><strong>How It Works:</strong> Frost-free refrigerators house a hidden cooling coil behind the freezer wall. An electric fan motor continuously forces chilled air through duct dampers into the lower fresh food compartment. An automatic defrost timer activates a heater every 8–10 hours to melt accumulated frost, eliminating manual defrosting.</p>
        <p><strong>Common Problems:</strong> Freezer freezes water into ice but the lower food cabin is completely warm, water leaking into the bottom vegetable crisper, loud whistling noise from a frost-jammed circulation fan, or ice building up behind the rear panel.</p>
        <p><strong>Common Parts Involved:</strong> Defrost timer / electronic defrost controller, bimetal defrost thermostat, thermal fuse, radiant defrost heating glass tube/element, DC evaporator fan motor, and air damper flap.</p>
        <p><strong>Checking Process & Repair:</strong> The technician removes the freezer inner shroud, measures defrost heater resistance, tests bimetal sensor continuity under cold temperatures, clears choked defrost drain tubes, and tests fan RPM.</p>
        <p><strong>Cost & Locality Context:</strong> Frost-free electrical repairs in Trichy typically cost between ₹650 and ₹1,650 for sensor, timer, or heater element replacement. Technicians carry standard defrost components on visits across Trichy.</p>
      </div>

      <div class="content-box">
        <h3 style="color: var(--primary); font-size: 1.25rem; margin-bottom: 10px;">3. Side-by-Side & Multi-Door Refrigerator</h3>
        <p><strong>How It Works:</strong> Modern side-by-side and multi-door French door refrigerators use variable-capacity digital inverter compressors paired with micro-controller mainboards and multiple temperature thermistors for zone-wise cooling control.</p>
        <p><strong>Common Problems:</strong> Display panel flashing error codes, inverter compressor running constantly without achieving set temperature, ice maker dispenser not ejecting cubes, or internal temperature fluctuating wildly.</p>
        <p><strong>Common Parts Involved:</strong> Digital inverter PCB driver board, motorized multi-airflow dampers, electronic NTC thermistors, and water dispenser solenoid valves.</p>
        <p><strong>Checking Process & Repair:</strong> Technicians inspect the rear PCB for blown inverter components, verify sensor resistance values against temperature tables, and check condenser coil airflow.</p>
        <p><strong>Cost & Locality Context:</strong> Inverter circuit repairs and sensor replacements typically range from ₹1,200 to ₹2,800+. Final repair cost is explained clearly after physical inspection.</p>
      </div>
    </div>
  </section>
`;
}

function getAcTypesSection(brand) {
  const b = brand ? `${brand} ` : '';
  return `
  <!-- Appliance Types Section -->
  <section class="section section-alt" id="appliance-types">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">${b}Air Conditioner Types We Repair in Trichy</h2>
        <p class="section-subtitle">Doorstep diagnostic testing, cooling restoration, leak repair, and jet pump cleaning across all AC categories.</p>
      </div>

      <div class="content-box" style="margin-bottom: 24px;">
        <h3 style="color: var(--primary); font-size: 1.25rem; margin-bottom: 10px;">1. Split Air Conditioner (Fixed Speed)</h3>
        <p><strong>How It Works:</strong> The indoor unit houses an evaporator coil, air filter, and tangential cross-flow blower, while the outdoor condensing unit contains the compressor, condenser coil, and fan. The units are linked by insulated copper refrigerant piping.</p>
        <p><strong>Common Problems:</strong> Indoor unit blowing room-temperature air because the compressor failed to start, dual run capacitor bulging, indoor blower fan spinning slowly, water dripping down the wall from a clogged drain pan, or gas leaking from flare joints.</p>
        <p><strong>Common Parts Involved:</strong> Dual run capacitor (35–50µF), indoor blower motor and bushing, flare copper brass nuts, room and coil temperature sensors, and remote receiver board.</p>
        <p><strong>Checking Process & Repair:</strong> Our Trichy technician measures operating current (amps), tests capacitor microfarads with a digital meter, checks suction pressure with a manifold gauge, and cleans clogged filters.</p>
        <p><strong>Cost & Locality Context:</strong> Split AC electrical repairs in Trichy range from ₹450 to ₹950 (capacitor, sensor, or wiring fix). Gas charging with leak fixing ranges from ₹1,650 to ₹2,850. Final cost depends on the fault and part required.</p>
      </div>

      <div class="content-box" style="margin-bottom: 24px;">
        <h3 style="color: var(--primary); font-size: 1.25rem; margin-bottom: 10px;">2. Inverter Split Air Conditioner</h3>
        <p><strong>How It Works:</strong> Inverter ACs use a brushless DC (BLDC) compressor powered by an electronic inverter circuit (IPM module). Instead of turning off when the set temperature is reached, the compressor modulates its speed smoothly, saving significant electricity.</p>
        <p><strong>Common Problems:</strong> Outdoor unit not turning on with communication error codes (E1, E6, C1) flashing on the indoor display, indoor unit shutting down after 3 minutes, outdoor inverter PCB damaged by voltage spikes, or electronic expansion valve (EEV) stuck.</p>
        <p><strong>Common Parts Involved:</strong> Outdoor inverter IPM control board, electronic expansion valve coil, BLDC fan motors, discharge pipe temperature thermistors, and reactor coils.</p>
        <p><strong>Checking Process & Repair:</strong> Technicians inspect IPM gate signals, verify communication wire DC voltages, test thermistor resistances, and verify R32/R410A standing and operating pressures.</p>
        <p><strong>Cost & Locality Context:</strong> Inverter PCB repairs in Trichy typically range from ₹1,250 to ₹2,800. Regular foam and pressure jet maintenance is highly recommended before peak summer months in Trichy.</p>
      </div>

      <div class="content-box">
        <h3 style="color: var(--primary); font-size: 1.25rem; margin-bottom: 10px;">3. Window Air Conditioner</h3>
        <p><strong>How It Works:</strong> A compact single-chassis air conditioner where the compressor, condenser, evaporator, and dual-shaft fan motor are integrated inside one metal cabinet mounted through a window or wall opening.</p>
        <p><strong>Common Problems:</strong> Loud metallic vibration against window frame, condenser coils choked with road dust reducing airflow, water splashing from rear fan slinger ring, or thermostat knob broken.</p>
        <p><strong>Common Parts Involved:</strong> Dual-shaft fan motor, rotary fan capacitor, mechanical thermostat switch, selector switch, and base drain plug.</p>
        <p><strong>Checking Process & Repair:</strong> The technician slides the chassis out of the mounting sleeve, inspects coils for dust accumulation, lubricates fan motor bearings, and tests electrical components.</p>
        <p><strong>Cost & Locality Context:</strong> Window AC servicing and capacitor repairs range from ₹350 to ₹850. Deep chemical water servicing ranges from ₹500 to ₹750 across Trichy.</p>
      </div>
    </div>
  </section>
`;
}

function getTvTypesSection(brand) {
  const b = brand ? `${brand} ` : '';
  return `
  <!-- Appliance Types Section -->
  <section class="section section-alt" id="appliance-types">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">${b}Television Types We Repair in Trichy</h2>
        <p class="section-subtitle">Doorstep inspection, component-level board servicing, and LED backlight replacement for all television types.</p>
      </div>

      <div class="content-box" style="margin-bottom: 24px;">
        <h3 style="color: var(--primary); font-size: 1.25rem; margin-bottom: 10px;">1. LED Television (Full HD & HD Ready)</h3>
        <p><strong>How It Works:</strong> LED TVs use a liquid crystal display (LCD) panel backlit by high-efficiency light-emitting diode (LED) arrays arranged in edge-lit or direct-lit configurations. Light passes through polarizing filters and liquid crystal pixels controlled by thin-film transistors.</p>
        <p><strong>Common Problems:</strong> TV has audio but no picture (screen is pitch black or displays a faint ghost image visible under flashlight), uneven dark patches or blue tint on screen, standby light blinking in specific blink patterns, or sound distortion.</p>
        <p><strong>Common Parts Involved:</strong> Backlight LED strip sets (3V or 6V per bead), constant-current backlight LED driver circuit, SMPS power supply board, and internal stereo speaker modules.</p>
        <p><strong>Checking Process & Repair:</strong> The technician performs an LED backlight tester check, tests power board DC secondary output rails (12V, 24V, 5V standby), and replaces burnt LED strips with fresh aluminium-backed strips for heat dissipation.</p>
        <p><strong>Cost & Locality Context:</strong> Backlight replacement in Trichy typically ranges from ₹1,450 to ₹3,200 depending on screen diagonal size. Power supply board repairs range from ₹650 to ₹1,450. Final cost depends on the fault and part required.</p>
      </div>

      <div class="content-box" style="margin-bottom: 24px;">
        <h3 style="color: var(--primary); font-size: 1.25rem; margin-bottom: 10px;">2. Smart TV & Android TV</h3>
        <p><strong>How It Works:</strong> Smart TVs integrate multi-core processor motherboards, flash memory (eMMC), Wi-Fi/Bluetooth modules, and operating systems (Android, Google TV, WebOS, Tizen) allowing streaming apps, voice controls, and internet browsing.</p>
        <p><strong>Common Problems:</strong> TV stuck on boot logo screen indefinitely (bootloop), Wi-Fi disconnected and failing to discover networks, HDMI ports not detecting set-top box or gaming console signals, or remote voice search unpairing.</p>
        <p><strong>Common Parts Involved:</strong> Main processor motherboard, eMMC flash memory chip, Wi-Fi module card, remote IR receiver board, and HDMI ESD protection diodes.</p>
        <p><strong>Checking Process & Repair:</strong> Technicians inspect mainboard voltage regulator ICs, flash updated firmware via service mode or USB programmer, clean ribbon connectors, or replace faulty Wi-Fi receiver cards.</p>
        <p><strong>Cost & Locality Context:</strong> Motherboard servicing and firmware re-flashing in Trichy typically range from ₹950 to ₹2,500. Doorstep checking ensures your TV does not risk transport damage.</p>
      </div>

      <div class="content-box">
        <h3 style="color: var(--primary); font-size: 1.25rem; margin-bottom: 10px;">3. 4K Ultra HD Television</h3>
        <p><strong>How It Works:</strong> 4K TVs provide 3840 x 2160 pixel resolution—four times the clarity of Full HD. They utilize high-speed timing controller (T-Con) boards with dual LVDS/V-by-One ribbon cables to synchronize millions of sub-pixels simultaneously.</p>
        <p><strong>Common Problems:</strong> Horizontal or vertical fine lines across the display, double image or ghosting picture, picture shaking vertically, or one half of the screen going dark while the other half works.</p>
        <p><strong>Common Parts Involved:</strong> T-Con logic board, high-density flex cables, power management PMIC chip, and panel side COF gate drivers.</p>
        <p><strong>Checking Process & Repair:</strong> Our technician inspects T-Con voltage test points (VGH, VGL, VDD, VCOM). If line issues are caused by flex cable degradation or clock signal faults, circuit bypass or T-Con replacement is tested.</p>
        <p><strong>Cost & Locality Context:</strong> T-Con board repairs and cable replacements typically range from ₹1,200 to ₹2,800. If the glass panel itself has internal physical bond damage, repair limitations are explained honestly.</p>
      </div>
    </div>
  </section>
`;
}

function getMicrowaveTypesSection(brand) {
  const b = brand ? `${brand} ` : '';
  return `
  <!-- Appliance Types Section -->
  <section class="section section-alt" id="appliance-types">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">${b}Microwave Oven Types We Repair in Trichy</h2>
        <p class="section-subtitle">Doorstep inspection, high-voltage testing, and safe part replacement across solo, grill, and convection ovens.</p>
      </div>

      <div class="content-box" style="margin-bottom: 24px;">
        <h3 style="color: var(--primary); font-size: 1.25rem; margin-bottom: 10px;">1. Solo Microwave Oven</h3>
        <p><strong>How It Works:</strong> Solo microwaves use a magnetron vacuum tube to produce 2.45 GHz radio waves that agitate water molecules inside food, generating rapid volumetric heat ideal for uniform reheating and simple cooking.</p>
        <p><strong>Common Problems:</strong> Microwave turns on and countdown timer runs but food remains cold, sparks or crackling noise from the side wall, glass tray not turning, or inside lamp fused.</p>
        <p><strong>Common Parts Involved:</strong> Magnetron tube, high-voltage transformer, high-voltage diode, HV capacitor, mica waveguide cover, and turntable motor.</p>
        <p><strong>Checking Process & Repair:</strong> Our technician safely discharges the high-voltage capacitor, measures magnetron filament resistance, tests the high-voltage diode for reverse leakage, and inspects the mica plate.</p>
        <p><strong>Cost & Locality Context:</strong> Solo repairs in Trichy range from ₹350 for mica sheet replacement to ₹1,250–₹1,950 for magnetron or capacitor replacement. Final price depends on the fault and part required.</p>
      </div>

      <div class="content-box" style="margin-bottom: 24px;">
        <h3 style="color: var(--primary); font-size: 1.25rem; margin-bottom: 10px;">2. Grill Microwave Oven</h3>
        <p><strong>How It Works:</strong> Combines solo microwave heating with top-mounted quartz or metallic sheathed heating rods, enabling grilling, browning, and toasting in addition to standard microwave reheating.</p>
        <p><strong>Common Problems:</strong> Grill element does not heat up, burning smell when grill mode is activated, door must be slammed hard to start, or unit trips household breaker immediately when Start is pressed.</p>
        <p><strong>Common Parts Involved:</strong> Quartz/calrod grill heating elements, secondary door interlock microswitch, thermal cut-out thermostat, and grill relay on control PCB.</p>
        <p><strong>Checking Process & Repair:</strong> Technicians test heating rod resistance with an ohmmeter, inspect door latch microswitches for burnt terminals, and verify grill relay actuation.</p>
        <p><strong>Cost & Locality Context:</strong> Door switch and grill element repairs typically range from ₹450 to ₹1,450 across Trichy homes.</p>
      </div>

      <div class="content-box">
        <h3 style="color: var(--primary); font-size: 1.25rem; margin-bottom: 10px;">3. Convection Microwave Oven</h3>
        <p><strong>How It Works:</strong> Convection microwaves feature a rear heating element and a forced-air convection blower fan, circulating heated air evenly inside the chamber for complete baking, roasting, and crisping like a conventional oven.</p>
        <p><strong>Common Problems:</strong> Cake or food not baking properly due to low chamber temperature, loud screeching sound from dry convection fan bearings, keypad touch buttons not responding, or error code E-01/E-02 displayed.</p>
        <p><strong>Common Parts Involved:</strong> Convection circular heating element, high-temperature convection fan motor, chamber temperature sensor (NTC), and membrane touch keypad.</p>
        <p><strong>Checking Process & Repair:</strong> Technicians inspect the convection blower, measure sensor resistance curve, test touch membrane traces, and examine PCB power relays.</p>
        <p><strong>Cost & Locality Context:</strong> Convection fan and keypad repairs typically range from ₹850 to ₹2,200 in Trichy depending on model specifications.</p>
      </div>
    </div>
  </section>
`;
}

module.exports = {
  getWashingMachineTypesSection,
  getFridgeTypesSection,
  getAcTypesSection,
  getTvTypesSection,
  getMicrowaveTypesSection
};
