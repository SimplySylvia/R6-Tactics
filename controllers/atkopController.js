const db = require(`../models`);

module.exports = {
  index(req, res) {
    db.Atkop.find()
    .populate('gadgets')
    .populate('ability')
    .populate('primaries')
    .populate('secondaries')
    .exec((err, atkop) => {
      if (err) {
        return console.log("index error: " + err); }
        res.json(atkop);
      });
    },
  create(req, res) {
    var newAtkop = req.body
    console.log(req.body);
    db.Atkop.create(newAtkop, (err, newAtkop) => {
      if(err){
        res.status(500).json({"ERROR":"Database Error"});}
      res.json(newAtkop);
    });
  },
  show(req, res){
    let atkopId = req.params.id;
    db.Atkop.findById(atkopId, (err, atkop) => {
      if(err){
        res.status(500).json({"ERROR":"Database Error"});}
      res.json(atkop);
    });
  },
};