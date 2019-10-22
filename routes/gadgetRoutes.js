const 
  express = require('express'),
  router = express.Router(),
  controllers = require('../controllers')

module.exports = router
  .get('/', controllers.gadget.index)
  .get('/:id', controllers.gadget.show)