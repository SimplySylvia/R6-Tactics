const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/R6-Tactics');

module.exports.Atkop = require('./atkop');
module.exports.Defop = require('./defop');
module.exports.Smap = require('./smap');