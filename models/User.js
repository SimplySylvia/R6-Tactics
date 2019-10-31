const mongoose = require('mongoose');

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
  }
});

userSchema.set('toJSON', {
  transform: function(doc, ret, opt) {
    delete ret['password'];
    return ret;
  }
});

module.exports = mongoose.model('User', userSchema);
