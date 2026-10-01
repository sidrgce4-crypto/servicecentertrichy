// FAQ Data Generator for Service Center Trichy
// Generates 10-14 highly relevant, genuine, non-repetitive FAQs per page.

function getAcFaqs(brand) {
  const b = brand ? brand : 'your';
  const bName = brand ? brand + ' ' : '';
  return [
    {
      q: `Do you provide doorstep ${bName}AC repair across all areas in Trichy?`,
      a: `Yes, our local technicians provide doorstep inspection and repair for ${bName}air conditioners across all residential and commercial localities in Trichy including Srirangam, Thillai Nagar, KK Nagar, Cantonment, Kattur, and surrounding areas.`
    },
    {
      q: `What is the visiting and diagnostic charge for ${bName}AC in Trichy?`,
      a: `Our standard home visit inspection charge in Trichy is ₹249 to ₹349. The technician checks the unit using multimeters, pressure gauges, and electrical testing tools. If you proceed with the recommended repair, this inspection charge is adjusted into your total bill.`
    },
    {
      q: `Why is my ${bName}AC blowing warm air instead of cooling?`,
      a: `Warm air from the indoor unit usually points to a burnt compressor capacitor, a refrigerant gas leak at copper pipe joints, a choked cooling coil, or an outdoor unit PCB fault. Our technician checks gas pressure and electrical parts on-site to pinpoint the exact issue.`
    },
    {
      q: `Can you fix indoor unit water leakage from ${bName}split AC?`,
      a: `Yes. Water dripping down bedroom walls or from the front blower is commonly caused by algae or dust choking the condensate drain pipe, a tilted indoor unit bracket, or ice melting due to low refrigerant. We clear the drain line and flush the tray during the visit.`
    },
    {
      q: `Do you repair inverter ${bName}AC models in Trichy?`,
      a: `Yes. We service both conventional fixed-speed and modern inverter AC models. Our technicians test inverter PCB circuit boards, BLDC fan motors, sensor thermistors, and electronic expansion valves.`
    },
    {
      q: `How much does ${bName}AC gas charging cost in Trichy?`,
      a: `Refrigerant gas filling typically ranges from ₹1,450 to ₹2,850 depending on the refrigerant type (R32, R410A, or R22), tonnage (1 ton, 1.5 ton, 2 ton), and whether nitrogen leak testing and copper brazing are needed. Final price depends on the fault and part required.`
    },
    {
      q: `Do you offer foam or pressure jet wash cleaning for ${bName}AC?`,
      a: `Yes. For ACs clogged with dust and lint, we provide thorough pressure jet servicing with indoor service jackets to protect your walls. Deep jet cleaning restores proper airflow, improves cooling, and reduces electricity consumption.`
    },
    {
      q: `What if my ${bName}AC trips the household MCB breaker repeatedly?`,
      a: `Breaker tripping usually indicates a grounded compressor winding, a short-circuited dual capacitor, or high inrush current due to a jammed fan motor. Our technician tests insulation resistance with a meter before attempting any startup.`
    },
    {
      q: `How long does an ${bName}AC repair visit take?`,
      a: `Most common faults like capacitor replacement, water leakage clearing, sensor replacement, or routine cleaning take around 45 to 90 minutes right at your home. Complex PCB repairs or extensive leak soldering may require additional testing time.`
    },
    {
      q: `Are replacement parts compatible with my specific ${bName}AC model?`,
      a: `Yes. We use tested, high-grade replacement parts matching the manufacturer specifications for your ${bName}model—including heavy-duty run capacitors, copper filter driers, relay boards, and fan motors.`
    },
    {
      q: `Do you provide AC uninstallation and reinstallation service in Trichy?`,
      a: `Yes. If you are shifting homes or renovating in Trichy, we provide safe refrigerant pump-down, bracket dismantling, copper piping rerouting, and proper bracket re-installation with vacuum testing.`
    },
    {
      q: `How can I book a technician visit for ${bName}AC repair in Trichy?`,
      a: `You can call our service helpline directly at +91 98765 43210 or send a message via WhatsApp. We arrange visit slots Monday through Sunday between 6:00 AM and 11:00 PM.`
    }
  ];
}

function getFridgeFaqs(brand) {
  const bName = brand ? brand + ' ' : '';
  return [
    {
      q: `Do you repair ${bName}refrigerators at home in Trichy?`,
      a: `Yes. Our technicians visit your doorstep across all Trichy neighborhoods to inspect and repair ${bName}single-door, double-door, and frost-free refrigerators without needing you to transport the heavy appliance.`
    },
    {
      q: `What is the doorstep inspection charge for ${bName}fridge repair in Trichy?`,
      a: `Our doorstep inspection charge is between ₹249 and ₹349 across Trichy. The technician tests the compressor, relay, thermostat, defrost timer, and gas line. If you approve the repair, the inspection fee is adjusted in the repair invoice.`
    },
    {
      q: `Why is the freezer cooling but the lower fridge cabin warm in my ${bName}refrigerator?`,
      a: `This is a classic frost-free defrost failure. If ice accumulates on the cooling coils behind the freezer panel, air cannot circulate down to the fresh food cabin. The culprit is usually a burnt defrost heater, faulty bimetal thermostat, thermal fuse, or stuck defrost timer.`
    },
    {
      q: `What causes excessive ice build-up in a single-door ${bName}fridge?`,
      a: `Excessive frosting usually happens due to a defective mechanical thermostat that never cuts off power, a loose or worn magnetic door rubber gasket letting in moist room air, or keeping the temperature knob at maximum setting.`
    },
    {
      q: `How much does compressor relay or capacitor replacement cost for ${bName}refrigerators?`,
      a: `PTC start relay and overload protector replacement generally ranges from ₹450 to ₹950 depending on model compatibility. The exact cost depends on whether an auxiliary capacitor or electronic inverter board is involved.`
    },
    {
      q: `Can you recharge refrigerant gas in my ${bName}fridge if cooling has completely stopped?`,
      a: `Yes. If cooling has stopped due to a puncture in the evaporator plate or a pinhole leak in the condenser coils, our technician tests for leaks, brazes copper joints, installs a fresh filter drier, vacuums the system, and charges R600a or R134a gas.`
    },
    {
      q: `Why is my ${bName}refrigerator making a loud buzzing or clicking noise?`,
      a: `A clicking sound every few minutes usually means the compressor is attempting to start but tripping on overload protection due to a failed PTC relay or low voltage. A buzzing sound can also come from a dry evaporator fan motor or loose drain tray vibrations.`
    },
    {
      q: `Do you service ${bName}inverter and side-by-side refrigerators?`,
      a: `Yes. We service modern digital inverter and multi-door refrigerators. Our technicians check inverter driver boards, DC circulation fan motors, damper actuators, and electronic temperature thermistors.`
    },
    {
      q: `What if water is leaking on the floor under my ${bName}fridge?`,
      a: `Water pooling beneath the fridge is typically caused by a cracked or misaligned drain pan above the compressor, or a choked defrost drain tube causing meltwater to overflow inside the vegetable crisper and onto the floor.`
    },
    {
      q: `Do you carry common replacement parts for ${bName}refrigerators during the visit?`,
      a: `Technicians carry widely needed spare parts including PTC start relays, overload protectors, bimetal sensors, defrost heaters, fan motors, and thermostats for common models to resolve issues on the initial visit whenever possible.`
    },
    {
      q: `How long does a typical ${bName}refrigerator repair take?`,
      a: `Most electrical and defrost fixes take about 45 to 75 minutes at your home. Full sealed-system repair (flushing, leak fixing, vacuuming, and gas charging) takes roughly 2 hours for thorough testing.`
    },
    {
      q: `How do I book an emergency technician for ${bName}fridge repair in Trichy?`,
      a: `Call our Trichy customer desk at +91 98765 43210 or message us on WhatsApp. We schedule convenient visit appointments 7 days a week from 6:00 AM to 11:00 PM.`
    }
  ];
}

function getWashingMachineFaqs(brand) {
  const bName = brand ? brand + ' ' : '';
  return [
    {
      q: `Do you repair ${bName}washing machines across Trichy?`,
      a: `Yes, we provide doorstep repair services for ${bName}washing machines in all parts of Trichy, including Srirangam, Thillai Nagar, Woraiyur, KK Nagar, Thiruverumbur, Kattur, and Cantonment.`
    },
    {
      q: `What types of ${bName}washing machines do you service?`,
      a: `We service all types: semi-automatic twin tub machines, top-load fully automatic washers, and front-load washing machines, including inverter and direct-drive models.`
    },
    {
      q: `What is the doorstep inspection fee for ${bName}washing machine repair in Trichy?`,
      a: `Our doorstep inspection charge is ₹249 to ₹349 across Trichy. The technician tests the motor, drain pump, inlet valve, drive belt, water level sensor, and control PCB. The inspection fee is adjusted against your final repair bill if you proceed.`
    },
    {
      q: `Why is my ${bName}washing machine not spinning or drying clothes?`,
      a: `Spin failure can stem from a broken drive belt, worn motor capacitor (in semi-automatic units), a jammed drain pump preventing water discharge, a faulty lid switch or door safety interlock, or worn tub bearings.`
    },
    {
      q: `What if my ${bName}washing machine is not draining water?`,
      a: `Drainage problems usually happen when coins, safety pins, or lint clog the coin trap filter, or when the drain motor pump has burnt out. In semi-automatic machines, the drain bellow valve or pull-strap may be snapped.`
    },
    {
      q: `Why does my ${bName}washing machine vibrate heavily or make banging noises during spin?`,
      a: `Heavy vibration and loud thumping are commonly caused by broken suspension shock absorbers, rusted drum spider brackets, worn tub bearings, unlevel machine legs, or an unbalanced wash load.`
    },
    {
      q: `Can you fix water continuously filling without stopping in my ${bName}washer?`,
      a: `Yes. This issue is usually caused by a defective water inlet solenoid valve stuck in the open position, or a cracked/disconnected pressure switch tube that cannot signal water level to the control board.`
    },
    {
      q: `Do you repair ${bName}washing machine control boards (PCB)?`,
      a: `Yes. When the display is completely dead, shows error codes, or halts mid-cycle, our technician inspects the PCB for blown power ICs, burnt relays, or loose solder joints and carries out board repair or replacement.`
    },
    {
      q: `How much does ${bName}washing machine repair cost in Trichy?`,
      a: `Minor fixes like drain filter cleaning or belt adjustment cost between ₹350 and ₹600. Common part replacements (inlet valve, drain pump, door switch, capacitor) range from ₹650 to ₹1,850. Final cost depends on the specific fault and part required.`
    },
    {
      q: `What should I do if my ${bName}front load door does not unlock?`,
      a: `Front load doors stay locked if water remains inside the drum or if the bi-metal door lock mechanism is shorted. Do not force the handle as it may break. Our technician can safely release the latch and test the door interlock.`
    },
    {
      q: `Are old model ${bName}washing machines repairable?`,
      a: `Yes, we regularly repair older semi-automatic and top-load models. We source compatible wash timers, spin motors, capacitors, and drain assemblies to extend your machine's working life.`
    },
    {
      q: `How quickly can a technician visit my house in Trichy?`,
      a: `We aim for same-day service across Trichy neighborhoods. You can call +91 98765 43210 or connect on WhatsApp to book a convenient time slot between 6:00 AM and 11:00 PM.`
    }
  ];
}

function getTvFaqs(brand) {
  const bName = brand ? brand + ' ' : '';
  return [
    {
      q: `Do you provide doorstep repair for ${bName}TVs in Trichy?`,
      a: `Yes, we provide doorstep diagnostic visits for ${bName}LED, LCD, and Smart TVs across all Trichy neighborhoods including Thillai Nagar, KK Nagar, Srirangam, Cantonment, Woraiyur, and Ponmalai.`
    },
    {
      q: `What is the inspection fee for ${bName}TV repair in Trichy?`,
      a: `Our home inspection fee is ₹249 to ₹349. Our technician inspects the power supply board, main motherboard, backlight strips, inverter board, and internal cabling. If you approve the repair, the inspection fee is adjusted in the final bill.`
    },
    {
      q: `Why does my ${bName}TV have sound but no picture (dark/black screen)?`,
      a: `Sound without picture is a very common issue on LED TVs caused by failure of the LED backlight strips inside the display panel. When one or more LEDs burn out, the backlight power driver shuts down. We test and replace the LED backlight strips to restore picture clarity.`
    },
    {
      q: `Can you repair a ${bName}TV with vertical or horizontal lines on the screen?`,
      a: `Horizontal or vertical lines can be caused by loose T-Con board ribbon cables, a faulty timing controller (T-Con) board, or damaged display panel COF (chip-on-film) IC bonds. While T-Con board faults can be repaired, physical panel glass damage cannot always be fixed.`
    },
    {
      q: `What if my ${bName}TV does not turn on at all and the standby light is off?`,
      a: `If there is no standby red light and no response, the power supply board (SMPS) has likely suffered a power surge, blown fuse, or shorted MOSFET capacitor. We carry out component-level power board repair on-site.`
    },
    {
      q: `Do you repair ${bName}Smart TV motherboard and Wi-Fi connection issues?`,
      a: `Yes. If your Smart TV gets stuck on the brand logo screen, restarts repeatedly, or fails to connect to home Wi-Fi, our technician inspects the mainboard, firmware chip, and internal Wi-Fi receiver module.`
    },
    {
      q: `Can broken or cracked ${bName}TV screens be repaired?`,
      a: `If the outer or inner LCD glass panel is physically cracked or broken due to an impact, the glass panel itself cannot be patched. Panel replacement costs often approach the price of a new television. We explain this honestly during inspection.`
    },
    {
      q: `How much does ${bName}TV LED backlight replacement cost in Trichy?`,
      a: `Complete LED backlight strip replacement generally ranges between ₹1,450 and ₹3,500 depending on screen size (32-inch, 43-inch, 55-inch) and panel design. Final cost depends on screen size, fault, and the specific part required.`
    },
    {
      q: `What if the TV speakers crackle or there is no audio output?`,
      a: `No sound or distorted crackling is typically caused by torn speaker paper cones, burnt audio amplifier ICs on the main motherboard, or incorrect audio output settings. We carry compatible replacement speaker units.`
    },
    {
      q: `Do you provide TV wall-mount unmounting and installation in Trichy?`,
      a: `Yes. We provide standard wall-mounting, swivel-bracket installation, and unmounting services for all LED and Smart TV sizes with proper drill anchoring and cable concealment.`
    },
    {
      q: `How long does an in-home ${bName}TV repair take?`,
      a: `Power board repairs, speaker replacements, cable reseating, and software resets take 45 to 75 minutes at home. Backlight replacement requires careful panel disassembly on a clean flat surface and takes around 90 to 120 minutes.`
    },
    {
      q: `How do I book a technician for ${bName}TV service in Trichy?`,
      a: `Call our Trichy helpline directly at +91 98765 43210 or chat with us on WhatsApp. We are available 7 days a week, 6:00 AM to 11:00 PM.`
    }
  ];
}

function getMicrowaveFaqs(brand) {
  const bName = brand ? brand + ' ' : '';
  return [
    {
      q: `Do you repair ${bName}microwave ovens at home in Trichy?`,
      a: `Yes, we provide doorstep repair services for ${bName}solo, grill, and convection microwave ovens throughout Trichy, including Srirangam, Thillai Nagar, KK Nagar, Cantonment, and Kattur.`
    },
    {
      q: `What is the visiting charge for ${bName}microwave oven inspection in Trichy?`,
      a: `Our standard home visit inspection fee is ₹249 to ₹349 across Trichy. The technician tests the magnetron, high-voltage diode, transformer, door safety switches, and keypad membrane. The fee is adjusted against the repair charge if you proceed.`
    },
    {
      q: `Why is my ${bName}microwave running but not heating food at all?`,
      a: `If the timer counts down and the light turns on but food remains cold, the failure is in the high-voltage heating circuit—commonly a burnt magnetron tube, a blown high-voltage fuse, a defective high-voltage diode, or capacitor failure.`
    },
    {
      q: `What causes sparks or burning smells inside the ${bName}microwave cavity?`,
      a: `Sparks (arcing) inside the cooking cavity are usually caused by a burnt, greasy, or carbonized mica waveguide cover sheet, chipped cavity paint, or metal residue on the rack. Replacing the mica sheet and cleaning the cavity fixes the sparking safely.`
    },
    {
      q: `Can you fix a ${bName}microwave oven touchpad that does not respond?`,
      a: `Yes. Touchpad unresponsiveness happens when the flexible membrane circuit ribbon wears out from humidity and grease, or when individual touch button tracks crack. We replace the membrane keypad or repair the control board.`
    },
    {
      q: `Why has the glass turntable stopped rotating in my ${bName}microwave?`,
      a: `Turntable failure is caused by a burnt low-RPM synchronous turntable motor underneath the bottom panel, a stripped roller ring guide, or a broken plastic drive coupler.`
    },
    {
      q: `What if the ${bName}microwave trips the home power breaker as soon as I press Start?`,
      a: `Tripping the circuit breaker immediately on start is almost always caused by a shorted door interlock microswitch, a shorted high-voltage capacitor, or a grounded transformer. Our technician tests each switch with an ohmmeter.`
    },
    {
      q: `How much does magnetron replacement cost for a ${bName}microwave oven in Trichy?`,
      a: `Magnetron replacement typically ranges between ₹1,250 and ₹2,400 depending on the power rating (700W, 800W, 900W) and mounting bracket orientation. Final cost depends on the model, fault, and the part required.`
    },
    {
      q: `Is it safe to repair a microwave oven at home?`,
      a: `Microwave ovens store high electrical voltage in their capacitors even when unplugged. Our technicians safely discharge the capacitor using insulated grounding tools before inspecting components, ensuring complete safety for your home.`
    },
    {
      q: `Do you service convection baking mode problems in ${bName}microwaves?`,
      a: `Yes. If the convection fan does not blow hot air, the baking temperature fails to rise, or the heating rod stays cold, we check the upper heating element, convection blower motor, and thermal thermostat cut-offs.`
    },
    {
      q: `How long does a microwave repair visit take?`,
      a: `Most repairs like mica sheet replacement, door switch change, turntable motor replacement, or high-voltage diode replacement are completed in 30 to 60 minutes on-site.`
    },
    {
      q: `How can I schedule a ${bName}microwave repair visit in Trichy?`,
      a: `Call us at +91 98765 43210 or message us on WhatsApp. Our customer service desk operates every day from 6:00 AM to 11:00 PM across Trichy.`
    }
  ];
}

function getServiceCenterFaqs(brand) {
  const bName = brand ? brand : 'Multi-Brand';
  return [
    {
      q: `What services does Service Center Trichy provide for ${bName} appliances?`,
      a: `We provide independent doorstep repair, diagnosis, maintenance, and genuine spare parts replacement for ${bName} air conditioners, refrigerators, washing machines, televisions, and microwave ovens across all Trichy localities.`
    },
    {
      q: `Are you an authorized ${bName} service center?`,
      a: `No. We are an independent third-party multi-brand home appliance repair service provider in Trichy. We specialize in post-warranty and out-of-warranty doorstep repairs. Brand trademarks belong to their respective owners.`
    },
    {
      q: `What is the visiting and inspection charge in Trichy?`,
      a: `Our doorstep inspection fee is between ₹249 and ₹349 across Trichy. The technician checks the appliance at your home, diagnoses the root cause, and provides a clear cost estimate before starting any work. The inspection fee is adjusted if you proceed with repair.`
    },
    {
      q: `Which appliances of ${bName} do you repair at home?`,
      a: `We handle all major household appliances including split & inverter ACs, single & double door refrigerators, semi-automatic, top-load & front-load washing machines, LED & Smart TVs, and microwave ovens.`
    },
    {
      q: `Do your technicians carry replacement parts during doorstep visits?`,
      a: `Yes. Our technicians carry commonly needed compatible spare parts such as capacitors, relays, drain pumps, inlet valves, thermostats, and sensors to complete repairs during the initial visit whenever possible.`
    },
    {
      q: `How much will my ${bName} appliance repair cost?`,
      a: `Costs depend on the appliance type, specific fault, and part required. Minor adjustments start from ₹350–₹600, while part replacements range from ₹650 to ₹2,500+. We always discuss and confirm the price with you before carrying out the work.`
    },
    {
      q: `Which Trichy localities do your technicians cover?`,
      a: `We cover all Trichy neighborhoods across North, South, East, and West Trichy—including Srirangam, Thillai Nagar, KK Nagar, Cantonment, Woraiyur, Kattur, Thiruverumbur, Ponmalai, Ariyamangalam, and Karumandapam.`
    },
    {
      q: `Can you repair older or discontinued ${bName} appliance models?`,
      a: `Yes. We have strong local sourcing networks for compatible parts, enabling us to service older appliances, discontinued models, and semi-automatic machines where parts may no longer be available at company counters.`
    },
    {
      q: `What are your service working hours in Trichy?`,
      a: `We operate 7 days a week, Monday through Sunday, from 6:00 AM to 11:00 PM. We offer flexible morning, afternoon, and evening appointment slots to suit your schedule.`
    },
    {
      q: `Do you provide emergency same-day home visits?`,
      a: `Yes, for critical issues like food spoiling in a non-cooling refrigerator or an AC breakdown during hot Trichy summers, we prioritize technician allocation for same-day doorstep service.`
    },
    {
      q: `How is the repair work tested before handover?`,
      a: `Our technician performs full operational cycle tests in front of you—checking cooling temperatures, spin speeds, drainage flow, or display brightness—ensuring the appliance is in sound working order before packing up.`
    },
    {
      q: `How can I book a repair visit with Service Center Trichy?`,
      a: `You can call our service coordinator directly at +91 98765 43210 or chat via WhatsApp. Simply share your appliance type, brand, problem, and address in Trichy to confirm an appointment.`
    }
  ];
}

function getHomeFaqs() {
  return [
    {
      q: `What appliances do you repair at Service Center Trichy?`,
      a: `We repair all major home appliances at your doorstep across Trichy: Air Conditioners (Split, Window, Inverter), Refrigerators (Single Door, Double Door, Frost-Free), Washing Machines (Semi-Automatic, Top Load, Front Load), Televisions (LED, LCD, Smart TV, 4K), and Microwave Ovens (Solo, Grill, Convection).`
    },
    {
      q: `Do you provide doorstep repair in all Trichy localities?`,
      a: `Yes. Our technicians cover North, South, East, and West Trichy—including Srirangam, Thillai Nagar, KK Nagar, Cantonment, Woraiyur, Kattur, Thiruverumbur, Ponmalai, Palakarai, Ariyamangalam, and Karumandapam.`
    },
    {
      q: `What is the home visit inspection charge in Trichy?`,
      a: `Our standard home visit inspection charge is ₹249 to ₹349. The technician inspects the machine with proper testing tools, explains the fault, and gives you a clear repair estimate. If you approve the work, the visit charge is adjusted in the final bill.`
    },
    {
      q: `How much do appliance repairs typically cost?`,
      a: `Repair charges vary based on the appliance and part needed. Minor services (like filter cleaning, belt adjustment, or wire fixing) range from ₹350 to ₹650. Component replacements (capacitors, pumps, inlet valves, thermostats) range from ₹650 to ₹2,500+. Final repair cost depends on the fault and part required after physical checking.`
    },
    {
      q: `Can repairs be completed on the same day at home?`,
      a: `Most common faults—such as AC water leaks, washing machine drainage blocks, fridge relay issues, or microwave heating faults—are resolved on the spot in 45 to 90 minutes. Technicians carry standard testing gear and frequent spare parts.`
    },
    {
      q: `Are you an authorized company service center?`,
      a: `No. We are an independent third-party home appliance service provider in Trichy specializing in post-warranty repair and maintenance. We are not officially affiliated with individual brand manufacturers.`
    },
    {
      q: `What parts do you use for replacements?`,
      a: `We use high-grade OEM and brand-compatible replacement parts specifically matched to your appliance model number, ensuring durability, safe electrical ratings, and optimal performance.`
    },
    {
      q: `How do I book an appliance technician visit in Trichy?`,
      a: `Simply call our Trichy service desk at +91 98765 43210 or message us on WhatsApp. Our team will note your appliance details, address, and preferred time slot.`
    },
    {
      q: `What are your operational hours in Trichy?`,
      a: `We are open 7 days a week, Monday through Sunday, from 6:00 AM to 11:00 PM. We also offer early morning and evening visit slots for working professionals.`
    },
    {
      q: `Do you repair older washing machine and fridge models?`,
      a: `Yes. We service older semi-automatic washers, direct cool refrigerators, and older CRT/LCD/LED televisions. We source compatible timers, motors, and thermostats to keep older appliances running reliably.`
    },
    {
      q: `What should I check before calling a technician for an AC or fridge?`,
      a: `Check if the power switch and stabilizer are turned on, verify that the MCB breaker hasn't tripped, ensure the temperature settings haven't been changed accidentally, and confirm the plug socket is receiving power.`
    },
    {
      q: `Do you provide emergency appliance repair in Trichy?`,
      a: `Yes, for urgent situations like heavy water leakage from an AC onto furniture, or a non-cooling refrigerator full of perishables, we prioritize dispatching a technician to your Trichy home promptly.`
    }
  ];
}

module.exports = {
  getAcFaqs,
  getFridgeFaqs,
  getWashingMachineFaqs,
  getTvFaqs,
  getMicrowaveFaqs,
  getServiceCenterFaqs,
  getHomeFaqs
};
