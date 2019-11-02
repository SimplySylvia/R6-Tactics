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
      if (data.length === 1) {
        resObj.data = resObj.data[0];
        delete resObj.count;
      } else if (data.length > 0) {
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
    this.status(400).json({
      status: 400,
      message: 'Something went wrong. Please try again.',
      //NOTE error here for development purposes only.
      error: error,
      requestedAt: new Date().toLocaleString()
    });
  };
  res.unauthorized = function() {
    this.status(403).json({
      status: 403,
      message: 'API KEY NOT PROVIDED OR INVALID.',
      //NOTE error here for development purposes only.
      // error: error,
      requestedAt: new Date().toLocaleString()
    });
  };
  next();
};
