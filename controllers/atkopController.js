const db = require(`../models`);

module.exports = {
  index: async (req, res) => {
    try {
      const allOperators = await db.Atkop.find({}).populate(
        'gadgets abilty primaries secondaries'
      );
      res.success(200, allOperators);
    } catch (error) {
      res.error(error.message);
    }
  },
  show: async (req, res) => {
    try {
      const foundOp = await db.Atkop.findById(req.params.id).populate(
        'gadgets abilty primaries secondaries'
      );
      res.success(200, foundOp);
    } catch (error) {
      console.log(error);
      res.error(error.message);
    }
  },
  create: async (req, res) => {
    try {
      const newOp = await db.Atkop.create(req.body);
      res.success(201, newOp);
    } catch (error) {
      res.error(error.message);
    }
  }
};
