const mongoose = require('mongoose');

module.exports = mongoose.model('Defop', new mongoose.Schema({
  name : String,
  badge: String,
  img: String,
  bio: String,
  ability : { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ability',
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
  gadgets : [
    { 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Gadget',
    },
  ],
  ArmorRating : Number,
  SpeedRating : Number,
  Organization : String,
}));