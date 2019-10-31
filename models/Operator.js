const mongoose = require('mongoose');

module.exports = mongoose.model(
  'Operator',
  new mongoose.Schema({
    name: String,
    badge: String,
    image: String,
    bio: String,
    ability: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ability'
    },
    primaries: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Weapon'
      }
    ],
    secondaries: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Weapon'
      }
    ],
    gadgets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Gadget'
      }
    ],
    armor_rating: Number,
    speed_rating: Number,
    organization: String,
    type: String
  })
);
