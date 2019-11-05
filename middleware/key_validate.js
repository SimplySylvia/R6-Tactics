require('dotenv').config();
const db = require('../models');

module.exports = async (req, res, next) => {
  const key = req.headers['api_key'];
  if (typeof key !== 'undefined') {
    const foundCredential = await db.User.findOne({ api_key: key });
    if (foundCredential) {
      const log = {
        requestUrl: req.url,
        requestMethod: req.method,
        api_key: key
      };
      foundCredential.logs.push(log);
      await foundCredential.save();
      next();
    } else if (key === process.env.CLIENT_FACING_API) {
      next();
    } else {
      res.unauthorized();
    }
  } else {
    res.unauthorized();
  }
};
