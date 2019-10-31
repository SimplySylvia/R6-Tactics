const mongoose = require('mongoose');

module.exports = mongoose.model(
  'Ability',
  new mongoose.Schema({
    name: String,
    uses: Number,
    image: String,
    desc: String,
    _id: String
  })
);
