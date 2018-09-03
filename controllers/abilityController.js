const db = require(`../models`);

module.exports = {
  index(req, res) {
    db.Ability.find()
    .exec((err, ability) => {
      if (err) {
        return console.log("index error: " + err); }
        res.json({data:ability});
      });
    },
    create(req, res) {
      var newAbility = req.body
      console.log(req.body);
      db.Ability.create(newAbility, (err, newAbility) => {
        if(err){
          res.status(500).json({"ERROR":"Database Error"});}
        res.json(newAbility);
      });
    },
    show(req, res){
      let AbilityId = req.params.id;
      db.Ability.findById(AbilityId, (err, ability) => {
        if(err){
          res.status(500).json({"ERROR":"Database Error"});}
        res.json({data:ability});
      });
    },
};