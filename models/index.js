const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI );

module.exports.atkop = require('./atkop');
module.exports.defop = require('./defop');