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
      primaries: [
        {
        _id: "556XI0000000",
        ref: "Weapon"
      },
      {
        _id: "M10140000000",
        ref: "Weapon"
      }, 
    ],
      secondaries: [{
        _id: "57usg0000000",
        ref: "Weapon"
      },
      {
        _id: "M45MEUSOC000",
        ref: "Weapon"
      }, ],
      gadgets: [
        {
        _id: "claymores000",
        ref: "Gadget"
      },
      {
        _id: "stungrenades",
        ref: "Gadget"
      }, 
    ],
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
    {
      name: 'Ash',
      badge: '/images/ashbadge.png',
      img: '/images/ash.png',
      bio: 'Born and raised in Jerusalem, Israel, Cohen enrolled at Tel Aviv University after secondary school in the Engineering program. It was during this time she did a semester abroad at Boston University. After college, she enlisted in the Israeli Defense Forces. Her engineering background made her a great candidate for mechanical maintenance and demolitions. She was later transferred to FBI SWAT due to an international law enforcement exchange program. Cohen brought her knowledge of demolitions with her in producing a weapon-mounted breach charge capable of blowing open a door or wall from a distance.',
      ability: {
        _id: "BREACHINGROU",
        ref: "Ability"
      },
      primaries: [
        {
        _id: "G36C00000000",
        ref: "Weapon"
      },
      {
        _id: "R4C000000000",
        ref: "Weapon"
      },
     ],
      secondaries: [
        {
        _id: "M45MEUSOC000",
        ref: "Weapon"
      },
      {
        _id: "57usg0000000",
        ref: "Weapon"
      },
     ],
      gadgets: [
        {
        _id: "breachcharge",
        ref: "Gadget"
      },
      {
        _id: "stungrenades",
        ref: "Gadget"
      },
     ],
      ArmorRating: 1,
      SpeedRating: 3,
      Organization: 'FBI SWAT',
    },
    {
      name: 'Twitch',
      badge: '/images/twitchbadge.png',
      img: '/images/twitch.png',
      bio: "Born in the historic town of Nancy, Pichon grew up in a family that valued education, particularly math and science. Early participation in sponsored computer programming competitions led to her joining the army cadets at sixteen. Pichon demonstrates an affinity for complex robotic systems and mechanical academia, due to an early exposure to analytical problem-solving. This ability transcends academia. Unlike many engineers who have the propensity to be emotionally disconnected or apathetic, Pichon is strongly intuitive and empathetic. She believes that technology's best use is to improve the quality of life. This principle motivates Pichon in her military service.",
      ability: {
        _id: "SHOCKDRONE00",
        ref: "Ability"
      },
      primaries: [
        {
        _id: "F20000000000",
        ref: "Weapon"
      },
      {
        _id: "417000000000",
        ref: "Weapon"
      },
      {
        _id: "SGCQB0000000",
        ref: "Weapon"
      },
     ],
      secondaries: [
        {
        _id: "P90000000000",
        ref: "Weapon"
      },
      {
        _id: "LFP586000000",
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
      Organization: 'GIGN',
    },
  ]
}