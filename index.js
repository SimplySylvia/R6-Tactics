const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./config');

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

var path = require('path')

process.env.PWD = process.cwd();
app.use(express.static(path.join(process.env.PWD, 'public')));

app.get('/', (req, res) => {
  res.sendFile('Views/index.html' , { root : __dirname});
})

app.use('/api',routes.api);
app.use('/api/atkops',routes.atkop);
app.use('/api/defops', routes.defop);
app.use('/api/smaps', routes.smap);


app.listen(process.env.PORT || 8000, ()=>{
  console.log("Listening to port 8000");
})