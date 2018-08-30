const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

module.exports = router
  .get('/', controllers.defop.index)
  .get('/:id' , controllers.defop.show)