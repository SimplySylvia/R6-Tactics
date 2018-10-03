const
db = require('./models'),
def = require('./seed-files/seeddef'),
atk = require('./seed-files/seedatk'),
gad = require('./seed-files/seedgadgets'),
abil = require('./seed-files/seedabilities'),
weap = require('./seed-files/seedweapons'),
map = require('./seed-files/seedmap'),
colors = require('colors')

db.Gadget.remove({}, (err, gadgets) => {
    db.Gadget.create(gad.gadgetList, (err, gadgets) => {
        if (err) {
            return console.log('ERROR', err);
        }
        console.log(`Created ${gadgets.length} Gadgets`.yellow);
    });
})

db.Defop.remove({}, (err, defops) => {
    db.Defop.create(def.defopsList, (err, defops) => {
        if (err) {
            return console.log('ERROR', err);
        }
        console.log(`Created ${defops.length} Defops`.yellow);
    });
})

db.Ability.remove({},(err, ability) =>{
    db.Ability.create(abil.abilityList, (err, abilities) =>{
      if (err) { return console.log('ERROR', err); }
      console.log(`Created ${abilities.length} Abilities`.yellow);
    });
  });

  db.Weapon.remove({},(err, weapon) =>{
    db.Weapon.create(weap.weaponList, (err, weapons) =>{
      if (err) { return console.log('ERROR', err); }
      console.log(`Created ${weapons.length} Weapons`.yellow);
    });
  });

  db.Smap.remove({}, (err, smaps) =>{
    db.Smap.create(map.SmapList, (err, smaps) =>{
      if (err) { return console.log('ERROR', err); }
      console.log(`Created ${smaps.length} Maps`.yellow);
    });
  });

  db.Atkop.remove({},(err, atkops) =>{
    db.Atkop.create(atk.atkopsList, (err, atkops) =>{
      if (err) { return console.log('ERROR', err); }
      console.log(`Created ${atkops.length} Atkops`.yellow);
    });
  });