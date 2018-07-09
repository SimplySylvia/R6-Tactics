var db = require("./models");

  var SmapList = [
    {
    name : 'House',
    coverimg: '/images/house.jpg',
    floors : [
      {
        name: 'Basement',
        img: 'placeholder',
      },
      {
        name: '1st',
        img: 'placeholder',
      },
      {
        name: '2nd',
        img: 'placeholder',
      },
      {
        name: 'Roof',
        img: 'placeholder',
      },
      {
        name: 'NA',
        img: 'placeholder',
      },
    ],
    atkspawns : {
      atkspawn1 : 'APC Area',
      atkspawn2 : 'Construction Site',
      atkspawn3 : 'Side Street',
      atkspawn4 : 'River Docks',
      },
    securearea : {
      area1 : 'Garage',
      area2 : 'Living Room',
      area3 : 'Kids Bedroom',
      area4 : 'Master Bedroom',
      },
    bombsites : [
      {
      assignment : 1,
      a : 'Workshop',
      b : 'Kids Bedroom',
      },
      {
      assignment : 2,
      a : 'Training Room',
      b : 'Living Room',
      },
      {
      assignment : 3,
      a : 'Training Room',
      b : 'Garage',
      },
    ],
    hostage : {
      area1 : 'Laundry Room',
      area2 : 'Dining Room',
      area3 : 'Workshop',
      area4 : 'Master Bedroom',
    },
  }
];

db.Smap.remove({}, function(err, smaps){
  // code in here runs after all posts are removed
  db.Smap.create(SmapList, function(err, smaps){
    // code in here runs after all posts are created
    if (err) { return console.log('ERROR', err); }
    console.log("all Smaps:", smaps);
    console.log("created", smaps.length, "smaps");
    process.exit();
  });
  
});