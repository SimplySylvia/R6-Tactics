const db = require(`../models`);

// GET /api/atkop
function index(req, res) {
  db.Defop.find()
  .exec(function(err, defop) {
    if (err) {
      return console.log("index error: " + err); }
      //show ops as json
      res.json(defop);
    });
  };

// POST /api/atkop
function create(req, res) {
  // create an operator based on request body and send it back as JSON
  var newDefop = req.body
  console.log(req.body);
  db.Defop.create(newDefop, function(err, newDefop){
    if(err){res.status(500).json({"ERROR":"Database Error"});}
    res.json(newDefop);
  });
}
//Show 
function show(req, res){
  let defopId = req.params.id;
  db.Defop.findById(defopId, (err, defop) => {
    if(err){res.status(500).json({"ERROR":"Database Error"});}
    res.json(defop);
  });
}
// controllers/atkopController.js
module.exports = {
  index: index,
  create: create,
  show: show,
};