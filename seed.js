const
db = require('./models'),
def = require('./seeddef'),
gad = require('./seedgadgets'),
abil = require('./seedabilities'),
weap = require('./seedweapons'),
map = require('./seedmap')

db.Gadget.remove({}, (err, gadgets) => {
    db.Gadget.create(gad.gadgetList, (err, gadgets) => {
        if (err) {
            return console.log('ERROR', err);
        }
        console.log(`Created ${gadgets.length} Gadgets`);
    });
})

db.Defop.remove({}, (err, defops) => {
    db.Defop.create(def.defopsList, (err, defops) => {
        if (err) {
            return console.log('ERROR', err);
        }
        console.log(`Created ${defops.length} Defops`);
    });
})

db.Ability.remove({},(err, ability) =>{
    db.Ability.create(abil.abilityList, (err, abilities) =>{
      if (err) { return console.log('ERROR', err); }
      console.log(`Created ${abilities.length} Abilities`);
    });
  });

  db.Weapon.remove({},(err, weapon) =>{
    db.Weapon.create(weap.weaponList, (err, weapons) =>{
      if (err) { return console.log('ERROR', err); }
      console.log(`Created ${weapons.length} Weapons`);
    });
  });

  db.Smap.remove({}, (err, smaps) =>{
    db.Smap.create(map.SmapList, (err, smaps) =>{
      if (err) { return console.log('ERROR', err); }
      console.log(`Created ${smaps.length} Maps`);
    });
  });