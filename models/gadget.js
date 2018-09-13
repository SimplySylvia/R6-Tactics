const mongoose = require('mongoose');

module.exports = mongoose.model('Gadget', new mongoose.Schema({
  name : String,
  description: String,
  assignment: String,
  uses: Number,
  _id: String,
})
);