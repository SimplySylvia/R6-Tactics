const express = require('express');
const router = express.Router();
const controllers = require('../../controllers');

module.exports = router
  // index can recieve query for filtered results
  .get('/', controllers.operator.index)
  .get('/:id', controllers.operator.show)
  .post('/', controllers.operator.create);
