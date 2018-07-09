var db = require("./models");

  var defopsList = [{
    name : 'Maestro',
    badge: '/images/maestrobadge.png',
    img: '/images/maestro.png',
    bio: 'Maestro is oldest in a family of eight children. He grew up in Rome, but attended the Military Academy of Modena at 18. He then joined the Carabinieri and earned a spot as an Explorer Paratrooper in the 1st Paratrooper Regiment known as Tuscania.',
    gadget : {
        name: 'Evil Eye',
        uses: 2,
        img: '/images/evileye.png',
        desc: 'Maestro uses a remote-controlled turret firing high-energy laser beams. Once affixed to the floor or wall, Maestro can remote-surveil and provide overwatch in a location through the swivel-mounted camera. When the camera device breaks open to fire a laser beam the core is exposed to damage. Otherwise, the turret is unaffected by bullets and melee. Lastly, Evil Eye can see through smoke.',
    },
    primaries : {
      pri1 : {
        name : 'Alda 5.56',
        img : '/images/ALDA556.png',
      },
      pri2 : {
        name : 'ACS 12',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'Keratos 357 Pistol',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'Bailiff 410 Pistol',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : {
      gad1: {
        name : 'Barbed Wire',
        img : '/images/BARBEDWIRE.png',
    },
      gad2: {
        name : 'Deployable Shield',
        img : '/images/deployableshield.png',
    },
    },
    ArmorRating : 3,
    SpeedRating : 1,
    Organization : 'G.I.S',
  },
  {
    name : 'Alibi',
    badge: '/images/alibibadge.png',
    img: '/images/alibi.png',
    bio: 'Alibi was born in Tripoli, Libya and immigrated with her family when she was three years old. Her father managed a small ordnance manufacturer, using his contacts to open up exports.',
    gadget : {
        name: 'Prisma',
        uses: 3,
        img: '/images/evileye.png',
        desc: 'Prisma projects holograms identical to Alibi in an idle position. If you shoot or touch the holograms, you’ll be marked and pinged for the next few seconds. If Prisma is deployed outside, a false “Defender Outside” warning is triggered for Attackers. To add an element of surprise, Prisma conceals the identity of any Defender who ventures outside. Any bullet, melee, or explosives damages Prisma, and will shoot through the hologram. Be careful not to stand too close.',
    },
    primaries : {
      pri1 : {
        name : 'MX4 Storm',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : 'ACS 12',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'Keratos 357 Pistol',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'Bailiff 410 Pistol',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : {
      gad1: {
        name : 'Impact Grenades',
        img : '/images/impactgren.png',
    },
      gad2: {
        name : 'Deployable Shield',
        img : '/images/DEPLOYABLESHIELD.png',
    },
    },
    ArmorRating : 1,
    SpeedRating : 3,
    Organization : 'G.I.S',
  },
  {
    name : 'Vigil',
    badge: '/images/vigilbadge.png',
    img: '/images/vigil.png',
    bio: 'Chul Kyung Hwa spent months on the run in Asia as a child. He lost his family during the flight before finding asylum in South Korea. As an adult, he enlisted in the ROK Navy and later earned a berth in the ROKN UDT/SEALs, becoming so highly skilled that the 707th Special Mission Battalion handpicked him as an operator. His ERC-7 backpack enables him to vanish from live feeds.',
    gadget : {
        name: 'ERC-7',
        uses: 20,
        img: '/images/evileye.png',
        desc: 'The ERC-7 uses Diminished Reality technology to remove perceivable stimuli from its direct environment. Vigil carries a prototype in his backpack, which scans surrounding electronic devices and wipes his image from any cameras in view.',
    },
    primaries : {
      pri1 : {
        name : 'K1A',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : 'BOSG.12.2',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'C75 Auto',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'SMG-12',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : {
      gad1: {
        name : 'Impact Grenades',
        img : '/images/impactgren.png',
    },
      gad2: {
        name : 'Bulletproof Camera',
        img : '/images/bulletproofcam.png',
    },
    },
    ArmorRating : 1,
    SpeedRating : 3,
    Organization : 'S.M.B.',
  },
  {
    name : 'Ela',
    badge: '/images/elabadge.png',
    img: '/images/ela.png',
    bio: 'Elzbieta Bosak is the newest addition to Team Rainbow. Nicknamed Ela, this driven 30-year-old has had an unconventional progression. Having quickly risen among Poland’s Special Forces, she was deployed in six countries and active in Iraq for seven years.Her exploits should come as no surprise, considering that she is the youngest daughter of Jan Bosak, a former commander of Poland’s counter-terrorism unit GROM. Despite this legacy, Ela is not the stiff soldier one would expect. Ela experienced some difficulties while attending a military high school. She was bullied constantly due to the special attention she received as the GROM Commander’s daughter.',
    gadget : {
        name: 'Grzmot Mine',
        uses: 3,
        img: '/images/evileye.png',
        desc: 'Inspired by the 1939 anti-tank Polish grenades used by the iconic Cichociemny during WWII, the sticky Grzmot mines can be anchored on surfaces, impairing hearing and causing a dizzying effect.',
    },
    primaries : {
      pri1 : {
        name : 'Scorpion EVO 3 A1',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : 'BOSG.12.2',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'RG15',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'NA',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : {
      gad1: {
        name : 'Barbed Wire',
        img : '/images/BARBEDWIRE.png',
    },
      gad2: {
        name : 'Deployable Shield',
        img : '/images/DEPLOYABLESHIELD.png',
    },
    },
    ArmorRating : 1,
    SpeedRating : 3,
    Organization : 'GROM',
  },
  {
    name : 'Lesion',
    badge: '/images/lesionbadge.png',
    img: '/images/lesion.png',
    bio: 'Born in Junk Bay, Liu Tze Long, codenamed Lesion, was raised by his father, who worked for a ship breaking company. During these years, Lesion would stay at the shipyard, and help him dismantle obsolete ships for scrapping. Crumbling with debts after his father was injured, Lesion took on various hazardous jobs in demolition until he found an opportunity for mine clearance duty. Demonstrating a natural calm while handling highly corrosive substances, he joined the Explosive Ordnance Disposal Bureau. He is a known expert in chemical, biological, radiological and nuclear (CBRN) terrorist threats.',
    gadget : {
        name: 'Gu',
        uses: 8,
        img: '/images/evileye.png',
        desc: 'Gu mines were inspired by the sharp punji sticks used during the Vietnam War. Rubbed with toxic plants or feces, the stakes served to slow down enemy troops by causing severe infections in their camp.',
    },
    primaries : {
      pri1 : {
        name : 'SIX12 SD',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : 'T-5 SMG',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'Q-929',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'NA',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : {
      gad1: {
        name : 'Impact Grenades',
        img : '/images/impactgren.png',
    },
      gad2: {
        name : 'Deployable Shield',
        img : '/images/DEPLOYABLESHIELD.png',
    },
    },
    ArmorRating : 2,
    SpeedRating : 2,
    Organization : 'SDU',
  },
  {
    name : 'Mira',
    badge: '/images/mirabadge.png',
    img: '/images/mira.png',
    bio: 'Elena María Álvarez was born in Retiro, Madrid, where she learned to spot and fix mechanical defects on automobile engines. Demonstrating solid physical endurance and a stubborn need to prove her worth, Álvarez later joined the Grupo Especial de Operaciones (G.E.O.). Her wide-ranging knowledge of vehicles made her an expert in the ballistic field, which she uses to develop and test bulletproof materials.',
    gadget : {
        name: 'Black Mirror',
        uses: 2,
        img: '/images/evileye.png',
        desc: 'A specialized laminated glass, which when deployed with oxyacetylene can carve out a one-way mirror on any wall. If the air pressure is disrupted, however, the glass is ejected and creates a daring opening for both defenders and attackers.',
    },
    primaries : {
      pri1 : {
        name : 'Vector .45 ACP',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : 'ITA12L',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'ITA12S',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'USP40',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : {
      gad1: {
        name : 'Nitro Cell',
        img : '/images/nitrocell.png',
    },
      gad2: {
        name : 'Deployable Shield',
        img : '/images/DEPLOYABLESHIELD.png',
    },
    },
    ArmorRating : 3,
    SpeedRating : 1,
    Organization : 'GEO',
  },
  {
    name : 'Echo',
    badge: '/images/echobadge.png',
    img: '/images/echo.png',
    bio: 'Known as a natural prodigy in robotics, Masaru Enatsu grew up in Suginami City, Tokyo, the birthplace of several animation studios and technology companies. Enticed to test his devices on the field, he joined the National Police Academy. Specialised in Recon operations, he was recruited by the Tokyo Metropolitan Police Department Special Unit before transferring to the Aichi Unit.',
    gadget : {
        name: 'Yokai',
        uses: 2,
        img: '/images/evileye.png',
        desc: 'Equipped with an acoustic hailing device, this signature drone can fire ultrasonic bursts that disorient all targets in a given perimeter. Yokai also transmits a video feed to Echo, who keeps his immediate perimeter secure.',
    },
    primaries : {
      pri1 : {
        name : 'SuperNova',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : 'MP5SD',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'P229',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'Bearings 9',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : {
      gad1: {
        name : 'Barbed Wire',
        img : '/images/BARBEDWIRE.png',
    },
      gad2: {
        name : 'Deployable Shield',
        img : '/images/DEPLOYABLESHIELD.png',
    },
    },
    ArmorRating : 3,
    SpeedRating : 1,
    Organization : 'SAT',
  },
  {
    name : 'Caveira',
    badge: '/images/caveirabadge.png',
    img: '/images/caveira.png',
    bio: 'Known as a brutal interrogator, Taina “Caveira” Pereira’s makes for a fearless Operator on the field. Originally from a small town on the outskirts of São Paulo, her life could have taken a turn for the worst when she was arrested at 16 on robbery charges. Her promising profile allowed for an exception, giving her the option between entering a juvenile reformatory and working with BOPE.',
    gadget : {
        name: 'Luison',
        uses: 20,
        img: '/images/evileye.png',
        desc: 'The Luison is wrapped in a rock-based mineral fiber to both insulate and soundproof the silencer. This weapon allows Caveira to incapacitate her target discreetly and conduct an interrogation.',
    },
    primaries : {
      pri1 : {
        name : 'M12',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : 'SPAS-15',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'Luison',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : '',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : {
      gad1: {
        name : 'Impact Grenades',
        img : '/images/impactgren.png',
    },
      gad2: {
        name : 'Bulletproof Camera',
        img : '/images/bulletproofcam.png',
    },
    },
    ArmorRating : 1,
    SpeedRating : 3,
    Organization : 'BOPE',
  },
  {
    name : 'Valkyrie',
    badge: '/images/valkyriebadge.png',
    img: '/images/valkyrie.png',
    bio: 'While serving as a Naval Intelligence Officer, Castellano was chosen to be one of the first women admitted to SEALs training. Singularly focused and driven, she will do whatever it takes to accomplish the mission in the most seamless and effective way possible. She uses the “Black Eye”, a camera able to adhere to nearly any surface, while maintaining a clear view and providing her whole team with a live video feed. The quick deploy camera has proved incredibly useful for operations in situations with limited intel, gaining a much needed tactical advantage in close quarters or around blind spots.',
    gadget : {
        name: 'Black Eye',
        uses: 3,
        img: '/images/evileye.png',
        desc: 'Encased in a tinted silicone ball, coated in micro-suction cups, the quick deploy camera maintains a clear view thanks to the internal gyroscope that dictates the angle of the lens. The suction cups allow the camera to adhere to any surface, while the gyroscope mounted lens stabilises the camera angle and focus. The live video feed is available to all operators.',
    },
    primaries : {
      pri1 : {
        name : 'MPX',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : 'SPAS-12',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'D-50',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : '',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : {
      gad1: {
        name : 'Nitro Cell',
        img : '/images/nitrocell.png',
    },
      gad2: {
        name : 'Deployable Shield',
        img : '/images/DEPLOYABLESHIELD.png',
    },
    },
    ArmorRating : 1,
    SpeedRating : 3,
    Organization : 'SEALS',
  },
  {
    name : 'Frost',
    badge: '/images/frostbadge.png',
    img: '/images/frost.png',
    bio: 'A combat systems officer, Tina Lin Tsang is a focused and meticulous planner. She uses the Sterling Mk2 LHT or “Welcome Mat”, a floor mounted, rubber and metallic spring loaded leg-hold trap that provides her with a non-lethal means of immobilising her prey. The sleek design of the “Welcome Mat” allows for seamless deployment in a variety of areas and environments without the need for extensive camouflage.',
    gadget : {
        name: 'Welcome Mat',
        uses: 3,
        img: '/images/evileye.png',
        desc: 'The rubber mat and concealed metal jaws are bolted in place. When the pressure plate is engaged, two sets of jaws at ankle and shin height deploy, locking the person in place. Requires two people to release the jaws and reset the trap.',
    },
    primaries : {
      pri1 : {
        name : 'Super 90',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : '9mm C1',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'Mk1 9mm',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : '',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : {
      gad1: {
        name : 'Barbed Wire',
        img : '/images/BARBEDWIRE.png',
    },
      gad2: {
        name : 'Bulletproof Camera',
        img : '/images/bulletproofcam.png',
    },
    },
    ArmorRating : 2,
    SpeedRating : 2,
    Organization : 'JTF2',
  },
  {
    name : 'Mute',
    badge: '/images/mutebadge.png',
    img: '/images/mute.png',
    bio: "A veteran of Britain's Government Communications Headquarters (GCHQ) unit, Mark Chandar’s exceptional work as a signals intelligence (sigint) specialist has made him a valuable addition to Rainbow.",
    gadget : {
        name: 'Signal Disruptor',
        uses: 4,
        img: '/images/evileye.png',
        desc: 'He brings with him a Signal Disruptor from his former career, which allows Chandar to jam all communications in a set area, preventing remote detonations and the use of drones. The GC90 “Moni”, blocks the signal from a remote detonator or control from reaching any device within range.',
    },
    primaries : {
      pri1 : {
        name : 'MP5K',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : 'M590A1',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'P226 MK 25',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : '',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : {
      gad1: {
        name : 'Nitro Cell',
        img : '/images/nitrocell.png',
    },
      gad2: {
        name : 'Bulletproof Camera',
        img : '/images/bulletproofcam.png',
    },
    },
    ArmorRating : 2,
    SpeedRating : 2,
    Organization : 'SAS',
  },
  {
    name : 'Smoke',
    badge: '/images/smokebadge.png',
    img: '/images/smoke.png',
    bio: "Porter is a thrill seeker with very little regard for his personal safety. He is fearless in battle and can be a great asset for defensive maneuvers, however he seems to enjoy the havoc and chaos of war.",
    gadget : {
        name: 'Remote Gas Grenade',
        uses: 3,
        img: '/images/evileye.png',
        desc: 'He uses a remote detonated dispersal mine filled with a gas of disclosed contents to impede hostile advances.',
    },
    primaries : {
      pri1 : {
        name : 'FMG-9',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : 'M590A1',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'P226 MK 25',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'SMG-11',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : {
      gad1: {
        name : 'Impact Grenades',
        img : '/images/BARBEDWIRE.png',
    },
      gad2: {
        name : 'Barbed Wire',
        img : '/images/DEPLOYABLESHIELD.png',
    },
    },
    ArmorRating : 2,
    SpeedRating : 2,
    Organization : 'SAS',
  },
  {
    name : 'Castle',
    badge: '/images/castlebadge.png',
    img: '/images/castle.png',
    bio: "Miles Campbell holds a BA in Criminal Justice and is a former LAPD SWAT officer who went federal and is now an FBI SWAT veteran.",
    gadget : {
        name: 'Armor Panel',
        uses: 3,
        img: '/images/evileye.png',
        desc: 'He brings an expertise in defense and reinforcement to Rainbow squad, ever ready to deploy his signature reinforced barricades.',
    },
    primaries : {
      pri1 : {
        name : 'UMP-45',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : 'M1014',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : '5.7 USG',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'M45 MEUSOC',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : {
      gad1: {
        name : 'Bulletproof Camera',
        img : '/images/bulletproofcam.png',
    },
      gad2: {
        name : 'Impact Grenades',
        img : '/images/DEPLOYABLESHIELD.png',
    },
    },
    ArmorRating : 2,
    SpeedRating : 2,
    Organization : 'FBI SWAT',
  },
  {
    name : 'Pulse',
    badge: '/images/pulsebadge.png',
    img: '/images/pulse.png',
    bio: "Jack Estrada's work with the FBI biometrics program allowed him to blend his background in communications and biochemistry to a powerful effect.",
    gadget : {
        name: 'Armor Panel',
        uses: 3,
        img: '/images/evileye.png',
        desc: 'Moving from the lab to active duty in 2010, his ability to read people made him a natural negotiator. He wields a heartbeat sensor capable of detecting enemies or allies at a distance.',
    },
    primaries : {
      pri1 : {
        name : 'UMP-45',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : 'M1014',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : '5.7 USG',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'M45 MEUSOC',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : {
      gad1: {
        name : 'Barbed Wire',
        img : '/images/BARBEDWIRE.png',
    },
      gad2: {
        name : 'Nitro Cell',
        img : '/images/nitrocell.png',
    },
    },
    ArmorRating : 1,
    SpeedRating : 3,
    Organization : 'FBI SWAT',
  },
  {
    name : 'Doc',
    badge: '/images/docbadge.png',
    img: '/images/doc.png',
    bio: "Kateb grew up in an affluent family, in Paris’ 16th arrondissement. At twenty, he abandoned a potentially prominent private medical practice in favor of a career with the French Defense Health Service. Gustave Kateb is cut from a rare cloth: a genuine altruist, a true believer in making the world a safer place for his fellow man.",
    gadget : {
        name: 'Stim Pistol',
        uses: 3,
        img: '/images/evileye.png',
        desc: 'A volunteer for Doctors Without Borders and medical officer for the Brigade des Forces Speciales Terre, he is a proficient field medic who carries a Stim Pistol allowing him to revive downed teammates from a distance.',
    },
    primaries : {
      pri1 : {
        name : 'SG-CQB',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : 'MP5',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'P90',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'P9',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'LFP586',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : {
      gad1: {
        name : 'Barbed Wire',
        img : '/images/BARBEDWIRE.png',
    },
      gad2: {
        name : 'Bulletproof Camera',
        img : '/images/Dbulletproofcam.png',
    },
    },
    ArmorRating : 3,
    SpeedRating : 1,
    Organization : 'GIGN',
  },
  {
    name : 'Rook',
    badge: '/images/rookbadge.png',
    img: '/images/rook.png',
    bio: "Julien Nizan is the deliverer of the GIGN's famous trust exercise for new recruits: taking a bullet fired by one of your colleagues with only a small armor plate to protect you. He carries these same armor plates into combat, dropping them for his allies to reinforce their defenses. ",
    gadget : {
        name: 'Armor Pack',
        uses: 1,
        img: '/images/evileye.png',
        desc: "Rook can greatly improve his team's survival by dropping his Armor Pack: each R1N Rhino Armor plate will increase the chances of the wearer to drop in DBNO when shot instead of being killed.",
    },
    primaries : {
      pri1 : {
        name : 'SG-CQB',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : 'MP5',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'P90',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'P9',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'LFP586',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : {
      gad1: {
        name : 'Deployable Shield',
        img : '/images/BARBEDWIRE.png',
    },
      gad2: {
        name : 'Impact Grenades',
        img : '/images/DEPLOYABLESHIELD.png',
    },
    },
    ArmorRating : 3,
    SpeedRating : 1,
    Organization : 'GIGN',
  },
  {
    name : 'Jager',
    badge: '/images/jagerbadge.png',
    img: '/images/jager.png',
    bio: "A veteran of GSG9 anti-piracy ops in the Indian Ocean, Marius Streicher has seen action as a helicopter operator and technology advisor.",
    gadget : {
        name: 'Active Defense System',
        uses: 3,
        img: '/images/evileye.png',
        desc: 'He can secure areas against airborne explosives using his active defense system or "Magpie", capable of neutralizing any projectiles on approach.',
    },
    primaries : {
      pri1 : {
        name : 'M870',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : '416-C Carbine',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'P12',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'na',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : {
      gad1: {
        name : 'Deployable Shield',
        img : '/images/BARBEDWIRE.png',
    },
      gad2: {
        name : 'Barbed Wire',
        img : '/images/DEPLOYABLESHIELD.png',
    },
    },
    ArmorRating : 1,
    SpeedRating : 3,
    Organization : 'GSG9',
  },
  {
    name : 'Bandit',
    badge: '/images/banditbadge.png',
    img: '/images/bandit.png',
    bio: "A former undercover agent within the Hannover Hells Angels, Brunsmeier is known for taking obsolete items and repurposing them into weapons. He has cobbled together a device that can electrify barbed wires and barricades, and injure or destroy anything that comes into contact with it.",
    gadget : {
        name: 'Shock Wire',
        uses: 4,
        img: '/images/evileye.png',
        desc: 'Bandit can place his High-tension charges on all metallic gadgets, which include barbed wire, reinforced walls and deployable shields.',
    },
    primaries : {
      pri1 : {
        name : 'MP7',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : 'M870',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'P12',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'na',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : {
      gad1: {
        name : 'Nitro Cell',
        img : '/images/nitrocell.png',
    },
      gad2: {
        name : 'Barbed Wire',
        img : '/images/DEPLOYABLESHIELD.png',
    },
    },
    ArmorRating : 1,
    SpeedRating : 3,
    Organization : 'GSG9',
  },
  {
    name : 'Tachanka',
    badge: '/images/tachankabadge.png',
    img: '/images/tachanka.png',
    bio: "Alexsandr Senaviev is an iconoclast who came of age in a pre-glasnost red army family and has retained an interest in soviet machinery and weaponry.",
    gadget : {
        name: 'Mounted LMG',
        uses: 1,
        img: '/images/evileye.png',
        desc: 'During operations, he deploys a signature vintage mounted machine gun that he has restored and maintained with loving care.',
    },
    primaries : {
      pri1 : {
        name : 'SASG-12',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : '9x19VSN',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'GSh-18',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'PMM',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : {
      gad1: {
        name : 'Deployable Shield',
        img : '/images/BARBEDWIRE.png',
    },
      gad2: {
        name : 'Barbed Wire',
        img : '/images/DEPLOYABLESHIELD.png',
    },
    },
    ArmorRating : 3,
    SpeedRating : 1,
    Organization : 'SPETSNAZ',
  },
  {
    name : 'Kapkan',
    badge: '/images/kapkanbadge.png',
    img: '/images/kapkan.png',
    bio: "Born and raised in Kovrov, Basuda is the son of factory workers. To escape a life in the factory, he enlisted with the Ministry of Internal Affairs and was sent to a small port town on the Barents Sea. Basuda became an avid hunter and trapper during his time in the Arctic Circle.",
    gadget : {
        name: 'Entry Denial Device',
        uses: 5,
        img: '/images/evileye.png',
        desc: 'This expert in lures and traps carries into battle a trap equipped with a laser trip for windows and doors certain to impede any foe (or friend) caught in its blast.',
    },
    primaries : {
      pri1 : {
        name : 'SASG-12',
        img : '/images/MX4STORM.png',
      },
      pri2 : {
        name : '9x19VSN',
        img : '/images/acs12.png',
      },
      pri3 : {
        name : 'na',
        img : 'na',
      },
    },
    secondaries : {
      sec1 : {
        name : 'GSh-18',
        img : '/images/KERATOS357PISTOL.png',
    },
      sec2 : {
        name : 'PMM',
        img : '/images/BAILIFF410PISTOL.png',
    },
      },
    gadgets : {
      gad1: {
        name : 'Impact Grenades',
        img : '/images/BARBEDWIRE.png',
    },
      gad2: {
        name : 'Nitro Cell',
        img : '/images/nitrocell.png',
    },
    },
    ArmorRating : 2,
    SpeedRating : 2,
    Organization : 'SPETSNAZ',
  },
]

  db.Defop.remove({}, function(err, defops){
    // code in here runs after all posts are removed
    db.Defop.create(defopsList, function(err, defops){
      // code in here runs after all posts are created
      if (err) { return console.log('ERROR', err); }
      console.log("all defops:", defops);
      console.log("created", defops.length, "defops");
      process.exit();
    });
    
  });