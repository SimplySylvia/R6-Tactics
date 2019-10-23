const express = require('express'),
  router = express.Router(),
  controllers = require('../controllers');

module.exports = router
  .get('/', controllers.location.index)
  .get('/:id', controllers.location.show);
