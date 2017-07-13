/*
NOTE: This file define Redux actions. These functions are called "actions creators",
* they return actions which will be used by Redux reducers to update the application universal state (aka Redux Store).
*/
//------------------ Page actions -----------------------------//
function setActivePage (activePageComponent) {
  return {
    type: 'SET_ACTIVE_PAGE',
    current_page: activePageComponent
  }
}

function setCurrentReservation (reservationId) {
  return {
    type: 'SET_CURRENT_RESERVATION',
    id: reservationId
  }
}

function setCurrentBook (bookId) {
  return {
    type: 'SET_CURRENT_BOOK',
    id: bookId
  }
}

//------------------- User related actions -------------------//
function setCurrentUser(currentUser) {
  return {
    type: 'SET_CURRENT_USER',
    current_user: currentUser
  }
}

function updateUser (updatedUser) {
  return {
    type: 'UPDATE_USER',
    info: updatedUser
  }
}

//------------------ Reservation ralted actions --------------//
function addReservation (newReservation) {
  return {
    type: 'ADD_RESERVATION',
    reservation: newReservation
  }
}

function updateReservation (reservationId, updatedReservation) {
  return {
    type: 'UPDATE_RESERVATION',
    id: reservationId,
    reservation: updatedReservation
  }
}
//------------------- Book related actions -------------------//
function addBook(newBook) {
  return {
    type: 'ADD_BOOK',
    book: newBook
  }
}

function updateBook (bookId, updatedBook) {
  return {
    type: 'UPDATE_BOOK',
    id: bookId,
    book: updatedBook
  }
}
