const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./config');

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use(express.static(__dirname + '/public'));

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