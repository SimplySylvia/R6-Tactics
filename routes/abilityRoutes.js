const 
  express = require('express'),
  router = express.Router(),
  controllers = require('../controllers')

module.exports = router
  .get('/', controllers.ability.index)
  .get('/:id', controllers.ability.show)