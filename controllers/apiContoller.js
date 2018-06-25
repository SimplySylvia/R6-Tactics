function index(req, res) {
    res.json({
      message: 'Welcome to R6 tactics Api!',
      documentation_url: 'https://github.com/DaltonHart/R6-Tactics',
      base_url: 'localhost:3000',
      endpoints: [
        {
          method: 'GET', path: '/api', description: 'Describes available endpoints'
        }
      ]
    });
  }
  
  // exports above funciton index 
  module.exports = { index: index }