// external modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// internal modules
const compactRes = require('./middleware/response');
const routes = require('./routes');
// instanced module
const app = express();

//--------------------------------MIDDLEWARE
app.use(bodyParser.json());
app.use(compactRes);
app.use(cors());
app.use(express.static(__dirname + '/public'));

//-------------------------------CONFIGURATION VARIABLES
const PORT = process.env.PORT || 8000;

// ------------------------------ROUTES
app.use('/files', express.static('files'));

app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname });
});

app.get('/documentation', (req, res) => {
  res.sendFile('views/documentation.html', { root: __dirname });
});

app.use('/api/v1', routes.api);
app.use('/api/v1/operators', routes.operators);

// app.use('/api/v1/atkops', routes.atkop);
// app.use('/api/v1/defops', routes.defop);
app.use('/api/v1/smaps', routes.smap);
app.use('/api/v1/gadgets', routes.gadget);
app.use('/api/v1/abilities', routes.ability);
app.use('/api/v1/weapons', routes.weapon);

// ------------------------------Start Server
app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening to port ${PORT}..`);
});
