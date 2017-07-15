import { createStore } from 'redux';
import { appReducer } from './reducers/reducers';

var defaultState = {
  current_user: null,
  current_page: null,
  current_reservation: null,
  current_book: null,
  reservations: [ ],
  books: [ ]
}

var store = createStore(appReducer, defaultState);
