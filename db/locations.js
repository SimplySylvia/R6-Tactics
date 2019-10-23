module.exports = [
  {
    name: 'House',
    coverimg: '/files/maps/house/house.jpg',
    floors: [
      {
        name: 'Basement',
        img: '/files/maps/house/housebasement/'
      },
      {
        name: '1st',
        img: '/files/maps/house/housefirstfloor/'
      },
      {
        name: '2nd',
        img: '/files/maps/house/housesecondfloor/'
      },
      {
        name: 'Roof',
        img: '/files/maps/house/houseroof/'
      },
      {
        name: 'NA',
        img: 'placeholder'
      }
    ],
    atkspawns: {
      atkspawn1: 'APC Area',
      atkspawn2: 'Construction Site',
      atkspawn3: 'Side Street',
      atkspawn4: 'River Docks'
    },
    securearea: {
      area1: 'Garage',
      area2: 'Living Room',
      area3: 'Kids Bedroom',
      area4: 'Master Bedroom'
    },
    bombsites: [
      {
        assignment: 1,
        a: 'Workshop',
        b: 'Kids Bedroom'
      },
      {
        assignment: 2,
        a: 'Training Room',
        b: 'Living Room'
      },
      {
        assignment: 3,
        a: 'Training Room',
        b: 'Garage'
      }
    ],
    hostage: {
      area1: 'Laundry Room',
      area2: 'Dining Room',
      area3: 'Workshop',
      area4: 'Master Bedroom'
    }
  }
];
