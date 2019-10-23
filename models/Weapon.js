const mongoose = require('mongoose');

module.exports = mongoose.model('Weapon', new mongoose.Schema({
  name: String,
  img: String,
  assignment: String,
  firemodes: [String],
  type: String,
  sights: [String],
  barrels: [String],
  grips: [String],
  underbarrel: [String],
  _id: String,
})
);