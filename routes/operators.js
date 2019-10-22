const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

module.exports = router
  .get('/', controllers.operator.index)
  .post('/', controllers.operator.create)
  .get('/:id', controllers.operator.show);
