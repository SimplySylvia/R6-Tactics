const db = require(`../models`);

module.exports = {
  index(req, res) {
    db.Defop.find()
    .exec((err, defop) => {
      if (err) {
        return console.log("index error: " + err); }
        res.json({data:defop});
      });
    },
    create(req, res) {
      var newDefop = req.body
      console.log(req.body);
      db.Defop.create(newDefop, (err, newDefop) => {
        if(err){
          res.status(500).json({"ERROR":"Database Error"});}
        res.json(newDefop);
      });
    },
    show(req, res){
      let defopId = req.params.id;
      db.Defop.findById(defopId, (err, defop) => {
        if(err){
          res.status(500).json({"ERROR":"Database Error"});}
        res.json({data:defop});
      });
    },
};