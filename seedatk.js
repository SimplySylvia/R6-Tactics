var db = require("./models");

var atkopsList = [{
    name : 'Ash',
    badge: '/images/ashbadge.png',
    img: '/images/ash.png',
    gadget : {
        name: 'Breaching Rounds',
        uses: 3},
    primaries : {
      pri1 : 'R4-C',
      pri2 : 'G36C',
      pri3 : 'NA',
      },
    secondaries : {
      sec1 : 'M45 MEUSOC',
      sec2 : '5.7 USG',
      },
    gadgets : {
      gad1: 'Breach Charge',
      gad2: 'Stun Grenade',
    },
    ArmorRating : 1,
    SpeedRating : 3,
    Organization : 'FBI SWAT',
  },
  {
    name : 'Thatcher',
    badge: '/images/thatcherbadge.png',
    img: '/images/thatcher.png',
    gadget : {
        name: 'EMP Grenade',
        uses: 3},
    primaries : {
      pri1 : 'M590A1',
      pri2 : 'L85A2',
      pri3 : 'AR33',
      },
    secondaries : {
      sec1 : 'P226 Mk 25',
      sec2 : 'NA',
      },
    gadgets : {
      gad1: 'Claymore',
      gad2: 'Breach Charge',
    },
    ArmorRating : 2,
    SpeedRating : 2,
    Organization : 'SAS',
  },
  {
    name : 'Thermite',
    badge: '/images/thermitebadge.png',
    img: '/images/thermite.png',
    gadget : {
        name: 'Exothermic Charge',
        uses: 2},
    primaries : {
      pri1 : '556xi',
      pri2 : 'M1014',
      pri3 : 'NA',
      },
    secondaries : {
      sec1 : 'M45 MEUSOC',
      sec2 : '5.7 USG',
      },
    gadgets : {
      gad1: 'Claymore',
      gad2: 'Stun Grenade',
    },
    ArmorRating : 2,
    SpeedRating : 2,
    Organization : 'FBI SWAT',
  }]

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
        img : '/images/DEPLOYABLESHIELD.png',
    },
    },
    ArmorRating : 3,
    SpeedRating : 1,
    Organization : 'G.I.S',
  }]

db.Atkop.remove({},(err, atkops) =>{
    // code in here runs after all posts are removed
    db.Atkop.create(atkopsList, (err, atkops) =>{
      // code in here runs after all posts are created
      if (err) { return console.log('ERROR', err); }
      console.log("all atkops:", atkops);
      console.log("created", atkops.length, "atkops");
      process.exit();
    });
    
  });