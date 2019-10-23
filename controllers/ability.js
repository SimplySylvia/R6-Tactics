const db = require(`../models`);

module.exports = {
  index: async (req, res) => {
    try {
      const allAbilities = await db.Ability.find({});
      res.success(200, allAbilities);
    } catch (error) {
      res.error(error.message);
    }
  },
  show: async (req, res) => {
    try {
      const foundAbility = await db.Ability.findById(req.params.id);
      res.success(200, foundAbility);
    } catch (error) {
      res.error(error.message);
    }
  },
  create: async (req, res) => {
    try {
      const newAbility = await db.Ability.create(req.body);
      res.success(201, newAbility);
    } catch (error) {
      res.error(error.message);
    }
  }
};
