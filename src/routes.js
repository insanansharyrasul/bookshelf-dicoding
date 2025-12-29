const { adddBookHandler } = require("./handler");

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: adddBookHandler 
  }
];

module.exports = routes;