const db = require(`../models`);

module.exports = {
  index(req, res) {
    db.Gadget.find()
    .exec((err, gadget) => {
      total = gadget.length
      if (err) {
        return console.log("index error: " + err); }
        res.json({
          amount: total,
          data:gadget
        });
      });
    },
    create(req, res) {
      var newGadget = req.body
      console.log(req.body);
      db.Gadget.create(newGadget, (err, newGadget) => {
        if(err){
          res.status(500).json({"ERROR":"Database Error"});}
        res.json(newGadget);
      });
    },
    show(req, res){
      let gadgetId = req.params.id;
      db.Gadget.findById(gadgetId, (err, gadget) => {
        if(err){
          res.status(500).json({"ERROR":"Database Error"});}
        res.json({data:gadget});
      });
    },
};