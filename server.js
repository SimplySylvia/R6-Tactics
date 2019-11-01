//SECTION -------------------------------EXTERNAL MODULES
const express = require('express');
const bodyParser = require('body-parser');
// protection
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
// logging
const morgan = require('morgan');

//SECTION -------------------------------INTERNAL MODULES
const resFormatter = require('./middleware/response');
const validator = require('./middleware/key_validate');
const routes = require('./routes');

//SECTION -------------------------------INSTANCED MODULES
const app = express();
require('dotenv').config();

//SECTION -------------------------------CONFIGURATION VARIABLES
const PORT = process.env.PORT;
const limit = rateLimit({
  max: 100, // max requests
  windowMs: 60 * 60 * 1000, // 1 Hour
  message: 'Too many requests'
});

//SECTION --------------------------------MIDDLEWARE
app.use(bodyParser.json({ limit: '10kb' }));
// limit requests
app.use(limit);
// custom response formatter
app.use(resFormatter);
// security headers
app.use(helmet());
// rotection for No-sql injections
app.use(mongoSanitize());
// api_key validation
app.use(validator);

//SECTION -------------------------------CONFIGURATION VARIABLES
const options = {
  origin: `http://localhost:${PORT}`,
  optionsSuccessStatus: 200
};
app.use(cors(options));
// adding morgan to log HTTP requests
app.use(morgan('tiny'));

//SECTION ------------------------------ROUTES
app.use('/files', express.static('files'));

app.use('/', routes.views);
app.use('/api/v1', routes.api);

//SECTION ------------------------------Start Server
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}..`);
});
