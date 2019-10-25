const mongoose = require('mongoose');
require('dotenv').config();
const DB_URL = process.env.MONGODB_URI;

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

module.exports = {
  Operator: require('./Operator'),
  Location: require('./Location'),
  Gadget: require('./Gadget'),
  Ability: require('./Ability'),
  Weapon: require('./Weapon')
};
