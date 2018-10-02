const mongoose = require('mongoose');

module.exports = {
  atkopsList: [
    {
      name: 'Sledge',
      badge: '/images/sledgebadge.png',
      img: '/images/sledge.png',
      ability: {
        _id: "THECABER0000",
        ref: "Ability"
      },
      primaries: [{
        _id: "M590A1000000",
        ref: "Weapon"
      }, ],
      secondaries: [{
          _id: "p226mk250000",
          ref: "Weapon"
        },
        {
          _id: "SMG110000000",
          ref: "Weapon"
        },
      ],
      gadgets: [{
          _id: "fraggrenades",
          ref: "Gadget"
        },
        {
          _id: "stungrenades",
          ref: "Gadget"
        },
      ],
      ArmorRating: 2,
      SpeedRating: 2,
      Organization: 'SAS',
    },
    {
      name: 'Thermite',
      badge: '/images/thermitebadge.png',
      img: '/images/thermite.png',
      ability: {
        _id: "exothermicch",
        ref: "Ability"
      },
      primaries: [{
        _id: "L85A2assultr",
        ref: "Weapon"
      }, ],
      secondaries: [{
        _id: "L85A2assultr",
        ref: "Weapon"
      }, ],
      gadgets: [{
        _id: "breachcharge",
        ref: "Gadget"
      }, ],
      ArmorRating: 2,
      SpeedRating: 2,
      Organization: 'FBI SWAT',
    },
  ]
}