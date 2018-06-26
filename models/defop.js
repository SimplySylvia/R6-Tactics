const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//models/album.js
var DefopSchema = new Schema({
  name : String,
  badge: String,
  img: String,
  gadget : {
    name : String,
    uses: Number,
  },
  primaries : {
    pri1 : String,
    pri2 : String,
    pri3 : String,
    },
  secondaries : {
    sec1 : String,
    sec2 : String,
    },
  gadgets : {
    gad1: String,
    gad2: String,
  },
  ArmorRating : Number,
  SpeedRating : Number,
  Organization : String,
});

var Defop = mongoose.model('Defop', DefopSchema);

module.exports = Defop;