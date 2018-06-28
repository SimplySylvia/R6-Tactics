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
    Organization : 'FBI',
  },
  {
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
    Organization : 'FBI',
  },
  {
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
    Organization : 'FBI',
  }]

  var defopsList = [{
    name : 'Maestro',
    badge: '/images/maestrobadge.png',
    img: '/images/maestro.png',
    gadget : {
        name: 'Evil Eye',
        uses: 2},
    primaries : {
      pri1 : 'Alda 5.56',
      pri2 : 'ACS12',
      pri3 : 'NA',
      },
    secondaries : {
      sec1 : 'Keratos .357 Pistol',
      sec2 : 'Bailiff 410 Pistol',
      },
    gadgets : {
      gad1: 'Barbed Wire',
      gad2: 'Deployable Shield',
    },
    ArmorRating : 3,
    SpeedRating : 1,
    Organization : 'GIS',
  }]

db.Atkop.remove({}, function(err, atkops){
    // code in here runs after all posts are removed
    db.Atkop.create(atkopsList, function(err, atkops){
      // code in here runs after all posts are created
      if (err) { return console.log('ERROR', err); }
      console.log("all atkops:", atkops);
      console.log("created", atkops.length, "atkops");
    });
    
  });

  db.Defop.remove({}, function(err, defops){
    // code in here runs after all posts are removed
    db.Defop.create(defopsList, function(err, defops){
      // code in here runs after all posts are created
      if (err) { return console.log('ERROR', err); }
      console.log("all defops:", defops);
      console.log("created", defops.length, "defops");
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

db.Smap.remove({}, function(err, smaps){
  // code in here runs after all posts are removed
  db.Smap.create(SmapList, function(err, smaps){
    // code in here runs after all posts are created
    if (err) { return console.log('ERROR', err); }
    console.log("all Smaps:", smaps);
    console.log("created", smaps.length, "smaps");
    process.exit();
  });
  
});