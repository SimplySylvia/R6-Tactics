// required section
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const controllers = require('./controllers');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(cors());


const db = require(`./models`);


//send index to front of server
app.get('/', (req, res) => {
  //res.sendFile(__dirname + '/views/index.html');
  res.sendFile('Views/index.html' , { root : __dirname});
})

// get controllers
app.get('/api', controllers.api.index);

// get routes
app.get('/api/atkops', controllers.atkop.index);
app.get('/api/defops', controllers.defop.index);
app.get('/api/smaps', controllers.smap.index);


// listen
app.listen(process.env.PORT || 8000, ()=>{
  console.log("Listening to port 8000");
})