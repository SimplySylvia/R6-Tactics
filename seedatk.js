const mongoose = require('mongoose');

module.exports = {
  atkopsList: [
    {
      name: 'Sledge',
      badge: '/images/sledgebadge.png',
      img: '/images/sledge.png',
      bio: 'Seamus Cowden hails from the upper tip of the Scottish Highlands. Due to his imposing physical stature and athleticism, he found early success as the Captain of the 1998 Scotland National under-20 Rugby Union Team. A strong desire for public service inspired Cowden to enlist in the army at 18, after five years of active duty, he was recruited by the SAS.',
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
      bio: 'Trace joined the Marines after high school, serving two tours in Iraq. After his discharge, he used his GI Bill money to put himself through college at Texas A&M and earned a Bachelor Degree of Science in Chemistry. He then joined the FBI. After four years as a field agent, he transferred to FBI SWAT.',
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
    {
      name: 'Thatcher',
      badge: '/images/thatcherbadge.png',
      img: '/images/thatcher.png',
      bio: 'Born into a family of stevedores, Baker enlisted for active military duty on his eighteenth birthday. A veteran of three wars, Baker was the oldest SAS operative on active duty until he was recruited by Rainbow.',
      ability: {
        _id: "EMPGRENADE00",
        ref: "Ability"
      },
      primaries: [
        {
        _id: "L85A2assultr",
        ref: "Weapon"
      },
      {
        _id: "M590A1000000",
        ref: "Weapon"
      },
      {
        _id: "AR3300000000",
        ref: "Weapon"
      },
     ],
      secondaries: [{
          _id: "p226mk250000",
          ref: "Weapon"
        },
      ],
      gadgets: [
        {
          _id: "breachcharge",
          ref: "Gadget"
        },
        {
          _id: "claymores000",
          ref: "Gadget"
        },
      ],
      ArmorRating: 2,
      SpeedRating: 2,
      Organization: 'SAS',
    },
  ]
}