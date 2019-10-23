const express = require('express'),
  router = express.Router(),
  api = require('./api'),
  controllers = require('../controllers');

module.exports = router
  .get('/', controllers.documentation.index)
  .use('/operators', api.operators)
  .use('/locations', api.locations)
  .use('/gadgets', api.gadget)
  .use('/abilities', api.ability)
  .use('/weapons', api.weapon);
