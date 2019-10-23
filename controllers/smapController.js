const db = require(`../models`);

module.exports = {
  index: (req, res) => {
    db.Location.find().exec((err, smap) => {
      total = smap.length;
      if (err) {
        return console.log('index error: ' + err);
      }
      res.json({
        amount: total,
        data: smap
      });
    });
  },
  create: (req, res) => {
    db.Location.create(req.body, (err, newSmap) => {
      if (err) {
        res.status(500).json({ ERROR: 'Database Error' });
      }
      res.json(newSmap);
    });
  },
  show: (req, res) => {
    db.Location.findById(req.params.id, (err, smap) => {
      if (err) {
        res.status(500).json({ ERROR: 'Database Error' });
      }
      res.json({ data: smap });
    });
  }
};
