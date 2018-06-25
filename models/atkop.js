const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//models/album.js
var AtkopSchema = new Schema({
  name : String,
  gadget : String,
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

var Atkop = mongoose.model('Atkop', AtkopSchema);

module.exports = Atkop;