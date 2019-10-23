const doc = require('../db/doc.json');

module.exports = {
  index: (req, res) => {
    res.success(200, doc);
  }
};
