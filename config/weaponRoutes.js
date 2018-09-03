const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

module.exports = router
  .get('/', controllers.weapon.index)
  .get('/:id', controllers.weapon.show)