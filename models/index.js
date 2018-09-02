const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/R6-Tactics');

module.exports.Atkop = require('./atkop');
module.exports.Defop = require('./defop');
module.exports.Smap = require('./smap');
module.exports.Gadget = require('./gadget');