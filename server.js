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

app.use('/', routes.views);
app.use('/api/v1', routes.api);

// ------------------------------Start Server
app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening to port ${PORT}..`);
});
