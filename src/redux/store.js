var redux = require('redux');
var appReducer = require('./reducers/reducers');

var exports = module.exports  // exporting this as a class
var defaultState = {
  current_user: null, // the current logged in user
  current_page: null, // the current page the user is looking at; used by React Router to show correct page
  current_reservation: null,  // the current reservation the user is looking at; used by React Router to show correct page
  current_book: null, // the current book the user is looking at; used by React Router to show correct page
  reservations: [ ],  // the list of user' reservations
  books: [ ]  // the list of user's manged books
}

exports.store =  redux.createStore(appReducer, defaultState);
