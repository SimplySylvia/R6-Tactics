const 
  express = require('express'),
  router = express.Router(),
  controllers = require('../controllers')

module.exports = router
  .get('/', controllers.atkop.index)
  .get('/:id' , controllers.atkop.show)