const db = require(`../models`);

module.exports = {
  index(req, res) {
    db.Smap.find()
    .exec((err, smap) => {
      if (err) {
        return console.log("index error: " + err); }
        res.json(smap);
      });
    },
    create(req, res) {
      var newSmap = req.body
      console.log(req.body);
      db.Smap.create(newDefop, (err, newSmap) => {
        if(err){res.status(500).json({"ERROR":"Database Error"});}
        res.json(newSmap);
      });
    },
    show(req, res){
      let smapId = req.params.id;
      db.Smap.findById(smapId, (err, smap) => {
        if(err){res.status(500).json({"ERROR":"Database Error"});}
        res.json(smap);
      });
    },
};