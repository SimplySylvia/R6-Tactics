const express = require('express'),
  router = express.Router();

module.exports = router
  .use(express.static(`${__dirname}/../` + '/public'))
  .get('/', (req, res) => {
    res.sendFile('views/index.html', { root: `${__dirname}/../` });
  })

  .get('/documentation', (req, res) => {
    res.sendFile('views/documentation.html', { root: `${__dirname}/../` });
  });
