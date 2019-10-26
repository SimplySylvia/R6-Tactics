const db = require(`../models`);

module.exports = {
  index: async (req, res) => {
    try {
      const locations = await db.Location.find({});
      res.success(200, locations);
    } catch (error) {
      res.error(error.message);
    }
  },
  create: async (req, res) => {
    try {
      const newLocation = db.Location.create(req.body);
      res.success(201, newLocation);
    } catch (error) {
      res.error(error.message);
    }
  },
  show: (req, res) => {
    try {
      const foundLocation = db.Locaton.findById(req.params.id);
      res.success(200, foundLocation);
    } catch (error) {
      res.error(error.message);
    }
  }
};
