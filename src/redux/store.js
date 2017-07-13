import { createStore } from 'redux';


var defaultState = {
  current_user: null,
  current_page: null,
  current_reservation: null,
  reservations: [ ],
  books: [ ]
}

function rsvpApp (state, action) {

}

var store = createStore(rsvpApp, defaultState);
