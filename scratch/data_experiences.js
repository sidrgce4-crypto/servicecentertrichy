// Customer Service Experience Examples Generator
// Natural everyday Tamil-English (Tanglish) with varied ratings from 1 to 10.
// Clearly labeled as service experience examples, NOT verified testimonials.

function getAcExperiences(brand) {
  const b = brand || 'Split';
  return [
    {
      tag: `${b} AC - Inverter Split Model`,
      rating: '9/10',
      text: `${b} AC-la cooling romba low ah irundhudhu, fan matum oduthu. Trichy technician call panna 1 hour-la spot-ku vandhu multimeter vechu capacitor and gas pressure check pannanga. Flare nut leak fix panni gas charge pannadhukku apram super chillness.`
    },
    {
      tag: `${b} AC - 1.5 Ton Model`,
      rating: '10/10',
      text: `Indoor unit-la irundhu water sotta sotta bedroom wall-la leak aagudhu. Technician jet pump vechu drain tray and pipe block clear pannanga. Water issue completely solved.`
    },
    {
      tag: `${b} AC - 5 Star Inverter`,
      rating: '8/10',
      text: `Remote-la on pannalum display blank-ah irundhudhu. Power supply check panni display PCB sensor board change pannanga. Cost estimate munadiye sonnanga, honest service.`
    },
    {
      tag: `${b} AC - Window AC Model`,
      rating: '7/10',
      text: `Outdoor fan motor run aagumbodhu loud rattling noise vandhadhu. Technician blower bearing check panni lubricate panni tighten pannanga. Noise level ippo romba normal.`
    }
  ];
}

function getFridgeExperiences(brand) {
  const b = brand || 'Double Door';
  return [
    {
      tag: `${b} Fridge - Frost Free 260L`,
      rating: '9/10',
      text: `Freezer matum ice aagudhu, keezhe cooling ille, food spoil aagura maadhiri irundhudhu. Trichy technician vandhu defrost timer and bimetal thermostat check panni replace pannanga. Ippo bottom compartment-layum nalla cooling.`
    },
    {
      tag: `${b} Fridge - Single Door Direct Cool`,
      rating: '10/10',
      text: `Compressor on aaga try panni tik tik nu sound vandhu off aayiduchu. Technician relay and overload protector test panni fresh part potanga. 20 minutes-la problem resolved.`
    },
    {
      tag: `${b} Fridge - Inverter Model`,
      rating: '8/10',
      text: `Fridge door gasket loose aagi door sariya moodala, inside full-ah heavy ice build-up. Technician magnetic door seal adjust panni thermostat setting explain pannanga.`
    },
    {
      tag: `${b} Fridge - Double Door Model`,
      rating: '7/10',
      text: `Bottom tray kitta floor-la water leak aagudhu. Defrost drain hole lint dust adachu irundhadha technician hot water flush panni drain tube clear pannanga.`
    }
  ];
}

function getWashingMachineExperiences(brand) {
  const b = brand || 'Top Load';
  return [
    {
      tag: `${b} Washing Machine - Fully Automatic`,
      rating: '9/10',
      text: `Machine-la water fill aagite irukku, wash cycle start aagala. Trichy technician pressure sensor pipe check panni inlet valve clean pannanga. Cycle ippo perfectly work aagudhu.`
    },
    {
      tag: `${b} Washing Machine - Front Load`,
      rating: '10/10',
      text: `Spin cycle podum podhu bayangara vibration and thumping sound vandhudhu. Technician suspension shock absorbers and drum balance check panni spring set adjust pannanga. Smooth running ippo.`
    },
    {
      tag: `${b} Washing Machine - Semi Automatic`,
      rating: '8/10',
      text: `Spin tub rotate aagala, humming sound matum ketudhu. Technician back panel open panni capacitor and brake wire tension check panni fix pannanga. Quick repair work.`
    },
    {
      tag: `${b} Washing Machine - Top Load Inverter`,
      rating: '7/10',
      text: `Wash mudinja apram water drain aagala, error code display aachu. Coin filter-la clips and lint stuck aagi irundhadha eduthu pump test panni run panni kaatunanga.`
    }
  ];
}

function getTvExperiences(brand) {
  const b = brand || 'Smart TV';
  return [
    {
      tag: `${b} TV - 43 Inch Smart LED`,
      rating: '9/10',
      text: `TV on panna sound nalla kekudhu, aana display screen full-ah dark-ah irundhudhu. Trichy technician torch light test panni LED backlight strip failure-nu confirm panni strip change pannanga. Picture clarity super-ah irukku.`
    },
    {
      tag: `${b} TV - 32 Inch LED TV`,
      rating: '10/10',
      text: `Power switch on pannalum red standby light kooda eriyala. Power supply board-la blown capacitor and diode replace panni board test pannanga. Spot-laye TV ready.`
    },
    {
      tag: `${b} TV - 55 Inch 4K Smart TV`,
      rating: '8/10',
      text: `Screen-la horizontal flickering lines vandhutu irundhudhu. Technician T-Con ribbon cable clean panni re-seat pannanga. Lines disappeared, good on-site diagnosis.`
    },
    {
      tag: `${b} TV - Smart Android Model`,
      rating: '7/10',
      text: `Brand logo vandhu hang aagi restart aayite irundhudhu. Motherboard firmware reset and internal connector pins service pannanga. Software booting smooth aayiduchu.`
    }
  ];
}

function getMicrowaveExperiences(brand) {
  const b = brand || 'Convection';
  return [
    {
      tag: `${b} Microwave - Convection 28L`,
      rating: '9/10',
      text: `Microwave on aagi plate rotate aagudhu, aana food heat aagave illa. Trichy technician high-voltage diode and magnetron check panni diode change pannanga. Heating normal aayiduchu.`
    },
    {
      tag: `${b} Microwave - Grill Model`,
      rating: '10/10',
      text: `Start pannadhume inside sparking and crackling sound vandhudhu. Technician cavity inside check panni burnt mica sheet replace pannanga. Sparking problem completely gone.`
    },
    {
      tag: `${b} Microwave - Solo Microwave`,
      rating: '8/10',
      text: `Touch panel-la Start and Timer buttons press panna respond aagala. Keypad membrane ribbon connector clean panni repair pannanga. Buttons ippo touch-ku responsive.`
    },
    {
      tag: `${b} Microwave - 20L Model`,
      rating: '7/10',
      text: `Glass turntable plate thirumbala, food one side matum warm aagudhu. Bottom turntable drive motor change pannadhukku apram plate uniform-ah rotate aagudhu.`
    }
  ];
}

function getServiceCenterExperiences(brand) {
  const b = brand ? `${brand} ` : '';
  return [
    {
      tag: `${b}Air Conditioner Service`,
      rating: '9/10',
      text: `Split AC-la cooling stop aagi warm air vandhudhu. Trichy technician call panna promptly vandhu outdoor capacitor and gas pressure check panni cooling restore pannanga.`
    },
    {
      tag: `${b}Washing Machine Repair`,
      rating: '10/10',
      text: `Top load machine-la spin aagala, water drain aagama error kaattichu. Technician coin trap clean panni drain motor connection fix pannanga. Honest cost explanation.`
    },
    {
      tag: `${b}Refrigerator Service`,
      rating: '8/10',
      text: `Double door fridge-la freezer matum ice aagi lower cabin warm aachu. Bimetal defrost sensor change panni air duct block clear pannanga. Good doorstep job.`
    },
    {
      tag: `${b}Smart TV Repair`,
      rating: '9/10',
      text: `LED TV-la sound irukku display blank-ah irundhudhu. Backlight LED strips test panni replace panni kuduthanga. Picture original clarity maadhiri irukku.`
    },
    {
      tag: `${b}Microwave Oven Service`,
      rating: '7/10',
      text: `Microwave run aanaalum heating varala. High voltage circuit test panni diode replace pannanga. Food ippo quick-ah heat aagudhu.`
    }
  ];
}

module.exports = {
  getAcExperiences,
  getFridgeExperiences,
  getWashingMachineExperiences,
  getTvExperiences,
  getMicrowaveExperiences,
  getServiceCenterExperiences
};
