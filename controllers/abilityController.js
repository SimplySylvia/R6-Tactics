const db = require(`../models`);

module.exports = {
  index: (req, res) => {
    db.Ability.find().exec((err, ability) => {
      let total = ability.length;
      if (err) {
        return console.log("index error: " + err);
      }
      res.json({
        amount: total,
        data: ability
      });
    });
  },
  create: (req, res) => {
    let newAbility = req.body;
    console.log(req.body);
    db.Ability.create(newAbility, (err, newAbility) => {
      if (err) {
        res.status(500).json({ ERROR: "Database Error" });
      }
      res.json(newAbility);
    });
  },
// This is the show route for abilities
  show: (req, res) => {
    let AbilityId = req.params.id;
    db.Ability.findById(AbilityId, (err, ability) => {
      if (err) {
        res.status(500).json({ ERROR: "Database Error" });
      }
      res.json({ data: ability });
    });
  }
};

