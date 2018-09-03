var db = require("./models");
const mongoose = require('mongoose');

var atkopsList = [
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
    gadgets : [
      { 
        _id: '1',
        ref: 'Gadget'
      },
    ],
    ArmorRating : 2,
    SpeedRating : 2,
    Organization : 'FBI SWAT',
  }]

db.Atkop.remove({},(err, atkops) =>{
    db.Atkop.create(atkopsList, (err, atkops) =>{
      if (err) { return console.log('ERROR', err); }
      console.log("all atkops:", atkops);
      console.log("created", atkops.length, "atkops");
      process.exit();
    });
    
  });