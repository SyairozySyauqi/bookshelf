const {
  addBookHandler, getAllbooksHandler, getBookByBookIdHandler, editBookByBoodIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },

  {
    method: 'GET',
    path: '/books',
    handler: getAllbooksHandler,
  },

  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByBookIdHandler,
  },

  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByBoodIdHandler,
  },
];

module.exports = routes;
