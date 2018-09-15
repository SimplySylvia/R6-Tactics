var db = require("./models");
const mongoose = require('mongoose');

var atkopsList = [
  {
    name : 'Thermite',
    badge: '/images/thermitebadge.png',
    img: '/images/thermite.png',
    ability : { 
      _id: "exothermicch",
      ref: "Ability"
      },
    primaries : [
      { 
        _id: "L85A2assultr",
        ref: "Weapon"
      },
    ],
    secondaries : [
      { 
        _id: "L85A2assultr",
        ref: "Weapon"
      },
    ],
    gadgets : [
      { 
        _id: "breachcharge",
        ref: "Gadget"
      },
    ],
    ArmorRating : 2,
    SpeedRating : 2,
    Organization : 'FBI SWAT',
  }]

db.Atkop.remove({},(err, atkops) =>{
    db.Atkop.create(atkopsList, (err, atkops) =>{
      if (err) { return console.log('ERROR', err); }
      console.log("created", atkops.length, "atkops");
      process.exit();
    });
    
  });