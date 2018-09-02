const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

module.exports = router
  .get('/', controllers.gadget.index)
  .get('/:id', controllers.gadget.show)