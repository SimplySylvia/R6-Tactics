module.exports = (req, res, next) => {
  res.success = function(status, data) {
    const resObj = {
      status,
      requestedAt: new Date().toLocaleString(),
      count: null,
      data
    };
    if (data === null) {
      delete resObj.data;
      delete resObj.count;
      resObj.message = 'No Documents Found';
    } else if (data.constructor === Array) {
      if (data.length > 0) {
        resObj.count = data.length;
      } else {
        delete resObj.data;
        delete resObj.count;
        resObj.message = 'No Documents Found';
      }
    } else if (typeof data === 'object') {
      delete resObj.count;
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