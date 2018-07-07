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
        name : 'Alda 5.56',
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

// db.Atkop.remove({}, function(err, atkops){
//     // code in here runs after all posts are removed
//     db.Atkop.create(atkopsList, function(err, atkops){
//       // code in here runs after all posts are created
//       if (err) { return console.log('ERROR', err); }
//       console.log("all atkops:", atkops);
//       console.log("created", atkops.length, "atkops");
//     });
    
//   });

  db.Defop.remove({}, function(err, defops){
    // code in here runs after all posts are removed
    db.Defop.create(defopsList, function(err, defops){
      // code in here runs after all posts are created
      if (err) { return console.log('ERROR', err); }
      console.log("all defops:", defops);
      console.log("created", defops.length, "defops");
      process.exit();evil
    });
    
  });

  var SmapList = [
    {
    name : 'House',
    coverimg: 'placeholder',
    floors : [
      {
        name: 'Basement',
        img: 'placeholder',
      },
      {
        name: '1st',
        img: 'placeholder',
      },
      {
        name: '2nd',
        img: 'placeholder',
      },
      {
        name: 'Roof',
        img: 'placeholder',
      },
      {
        name: 'NA',
        img: 'placeholder',
      },
    ],
    atkspawns : {
      atkspawn1 : 'APC Area',
      atkspawn2 : 'Construction Site',
      atkspawn3 : 'Side Street',
      atkspawn4 : 'River Docks',
      },
    securearea : {
      area1 : 'Garage',
      area2 : 'Living Room',
      area3 : 'Kids Bedroom',
      area4 : 'Master Bedroom',
      },
    bombsites : [
      {
      assignment : 1,
      a : 'Workshop',
      b : 'Kids Bedroom',
      },
      {
      assignment : 2,
      a : 'Training Room',
      b : 'Living Room',
      },
      {
      assignment : 3,
      a : 'Training Room',
      b : 'Garage',
      },
    ],
    hostage : {
      area1 : 'Laundry Room',
      area2 : 'Dining Room',
      area3 : 'Workshop',
      area4 : 'Master Bedroom',
    },
  }
];

// db.Smap.remove({}, function(err, smaps){
//   // code in here runs after all posts are removed
//   db.Smap.create(SmapList, function(err, smaps){
//     // code in here runs after all posts are created
//     if (err) { return console.log('ERROR', err); }
//     console.log("all Smaps:", smaps);
//     console.log("created", smaps.length, "smaps");
//     process.exit();
//   });
  
// });