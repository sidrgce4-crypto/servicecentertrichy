const fs = require('fs');
const path = require('path');

const batch4 = [
  {
    name: "Sony",
    slug: "sony",
    appliances: ["tv"],
    officialWebsite: "https://www.sony.co.in/",
    officialCare: "1800 103 7799",
    tagline: "Expert doorstep repair for Sony BRAVIA XR, OLED, Mini LED, and 4K Google TVs in trichy.",
    heroIntro: "Looking for Sony TV repair near you in trichy? If your Sony BRAVIA smart TV has blinking red lights, display panel lines, sound with no picture, or HDMI eARC connection issues, our skilled local technicians provide fast doorstep checking and reliable repairs across trichy and Kanyakumari district.",
    tanglishHeroNote: "Sony Bravia TV-la red light blink aagi screen on aagalaya, sound mattum vandhu display varalaya? Tension vendaam. Namma local trichy technician unga veetuku vandhu T-Con board, backlight illa motherboard check panni clear-a repair pannuvaaru.",
    applianceDetails: {
      tv: {
        title: "Sony BRAVIA Smart LED & OLED TV Service Center in trichy",
        types: [
          "Sony BRAVIA XR Cognitive Processor 4K TVs",
          "Sony BRAVIA 4K Ultra HD Google TVs",
          "Sony OLED Series (A80K, A80L, A95K)",
          "Sony Mini LED & Full Array LED (X90L, Bravia 7, Bravia 9)",
          "Sony Full HD Smart LED TVs & Older Bravia LCD Models"
        ],
        models: "Bravia 2, Bravia 3, Bravia 7, Bravia 8, Bravia 9, X74L, X75L, X80L, X90L, A80L OLED series, and classic KLV/KDL/KD series",
        problems: [
          "Red standby LED blinking 4 times, 6 times, or 8 times indicating backlight or board fault",
          "Sound working clearly but screen is pitch black (backlight array failure)",
          "Horizontal or vertical color lines on panel due to COF bonding or T-Con issue",
          "TV stuck on Android or Google TV logo during bootup",
          "HDMI eARC port not detecting soundbar or gaming console",
          "Power tripping or no power indicator light after voltage surge"
        ],
        parts: [
          { part: "LED Backlight Strip Array (Bravia 43-55 inch)", cost: "Rs. 1,600 - Rs. 3,600 approx." },
          { part: "T-Con (Timing Controller) Board Replacement", cost: "Rs. 1,400 - Rs. 2,800 approx." },
          { part: "Power Supply Board Repair / Replacement", cost: "Rs. 1,500 - Rs. 3,400 approx." },
          { part: "Main Motherboard Component Repair", cost: "Rs. 1,800 - Rs. 4,500 approx." },
          { part: "Speaker Set & Internal Subwoofer Repair", cost: "Rs. 750 - Rs. 1,600 approx." },
          { part: "General Inspection & Doorstep Diagnostic Charge", cost: "Rs. 250 - Rs. 350 approx." }
        ]
      }
    },
    experiences: [
      {
        appliance: "tv",
        locality: "Marthandam",
        title: "Sony BRAVIA 55-inch 6-Blink Red Light Issue Fixed in Marthandam House",
        story: "Marthandam-la irukira engaloda independent house-la Sony 55-inch 4K Bravia TV iruku. One morning TV podum bothu screen varala, red light 6 times continuously blink aagite irundhuchu. Sony official care call pannom, aana visit ku delay aagum sonnaanga. Service Center trichy-ku call panni sonnom. Technician same day afternoon vanthaaru. Backlight LED bar fuse aagirukunu check panni sonnaaru. New original-grade LED strips pottu complete panel test panni kuduthaaru. Picture quality ippo pudhusu maadhiri perfect-a iruku. Honest work and reasonable cost."
      }
    ],
    faqs: [
      {
        q: "What does the Sony TV red blinking light mean?",
        a: "Sony Bravia TVs use a diagnostic blink code system. If the red LED blinks 6 times, it usually signals an issue with the LED backlight array or inverter board. If it blinks 4 times, it commonly points to the T-Con board or panel power line. An 8-blink code often indicates an audio IC or internal communication fault. Our technician checks the exact count and tests the relevant circuit board at your home."
      },
      {
        q: "Can you fix a Sony TV that has sound but no picture?",
        a: "Yes. When sound is audible from channels or apps but the screen remains completely dark, the problem is usually a burnt LED backlight strip or a faulty LED driver section on the power board. Our technicians inspect the backlight strips using a dedicated tester and replace the damaged array with high-grade aluminum-base strips so heat is properly dissipated."
      },
      {
        q: "Do you repair Sony OLED and Mini LED TVs in trichy?",
        a: "Yes, we handle motherboard issues, power board component faults, HDMI port failures, and software recovery for Sony OLED and Mini LED models. However, if the OLED glass panel itself has physical cracks or deep internal display matrix damage, screen replacement cost can be very high, which the technician will explain openly after inspection."
      },
      {
        q: "How much does Sony TV motherboard repair cost in trichy?",
        a: "Component-level motherboard repair for Sony TVs typically ranges from Rs. 1,800 to Rs. 4,500 depending on whether it requires processor reballing, eMMC memory replacement, or power regulator IC replacement. If a full board replacement is unavoidable, our technician checks exact board part numbers and gives a clear estimate before proceeding."
      },
      {
        q: "Do you provide doorstep Sony TV service in Marthandam and Kanyakumari?",
        a: "Yes, we cover all areas around trichy including Marthandam, Thuckalay, Asaripallam, Kottar, Suchindram, and Kanyakumari. Most backlight, power supply, and board repairs are done at your home, or safely picked up and returned if specialized panel bonding equipment is required."
      },
      {
        q: "Will my Sony voice remote control need re-pairing after repair?",
        a: "If the motherboard is reset or repaired, Bluetooth voice remotes may need re-pairing. Our technician will pair your remote with the TV, verify microphone Google Assistant input, configure Wi-Fi and HDMI inputs, and test streaming apps before completing the service."
      }
    ]
  },
  {
    name: "TCL",
    slug: "tcl",
    appliances: ["ac", "washing-machine", "tv"],
    officialWebsite: "https://www.tcl.com/in/",
    officialCare: "1800 419 0622 / 1800 102 0622",
    tagline: "Fast home repair for TCL 4K QLED TVs, Smart Inverter ACs, and Front/Top Load Washing Machines in trichy.",
    heroIntro: "Looking for dependable TCL appliance service near you in trichy? Whether your TCL 4K QLED smart TV has backlight or Android boot problems, your TCL inverter AC has an error code and low cooling, or your TCL washing machine drum is vibrating heavily, our local technicians provide prompt doorstep diagnosis and affordable repairs across trichy and Kanyakumari district.",
    tanglishHeroNote: "TCL Smart TV display black aagiducha, TCL inverter AC cooling stop panni error code kaatutha, illa washing machine spin aagala naalo don't worry. Namma trichy technician quick-a veetuku vandhu genuine spares pottu repair pannuvaaru.",
    applianceDetails: {
      ac: {
        title: "TCL Split & Inverter AC Service Center in trichy",
        types: [
          "TCL AI Ultra-Inverter Split ACs (1 Ton, 1.5 Ton, 2 Ton)",
          "TCL Gentle Breeze Series Air Conditioners",
          "TCL Elite Inverter Hot & Cold AC Models",
          "TCL Smart Wi-Fi Enabled Dual Inverter ACs"
        ],
        models: "TCL TAC series, Gentle Breeze AI Inverter, Elite Smart AC, TAC-18CSD/EB, TAC-12CSD/EB series",
        problems: [
          "AC showing E0, E1, or E4 error codes on indoor display",
          "Compressor starts for 2 minutes and trips suddenly",
          "Indoor unit blower working but air is not cold",
          "Water dripping down the wall from indoor unit drainage tray",
          "Outdoor condenser fan motor making grinding bearing noise"
        ],
        parts: [
          { part: "Inverter PCB Module Repair / Replacement", cost: "Rs. 2,200 - Rs. 4,500 approx." },
          { part: "R32 Refrigerant Gas Leak Repair & Charging", cost: "Rs. 1,800 - Rs. 2,600 approx." },
          { part: "Indoor Blower Motor / Cross Flow Fan", cost: "Rs. 1,100 - Rs. 1,900 approx." },
          { part: "Outdoor Condenser Fan Motor", cost: "Rs. 1,300 - Rs. 2,200 approx." },
          { part: "Deep Foam Jet Service & Chemical Cleaning", cost: "Rs. 499 - Rs. 899 approx." }
        ]
      },
      "washing-machine": {
        title: "TCL Washing Machine Service Center in trichy",
        types: [
          "TCL Front Load Fully Automatic Washing Machines with Steam Wash",
          "TCL Top Load Automatic Washers with Honeycomb Crystal Drum",
          "TCL Twin Tub Semi-Automatic Washing Machines",
          "TCL BLDC Inverter Direct Drive Washer Models"
        ],
        models: "TCL P series Front Load (7kg, 8kg, 8.5kg), TCL F series Top Load, TCL C6/C8 Washer Dryers",
        problems: [
          "Front load door error (E01 / door lock mechanism faulty)",
          "Top load drum not draining water within timeout (E03 / E3 error)",
          "Machine vibrating violently during final high spin extraction",
          "Water filling continuously without stopping even when machine is powered off",
          "Wash cycle stopping halfway with motor humming sound"
        ],
        parts: [
          { part: "Drain Motor / Drain Pump Assembly", cost: "Rs. 850 - Rs. 1,600 approx." },
          { part: "Dual Solenoid Water Inlet Valve", cost: "Rs. 650 - Rs. 1,200 approx." },
          { part: "Door Safety Interlock Switch", cost: "Rs. 750 - Rs. 1,400 approx." },
          { part: "Top Load Suspension Rod Set (4 Rods)", cost: "Rs. 950 - Rs. 1,800 approx." },
          { part: "Electronic Control PCB Repair", cost: "Rs. 1,200 - Rs. 2,800 approx." }
        ]
      },
      tv: {
        title: "TCL 4K QLED, Mini LED & Google TV Service Center in trichy",
        types: [
          "TCL 4K Mini LED TVs (C825, C835, C845 Series)",
          "TCL 4K QLED Smart Google TVs (C645, C745, C755 Series)",
          "TCL 4K UHD LED TVs (P635, P735, T6G Series)",
          "TCL Full HD & HD Android Smart TVs (32 inch, 40 inch, 43 inch)"
        ],
        models: "C645, C745, C845, P635, P735, 43P615, 55C715, 65C825, and classic L-series smart TVs",
        problems: [
          "Display black screen but audio coming clearly from YouTube or cable",
          "TV stuck on Android / Google TV logo during startup loop",
          "Horizontal flickering lines across the bottom or middle of the screen",
          "Wi-Fi keeps disconnecting or showing 'No Internet Connected'",
          "Remote control power button works but voice search is unresponsive",
          "Dim blue tint or uneven dark patches on screen corners"
        ],
        parts: [
          { part: "LED Backlight Strip Replacement Set", cost: "Rs. 1,400 - Rs. 3,200 approx." },
          { part: "Main Android Motherboard Repair", cost: "Rs. 1,600 - Rs. 3,800 approx." },
          { part: "Power Board Repair / Mosfet Replacement", cost: "Rs. 1,200 - Rs. 2,600 approx." },
          { part: "T-Con Board / Display Timing Card", cost: "Rs. 1,200 - Rs. 2,400 approx." },
          { part: "Voice Remote & Bluetooth Module", cost: "Rs. 600 - Rs. 1,100 approx." }
        ]
      }
    },
    experiences: [
      {
        appliance: "ac",
        locality: "Suchindram",
        title: "TCL Inverter AC Afternoon Cooling Issue Solved in Suchindram",
        story: "Suchindram main road kitta irukira engaloda veetla TCL 1.5 Ton Inverter AC maati irukom. Last two weeks-a afternoon heat-la AC cooling romba slow-va irundhuchu, fan mattum oditu irundhuchu. trichy service team-ku call panni sonnom. Technician prompt-a vandhu outdoor unit pressure check pannaru. Coil-la minor dust blockage irundhuchu and gas pressure konjam low-va irundhuchu. Foam jet wash panni gas top-up pannaru. Ippo room 15 minutes-la chill aagudhu. Neat service and clear explanation."
      },
      {
        appliance: "washing-machine",
        locality: "Vadasery",
        title: "TCL Front Load Washing Machine Door Lock Fixed in Vadasery Apartment",
        story: "Vadasery apartment-la TCL 7kg front load washing machine use panrom. One evening wash mudinjathuku appuram door lock open aagave illa, E01 error display aachu. Clothes ullaye maatikuchu. Service Center trichy technician contact pannom. Avare 2 hours-la vanthu manual release panni clothes eduthu kuduthaaru. Thermal door lock switch burnt aagirunthuchu. Pudhu lock switch maathi test panni kuduthaaru. Quick response and reasonable charge."
      },
      {
        appliance: "tv",
        locality: "Asaripallam",
        title: "TCL 50-inch 4K QLED Backlight Issue Fixed in Asaripallam Home",
        story: "Asaripallam medical college area-la engaloda veetla TCL 50-inch QLED TV iruku. Sound nallaa kekuthu aana screen full-a dark aagiduchu, flashlight adichu paatha faint-a visuals therinjithu. Technician veetukke vanthu TV-a carefully open panni backlight strips test pannaru. One channel-la LED strip fail aagirunthuchu. Complete set high-quality replacement panni picture check pannaru. Excellent brightness and colors restored without carrying the TV anywhere."
      }
    ],
    faqs: [
      {
        q: "What causes TCL TV to have sound but no picture?",
        a: "In TCL LED and QLED TVs, when sound is heard but the picture remains dark, the LED backlight strip array or the LED backlight driver circuit on the power board has failed. Our technician tests individual LED strips with a voltage tester and replaces the faulty array at your home to restore full brightness."
      },
      {
        q: "What does E1 or E4 error mean on a TCL inverter AC?",
        a: "On TCL air conditioners, E1 or E4 usually indicates an indoor or outdoor room/coil temperature sensor error, or communication breakdown between the indoor and outdoor inverter PCB. Our technician checks the sensor resistance values in ohms and repairs any PCB track issues or wiring faults."
      },
      {
        q: "Can you fix TCL front load washing machine vibration during spin cycle?",
        a: "Yes. Excessive vibration in TCL front load washers is commonly caused by worn hydraulic shock absorbers, broken drum support spider arms, or uncalibrated machine feet. We inspect the dampers, balance the tub, and replace worn suspension components to keep the machine silent."
      },
      {
        q: "Do you service TCL Mini LED TVs in trichy?",
        a: "Yes, we handle TCL Mini LED series such as C825 and C835, including power board repair, local dimming zone issues, motherboard firmware recovery, and HDMI connection repairs."
      },
      {
        q: "How much is the visiting charge for TCL appliance service in trichy?",
        a: "Our standard doorstep inspection charge in trichy and nearby areas like Vadasery, Asaripallam, and Kottar is Rs. 250 to Rs. 350. If you decide to proceed with the repair work after receiving the estimate, this diagnostic charge is adjusted into the final bill."
      },
      {
        q: "Do you keep genuine replacement parts for TCL washing machines?",
        a: "Yes, we carry common replacement parts including drain pumps, water inlet valves, door switches, drive belts, and top load suspension rods compatible with TCL models for quick same-day resolution."
      }
    ]
  },
  {
    name: "Thomson",
    slug: "thomson",
    appliances: ["washing-machine"],
    officialWebsite: "https://www.thomsontv.in/",
    officialCare: "080 4353 3888",
    tagline: "Reliable doorstep repair for Thomson Semi-Automatic and Fully Automatic Washing Machines in trichy.",
    heroIntro: "Searching for Thomson washing machine repair service in trichy? If your Thomson top load or semi-automatic washer is not draining, vibrating heavily, failing to spin dry clothes, or showing error codes, our local technicians provide prompt doorstep inspection and budget-friendly repairs across trichy and Kanyakumari district.",
    tanglishHeroNote: "Thomson washing machine spin motor odalaiya, water drain aagama tub-laye nikkutha, illa wash tub drum aadi sound varutha? Namma local trichy technician unga veetuku vandhu check panni gear box, motor, illa drain valve maathi kudupaaru.",
    applianceDetails: {
      "washing-machine": {
        title: "Thomson Washing Machine Service Center in trichy",
        types: [
          "Thomson Top Load Fully Automatic Washers (Aqua Magic Series, 6.5kg - 9kg)",
          "Thomson Semi-Automatic Twin Tub Washers (High Spin Dry Models)",
          "Thomson Front Load Washing Machines with Inverter Motor"
        ],
        models: "Thomson Aqua Magic, Eco Wash 7kg, 8kg, 8.5kg Top Load, TSA series Twin Tub Semi-Automatic",
        problems: [
          "Wash tub not holding water due to faulty drain valve seal",
          "Spin dryer motor humming but drum fails to rotate clothes",
          "Machine vibrating violently and jumping during spin cycle",
          "Top load washing machine display showing E2 (drain timeout) or E3 (unbalanced load)",
          "Agitator / pulsator loose or stripped spline teeth slipping during wash",
          "Water inlet valve filling water very slowly even with good tap pressure"
        ],
        parts: [
          { part: "Spin Dryer Motor / Wash Motor", cost: "Rs. 1,200 - Rs. 2,400 approx." },
          { part: "Drain Valve Bellow Rubber & Spring Assembly", cost: "Rs. 350 - Rs. 750 approx." },
          { part: "Wash Timer / Spin Mechanical Timer Mechanism", cost: "Rs. 450 - Rs. 950 approx." },
          { part: "Pulsator Disc with Center Spline Bush", cost: "Rs. 650 - Rs. 1,300 approx." },
          { part: "Suspension Damper Rod Set (4 Pcs)", cost: "Rs. 850 - Rs. 1,600 approx." },
          { part: "General Doorstep Inspection & Problem Checking", cost: "Rs. 250 - Rs. 350 approx." }
        ]
      }
    },
    experiences: [
      {
        appliance: "washing-machine",
        locality: "Kottar",
        title: "Thomson Semi-Automatic Drain Leak Problem Repaired in Kottar Home",
        story: "Kottar market kitta irukira engaloda veetla Thomson 7.5kg semi-automatic washing machine use panrom. Last week wash tub-la water fill pannina உடனே drain pipe vazhiya veliye leak aagite irundhuchu, wash panna mudiyaatha nilaimai. Service Center trichy-ku phone panni technician-a vara sonnom. Same day evening vandhu back panel open pannaru. Drain valve rubber seal-la coin and safety pin maati rubber torn aagirundhuchu. New heavy-duty drain seal maathi test pannaru. Perfect-a solve aachu, reasonable service charge."
      }
    ],
    faqs: [
      {
        q: "Why is my Thomson washing machine spin tub not spinning?",
        a: "In Thomson semi-automatic washers, a spin tub that hums but does not spin usually indicates a weak motor capacitor, a snapped spin safety lid brake wire, or worn motor bush bearings. In fully automatic models, it often points to a worn drive belt, motor capacitor, or faulty door lid sensor. Our technician tests both mechanical and electrical parts at your home."
      },
      {
        q: "What does E2 error mean on Thomson top load washing machines?",
        a: "An E2 error code on a Thomson top load washing machine indicates a drain timeout fault. The machine expects the wash water to drain within a set number of minutes. If the coin filter, drain pipe, or electric drain valve motor is blocked or burnt out, the machine stops and sounds an alarm. Our technician clears obstructions or replaces the drain valve motor."
      },
      {
        q: "Can you fix loud vibrating noises during washing machine spin cycle?",
        a: "Yes. Loud vibrating and banging noises are caused by worn suspension damper rods, uneven floor leveling, or broken tub balancer rings. We inspect all four corner suspension springs, replace worn dampers, and ensure the tub remains steady even at high spin speeds."
      },
      {
        q: "Are replacement parts easily available for Thomson washing machines?",
        a: "Yes, we stock universal and model-matched Thomson parts such as wash timers, spin timers, capacitors, water inlet valves, pulsator discs, drive belts, and drain assemblies for fast doorstep repairs across trichy."
      },
      {
        q: "Do you service Thomson washing machines in rural areas around trichy?",
        a: "Yes, our technicians travel to surrounding towns and villages including Kottar, Parakkai, Thovalai, Boothapandi, Aralvaimozhi, and Suchindram. You can book an appointment by call, and the technician arrives with essential diagnostic tools and spare parts."
      },
      {
        q: "How long does a typical Thomson washing machine repair take?",
        a: "Most common repairs such as drain valve replacement, timer change, capacitor replacement, or inlet valve cleaning are completed within 45 to 90 minutes right at your residence."
      }
    ]
  },
  {
    name: "Toshiba",
    slug: "toshiba",
    appliances: ["fridge", "washing-machine", "tv"],
    officialWebsite: "https://www.toshiba-lifestyle.com/in",
    officialCare: "1800 833 0088 / 1800 200 6789",
    tagline: "Dedicated doorstep repair for Toshiba Inverter Refrigerators, GreatWaves Washers, and REGZA 4K TVs in trichy.",
    heroIntro: "Looking for expert Toshiba appliance service near you in trichy? Whether your Toshiba frost-free inverter refrigerator has cooling issues, your Toshiba GreatWaves washing machine is showing drain or motor errors, or your Toshiba REGZA 4K smart TV has display or bootloop problems, our local technicians provide dependable doorstep diagnosis and durable repairs throughout trichy and Kanyakumari district.",
    tanglishHeroNote: "Toshiba Origin Inverter fridge-la cooling drop aagiducha, GreatWaves washing machine drum சுழலலையா, illa REGZA TV screen dark aagiducha? Kavalai padatheenga. Namma trichy technician quick-a veetuku vandhu genuine spares pottu fix pannuvaaru.",
    applianceDetails: {
      fridge: {
        title: "Toshiba Inverter Refrigerator Service Center in trichy",
        types: [
          "Toshiba Origin Inverter Double Door Frost Free Refrigerators",
          "Toshiba Multi-Door & Side-by-Side Refrigerators with PureBio",
          "Toshiba Top Mount Inverter Fridges with Dual Cooling"
        ],
        models: "Toshiba GR-RT series, GR-RF series Side-by-Side, GR-AG series, PureBio deodorizer inverter models",
        problems: [
          "Freezer making ice properly but lower vegetable compartment remains warm",
          "Inverter compressor running continuously with high clicking or humming sound",
          "Water accumulating under crisper drawer due to defrost drain hole blockage",
          "PureBio ionizer / deodorizer fan not working",
          "Display temperature control panel flashing error code (H6 / E2)"
        ],
        parts: [
          { part: "Inverter Compressor Driver PCB", cost: "Rs. 2,200 - Rs. 4,600 approx." },
          { part: "Defrost Thermal Sensor & Heater Rod", cost: "Rs. 850 - Rs. 1,600 approx." },
          { part: "Evaporator DC Fan Motor", cost: "Rs. 1,100 - Rs. 2,100 approx." },
          { part: "Eco Inverter Gas Leak Test & R600a Refill", cost: "Rs. 1,700 - Rs. 2,500 approx." },
          { part: "Door Gasket / Magnetic Beeding Replacement", cost: "Rs. 750 - Rs. 1,400 approx." }
        ]
      },
      "washing-machine": {
        title: "Toshiba Washing Machine Service Center in trichy",
        types: [
          "Toshiba The GreatWaves Top Load Automatic Washers",
          "Toshiba Real INVERTER Front Load Washing Machines",
          "Toshiba S-DD Inverter Direct Drive Washers"
        ],
        models: "Toshiba AW series Top Load (7kg, 8kg, 9kg), TW series Front Load, GreatWaves Inverter washers",
        problems: [
          "Machine stopping mid-cycle with E2 (drain timeout) or E1 (water fill error)",
          "Drum making loud grinding or roaring noise during high-speed spin cycle",
          "The GreatWaves pulsator rotation weak or clothes remaining unwashed",
          "Door lock error (E03 / dE) preventing cycle start on front load",
          "Water leaking from bottom hose or detergent drawer"
        ],
        parts: [
          { part: "Electric Drain Pump / Valve Motor", cost: "Rs. 850 - Rs. 1,700 approx." },
          { part: "Dual Water Inlet Solenoid Valve", cost: "Rs. 650 - Rs. 1,300 approx." },
          { part: "Drum Bearings & Oil Seal Kit Replacement", cost: "Rs. 1,400 - Rs. 2,800 approx." },
          { part: "Door Interlock Switch Assembly", cost: "Rs. 750 - Rs. 1,500 approx." },
          { part: "Inverter Main Board Repair", cost: "Rs. 1,500 - Rs. 3,600 approx." }
        ]
      },
      tv: {
        title: "Toshiba REGZA 4K Smart TV Service Center in trichy",
        types: [
          "Toshiba REGZA Engine 4K Google TVs (C350, M550 Series)",
          "Toshiba OLED & QLED Ultra HD TVs (X9900, Z770 Series)",
          "Toshiba VIDAA OS & Android Smart LED TVs (32 inch - 65 inch)"
        ],
        models: "Toshiba 43C350, 50C350, 55M550, 65Z770, REGZA 4K UHD, and classic LED smart models",
        problems: [
          "Sound audible but screen completely dark due to LED backlight burnout",
          "TV stuck on Toshiba REGZA boot logo during power-on",
          "Horizontal flickering lines on display panel",
          "HDMI ports showing 'No Signal' when set-top box or console is connected",
          "TV turning off automatically after 5-10 minutes of playback"
        ],
        parts: [
          { part: "LED Backlight Strip Kit (Toshiba 43-55 inch)", cost: "Rs. 1,400 - Rs. 3,400 approx." },
          { part: "Main REGZA Engine Motherboard Repair", cost: "Rs. 1,600 - Rs. 3,900 approx." },
          { part: "Power Board Mosfet / Capacitor Repair", cost: "Rs. 1,200 - Rs. 2,600 approx." },
          { part: "T-Con Display Timing Controller", cost: "Rs. 1,200 - Rs. 2,400 approx." },
          { part: "Voice Remote & IR Sensor Board", cost: "Rs. 600 - Rs. 1,200 approx." }
        ]
      }
    },
    experiences: [
      {
        appliance: "fridge",
        locality: "Thovalai",
        title: "Toshiba Inverter Refrigerator Defrost Issue Fixed in Thovalai",
        story: "Thovalai flower market kitta irukira engaloda veetla Toshiba Double Door Inverter fridge iruku. Freezer-la ice katti cooling nallaa irundhuchu, aana keezha irukira veg tray full-a warm aagiduchu, veggies spoil aaga thodangiduchu. Service Center trichy technician call pannom. Avare vandhu back freezer panel open pannaru. Defrost bi-metal sensor and timer line check pannaru. Defrost thermal sensor burnt aagirundhuchu. New sensor maathi ice melt panni clean pannaru. Next day-ve lower compartment super cooling restored."
      },
      {
        appliance: "washing-machine",
        locality: "Puthery",
        title: "Toshiba GreatWaves Top Load Washing Machine Drain Error Fixed in Puthery",
        story: "Puthery residential area-la engaloda Toshiba GreatWaves 8kg top load washing machine use panrom. Wash cycle mudiyum pothu E2 error vandhu beep sound pottute nikkum, water veliye pogala. Technician veetuku vandhu check pannaru. Drain motor coil weak aagirunthuchu and drain pipe-la lint clog irundhuchu. Clog clean panni pudhu drain motor assembly fit pannaru. Complete cycle test panni kaatunaaru. Romba punctual and neat work."
      },
      {
        appliance: "tv",
        locality: "Colachel",
        title: "Toshiba REGZA 43-inch Smart TV Bootloop Solved in Colachel Home",
        story: "Colachel coastal road kitta irukira veetla Toshiba REGZA 43-inch 4K Google TV iruku. One day TV on pannum bothu Toshiba logo vandhu restart aagite irundhuchu, home screen pogave illa. Local service center technician vandhu software and motherboard eMMC chip test pannaru. Firmware corrupt aagirundhatha reflash panni restored pannaru. Display and YouTube ellam ippo smooth-a work aagudhu. Saved from buying new motherboard."
      }
    ],
    faqs: [
      {
        q: "Why is the lower compartment of my Toshiba inverter fridge not cooling?",
        a: "In Toshiba frost-free refrigerators, if the freezer cools but the lower compartment is warm, it is typically caused by ice buildup choking the air damper passage. This happens when the defrost sensor, defrost heater, or damper motor fails. Our technician tests each component with a multimeter and clears the ice block."
      },
      {
        q: "What causes E2 error in Toshiba GreatWaves washing machine?",
        a: "An E2 error code on Toshiba GreatWaves washers indicates a drain failure. If water cannot empty within the programmed time limit due to a blocked coin trap, choked drain hose, or failed drain motor, the machine halts. Our technician clears obstructions or replaces the drain pump on the spot."
      },
      {
        q: "Can you fix Toshiba REGZA TV stuck on the boot logo in trichy?",
        a: "Yes. When a Toshiba REGZA TV loops continuously on the boot logo, the firmware or eMMC flash memory on the main motherboard has encountered corrupted data. Our technicians perform motherboard-level firmware recovery or IC replacement to bring the TV back to normal operation."
      },
      {
        q: "Do you repair Toshiba front load inverter washing machine bearing noise?",
        a: "Yes. If your Toshiba front load washer sounds like an aircraft engine during high-speed spinning, the inner drum bearings and water oil seal are worn out. We dismantle the outer tub, press in high-grade stainless steel bearings, and install fresh seals for quiet operation."
      },
      {
        q: "What is the inspection fee for Toshiba appliance service in trichy?",
        a: "Our doorstep inspection fee across trichy, Puthery, Thovalai, and Colachel is Rs. 250 to Rs. 350. The technician thoroughly inspects the machine and provides a clear price estimate before starting any work."
      },
      {
        q: "Are Toshiba replacement parts available locally in Kanyakumari district?",
        a: "Yes, we maintain access to essential Toshiba inverter PCB components, defrost sensors, fan motors, drain pumps, inlet valves, and LED backlight strips for prompt doorstep repair."
      }
    ]
  },
  {
    name: "Videocon",
    slug: "videocon",
    appliances: ["fridge", "washing-machine", "tv", "microwave"],
    officialWebsite: "Support details: Videocon India official documentation; independent local service available in trichy",
    officialCare: "Official customer-care number should be checked on manufacturer's current India documentation.",
    tagline: "Reliable doorstep repair for Videocon Refrigerators, Washing Machines, LED TVs, and Microwave Ovens in trichy.",
    heroIntro: "Looking for trusted Videocon appliance service in trichy? Even though official brand channels have evolved, thousands of homes in trichy rely on dependable Videocon single/double door refrigerators, semi and fully automatic washing machines, DDB LED TVs, and microwave ovens. Our experienced local technicians provide doorstep checking, component repairs, and quality replacement parts throughout trichy and Kanyakumari district.",
    tanglishHeroNote: "Videocon fridge cooling nikkala, washing machine motor odalaiya, LED TV display dark aagiducha, illa microwave heat aagalaiya? Kavalai vendaam. Namma local technicians Videocon appliances-ku genuine compatible spares pottu veetlaye repair pannuvaanga.",
    applianceDetails: {
      fridge: {
        title: "Videocon Refrigerator Service Center in trichy",
        types: [
          "Videocon Direct Cool Single Door Refrigerators (170L - 215L)",
          "Videocon Frost Free Double Door Refrigerators (220L - 340L)",
          "Videocon Titanium & Valzer Series Refrigerators"
        ],
        models: "Videocon Valzer, Titanium, Digi Frost, VZ series, classic single door and frost-free double door models",
        problems: [
          "Fridge not cooling at all, compressor only making clicking sound every few minutes",
          "Freezer forming thick ice mountain due to defrost thermostat failure",
          "Gas leakage near copper-aluminum joint causing cooling loss",
          "Door gasket loose and warm air entering the cabinet",
          "Thermostat switch not cutting off compressor, causing ice on vegetable tray"
        ],
        parts: [
          { part: "Compressor Relay & Overload Protector (OLP)", cost: "Rs. 450 - Rs. 850 approx." },
          { part: "Mechanical Thermostat Switch", cost: "Rs. 550 - Rs. 1,100 approx." },
          { part: "Defrost Timer & Bi-metal Sensor", cost: "Rs. 750 - Rs. 1,400 approx." },
          { part: "R134a / R600a Refrigerant Gas Charging & Leak Brazing", cost: "Rs. 1,500 - Rs. 2,200 approx." },
          { part: "Cabinet Door Magnetic Gasket Replacement", cost: "Rs. 650 - Rs. 1,200 approx." }
        ]
      },
      "washing-machine": {
        title: "Videocon Washing Machine Service Center in trichy",
        types: [
          "Videocon Semi-Automatic Twin Tub Washers (Digi Pearl, Marvel, 6.5kg - 8.5kg)",
          "Videocon Top Load Fully Automatic Washing Machines",
          "Videocon Classic Heavy-Duty Semi-Automatic Models"
        ],
        models: "Videocon Digi Pearl, Marvel, VT series Top Load, WM series Twin Tub",
        problems: [
          "Spin dryer motor humming but clothes remain soaking wet without spinning",
          "Wash tub pulsator rotating only in one direction",
          "Drain rubber valve leaking water continuously out of the drain pipe",
          "Top load control PCB buttons unresponsive or showing error codes",
          "Loud grinding metallic noise during wash cycle due to worn gear box"
        ],
        parts: [
          { part: "Spin Dryer Motor / Wash Motor (Copper Wound)", cost: "Rs. 1,100 - Rs. 2,200 approx." },
          { part: "Wash Gear Box Assembly", cost: "Rs. 850 - Rs. 1,600 approx." },
          { part: "Wash & Spin Mechanical Timers", cost: "Rs. 400 - Rs. 850 approx." },
          { part: "Heavy-Duty Dual Capacitor (Wash + Spin)", cost: "Rs. 350 - Rs. 650 approx." },
          { part: "Drain Valve Rubber Bellow & Spring", cost: "Rs. 300 - Rs. 600 approx." }
        ]
      },
      tv: {
        title: "Videocon DDB & Smart LED TV Service Center in trichy",
        types: [
          "Videocon DDB (Direct Digital Broadcast) LED TVs (24 inch - 40 inch)",
          "Videocon Liquid Luminous Smart LED TVs",
          "Videocon Full HD & HD Ready LED Televisions"
        ],
        models: "Videocon DDB series, Liquid Luminous 32-inch, 40-inch, 43-inch, VNV series, VKR series",
        problems: [
          "TV screen black but channel audio and menu sounds are loud and clear",
          "Red power LED remains stuck on standby, TV not turning on with remote or keypad",
          "White patches or spots showing across the screen (diffuser lenses fallen off)",
          "Horizontal or vertical color distortion lines on display panel",
          "Power supply board capacitor bulge causing TV to shut down after 5 minutes"
        ],
        parts: [
          { part: "Complete LED Backlight Strip Set Replacement", cost: "Rs. 1,200 - Rs. 2,600 approx." },
          { part: "Power Supply Board Component Repair", cost: "Rs. 950 - Rs. 2,200 approx." },
          { part: "Universal Smart / Non-Smart Motherboard Upgrade", cost: "Rs. 1,600 - Rs. 3,400 approx." },
          { part: "Audio Amplifier IC & Internal Speaker Replacement", cost: "Rs. 600 - Rs. 1,200 approx." },
          { part: "Replacement Videocon Remote Control", cost: "Rs. 350 - Rs. 650 approx." }
        ]
      },
      microwave: {
        title: "Videocon Microwave Oven Service Center in trichy",
        types: [
          "Videocon Solo Microwave Ovens (20L)",
          "Videocon Grill Microwave Ovens (20L - 25L)",
          "Videocon Convection Microwave Ovens with Auto-Cook Menus"
        ],
        models: "Videocon VC series, Classic Grill & Convection Microwave models (20L, 23L, 25L)",
        problems: [
          "Microwave running and timer counting down but food stays cold (no heating)",
          "Sparking and crackling noise inside cavity near the wave guide cover",
          "Glass turntable plate not rotating during operation",
          "Touch membrane touchpad buttons not responding to touch",
          "Oven tripping the house MCB breaker immediately upon pressing Start"
        ],
        parts: [
          { part: "Microwave Magnetron Heating Tube", cost: "Rs. 1,300 - Rs. 2,400 approx." },
          { part: "High Voltage Diode & Capacitor Assembly", cost: "Rs. 650 - Rs. 1,300 approx." },
          { part: "Turntable Synchronous Synchronous Motor", cost: "Rs. 450 - Rs. 850 approx." },
          { part: "Mica Waveguide Sheet Cover Replacement", cost: "Rs. 250 - Rs. 500 approx." },
          { part: "Door Safety Microswitch Set", cost: "Rs. 450 - Rs. 900 approx." }
        ]
      }
    },
    experiences: [
      {
        appliance: "fridge",
        locality: "Boothapandi",
        title: "Videocon Single Door Refrigerator Relay Issue Fixed in Boothapandi",
        story: "Boothapandi kitta irukira engaloda veetla 10 years-a Videocon 190L single door fridge nallaa oditu irundhuchu. Sudden-a cooling full-a stop aagiduchu, back side-la 'tik tik' nu click sound mattum kettuchu. Service Center trichy technician contact pannom. Avare vandhu compressor coil resistance check pannaru. Compressor nallaa iruku, PTC relay and overload protector burnt aagirundhuchu. New relay fit panni on pannaru, compressor smooth-a start aagi 20 minutes-la ice build aaga thodangiduchu. Very helpful and economical service."
      },
      {
        appliance: "washing-machine",
        locality: "Kuzhithurai",
        title: "Videocon Semi-Automatic Washing Machine Spin Motor Fixed in Kuzhithurai",
        story: "Kuzhithurai junction kitta irukira veetla Videocon Digi Pearl semi-automatic machine iruku. Wash tub work aagudhu, aana spin dryer drum rotate aagala, hum sound mattum kettuchu. Clothes manual-a pisiyira kashtam. Technician veetuku vandhu check pannaru. Motor capacitor weak aagi, spin motor bush jam aagirundhuchu. Bush lubrication panni fresh heavy-duty capacitor maathunaaru. Ippo dryer full speed-la odudhu. Honest and quick doorstep work."
      },
      {
        appliance: "tv",
        locality: "Thuckalay",
        title: "Videocon DDB 32-inch LED TV Backlight Replaced in Thuckalay",
        story: "Thuckalay bus stand pakkathula irukira engaloda veetla Videocon 32-inch LED TV iruku. Serial paathutu irukum pothu sudden-a screen black aagiduchu, audio mattum clear-a kettuchu. trichy service center technician call pannom. Veetukke vandhu panel open panni backlight strip test pannaru. One LED fuse aagirundhuchu. Complete aluminum backlight strip maathi test pannaru. Brightness pudhusu maadhiri vandhuduchu. Very reasonable cost compared to buying a new TV."
      },
      {
        appliance: "microwave",
        locality: "Karungal",
        title: "Videocon Convection Microwave Sparks Fixed in Karungal Kitchen",
        story: "Karungal market kitta irukira engaloda home kitchen-la Videocon convection microwave oven iruku. One day samosa warm pannum bothu ulla right side-la heavy sparks and burning smell vandhuduchu, பயந்து போய் switch off pannitom. Technician vandhu paathaaru. Mica waveguide cover oil grease patthu burnt aagirundhuchu. Inside cavity burn mark clean panni, new heat-resistant mica sheet cut panni fit pannaru. Magnetron-um safe-a irundhuchu. Safe, prompt and very practical repair."
      }
    ],
    faqs: [
      {
        q: "Can older Videocon appliances still be repaired in trichy?",
        a: "Yes. Even though older Videocon models are no longer manufactured, compatible high-grade replacement parts such as refrigerator compressors, relays, thermostats, washing machine motors, gearboxes, timers, TV backlight strips, and microwave magnetrons are readily available. Our technicians specialize in extending the life of your existing Videocon appliances."
      },
      {
        q: "Why does my Videocon TV have sound but a completely dark screen?",
        a: "This is the classic symptom of LED backlight burnout. In Videocon LED and DDB TVs, the backlight strips behind the screen panel wear out over time. When one or more LEDs fail, the driver shuts down backlight illumination while the audio processing circuit continues functioning. We replace the full backlight strip set with modern heat-dissipating aluminum strips."
      },
      {
        q: "What causes clicking sounds from a Videocon refrigerator without cooling?",
        a: "When a refrigerator compressor clicks every 2 to 5 minutes without running, the PTC starter relay or overload protector (OLP) on the side of the compressor has burnt out. In some cases, low home voltage or a jammed compressor piston can also cause this. Our technician tests the compressor windings and replaces the relay on the spot."
      },
      {
        q: "Why is my Videocon washing machine spin dryer humming without rotating?",
        a: "A humming spin motor usually means either the run capacitor has lost capacitance, the lid safety brake wire is sticking, or water has leaked into the spin motor bush bearing. Our technician checks the brake mechanism and tests capacitor microfarads before doing any motor replacement."
      },
      {
        q: "Is it safe to repair a sparking Videocon microwave oven?",
        a: "Yes, provided the repair is done by a trained technician. Sparking is almost always caused by a burnt mica waveguide sheet that has absorbed cooking oil splatters. Replacing the mica sheet and cleaning the cavity waveguide resolves the sparking safely without requiring a new microwave."
      },
      {
        q: "What are your service and inspection charges in Kanyakumari district?",
        a: "Our standard diagnostic inspection charge across trichy, Thuckalay, Boothapandi, Kuzhithurai, and Karungal is Rs. 250 to Rs. 350. You receive an upfront quotation for needed spare parts and labor before work begins."
      }
    ]
  },
  {
    name: "Voltas",
    slug: "voltas",
    appliances: ["ac", "washing-machine", "microwave"],
    officialWebsite: "https://www.voltas.com/",
    officialCare: "1860 599 4555 / 9650694555",
    tagline: "Expert doorstep service for Voltas Inverter ACs, Washing Machines, and Microwave Ovens in trichy.",
    heroIntro: "Searching for trusted Voltas appliance service near you in trichy? Whether your Voltas 1.5 ton split AC is throwing an E6 error or blowing warm air, your Voltas washing machine is making knocking noises during spin, or your Voltas microwave oven has stopped heating food, our certified local technicians provide fast doorstep inspection and reliable repairs across trichy and Kanyakumari district.",
    tanglishHeroNote: "Voltas Inverter AC cooling nikkala, E6 error kaatutha, washing machine spin aagumpothu heavy sound varutha, illa microwave oven heat aagalaiya? Namma local trichy technician unga veetuku vandhu check panni genuine spares pottu repair pannuvaaru.",
    applianceDetails: {
      ac: {
        title: "Voltas Split, Window & Inverter AC Service Center in trichy",
        types: [
          "Voltas Maha-Adjustable Inverter Split ACs (1 Ton, 1.5 Ton, 2 Ton)",
          "Voltas All-Weather Split ACs with Copper Condenser",
          "Voltas Window ACs (Classic 1.5 Ton High Ambient Cooling)",
          "Voltas Fixed Speed 3-Star & 5-Star Split ACs"
        ],
        models: "Voltas 185V Vectra, 183V Vectra Elegant, 123V Vectra, Maha-Adjustable Inverter, 185 LZH Window AC series",
        problems: [
          "AC throwing E6 (indoor-outdoor communication error) or F1 (coil sensor error)",
          "Compressor tripping after 3 minutes with outdoor fan not spinning",
          "Blower working inside room but absolutely no cold cooling air",
          "Indoor unit water leakage overflowing from back drain pan onto wall",
          "Refrigerant gas leak at copper flare nut connection causing pipe freezing"
        ],
        parts: [
          { part: "Inverter PCB Module Repair / Replacement", cost: "Rs. 2,400 - Rs. 4,800 approx." },
          { part: "R32 / R410A Refrigerant Gas Leak Brazing & Full Charge", cost: "Rs. 1,800 - Rs. 2,700 approx." },
          { part: "Outdoor Condenser Fan Motor", cost: "Rs. 1,400 - Rs. 2,400 approx." },
          { part: "Indoor Cross Flow Blower Fan Motor", cost: "Rs. 1,200 - Rs. 2,100 approx." },
          { part: "Deep Foam Jet Service & Pressure Chemical Cleaning", cost: "Rs. 499 - Rs. 899 approx." }
        ]
      },
      "washing-machine": {
        title: "Voltas Washing Machine Service Center in trichy",
        types: [
          "Voltas Semi-Automatic Twin Tub Washers (7kg, 8kg, 9kg)",
          "Voltas Top Load Fully Automatic Washing Machines",
          "Voltas Heavy-Duty Pulsator Washers"
        ],
        models: "Voltas WTT series Twin Tub, WTT70, WTT80, Top Load Fully Automatic series",
        problems: [
          "Spin tub vibrating violently and banging against outer cabinet",
          "Wash tub draining water continuously without holding level",
          "Motor running but pulsator standing still due to worn belt or gearbox teeth",
          "Top load control panel display not turning on",
          "Spin motor humming loudly but unable to spin heavy wet clothes"
        ],
        parts: [
          { part: "Spin Dryer Motor / Wash Motor", cost: "Rs. 1,200 - Rs. 2,400 approx." },
          { part: "Heavy-Duty Gear Box Mechanism", cost: "Rs. 950 - Rs. 1,800 approx." },
          { part: "Drain Valve Rubber Seal & Spring Bellow", cost: "Rs. 350 - Rs. 700 approx." },
          { part: "Top Load Suspension Rod Set (4 Rods)", cost: "Rs. 900 - Rs. 1,700 approx." },
          { part: "Motor Run Capacitor Replacement", cost: "Rs. 350 - Rs. 650 approx." }
        ]
      },
      microwave: {
        title: "Voltas Microwave Oven Service Center in trichy",
        types: [
          "Voltas Solo Microwave Ovens (20L)",
          "Voltas Grill Microwave Ovens (20L - 25L)",
          "Voltas Convection Microwave Ovens with Auto-Cook Features (25L - 30L)"
        ],
        models: "Voltas 20MS, 25MC, 28MC series, Convection & Grill countertop ovens",
        problems: [
          "Food remains cold even after running for 3 minutes on high heat",
          "Control touchpad panel buttons not responding to touch",
          "Sparks and arcing noise inside cooking cavity near mica sheet",
          "Glass turntable plate not turning during heating",
          "Microwave shuts off and resets clock after 10-15 seconds"
        ],
        parts: [
          { part: "Magnetron Vacuum Tube", cost: "Rs. 1,400 - Rs. 2,600 approx." },
          { part: "High Voltage Diode & Capacitor", cost: "Rs. 650 - Rs. 1,400 approx." },
          { part: "Touchpad Membrane Switch Panel", cost: "Rs. 850 - Rs. 1,600 approx." },
          { part: "Turntable Roller Ring & Synchronous Drive Motor", cost: "Rs. 500 - Rs. 950 approx." },
          { part: "Mica Waveguide Protective Sheet", cost: "Rs. 250 - Rs. 500 approx." }
        ]
      }
    },
    experiences: [
      {
        appliance: "ac",
        locality: "Court Road, trichy",
        title: "Voltas 1.5 Ton Split AC E6 Error Fixed in Court Road Office",
        story: "trichy Court Road kitta irukira engaloda law office-la Voltas 1.5 Ton Inverter Split AC maati irukom. Peak working hours-la AC sudden-a E6 error kaatitu blower air mattum vanthuchu, clients irundhanga. Immediate-a Service Center trichy-ku call pannom. Technician 45 minutes-la vandhu outdoor PCB and communication cable check pannaru. Outdoor communication terminal-la loose connection and capacitor issue irundhuchu. Component repair panni re-terminate pannaru. Within one hour AC chill-nu work aaga thodangiduchu. Prompt and professional service."
      },
      {
        appliance: "washing-machine",
        locality: "Suchindram",
        title: "Voltas Washing Machine Heavy Vibration Resolved in Suchindram House",
        story: "Suchindram village area-la irukira veetla Voltas top load automatic machine use panrom. Spin cycle start aana machine oru pakkam aadi heavy knocking sound potu bayam kaatuchu. Technician vandhu paathaaru. Four suspension damper rods-la rendu rods-oda spring tension poirundhuchu. Complete 4-piece damper rod set maathi, machine base level check pannaru. Ippo high speed spin-la kooda silent-a odudhu. Very satisfied with the repair."
      },
      {
        appliance: "microwave",
        locality: "Marthandam",
        title: "Voltas Convection Microwave Keypad Repaired in Marthandam Bakery",
        story: "Marthandam main market kitta irukira engaloda bakery kitchen-la Voltas 25L convection microwave use panrom. Start button and timer buttons press pannina work aagave illa, stop button mattum beep pannuchu. Technician veetukke vandhu front panel dismantle pannaru. Moisture entry aagi membrane circuit ribbon corroded aagirundhuchu. New membrane touchpad replace panni 200 degree convection and microwave mode check panni kuduthaaru. Business delay aagama solve pannitaaru."
      }
    ],
    faqs: [
      {
        q: "What does the E6 error code indicate on a Voltas Inverter AC?",
        a: "On Voltas inverter air conditioners, the E6 error indicates an indoor-to-outdoor serial communication fault. This occurs when signal data between the indoor PCB and outdoor inverter controller board is disrupted due to a damaged communication wire, a blown fuse, or a failed optocoupler IC on the outdoor PCB. Our technicians inspect the wiring and repair the PCB circuit on the spot."
      },
      {
        q: "Why is my Voltas split AC blowing air but not cooling the room?",
        a: "When the indoor blower runs but no cooling occurs, common causes include low refrigerant gas pressure due to a pinhole leak, a failed outdoor compressor run capacitor, an inverter PCB fault, or a blocked outdoor condenser coil. Our technician checks the refrigerant pressure with a digital manifold gauge and tests compressor current draw."
      },
      {
        q: "Can you fix a Voltas washing machine that makes loud banging sounds while spinning?",
        a: "Yes. Loud banging noises during the spin cycle indicate worn suspension damper rods or broken tub balancing springs in top load models. We replace the full set of calibrated suspension rods and inspect the balance ring to keep the spin cycle smooth and quiet."
      },
      {
        q: "Why is my Voltas microwave oven not heating food even when the light and fan work?",
        a: "If the microwave runs but food stays cold, the high voltage section has failed. This is most commonly caused by a burnt magnetron, blown high voltage diode, or open high voltage fuse. Our technician tests these components with high-voltage test meters and replaces faulty parts at your doorstep."
      },
      {
        q: "How often should a Voltas split AC be serviced in trichy?",
        a: "Due to high humidity and coastal dust in trichy and Kanyakumari district, we recommend a foam jet chemical wash every 4 to 6 months. This removes sticky dust, fungus, and salt deposits from the indoor evaporator and outdoor condenser coils, ensuring high energy efficiency and faster cooling."
      },
      {
        q: "Do you provide same-day doorstep service for Voltas appliances in trichy?",
        a: "Yes, we offer same-day doorstep inspection across trichy, Suchindram, Marthandam, Kottar, and surrounding areas. Technicians carry standard spare parts to fix most faults in a single visit."
      }
    ]
  },
  {
    name: "Voltas Beko",
    slug: "voltas-beko",
    appliances: ["fridge", "washing-machine"],
    officialWebsite: "https://www.voltasbeko.com/",
    officialCare: "1860 599 4444 / 9650694444",
    tagline: "Specialized doorstep repair for Voltas Beko HarvestFresh Refrigerators and ProSmart Washers in trichy.",
    heroIntro: "Looking for expert Voltas Beko appliance service near you in trichy? If your Voltas Beko NeoFrost or HarvestFresh refrigerator has cooling faults or continuous door alarms, or your Voltas Beko ProSmart inverter washing machine is showing an error code or vibrating heavily, our skilled local technicians provide fast doorstep diagnosis and reliable repairs across trichy and Kanyakumari district.",
    tanglishHeroNote: "Voltas Beko HarvestFresh fridge cooling drop aagiducha, illa ProSmart washing machine door lock aagi error code kaatutha? Kavalai padatheenga. Namma trichy technician quick-a veetuku vandhu check panni genuine spares pottu repair pannuvaaru.",
    applianceDetails: {
      fridge: {
        title: "Voltas Beko NeoFrost & HarvestFresh Refrigerator Service Center in trichy",
        types: [
          "Voltas Beko NeoFrost Dual Cooling Frost Free Refrigerators",
          "Voltas Beko HarvestFresh 3-Color Light Technology Fridges",
          "Voltas Beko Bottom Mount & Side-by-Side Inverter Refrigerators",
          "Voltas Beko Direct Cool Single Door Refrigerators"
        ],
        models: "RFF series Frost Free, RBF Bottom Mount series, HarvestFresh 250L - 470L, ProSmart Inverter Compressor models",
        problems: [
          "Lower fresh food compartment warm while freezer has ice buildup",
          "Continuous door open beeping alarm even with door firmly closed",
          "HarvestFresh LED light array not cycling through red, green, and blue spectrum",
          "Inverter compressor clicking every few minutes and failing to start",
          "Water accumulating inside vegetable crisper drawer"
        ],
        parts: [
          { part: "ProSmart Inverter Compressor Driver PCB", cost: "Rs. 2,200 - Rs. 4,600 approx." },
          { part: "NeoFrost Dual Evaporator Fan Motor", cost: "Rs. 1,100 - Rs. 2,200 approx." },
          { part: "Defrost Sensor & Thermal Fuse Assembly", cost: "Rs. 850 - Rs. 1,600 approx." },
          { part: "Magnetic Door Reed Switch / Sensor", cost: "Rs. 550 - Rs. 1,100 approx." },
          { part: "Eco Gas Leak Repair & R600a Refill", cost: "Rs. 1,700 - Rs. 2,500 approx." }
        ]
      },
      "washing-machine": {
        title: "Voltas Beko ProSmart Inverter Washing Machine Service Center in trichy",
        types: [
          "Voltas Beko ProSmart Inverter Front Load Washing Machines (7kg, 8kg, 9kg)",
          "Voltas Beko AquaWave Drum Top Load Fully Automatic Washers",
          "Voltas Beko StainExpert Series Washers with SteamWash"
        ],
        models: "WFL series Front Load, WTL series Top Load, ProSmart Inverter Motor models with AquaWave drum",
        problems: [
          "Front load showing E08 (water filling error) or E01 (door lock fault)",
          "Top load machine showing E03 drain timeout error",
          "Severe vibration and jumping during final spin cycle",
          "SteamWash cycle not heating water due to faulty immersion heater",
          "ProSmart inverter motor humming but drum not turning"
        ],
        parts: [
          { part: "ProSmart Inverter Motor Driver PCB", cost: "Rs. 2,400 - Rs. 4,800 approx." },
          { part: "Heavy-Duty Front Load Drain Pump", cost: "Rs. 850 - Rs. 1,700 approx." },
          { part: "Door Safety Interlock Switch Assembly", cost: "Rs. 750 - Rs. 1,500 approx." },
          { part: "Tub Shock Absorber / Damper Set (Pair)", cost: "Rs. 950 - Rs. 1,800 approx." },
          { part: "Water Heating Element / Thermistor", cost: "Rs. 850 - Rs. 1,600 approx." }
        ]
      }
    },
    experiences: [
      {
        appliance: "fridge",
        locality: "Ozhuginasery",
        title: "Voltas Beko HarvestFresh Refrigerator Door Sensor Fixed in Ozhuginasery",
        story: "Ozhuginasery bridge kitta irukira engaloda apartment-la Voltas Beko HarvestFresh 340L fridge iruku. Door-a nallaa close panninaalum continuous-a 'peep peep' nu alarm adichite irundhuchu, cooling-um konjam drop aachu. trichy service team-ku phone pannom. Technician vandhu door hinge kitta irukira magnetic reed sensor check pannaru. Sensor corrode aagirundhuchu. New sensor replace panni, door alignment adjust pannaru. Alarm stop aagi, HarvestFresh lighting perfect-a cycle aaga start aachu. Quick and intelligent work."
      },
      {
        appliance: "washing-machine",
        locality: "Parakkai",
        title: "Voltas Beko Front Load Washing Machine E08 Error Solved in Parakkai",
        story: "Parakkai temple road kitta irukira veetla Voltas Beko 7.5kg front load washing machine use panrom. Wash start pannina water fill aagama E08 error vandhu wash stop aagiduchu. Service Center trichy technician prompt-a vandhu tap pressure check pannaru, tap-la pressure irundhuchu. Machine back panel open panni dual water inlet solenoid valve coil test pannaru. Inlet valve coil burnt aagirundhuchu. Pudhu original-grade valve pottu test pannaru. Smooth-a water eduthu wash start aachu. Very reasonable pricing."
      }
    ],
    faqs: [
      {
        q: "Why is the door alarm beeping on my Voltas Beko refrigerator even when closed?",
        a: "In Voltas Beko NeoFrost refrigerators, continuous beeping with the door closed is typically caused by a faulty magnetic reed switch, a misaligned door hinge, or broken sensor wiring inside the hinge shroud. Our technician tests the reed switch with a meter, realigns the door frame, and replaces the sensor if needed."
      },
      {
        q: "What does E08 error mean on a Voltas Beko front load washing machine?",
        a: "An E08 error code on Voltas Beko front load washing machines indicates a water fill failure. The machine did not detect sufficient water entering the drum within the preset time limit. This can be caused by a choked inlet mesh filter, low household water pressure, or a burnt solenoid coil inside the water inlet valve. Our technician checks the filter and valve to restore proper water intake."
      },
      {
        q: "Can you repair the ProSmart Inverter motor in Voltas Beko washers?",
        a: "Yes, Voltas Beko ProSmart brushless inverter motors are highly reliable, but inverter PCB controller faults or wiring harness issues can prevent the motor from spinning. We repair the motor driver board circuits and check tachometer sensor feedback to restore quiet spinning."
      },
      {
        q: "Why is my Voltas Beko fridge cooling fine in the freezer but warm in the bottom?",
        a: "This issue points to a blocked air channel between the NeoFrost evaporators or a failed defrost thermostat/heating element. When frost accumulates on the cooling coils, cool air cannot reach the fresh food compartment. Our technician tests the defrost cycle and clears the blockage."
      },
      {
        q: "What are the visiting and inspection charges in trichy?",
        a: "Our standard doorstep diagnostic charge across trichy, Ozhuginasery, Parakkai, and nearby areas is Rs. 250 to Rs. 350. You receive an upfront estimate before any spare part replacement is undertaken."
      },
      {
        q: "Are genuine compatible parts used for Voltas Beko repairs?",
        a: "Yes, we use model-matched sensors, inlet valves, drain pumps, shock dampers, and inverter controller boards tested for Voltas Beko specifications to ensure long-term durability."
      }
    ]
  },
  {
    name: "Vu",
    slug: "vu",
    appliances: ["tv"],
    officialWebsite: "https://vutvs.com/",
    officialCare: "022 4541 7000 / 1800 228 989",
    tagline: "Dedicated doorstep repair for Vu GloLED, Masterpiece QLED, and Cinema 4K Smart TVs in trichy.",
    heroIntro: "Looking for trusted Vu TV service near you in trichy? If your Vu GloLED, Masterpiece QLED, or 4K Google TV has a black screen with sound, flickering backlight patches, software bootloop on the Vu logo, or HDMI connectivity issues, our skilled local technicians provide prompt doorstep diagnosis and reliable repairs throughout trichy and Kanyakumari district.",
    tanglishHeroNote: "Vu Smart TV-la sound mattum vandhu display full dark aagiducha, blue patches theriyutha, illa Vu logo-laye stuck aagi restart aagutha? Tension vendaam. Namma local trichy technician unga veetuku vandhu backlight strips illa motherboard check panni clear-a repair pannuvaaru.",
    applianceDetails: {
      tv: {
        title: "Vu GloLED, Masterpiece & 4K Smart TV Service Center in trichy",
        types: [
          "Vu GloLED 4K Google TVs (43 inch, 50 inch, 55 inch, 65 inch)",
          "Vu Masterpiece QLED & Armani Gold Series TVs",
          "Vu Cinema TV & Action Series 4K Smart TVs",
          "Vu Premium Full HD & 4K Android Televisions"
        ],
        models: "Vu GloLED series (50GloLED, 55GloLED), Vu Masterpiece QLED, Vu 43CA, 50CA, 55OA Cinema TV, and classic Vu Android TV series",
        problems: [
          "Screen completely black but audio from apps or set-top box is working fine",
          "Uneven blue/purple tint or dark shadow patches across the display",
          "TV stuck in continuous reboot loop on the Vu / Google TV startup screen",
          "Wi-Fi keeps dropping or Bluetooth voice remote fails to pair",
          "Speaker buzzing or crackling noise at moderate volume",
          "TV not turning on and red standby light flashing after power fluctuation"
        ],
        parts: [
          { part: "Complete LED Backlight Strip Kit (GloLED 43-55 inch)", cost: "Rs. 1,400 - Rs. 3,400 approx." },
          { part: "Main Android / Google TV Motherboard Repair", cost: "Rs. 1,600 - Rs. 3,800 approx." },
          { part: "Power Supply Board Mosfet & Capacitor Repair", cost: "Rs. 1,200 - Rs. 2,600 approx." },
          { part: "T-Con (Timing Controller) Board Replacement", cost: "Rs. 1,200 - Rs. 2,400 approx." },
          { part: "Original Vu Voice Remote Control", cost: "Rs. 550 - Rs. 1,100 approx." },
          { part: "General Doorstep Diagnostic Charge", cost: "Rs. 250 - Rs. 350 approx." }
        ]
      }
    },
    experiences: [
      {
        appliance: "tv",
        locality: "Aralvaimozhi",
        title: "Vu 55-inch GloLED TV Dark Screen Repaired in Aralvaimozhi Home",
        story: "Aralvaimozhi wind farm kitta irukira engaloda veetla Vu 55-inch GloLED 4K TV iruku. IPL match paathutu irundhom, sudden-a screen dark aagiduchu, commentator voice mattum nallaa kettuchu. Mobile flashlight adichu paatha faint-a visuals therinjithu. Service Center trichy technician-ku call pannom. Technician Aralvaimozhi-ku vandhu TV open pannaru. GloLED backlight strip-la one LED burst aagi entire circuit cut aagirundhuchu. Fresh high-efficiency aluminum LED strip set maathi picture test pannaru. Perfect brightness and vibrant colors restored without carrying the large TV anywhere."
      }
    ],
    faqs: [
      {
        q: "Why does my Vu TV have sound but no picture?",
        a: "In Vu LED and GloLED TVs, when sound plays clearly but the screen remains dark, the LED backlight array or the power supply's LED driver section has failed. Using a torchlight against the glass, you can often see faint images, confirming the LCD panel is intact and only the backlight illumination needs replacement. Our technician carries matching backlight sets for on-site replacement."
      },
      {
        q: "Why is there a blue or purple tint on my Vu TV screen?",
        a: "A blue or purple tint occurs when the phosphor coating on the factory LED backlight beads degrades over time, causing raw blue LED light to bleed through the diffuser sheets. The solution is replacing the entire backlight strip kit with fresh white phosphor LED strips, which completely restores natural color balance."
      },
      {
        q: "Can you fix a Vu TV that is stuck on the boot logo?",
        a: "Yes. If your Vu TV repeatedly restarts or hangs on the Vu or Android logo, the main board eMMC storage has encountered corrupted boot files. Our technicians can reflash the official firmware or repair the memory IC on the motherboard to restore smooth booting."
      },
      {
        q: "Do you repair Vu Masterpiece QLED TVs in trichy?",
        a: "Yes, we handle motherboard issues, power board repairs, soundbar speaker issues, and HDMI eARC port faults on Vu Masterpiece QLED models."
      },
      {
        q: "What is the inspection charge for Vu TV service in trichy?",
        a: "Our doorstep inspection charge across trichy, Aralvaimozhi, Thovalai, and nearby areas is Rs. 250 to Rs. 350. If you approve the repair after our technician gives the quotation, the inspection fee is adjusted into the final cost."
      },
      {
        q: "Do you provide warranty on replaced Vu TV backlight strips?",
        a: "Yes, we use brand-new aluminum-backed LED strips that dissipate heat effectively and provide an indicative service guarantee on the replaced backlight kit so you enjoy long-term reliability."
      }
    ]
  },
  {
    name: "VW",
    slug: "vw",
    appliances: ["washing-machine", "tv"],
    officialWebsite: "https://visiotronics.com/",
    officialCare: "1800 102 8474 / +91 11 4118 4118",
    tagline: "Affordable doorstep service for VW (Visio World) Smart TVs and Washing Machines in trichy.",
    heroIntro: "Looking for reliable VW (Visio World) appliance repair near you in trichy? If your VW frameless smart LED TV has display lines, no backlight, or sound issues, or your VW semi-automatic washing machine has spin motor or drainage problems, our local technicians offer budget-friendly doorstep checking and prompt repairs across trichy and Kanyakumari district.",
    tanglishHeroNote: "VW Smart TV display varalaiya, horizontal lines theriyutha, illa VW washing machine spin motor odalaiya? Kavalai padatheenga. Namma local trichy technician unga veetuku vandhu check panni quick-a repair pannuvaaru.",
    applianceDetails: {
      "washing-machine": {
        title: "VW (Visio World) Washing Machine Service Center in trichy",
        types: [
          "VW Semi-Automatic Twin Tub Washing Machines (7kg, 8kg, 8.5kg)",
          "VW Top Load Fully Automatic Washers"
        ],
        models: "VW Semi-Automatic series, VW Twin Tub Washers, VW Top Load Automatic models",
        problems: [
          "Wash pulsator spinning in only one direction due to faulty timer contacts",
          "Spin dryer motor humming but clothes remain unspun",
          "Drain rubber valve leaking water directly through the drain hose",
          "Excessive vibration and tub knocking against cabinet walls during spin",
          "Wash timer knob broken or jammed"
        ],
        parts: [
          { part: "Spin Dryer Motor / Wash Motor (Copper Wound)", cost: "Rs. 1,100 - Rs. 2,100 approx." },
          { part: "Mechanical Wash / Spin Timer Switch", cost: "Rs. 400 - Rs. 850 approx." },
          { part: "Drain Valve Rubber Seal & Spring Kit", cost: "Rs. 300 - Rs. 600 approx." },
          { part: "Motor Run Capacitor (Dual Capacity)", cost: "Rs. 350 - Rs. 650 approx." },
          { part: "Pulsator Disc with Center Spline", cost: "Rs. 600 - Rs. 1,200 approx." }
        ]
      },
      tv: {
        title: "VW (Visio World) Frameless Smart LED TV Service Center in trichy",
        types: [
          "VW Frameless Series Smart Android LED TVs (32 inch, 40 inch, 43 inch, 55 inch)",
          "VW Linux & WebOS Powered Smart Televisions",
          "VW HD Ready & Full HD Affordable LED TVs"
        ],
        models: "VW Playwall series, VW 32C, VW 40C, VW 43C, VW 55C Frameless Smart TVs",
        problems: [
          "Screen completely black while audio and channels play normally",
          "Horizontal flickering lines on screen caused by loose COF / LVDS ribbon cable",
          "TV stuck on Android or VW logo during startup",
          "Power light not turning on after sudden power cut or lightning surge",
          "Internal speakers distorting or buzzing loudly"
        ],
        parts: [
          { part: "LED Backlight Strip Kit (32-43 inch)", cost: "Rs. 1,100 - Rs. 2,600 approx." },
          { part: "Universal Smart Android Motherboard Upgrade", cost: "Rs. 1,400 - Rs. 3,200 approx." },
          { part: "Power Supply Board Component Repair", cost: "Rs. 850 - Rs. 1,900 approx." },
          { part: "Internal Speaker Set Replacement", cost: "Rs. 500 - Rs. 1,100 approx." },
          { part: "VW Voice / IR Remote Control", cost: "Rs. 350 - Rs. 700 approx." }
        ]
      }
    },
    experiences: [
      {
        appliance: "washing-machine",
        locality: "Thovalai",
        title: "VW Semi-Automatic Washer Timer Fixed in Thovalai Residence",
        story: "Thovalai village kitta irukira engaloda veetla VW 7.5kg semi-automatic washing machine use panrom. Wash timer rotate panna click sound varum aana motor odala, wash timer mechanism jammed aagiduchu. Service Center trichy technician call pannom. Same day afternoon vandhu check pannaru. Timer gear teeth worn out aagirundhuchu. Matching new heavy-duty timer maathi, capacitor check panni kuduthaaru. Machine ippo perfect-a rotate aagudhu. Reasonable rate."
      },
      {
        appliance: "tv",
        locality: "Vadasery",
        title: "VW 40-inch Frameless Smart TV Display Lines Solved in Vadasery",
        story: "Vadasery market road kitta irukira veetla VW 40-inch Frameless Smart TV iruku. One day TV on pannum bothu screen full-a horizontal colored lines vandhuduchu, picture clear-a theriyala. Technician veetukke vandhu back panel open pannaru. LVDS ribbon cable terminal-la moisture and dust patthu contact loose aagirundhuchu. Specialized electronic cleaner pottu clean panni, cable re-seat pannaru. Display lines full-a marainji crystal clear picture vandhuduchu. Honesty-a repair panni kuduthaaru."
      }
    ],
    faqs: [
      {
        q: "What causes a VW LED TV to have sound but no picture?",
        a: "In VW LED TVs, sound without picture is caused by failure of the internal LED backlight strips or the backlight driver circuit on the power board. When the LEDs fail, the panel stops receiving illumination even though the audio board continues working. Our technician tests and replaces the backlight array at your home."
      },
      {
        q: "Can you fix VW washing machine spin motor problems?",
        a: "Yes. If the spin dryer hums but does not rotate, or spins very weakly, the issue is typically a weak capacitor, a stuck lid safety brake wire, or worn motor bush bearings. Our technician tests these components with a multimeter and fixes them on the spot."
      },
      {
        q: "What should I do if my VW TV is stuck on the boot logo?",
        a: "If your VW TV hangs continuously on the Android or VW boot logo, the firmware data on the motherboard has become corrupt. Our technicians can reflash the firmware or service the motherboard memory IC to restore normal operation without replacing the entire TV."
      },
      {
        q: "Are spare parts available for VW televisions in trichy?",
        a: "Yes, VW televisions use standardized LED backlight strips, power supply components, LVDS cables, and Android motherboards that our technicians regularly carry for fast same-day repairs."
      },
      {
        q: "How much is the visiting charge for VW appliance service?",
        a: "Our standard doorstep inspection charge across trichy, Vadasery, and Thovalai is Rs. 250 to Rs. 350. You get a clear quotation before any repair work or part replacement begins."
      },
      {
        q: "How long does a typical VW TV backlight replacement take?",
        a: "A full backlight strip replacement typically takes about 60 to 90 minutes. Our technician carefully dismantles the screen panel on a flat cushioned surface and installs the fresh aluminum-backed LED strips."
      }
    ]
  },
  {
    name: "Westinghouse",
    slug: "westinghouse",
    appliances: ["microwave"],
    officialWebsite: "Support details: Westinghouse India brand documentation; local independent service available in trichy",
    officialCare: "Official customer-care number should be checked on manufacturer's current India documentation.",
    tagline: "Dedicated doorstep repair for Westinghouse Solo, Grill, and Convection Microwave Ovens in trichy.",
    heroIntro: "Looking for reliable Westinghouse microwave oven repair in trichy? If your Westinghouse countertop microwave is not heating food, making sparking noises, failing to spin the turntable, or tripping your kitchen MCB, our experienced local technicians provide prompt doorstep inspection and budget-friendly component repairs throughout trichy and Kanyakumari district.",
    tanglishHeroNote: "Westinghouse microwave oven food heat panna maatutha, ulla spark aagi burning smell varutha, illa start button press pannina breaker trip aagutha? Tension vendaam. Namma local trichy technician unga veetuku vandhu magnetron, capacitor, illa mica sheet check panni safe-a repair pannuvaaru.",
    applianceDetails: {
      microwave: {
        title: "Westinghouse Microwave Oven Service Center in trichy",
        types: [
          "Westinghouse Retro Series Countertop Microwave Ovens",
          "Westinghouse Solo Microwave Ovens (20L, 23L)",
          "Westinghouse Grill & Convection Microwave Ovens (25L - 30L)"
        ],
        models: "Westinghouse WCM series Countertop, Retro 20L, Grill & Convection 25L/28L models",
        problems: [
          "Oven runs for 2 minutes with light and fan on but food remains completely cold",
          "Loud arcing and sparking sounds inside the cooking cavity near the waveguide cover",
          "Turntable roller ring not rotating, resulting in uneven cooking",
          "Kitchen MCB or RCCB breaker tripping immediately when Start button is pressed",
          "Control dial or touch keypad unresponsive to temperature and timer settings",
          "Door latch microswitch loose, causing oven to shut off upon closing"
        ],
        parts: [
          { part: "High Voltage Microwave Magnetron Tube", cost: "Rs. 1,300 - Rs. 2,500 approx." },
          { part: "High Voltage Diode & Capacitor Assembly", cost: "Rs. 650 - Rs. 1,300 approx." },
          { part: "Mica Waveguide Protective Sheet", cost: "Rs. 250 - Rs. 500 approx." },
          { part: "Turntable Synchronous Drive Motor", cost: "Rs. 450 - Rs. 850 approx." },
          { part: "Door Safety Interlock Microswitch (Set of 3)", cost: "Rs. 500 - Rs. 950 approx." },
          { part: "Doorstep Diagnostic & Problem Checking Charge", cost: "Rs. 250 - Rs. 350 approx." }
        ]
      }
    },
    experiences: [
      {
        appliance: "microwave",
        locality: "Kottar",
        title: "Westinghouse Convection Microwave Heating Issue Solved in Kottar",
        story: "Kottar railway station kitta irukira engaloda veetla Westinghouse convection microwave oven use panrom. Evening snacks re-heat panna try pannom, timer odudhu turntable suthudhu aana food romba chill-ave irundhuchu, heat aagave illa. Service Center trichy-ku call panni sonnom. Technician prompt-a vandhu high voltage section check pannaru. High voltage diode short aagi, magnetron power poga maatunguthunu explain pannaru. New diode and capacitor fit panni cup-la water vechu test pannaru, 1 minute-la steaming hot-a aachu. Clean and safe work."
      }
    ],
    faqs: [
      {
        q: "Why is my Westinghouse microwave oven running but not heating food?",
        a: "When the microwave light, fan, and turntable operate normally but the food stays stone cold, the high-voltage generation circuit has failed. Common causes include a burnt magnetron tube, a shorted high-voltage diode, a blown internal high-voltage fuse, or a failed capacitor. Our technician tests each component with safety equipment and replaces the damaged part at your home."
      },
      {
        q: "What causes sparks inside a Westinghouse microwave oven?",
        a: "Sparking is usually caused by food splatters burning onto the mica waveguide cover on the right interior wall. When carbon forms on the mica sheet, high-frequency microwaves arc across the burnt spot. Replacing the mica sheet and cleaning the cavity completely stops the sparking."
      },
      {
        q: "Why does my Westinghouse microwave trip the home circuit breaker?",
        a: "If the MCB breaker trips the moment you press Start, it usually points to a shorted door safety interlock microswitch, a shorted high-voltage capacitor, or a shorted high-voltage transformer. Our technician diagnoses which component is drawing excess current and replaces it safely."
      },
      {
        q: "Can you fix a Westinghouse microwave turntable that is not spinning?",
        a: "Yes. If the glass turntable does not rotate, food will cook unevenly. This is commonly caused by a worn plastic roller ring coupler or a burnt bottom synchronous drive motor. We replace the motor and coupler right at your doorstep."
      },
      {
        q: "What are your inspection charges for microwave repair in trichy?",
        a: "Our standard doorstep diagnostic fee in trichy and Kottar is Rs. 250 to Rs. 350. You receive an upfront estimate before any replacement work is carried out."
      },
      {
        q: "Is it safe to repair a microwave oven instead of replacing it?",
        a: "Yes, microwave ovens use standardized, durable high-voltage components. Replacing a magnetron, diode, or door switch is safe and costs a fraction of buying a new microwave, extending your appliance's life for years."
      }
    ]
  },
  {
    name: "Whirlpool",
    slug: "whirlpool",
    appliances: ["ac", "fridge", "washing-machine", "microwave"],
    officialWebsite: "https://www.whirlpoolindia.com/",
    officialCare: "1800 208 1800 / 208 1800",
    tagline: "Expert doorstep repair for Whirlpool Inverter ACs, IntelliFresh Fridges, 6th SENSE Washers, and Microwaves in trichy.",
    heroIntro: "Searching for trusted Whirlpool appliance service near you in trichy? Whether your Whirlpool 6th SENSE washing machine has a spin or door lock issue, your IntelliFresh or Protton 3-door refrigerator is not cooling, your 3D Cool Inverter AC has an error code, or your Magicook microwave oven is not heating, our certified local technicians provide prompt doorstep inspection and reliable repairs across trichy and Kanyakumari district.",
    tanglishHeroNote: "Whirlpool 6th Sense washing machine door error kaatutha, Protton 3-door fridge cooling nikkala, 3D Cool AC gas leak aagiducha, illa Magicook microwave heat aagalaiya? Kavalai padatheenga. Namma local trichy technician genuine spares pottu veetlaye repair pannuvaaru.",
    applianceDetails: {
      ac: {
        title: "Whirlpool 3D Cool & Inverter AC Service Center in trichy",
        types: [
          "Whirlpool 3D Cool Inverter Split ACs (1 Ton, 1.5 Ton, 2 Ton)",
          "Whirlpool Magicool Pro & SupremeCool Inverter Series",
          "Whirlpool Fixed Speed 3-Star & 5-Star Split ACs"
        ],
        models: "Whirlpool 3D Cool, Magicool Pro 5S, SupremeCool Inverter, Magicool 1.5T 3-Star series",
        problems: [
          "AC showing F2 (indoor coil sensor fault) or E1 (communication error)",
          "Compressor tripping every 5 minutes with outdoor fan running slowly",
          "Weak cooling airflow due to heavy fungal choke on cross-flow blower",
          "Refrigerant gas leak at indoor flare joint causing pipe ice formation",
          "Water dripping down from the indoor unit casing onto the floor"
        ],
        parts: [
          { part: "Inverter PCB Module Repair / Replacement", cost: "Rs. 2,200 - Rs. 4,600 approx." },
          { part: "R32 / R410A Refrigerant Leak Repair & Gas Charging", cost: "Rs. 1,800 - Rs. 2,600 approx." },
          { part: "Outdoor Condenser Fan Motor", cost: "Rs. 1,300 - Rs. 2,300 approx." },
          { part: "Indoor Blower Fan Motor", cost: "Rs. 1,200 - Rs. 2,000 approx." },
          { part: "Deep Foam Jet Pressure Cleaning Service", cost: "Rs. 499 - Rs. 899 approx." }
        ]
      },
      fridge: {
        title: "Whirlpool IntelliFresh & Protton Refrigerator Service Center in trichy",
        types: [
          "Whirlpool Protton 3-Door Active Fresh Refrigerators",
          "Whirlpool IntelliFresh Pro Frost Free Double Door Refrigerators",
          "Whirlpool IceMagic Direct Cool Single Door Fridges (190L - 245L)",
          "Whirlpool Bottom Mount & Side-by-Side Inverter Models"
        ],
        models: "Whirlpool Protton 240L/300L, IntelliFresh Pro Inverter 265L/292L, IceMagic Fresh, Neo iC series",
        problems: [
          "Protton 3-door fridge active fresh drawer freezing vegetables into solid ice",
          "Freezer cooling fine but lower fresh food compartment warm",
          "Inverter compressor clicking every 3 minutes without starting",
          "Water accumulating inside vegetable drawer due to drain hole icing",
          "Continuous high-pitched whistling noise from the evaporator fan"
        ],
        parts: [
          { part: "IntelliSense Inverter Compressor Controller PCB", cost: "Rs. 2,200 - Rs. 4,500 approx." },
          { part: "Defrost Sensor & Thermal Cutoff Assembly", cost: "Rs. 850 - Rs. 1,600 approx." },
          { part: "Active Fresh Air Damper Thermostat", cost: "Rs. 750 - Rs. 1,500 approx." },
          { part: "Evaporator Circulation DC Fan Motor", cost: "Rs. 1,100 - Rs. 2,100 approx." },
          { part: "Eco Gas Leak Brazing & R600a Recharging", cost: "Rs. 1,600 - Rs. 2,400 approx." }
        ]
      },
      "washing-machine": {
        title: "Whirlpool 6th SENSE Washing Machine Service Center in trichy",
        types: [
          "Whirlpool 6th SENSE BloomWash Top Load Fully Automatic Washers",
          "Whirlpool FreshCare & Supreme Care Front Load Washers",
          "Whirlpool Stainwash Ultra & White Magic Top Load Washers",
          "Whirlpool Superb Atom Semi-Automatic Twin Tub Washers"
        ],
        models: "BloomWash Pro 7.5kg/8.5kg, Stainwash Ultra, White Magic Premier, FreshCare 7kg/8kg, Superb Atom",
        problems: [
          "Top load display showing 'door' or 'dE' error even when lid is closed tightly",
          "Machine vibrating violently and moving across the floor during spin cycle",
          "Water filling continuously and overflowing through the top safety bypass",
          "Wash tub draining water very slowly and stopping with 'F02' or 'E02' drain error",
          "Agitator / BloomWash impeller slipping without moving clothes"
        ],
        parts: [
          { part: "Heavy-Duty Electric Drain Pump / Valve Motor", cost: "Rs. 850 - Rs. 1,650 approx." },
          { part: "Electronic Pressure Sensor / Water Level Switch", cost: "Rs. 650 - Rs. 1,300 approx." },
          { part: "Lid Lock / Door Safety Interlock Switch", cost: "Rs. 750 - Rs. 1,450 approx." },
          { part: "Top Load Suspension Rod Kit (Set of 4)", cost: "Rs. 950 - Rs. 1,800 approx." },
          { part: "Main Electronic Control PCB Repair", cost: "Rs. 1,200 - Rs. 2,900 approx." }
        ]
      },
      microwave: {
        title: "Whirlpool Magicook Microwave Oven Service Center in trichy",
        types: [
          "Whirlpool Magicook Convection Microwave Ovens (25L - 30L)",
          "Whirlpool Magicook Grill Microwave Ovens (20L - 25L)",
          "Whirlpool Solo Microwave Ovens with Auto Cook Menus (20L)"
        ],
        models: "Whirlpool Magicook 20L Solo, Magicook 25L Convection, Magicook Pro 30L series",
        problems: [
          "Oven runs and light glows but food remains completely cold",
          "Sparks and arcing noise on the right wall near the mica plate",
          "Touch membrane panel not responding to Start or number keys",
          "Turntable plate not rotating during microwave cycle",
          "Oven tripping the kitchen MCB breaker when heating starts"
        ],
        parts: [
          { part: "High Voltage Microwave Magnetron Tube", cost: "Rs. 1,400 - Rs. 2,600 approx." },
          { part: "High Voltage Diode & Capacitor Assembly", cost: "Rs. 650 - Rs. 1,350 approx." },
          { part: "Touchpad Membrane Switch Panel", cost: "Rs. 850 - Rs. 1,600 approx." },
          { part: "Turntable Roller Drive Motor", cost: "Rs. 450 - Rs. 850 approx." },
          { part: "Mica Waveguide Protective Sheet", cost: "Rs. 250 - Rs. 500 approx." }
        ]
      }
    },
    experiences: [
      {
        appliance: "ac",
        locality: "Asaripallam",
        title: "Whirlpool 3D Cool Inverter AC F2 Coil Sensor Issue Fixed in Asaripallam",
        story: "Asaripallam hospital road kitta irukira engaloda veetla Whirlpool 3D Cool 1.5 Ton Inverter AC iruku. Summer heat-la AC on pannina 3 minutes-la F2 error display aagi cooling stop aagiduchu. Technician veetukke vandhu indoor unit casing open pannaru. Indoor copper coil temperature sensor corroded aagi open circuit aagirundhuchu. New copper sensor probe replace panni, foam jet wash panni cooling check pannaru. Room ippo 15 minutes-la chill aagudhu. Excellent technician support."
      },
      {
        appliance: "fridge",
        locality: "Vadasery",
        title: "Whirlpool Protton 3-Door Refrigerator Vegetable Freezing Solved in Vadasery",
        story: "Vadasery bus stand area-la irukira veetla Whirlpool Protton 3-door fridge use panrom. Active fresh middle drawer-la vecha tomatoes and greens full-a ice katti freeze aagiduchu. trichy service center-ku call pannom. Technician vandhu airflow damper control check pannaru. Damper flap open position-laye jam aagirunthathaala freezer air direct-a vegetable section-ku vanthuthu. Damper mechanism lubricate panni replace pannaru. Temperature setting balance aachu, no more vegetable spoilage."
      },
      {
        appliance: "washing-machine",
        locality: "Kottar",
        title: "Whirlpool 6th SENSE Top Load Door Error Resolved in Kottar Home",
        story: "Kottar market street-la Whirlpool 6th Sense 7.5kg BloomWash top load machine iruku. Lid-a nallaa close panninaalum display-la 'door' error vandhu machine wash cycle start panna maatunguthu. Technician veetuku vandhu top console open pannaru. Lid magnetic reed sensor wire rat bite aagi cut aagirundhuchu. Wiring solder panni new magnetic reed switch fit pannaru. Machine ippo smooth-a wash cycle eduthu complete pannudhu. Very transparent service."
      },
      {
        appliance: "microwave",
        locality: "Marthandam",
        title: "Whirlpool Magicook Convection Microwave Sparks Fixed in Marthandam Bakery",
        story: "Marthandam bus depot kitta irukira bakery kitchen-la Whirlpool Magicook 25L convection microwave iruku. Puff re-heat pannum bothu ulla severe sparks and burning smell vandhuduchu. Technician vandhu cavity inspection pannaru. Waveguide mica cover oil splatters-naala burn aagirundhuchu. Burnt mica remove panni, cavity steel clean panni new thick mica sheet fit pannaru. Magnetron-um safe-a test aachu. Fast doorstep repair that saved our commercial kitchen routine."
      }
    ],
    faqs: [
      {
        q: "What does the 'door' error mean on a Whirlpool 6th SENSE washing machine?",
        a: "A 'door' or 'dE' error on a Whirlpool top load washer means the control board is not receiving the signal that the top lid is safely closed. This is usually caused by a displaced magnet on the lid corner, a faulty magnetic reed switch, or a damaged lid lock mechanism. Our technician inspects the sensor circuit and replaces the lid switch assembly on-site."
      },
      {
        q: "Why is the vegetable drawer in my Whirlpool Protton 3-door fridge freezing food?",
        a: "In Whirlpool Protton 3-door refrigerators, vegetable freezing happens when the automatic motorized damper flap between the freezer and the Active Fresh compartment gets jammed in the open position. Cold freezer air rushes directly into the vegetable drawer. Our technician services or replaces the damper thermostat to restore proper temperature regulation."
      },
      {
        q: "What causes F2 error on a Whirlpool 3D Cool Inverter AC?",
        a: "The F2 error indicates an indoor evaporator coil temperature sensor fault. If the sensor resistance drifts out of calibration or the copper wire is damaged, the inverter board shuts down cooling to prevent compressor freezing. We replace the coil thermistor probe and verify accurate temperature readings."
      },
      {
        q: "Why does my Whirlpool microwave oven fail to heat food?",
        a: "When the microwave light, turntable, and fan operate but food stays cold, the high voltage generation circuit has failed. Common causes include a burnt magnetron vacuum tube, high voltage diode failure, or a blown high voltage fuse. Our technician carries genuine compatible magnetrons and diodes for prompt doorstep replacement."
      },
      {
        q: "Can you fix excessive vibration in Whirlpool BloomWash washing machines?",
        a: "Yes. Excessive vibration during the spin cycle is typically caused by worn suspension damping rods or uneven leveling. We replace all four calibrated suspension rods and inspect the balance ring to keep the spin extraction smooth and silent."
      },
      {
        q: "What is your visiting and inspection charge in trichy?",
        a: "Our standard doorstep diagnostic fee across trichy, Kottar, Vadasery, Asaripallam, and Marthandam is Rs. 250 to Rs. 350. You receive an upfront estimate before any spare part replacement is undertaken."
      },
      {
        q: "Do you supply genuine compatible parts for Whirlpool appliances?",
        a: "Yes, we maintain access to genuine compatible parts including drain pumps, water inlet valves, lid sensors, suspension kits, fan motors, defrost sensors, and magnetrons matched for Whirlpool appliances."
      }
    ]
  },
  {
    name: "White-Westinghouse",
    slug: "white-westinghouse",
    appliances: ["washing-machine"],
    officialWebsite: "Support details: White-Westinghouse India; local independent multi-brand service available in trichy",
    officialCare: "Official customer-care number should be checked on manufacturer's current India documentation.",
    tagline: "Dedicated doorstep repair for White-Westinghouse Semi-Automatic and Fully Automatic Washing Machines in trichy.",
    heroIntro: "Looking for reliable White-Westinghouse washing machine service in trichy? If your White-Westinghouse heavy-duty semi-automatic or fully automatic washer is vibrating heavily, not draining, failing to spin clothes dry, or leaking water, our experienced local technicians provide prompt doorstep inspection and dependable repairs across trichy and Kanyakumari district.",
    tanglishHeroNote: "White-Westinghouse washing machine spin motor odalaiya, pulsator oru pakkam mattum suthutha, illa wash tub-la irundhu water leak aagutha? Kavalai vendaam. Namma local trichy technician unga veetuku vandhu motor, gear box, illa drain valve check panni clear-a repair pannuvaaru.",
    applianceDetails: {
      "washing-machine": {
        title: "White-Westinghouse Washing Machine Service Center in trichy",
        types: [
          "White-Westinghouse Heavy-Duty Semi-Automatic Twin Tub Washers (7.5kg - 10kg)",
          "White-Westinghouse Top Load Fully Automatic Washing Machines",
          "White-Westinghouse Front Load Washing Machines"
        ],
        models: "White-Westinghouse Heavy-Duty 8kg, 9kg Twin Tub, Top Load Automatic series, commercial/residential models",
        problems: [
          "Spin dryer motor humming but drum unable to spin heavy wet clothes",
          "Wash tub pulsator slipping on motor shaft or rotating in only one direction",
          "Drain rubber valve stuck open, draining water continuously without holding",
          "Loud grinding metallic noise during wash cycle due to worn gearbox teeth",
          "Severe vibration and jumping during high-speed spin extraction",
          "Water inlet valve filling water extremely slowly"
        ],
        parts: [
          { part: "Heavy-Duty Spin Dryer Motor / Wash Motor", cost: "Rs. 1,200 - Rs. 2,400 approx." },
          { part: "Wash Tub Gear Box Mechanism", cost: "Rs. 950 - Rs. 1,800 approx." },
          { part: "Mechanical Wash / Spin Timer Switch", cost: "Rs. 450 - Rs. 950 approx." },
          { part: "Dual Motor Run Capacitor", cost: "Rs. 350 - Rs. 700 approx." },
          { part: "Drain Valve Rubber Seal Bellow & Spring", cost: "Rs. 300 - Rs. 650 approx." },
          { part: "Doorstep Inspection & Diagnostic Checking", cost: "Rs. 250 - Rs. 350 approx." }
        ]
      }
    },
    experiences: [
      {
        appliance: "washing-machine",
        locality: "Colachel",
        title: "White-Westinghouse Semi-Automatic Spin Dryer Fixed in Colachel House",
        story: "Colachel harbour kitta irukira engaloda veetla White-Westinghouse 8.5kg heavy-duty semi-automatic machine use panrom. Heavy bedsheets wash pannina appuram spin dryer-la potta drum odala, motor hum sound mattum kettuchu. trichy service team-ku call pannom. Technician Colachel-ku vandhu back panel open pannaru. Spin motor capacitor weak aagi, lid brake wire rust aagi jam aagirundhuchu. Brake wire free panni, new heavy-duty capacitor maathunaaru. Ippo clothes super dry-a aagudhu. Excellent and honest service."
      }
    ],
    faqs: [
      {
        q: "Why is my White-Westinghouse washing machine spin tub not rotating?",
        a: "A spin tub that hums but does not rotate is usually caused by a failed motor capacitor, a stuck lid safety brake cable, or worn spin motor bush bearings. In heavy-duty White-Westinghouse machines, water leaking past a worn spin bellow seal can also cause the motor to seize. Our technician tests both the electrical circuit and the mechanical seal at your home."
      },
      {
        q: "Can you fix a White-Westinghouse washing machine that leaks water continuously?",
        a: "Yes. Continuous water leakage through the drain hose occurs when safety pins, coins, or fabric lint get trapped inside the rubber drain valve bellow, preventing it from seating tightly. Our technician removes the blockage and installs a fresh rubber valve seal if the old seal is torn."
      },
      {
        q: "Are replacement parts available for White-Westinghouse washing machines in trichy?",
        a: "Yes, White-Westinghouse washers use dependable, standardized mechanical components such as copper-wound motors, heavy-duty gearboxes, mechanical timers, pulsators, and capacitors that our technicians regularly carry for same-day repair."
      },
      {
        q: "What causes grinding noises during the wash cycle?",
        a: "Grinding noises during the wash cycle indicate worn internal planetary gears inside the gearbox or a stripped center spline on the wash pulsator. We inspect the gearbox and pulsator teeth and replace the damaged assembly on the spot."
      },
      {
        q: "What are your service and inspection charges in Colachel and trichy?",
        a: "Our standard diagnostic inspection charge across trichy, Colachel, and Kanyakumari district is Rs. 250 to Rs. 350. You receive an upfront price quote before any repair work or part replacement begins."
      },
      {
        q: "How long does a typical washing machine repair take?",
        a: "Most common repairs such as drain seal replacement, capacitor change, timer installation, or brake wire adjustment are completed within 45 to 75 minutes at your home."
      }
    ]
  },
  {
    name: "Xiaomi",
    slug: "xiaomi",
    appliances: ["tv"],
    officialWebsite: "https://www.mi.com/in/",
    officialCare: "1800 103 6286",
    tagline: "Expert doorstep repair for Xiaomi Smart TV X Series, OLED Vision, and PatchWall 4K TVs in trichy.",
    heroIntro: "Searching for trusted Xiaomi TV service near you in trichy? If your Xiaomi smart TV or OLED Vision has a black screen with sound, PatchWall bootloop restarting issues, display backlight lines, or Bluetooth remote pairing problems, our certified local technicians provide prompt doorstep inspection and reliable repairs across trichy and Kanyakumari district.",
    tanglishHeroNote: "Xiaomi Smart TV-la sound mattum vandhu display full-a dark aagiducha, PatchWall logo-laye restart aagutha, illa Wi-Fi connect aagalaiya? Kavalai vendaam. Namma local trichy technician unga veetuku vandhu backlight LED strips illa motherboard check panni clear-a repair pannuvaaru.",
    applianceDetails: {
      tv: {
        title: "Xiaomi 4K Smart TV & OLED Vision Service Center in trichy",
        types: [
          "Xiaomi Smart TV X Series 4K Google TVs (43 inch, 50 inch, 55 inch, 65 inch)",
          "Xiaomi Smart TV X Pro Series with Dolby Vision IQ",
          "Xiaomi OLED Vision 55-inch Premium TVs",
          "Xiaomi Smart TV 5A Series Full HD & HD Ready LED TVs"
        ],
        models: "Xiaomi TV X43, X50, X55, X65, X Pro 55, OLED Vision 55, 4A, 4X, 5X, and classic Xiaomi Smart TV series",
        problems: [
          "Screen completely black but channel audio, YouTube sound, and remote clicks work",
          "TV stuck on 'mi' or PatchWall logo in continuous reboot loop",
          "Uneven dark patches or dim blue tint across the picture",
          "Bluetooth voice remote unpairing frequently or microphone not detecting commands",
          "Horizontal flickering color lines on the bottom edge of the display",
          "TV not powering on and red indicator light flashing after power fluctuation"
        ],
        parts: [
          { part: "Complete LED Backlight Strip Kit (Xiaomi 43-55 inch)", cost: "Rs. 1,300 - Rs. 3,200 approx." },
          { part: "PatchWall Android Motherboard Component Repair", cost: "Rs. 1,600 - Rs. 3,800 approx." },
          { part: "Power Supply Board Mosfet / Filter Capacitor Repair", cost: "Rs. 1,100 - Rs. 2,500 approx." },
          { part: "T-Con (Timing Controller) Board Replacement", cost: "Rs. 1,200 - Rs. 2,400 approx." },
          { part: "Original Xiaomi Bluetooth Voice Remote", cost: "Rs. 500 - Rs. 950 approx." },
          { part: "General Doorstep Diagnostic Charge", cost: "Rs. 250 - Rs. 350 approx." }
        ]
      }
    },
    experiences: [
      {
        appliance: "tv",
        locality: "Puthery",
        title: "Xiaomi 55-inch 4K TV Dark Screen Repaired in Puthery Residence",
        story: "Puthery bypass road kitta irukira engaloda veetla Xiaomi 55-inch 4K Smart TV maati irukom. Kids cartoon paathutu irukum pothu sudden-a screen black aagiduchu, audio mattum continuous-a kettuchu. Mobile flashlight adichu paatha faint-a cartoon visuals therinjithu. Service Center trichy-ku call pannom. Technician afternoon-e vandhu TV open pannaru. LED backlight strips-la one bank open circuit aagirundhuchu. Complete aluminum-backed new backlight kit replace panni picture check pannaru. Excellent brightness and vivid colors restored on the spot."
      }
    ],
    faqs: [
      {
        q: "Why does my Xiaomi TV have sound but no picture?",
        a: "In Xiaomi LED and 4K TVs, sound without picture indicates failure of the internal LED backlight strips or the backlight driver circuit on the power board. If you flash a torchlight close to the dark screen and can see faint images, the display panel itself is healthy and only the backlight illumination needs replacement. Our technician carries matching backlight sets for on-site replacement."
      },
      {
        q: "How do you fix a Xiaomi TV stuck in a reboot loop on the PatchWall logo?",
        a: "A reboot loop happens when Android TV operating system files on the eMMC flash storage chip become corrupted. Our technicians connect diagnostic tools to reflash the official firmware or repair the memory chip on the motherboard, restoring normal bootup without replacing the board."
      },
      {
        q: "Why is my Xiaomi Bluetooth voice remote not working?",
        a: "Xiaomi Bluetooth remotes require sufficient battery voltage and active pairing. If fresh batteries do not solve it, the Bluetooth module on the TV motherboard may need a hardware reset or replacement. Our technician checks the internal Bluetooth receiver and re-pairs your remote."
      },
      {
        q: "Do you repair Xiaomi OLED Vision TVs in trichy?",
        a: "Yes, we handle motherboard issues, power board repairs, audio amplifier issues, and HDMI eARC port repairs for Xiaomi OLED Vision models."
      },
      {
        q: "What is the inspection fee for Xiaomi TV service in trichy?",
        a: "Our standard doorstep inspection charge across trichy, Puthery, Kottar, and nearby areas is Rs. 250 to Rs. 350. If you decide to proceed with the repair work, the inspection charge is adjusted into the final bill."
      },
      {
        q: "Do you provide warranty on replaced Xiaomi TV backlight strips?",
        a: "Yes, we use brand-new aluminum-backed LED strips that dissipate heat efficiently and provide a dependable service guarantee on the replaced backlight kit."
      }
    ]
  }
];

const targetPath = 'C:/Users/thaku/.gemini/antigravity-ide/brain/d3d92cf3-7442-4e19-9aa4-5f6f56cee962/scratch/sc_brands_batch4.js';
fs.writeFileSync(targetPath, 'module.exports = ' + JSON.stringify(batch4, null, 2) + ';\n', 'utf8');
console.log('Successfully wrote batch 4 with', batch4.length, 'brands to', targetPath);
