module.exports = (req, res, next) => {
  console.log(req.headers);
  const key = req.headers['api_key'];
  if (typeof key !== 'undefined') {
    req.api_key = key;
    next();
  } else {
    res.unauthorized();
  }
};
