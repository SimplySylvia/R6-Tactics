const mongoose = require('mongoose');

module.exports = mongoose.model('Ability', new mongoose.Schema({
  name: String,
  uses: Number,
  img: String,
  desc: String,
  _id: String,
})
);