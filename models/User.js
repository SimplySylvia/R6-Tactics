const mongoose = require('mongoose');
const Log = require('./Log');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  password: {
    type: String,
    required: true
  },
  signup_date: {
    type: Date,
    default: Date.now
  },
  api_key: {
    type: String,
    unique: true
  },
  logs: [Log.schema],
  archive_keys: [{ type: String }]
});

userSchema.set('toJSON', {
  transform: function(doc, ret, opt) {
    delete ret['password'];
    delete ret['__v'];
    return ret;
  }
});

module.exports = mongoose.model('User', userSchema);
