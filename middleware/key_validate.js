require('dotenv').config();
const db = require('../models');

module.exports = async (req, res, next) => {
  const key = req.headers['api_key'];
  if (typeof key !== 'undefined') {
    const foundCredential = await db.User.findOne({api_key:key})
    if (foundCredential) {
      req.api_key = key;
      next();
    } else {
      res.unauthorized();
    }
  } else {
    res.unauthorized();
  }
};
