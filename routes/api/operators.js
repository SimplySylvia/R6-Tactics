const express = require('express');
const router = express.Router();
const controllers = require('../../controllers');

module.exports = router
  .get('/', controllers.operator.index)
  .get('/attack', controllers.operator.filterAttack)
  .get('/defense', controllers.operator.filterDefense)
  .post('/', controllers.operator.create)
  .get('/:id', controllers.operator.show);
