var db = require("./models");
const mongoose = require('mongoose');

var abilityList = [
  {
    name: 'Evil Eye',
    uses: 2,
    img: '/images/evileye.png',
    desc: 'Maestro uses a remote-controlled turret firing high-energy laser beams. Once affixed to the floor or wall, Maestro can remote-surveil and provide overwatch in a location through the swivel-mounted camera. When the camera device breaks open to fire a laser beam the core is exposed to damage. Otherwise, the turret is unaffected by bullets and melee. Lastly, Evil Eye can see through smoke.',
    _id: mongoose.Types.ObjectId('evileye00000'),
  },
  {
    name: 'Exothermic Charge',
    uses: 2,
    img: '/images/na',
    desc: 'Thermite is cabable of creating large breaching points through reinforcments. His Exothermic charge will easily cut through defenses and let your team enter the objective.',
    _id: mongoose.Types.ObjectId('exothermicch'),
  },

]

db.Ability.remove({},(err, ability) =>{
    db.Ability.create(abilityList, (err, abilities) =>{
      if (err) { return console.log('ERROR', err); }
      console.log("created", abilities.length);
      process.exit();
    });
  });