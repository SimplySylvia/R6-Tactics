const db = require(`../models`);

// GET /api/smaps
function index(req, res) {
  db.Smap.find()
  .exec(function(err, smap) {
    if (err) {
      return console.log("index error: " + err); }
      //show ops as json
      res.json(smap);
    });
  };

// POST /api/smaps
function create(req, res) {
  // create a map based on request body and send it back as JSON
  var newSmap = req.body
  console.log(req.body);
  db.Smap.create(newDefop, function(err, newDefop){
    if(err){res.status(500).json({"ERROR":"Database Error"});}
    res.json(newSmap);
  });
}

// controllers/atkopController.js
module.exports = {
  index: index,
  create: create,
};