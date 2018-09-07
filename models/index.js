const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/R6-Tactics');


module.exports = {
    Atkop : require('./atkop'),
    Defop : require('./defop'),
    Smap : require('./smap'),
    Gadget : require('./gadget'),
    Ability : require('./ability'),
    Weapon : require('./weapon'),
}