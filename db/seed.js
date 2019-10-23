const db = require('../models'),
  def = require('./defOperators'),
  atk = require('./atkOperators'),
  gad = require('./gadgets'),
  abil = require('./abilities'),
  weap = require('./weapons'),
  map = require('./locations'),
  colors = require('colors');

const run = async () => {
  try {
    // gadgets seed
    const removedGadgets = await db.Gadget.remove({});
    console.log(`removed ${removedGadgets.deletedCount} gadgets`.red);
    const createdGadgets = await db.Gadget.create(gad);
    console.log(`Created ${createdGadgets.length} gadgets`.green);
    // ability seed
    const removedAbilities = await db.Ability.remove({});
    console.log(`removed ${removedAbilities.deletedCount} abilities`.red);
    const createdAbilities = await db.Ability.create(abil);
    console.log(`Created ${createdAbilities.length} abilities`.green);
    // weapon seed
    const removedWeapons = await db.Weapon.remove({});
    console.log(`removed ${removedWeapons.deletedCount} weapons`.red);
    const createdWeapons = await db.Weapon.create(weap);
    console.log(`Created ${createdWeapons.length} weapons`.green);
    // map seed
    const removedLocations = await db.Location.remove({});
    console.log(`removed ${removedLocations.deletedCount} maps`.red);
    const createdLocations = await db.Location.create(map);
    console.log(`Created ${createdLocations.length} maps`.green);
    // operator seed
    const removedOps = await db.Operator.remove({});
    console.log(`removed ${removedOps.deletedCount} ops`.red);
    const createdDefenseOps = await db.Operator.create(def);
    console.log(`Created ${createdDefenseOps.length} defense operators`.green);
    const createdAttackOps = await db.Operator.create(atk);
    console.log(`Created ${createdAttackOps.length} attack operators`.green);
  } catch (error) {
    console.log(error);
  }
};

run().then(() => {
  try {
    console.log(colors.bgGreen('All Made!'));
    process.exit();
  } catch (error) {
    console.log(error);
  }
});
