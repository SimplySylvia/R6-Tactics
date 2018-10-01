// const seedG = require('./seedgadgets')
const db = require("./models");
const def = require('./seeddef');
const gad = require('./seedgadgets');

db.Gadget.remove({}, (err, gadgets) => {
    db.Gadget.create(gad.gadgetList, (err, gadgets) => {
        if (err) {
            return console.log('ERROR', err);
        }
        console.log(`Created ${gadgets.length} Gadgets`);
    });
})

db.Defop.remove({}, (err, defops) => {
    db.Defop.create(def.defopsList, (err, defops) => {
        if (err) {
            return console.log('ERROR', err);
        }
        console.log(`Created ${defops.length} Defops`);
    });
})