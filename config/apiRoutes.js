const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

module.exports = router
  .get('/', controllers.api.index);