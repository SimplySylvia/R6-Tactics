const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogSchema = new Schema({
  requestUrl: String,
  requestMethod: String,
  date: { type: Date, default: Date.now }
});

const Log = mongoose.model('Log', LogSchema);

module.exports = Log;
