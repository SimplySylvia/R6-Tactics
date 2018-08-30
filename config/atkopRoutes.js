const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

module.exports = router
  .get('/', controllers.atkop.index)
  .get('/:id' , controllers.atkop.show)