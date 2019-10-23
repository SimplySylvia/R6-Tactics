const express = require('express'),
  router = express.Router(),
  controllers = require('../../controllers');

module.exports = router
  .get('/', controllers.weapon.index)
  .get('/:id', controllers.weapon.show);
