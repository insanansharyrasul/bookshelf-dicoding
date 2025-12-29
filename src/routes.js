const { addBookHandler, getAllBookHandler, getBookDetail } = require("./handler");

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBookHandler
  },
  {

    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookDetail
  }
];

module.exports = routes;