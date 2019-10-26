const db = require(`../models`);

module.exports = {
  index: async (req, res) => {
    try {
      const weapons = await db.Weapon.find({});
      res.success(200, weapons);
    } catch (error) {
      res.error(error.message);
    }
  },
  create: async (req, res) => {
    try {
      const newWeapon = db.Weapon.create(req.body);
      res.success(201, newWeapon);
    } catch (error) {
      res.error(error.message);
    }
  },
  show: (req, res) => {
    try {
      const foundWeapon = db.Weapon.findById(req.params.id);
      res.success(200, foundWeapon);
    } catch (error) {
      res.error(error.message);
    }
  }
};
