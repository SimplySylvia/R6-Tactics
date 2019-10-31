require('dotenv').config();

module.exports = (req, res, next) => {
  const key = req.headers['api_key'];
  if (typeof key !== 'undefined') {
    if (key === process.env.CLIENT_FACING_API) {
      req.api_key = key;
      next();
    } else {
      res.unauthorized();
    }
  } else {
    res.unauthorized();
  }
};
