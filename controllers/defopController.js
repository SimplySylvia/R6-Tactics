const db = require(`../models`);

module.exports = {
  index: (req, res) => {
    db.Defop.find()
      .populate("gadgets")
      .populate("ability")
      .populate("primaries")
      .populate("secondaries")
      .exec((err, defop) => {
        let total = defop.length;
        if (err) {
          return console.log("index error: " + err);
        }
        res.json({
          amount: total,
          data: defop
        });
      });
  },
  create: (req, res) => {
    let newDefop = req.body;
    console.log(req.body);
    db.Defop.create(newDefop, (err, newDefop) => {
      if (err) {
        res.status(500).json({ ERROR: "Database Error" });
      }
      res.json(newDefop);
    });
  },
  show: (req, res) => {
    let defopId = req.params.id;
    db.Defop.findById(defopId)
      .populate("gadgets")
      .populate("ability")
      .populate("primaries")
      .populate("secondaries")
      .exec((err, defop) => {
        if (err) {
          res.status(500).json({ ERROR: "Database Error" });
        }
        res.json({ data: defop });
      });
  }
};
