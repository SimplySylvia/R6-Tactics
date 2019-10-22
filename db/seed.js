const db = require('../models'),
  def = require('./seeddef'),
  atk = require('./seedatk'),
  gad = require('./seedgadgets'),
  abil = require('./seedabilities'),
  weap = require('./seedweapons'),
  map = require('./seedmap'),
  colors = require('colors');

const run = async () => {
  try {
    await makeGadgets(),
      await makeAbilities(),
      await makeWeapons(),
      await makeSmaps(),
      await makeDefops(),
      await makeAtkops();
  } catch (error) {
    console.log(error);
  }
};

const makeGadgets = () => {
  return new Promise(resolve => {
    db.Gadget.remove({}, (err, gadgets) => {
      db.Gadget.create(gad.gadgetList, (err, gadgets) => {
        if (err) {
          return console.log('ERROR', err);
        }
        console.log(`Created ${gadgets.length} Gadgets`.yellow);
      });
    });
    resolve();
  });
};

const makeDefops = () => {
  return new Promise(resolve => {
    db.Defop.remove({}, (err, defops) => {
      db.Defop.create(def.defopsList, (err, defops) => {
        if (err) {
          return console.log('ERROR', err);
        }
        console.log(`Created ${defops.length} Defops`.yellow);
      });
    });
    resolve();
  });
};

const makeAbilities = () => {
  return new Promise(resolve => {
    db.Ability.remove({}, (err, ability) => {
      db.Ability.create(abil.abilityList, (err, abilities) => {
        if (err) {
          return console.log('ERROR', err);
        }
        console.log(`Created ${abilities.length} Abilities`.yellow);
      });
    });
    resolve();
  });
};

const makeWeapons = () => {
  return new Promise(resolve => {
    db.Weapon.remove({}, (err, weapon) => {
      db.Weapon.create(weap.weaponList, (err, weapons) => {
        if (err) {
          return console.log('ERROR', err);
        }
        console.log(`Created ${weapons.length} Weapons`.yellow);
      });
    });
    resolve();
  });
};

const makeSmaps = () => {
  return new Promise(resolve => {
    db.Smap.remove({}, (err, smaps) => {
      db.Smap.create(map.SmapList, (err, smaps) => {
        if (err) {
          return console.log('ERROR', err);
        }
        console.log(`Created ${smaps.length} Maps`.yellow);
      });
    });
    resolve();
  });
};

const makeAtkops = () => {
  return new Promise(resolve => {
    db.Atkop.remove({}, (err, atkops) => {
      db.Atkop.create(atk.atkopsList, (err, atkops) => {
        if (err) {
          return console.log('ERROR', err);
        }
        console.log(`Created ${atkops.length} Atkops`.yellow);
      });
    });
    resolve();
  });
};

run().then(
  (log = async () => {
    try {
      return new Promise(resolve => {
        console.log(colors.bgGreen('All Made!'));
        resolve();
      });
    } catch (error) {
      console.log(error);
    }
  })
);
