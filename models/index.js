const mongoose = require('mongoose');
const DB_URL =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/R6-Tactics';

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
  Smap: require('./smap'),
  Gadget: require('./gadget'),
  Ability: require('./ability'),
  Weapon: require('./weapon')
};
