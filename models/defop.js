const mongoose = require('mongoose');

module.exports = mongoose.model('Defop', new mongoose.Schema({
  name : String,
  badge: String,
  img: String,
  bio: String,
  gadget : {
    name : String,
    uses: Number,
    img: String,
    desc: String,
  },
  primaries : {
    pri1 : {
      name: String,
      img: String,
    },
    pri2 : {
      name: String,
      img: String,
    },
    pri3 : {
      name: String,
      img: String,
    },
    },
  secondaries : {
    sec1 : {
      name: String,
      img: String,
    },
    sec2 : {
      name: String,
      img: String,
    },
    },
  gadgets : {
    gad1: {
      name: String,
      img: String,
    },
    gad2: {
      name: String,
      img: String,
    },
  },
  ArmorRating : Number,
  SpeedRating : Number,
  Organization : String,
}));