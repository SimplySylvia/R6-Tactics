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
      process.exit();
    });
    
  });