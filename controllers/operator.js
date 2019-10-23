const db = require(`../models`);

module.exports = {
  index: async (req, res) => {
    try {
      const allOperators = await db.Operator.find({}).populate(
        'gadgets abilty primaries secondaries'
      );
      res.success(200, allOperators);
    } catch (error) {
      res.error(error.message);
    }
  },
  show: async (req, res) => {
    try {
      const foundOp = await db.Operator.findById(req.params.id).populate(
        'gadgets abilty primaries secondaries'
      );
      res.success(200, foundOp);
    } catch (error) {
      res.error(error.message);
    }
  },
  create: async (req, res) => {
    try {
      const newOp = await db.Operator.create(req.body);
      res.success(201, newOp);
    } catch (error) {
      res.error(error.message);
    }
  },
  filterAttack: async (req, res) => {
    try {
      const allMatchOperators = await db.Operator.find({
        type: 'Attack'
      }).populate('gadgets abilty primaries secondaries');
      res.success(200, allMatchOperators);
    } catch (error) {
      res.error(error.message);
    }
  },
  filterDefense: async (req, res) => {
    try {
      const allMatchOperators = await db.Operator.find({
        type: 'Defense'
      }).populate('gadgets abilty primaries secondaries');
      res.success(200, allMatchOperators);
    } catch (error) {
      res.error(error.message);
    }
  }
};
