const mongoose = require('mongoose');


module.exports =  mongoose.model('Atkop', new mongoose.Schema({
  name : String,
  badge: String,
  img: String,
  bio: String,
  ability : { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ability',
  },
  primaries : [
    { 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Weapon',
    }
  ],
  secondaries : [
    { 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Weapon',
    }
  ],
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