const db = require(`../models`);

// GET /api/atkop
function index(req, res) {
  db.Atkop.find()
  .exec(function(err, atkop) {
    if (err) {
      return console.log("index error: " + err); }
      //show ops as json
      res.json(atkop);
    });
  };

// POST /api/atkop
function create(req, res) {
  // create an operator based on request body and send it back as JSON
  var newAtkop = req.body
  console.log(req.body);
  db.Atkop.create(newAtkop, function(err, newAtkop){
    if(err){res.status(500).json({"ERROR":"Database Error"});}
    res.json(newAtkop);
  });
}
//Show 
function show(req, res){
  let atkopId = req.params.id;
  db.Atkop.findById(atkopId, (err, atkop) => {
    if(err){res.status(500).json({"ERROR":"Database Error"});}
    res.json(atkop);
  });
}


// controllers/atkopController.js
module.exports = {
  index: index,
  create: create,
  show: show,
};