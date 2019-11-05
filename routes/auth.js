const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

module.exports = router
  .post('/register', controllers.auth.register)
  .post('/login', controllers.auth.login)
  .patch('/key', controllers.auth.requestNewKey)
  .get('/', controllers.auth.show);