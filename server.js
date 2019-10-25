// external modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
// internal modules
const resFormatter = require('./middleware/response');
const routes = require('./routes');
// instanced module
const app = express();
require('dotenv').config();

//-------------------------------CONFIGURATION VARIABLES
const PORT = process.env.PORT;

//--------------------------------MIDDLEWARE
app.use(bodyParser.json());
app.use(resFormatter);

// adds security headers to api
app.use(helmet());

const options = {
  origin: `http://localhost:${PORT}`,
  optionsSuccessStatus: 200
};

app.use(cors(options));

// adding morgan to log HTTP requests
app.use(morgan('tiny'));

// ------------------------------ROUTES
app.use('/files', express.static('files'));

app.use('/', routes.views);
app.use('/api/v1', routes.api);

// ------------------------------Start Server
app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening to port ${PORT}..`);
});
