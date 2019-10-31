const mongoose = require('mongoose');

module.exports = mongoose.model(
  'Operator',
  new mongoose.Schema({
    name: { type: String, required: true },
    badge: { type: String },
    image: { type: String },
    bio: { type: String },
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
    armor_rating: { type: Number, min: 1, max: 3 },
    speed_rating: { type: Number, min: 1, max: 3 },
    organization: { type: String },
    type: { type: String, lowercase: true, enum: ['defense', 'attack'] }
  })
);
