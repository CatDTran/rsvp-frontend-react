//import '../actions/actions';

export function appReducer (state, action) {
  switch (action.type) {

    case 'SET_ACTIVE_PAGE':
      var newState = Object.assign({}, state);
      newState.current_page = action.current_page;
      return newState;

    case 'SET_CURRENT_RESERVATION':
      var newState = Object.assign({}, state);
      newState.current_reservation = action.id;
      return newState;

    case 'SET_CURRENT_BOOK':
      var newState = Object.assign({}, state);
      newState.current_book = action.id;
      return newState;

    case 'SET_CURRENT_USER':
      var newState = Object.assign({}, state);
      newState.current_user = action.current_user;
      return newState;

    case 'UPDATE_USER':
      var newState = Object.assign({}, state);
      return newState;

    case 'ADD_RESERVATION':
      var newState = Object.assign({}, state);
      return newState;

    case 'UPDATE_RESERVATION':
      var newState = Object.assign({}, state);
      return newState;

    case 'ADD_BOOK':
      var newState = Object.assign({}, state);
      return newState;

    case 'UPDATE_BOOK':
      var newState = Object.assign({}, state);
      return newState;

    default:
      return state;
  }
}
