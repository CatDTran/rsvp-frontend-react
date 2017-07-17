var redux = require('redux');
var appReducer = require('./reducers/reducers');

var exports = module.exports  // exporting this as a class
var defaultState = {
  current_user: null,
  current_page: null,
  current_reservation: null,
  current_book: null,
  reservations: [ ],
  books: [ ]
}

exports.store =  redux.createStore(appReducer, defaultState);
