const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//models/album.js
var SmapSchema = new Schema({
  name : String,
  coverimg: String,
  floors : [
    {
      _id : false,
      name: String,
      img: String,
    },
    {
      _id : false,
      name: String,
      img: String,
    },
    {
      _id : false,
      name: String,
      img: String,
    },
    {
      _id : false,
      name: String,
      img: String,
    },
    {
      _id : false,
      name: String,
      img: String,
    },
  ],
  atkspawns : {
    atkspawn1 : String,
    atkspawn2 : String,
    atkspawn3 : String,
    atkspawn4 : String,
    },
  securearea : {
    area1 : String,
    area2 : String,
    area3 : String,
    area4 : String,
    },
  bombsites : [
    {
      _id : false,
    assignment : Number,
    a : String,
    b : String,
    },
    {
      _id : false,
    assignment : Number,
    a : String,
    b : String,
    },
    {
      _id : false,
    assignment : Number,
    a : String,
    b : String,
    },
  ],
  hostage : {
    area1 : String,
    area2 : String,
    area3 : String,
    area4 : String,
  },

});

var Smap = mongoose.model('Smap', SmapSchema);

module.exports = Smap;