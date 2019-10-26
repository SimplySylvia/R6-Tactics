const db = require(`../models`);

module.exports = {
  index: async (req, res) => {
    try {
      const gadgets = await db.Gadget.find({});
      res.success(200, gadgets);
    } catch (error) {
      res.error(error.message);
    }
  },
  create: async (req, res) => {
    try {
      const newGadget = db.Gadget.create(req.body);
      res.success(201, newGadget);
    } catch (error) {
      res.error(error.message);
    }
  },
  show: (req, res) => {
    try {
      const foundGadget = db.Gadget.findById(req.params.id);
      res.success(200, foundGadget);
    } catch (error) {
      res.error(error.message);
    }
  }
};
