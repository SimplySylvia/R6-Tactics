const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

module.exports = router
  .get('/', controllers.smap.index)
  .get('/:id', controllers.smap.show)