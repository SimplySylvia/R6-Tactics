var db = require("./models");

var weaponList = [
  {
    name: 'L85A2',
    img: '/na',
    assignment: 'primary',
    firemodes: ['automatic','semi-automatic'],
    type: 'Assult Rifle',
    sights: ['Red Dot Sight','Holographic Sight','Reflex Sight','ACOG Sight'],
    barrels: ['Suppressor','Flash Hider','Compensator','Muzzle Brake'],
    grips: ['Vertical Grip'],
    underbarrel: ['Lazer'],
  }

]

db.Weapon.remove({},(err, weapon) =>{
    db.Weapon.create(weaponList, (err, weapons) =>{
      if (err) { return console.log('ERROR', err); }
      console.log("all weapons:", weapons);
      console.log("created", weapons.length);
      process.exit();
    });
  });