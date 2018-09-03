const mongoose = require('mongoose');


module.exports =  mongoose.model('Atkop', new mongoose.Schema({
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
  gadgets : [
    { 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Gadget',
    }
  ],
  ArmorRating : Number,
  SpeedRating : Number,
  Organization : String,
}));