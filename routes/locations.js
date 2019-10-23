const express = require('express'),
  router = express.Router(),
  controllers = require('../controllers');

module.exports = router
  .get('/', controllers.smap.index)
  .get('/:id', controllers.smap.show);
