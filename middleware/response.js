module.exports = (req, res, next) => {
  res.success = function(status, data) {
    const resObj = {
      status,
      requestedAt: new Date().toLocaleString(),
      data
    };
    if (data === null) {
      delete resObj.data;
      resObj.message = 'No Documents Found';
    } else if (data.constructor === Array) {
      if (data.length > 0) {
        resObj.count = data.length;
      } else {
        delete resObj.data;
        resObj.message = 'No Documents Found';
      }
    }
    this.status(status).json(resObj);
  };
  res.error = function(error) {
    this.json({
      status: 400,
      message: 'Something went wrong. Please try again.',
      error: error,
      requestedAt: new Date().toLocaleString()
    });
  };
  next();
};
