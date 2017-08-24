/*
NOTE: This file contains reducer which turn actions into state update inside redux store
*/

module.exports = function (state, action) {
  var newState;
  switch (action.type) {

    case 'SET_ACTIVE_PAGE':
      newState = Object.assign({}, state);
      newState.current_page = action.current_page;
      return newState;

    case 'SET_CURRENT_RESERVATION':
      newState = Object.assign({}, state);
      newState.current_reservation = action.id;
      return newState;

    case 'SET_CURRENT_BOOK':
      newState = Object.assign({}, state);
      newState.current_book = action.id;
      return newState;

    case 'SET_CURRENT_USER':
      newState = Object.assign({}, state);
      newState.current_user = action.current_user;
      return newState;

    case 'UPDATE_USER':
      newState = Object.assign({}, state);
      return newState;

    case 'ADD_RESERVATION':
      newState = Object.assign({}, state);
      return newState;

    case 'UPDATE_RESERVATION':
      newState = Object.assign({}, state);
      return newState;

    case 'ADD_BOOK':
      newState = Object.assign({}, state);
      return newState;

    case 'UPDATE_BOOK':
      newState = Object.assign({}, state);
      return newState;

    default:
      return state;
  }
}
