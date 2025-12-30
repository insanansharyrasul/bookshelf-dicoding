const { addBookHandler, getAllBookHandler, getBookDetailHandler, updateBookHandler } = require("./handler");

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
    handler: getBookDetailHandler
  },
  {

    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBookHandler
  }
];

module.exports = routes;