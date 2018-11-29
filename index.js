const 
  express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  routes = require('./config')

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile('views/index.html' , { root : __dirname});
})

app.get('/documentation', (req, res) => {
  res.sendFile('views/documentation.html' , { root : __dirname});
})


app.use('/api',routes.api);
app.use('/api/atkops',routes.atkop);
app.use('/api/defops', routes.defop);
app.use('/api/smaps', routes.smap);
app.use('/api/gadgets', routes.gadget);
app.use('/api/abilities', routes.ability);
app.use('/api/weapons', routes.weapon);


app.listen(process.env.PORT || 8000, ()=>{
  console.log('Listening to port 8000');
})