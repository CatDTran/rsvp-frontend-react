/*
NOTE: This file define Redux actions. These functions are called "actions creators",
* they return actions which will be used by Redux reducers to update the application universal state (aka Redux Store).
*/
var exports = module.exports  // exporting this as a class
//------------------ Page actions -----------------------------//
exports.setActivePage = function (activePageComponent) {
  return {
    type: 'SET_ACTIVE_PAGE',
    current_page: activePageComponent
  }
}

exports.setCurrentReservation = function (reservationId) {
  return {
    type: 'SET_CURRENT_RESERVATION',
    id: reservationId
  }
}

exports.setCurrentBook = function (bookId) {
  return {
    type: 'SET_CURRENT_BOOK',
    id: bookId
  }
}

//------------------- User related actions -------------------//
exports.setCurrentUser = function (currentUser) {
  return {
    type: 'SET_CURRENT_USER',
    current_user: currentUser
  }
}

exports.updateUser = function (updatedUser) {
  return {
    type: 'UPDATE_USER',
    info: updatedUser
  }
}

//------------------ Reservation ralted actions --------------//
exports.addReservation = function (newReservation) {
  return {
    type: 'ADD_RESERVATION',
    reservation: newReservation
  }
}

exports.updateReservation = function (reservationId, updatedReservation) {
  return {
    type: 'UPDATE_RESERVATION',
    id: reservationId,
    reservation: updatedReservation
  }
}
//------------------- Book related actions -------------------//
exports.addBook = function (newBook) {
  return {
    type: 'ADD_BOOK',
    book: newBook
  }
}

exports.updateBook = function (bookId, updatedBook) {
  return {
    type: 'UPDATE_BOOK',
    id: bookId,
    book: updatedBook
  }
}
