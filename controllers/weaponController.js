const db = require(`../models`);

module.exports = {
  index(req, res) {
    db.Weapon.find()
    .exec((err, weapon) => {
      let total = weapon.length
      if (err) {
        return console.log("index error: " + err); }
        res.json({
          amount: total,
          data:weapon,
        });
      });
    },
    create(req, res) {
      var newWeapon = req.body
      console.log(req.body);
      db.Weapon.create(newWeapon, (err, newWeapon) => {
        if(err){
          res.status(500).json({"ERROR":"Database Error"});}
        res.json(newWeapon);
      });
    },
    show(req, res){
      let weaponId = req.params.id;
      db.Weapon.findById(weaponId, (err, weapon) => {
        if(err){
          res.status(500).json({"ERROR":"Database Error"});}
        res.json({data:weapon});
      });
    },
};