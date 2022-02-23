const {
  addBookHandler,
  getAllbooksHandler,
  getBookByBookIdHandler,
  editBookByBoodIdHandler,
  deleteBookByIdHandler,
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

  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
