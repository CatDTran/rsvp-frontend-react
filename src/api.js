var rp = require('request-promise');
var actions = require('./redux/actions/actions.js');
var redux = require('./redux/store.js');
var reduxStore = redux.store;

const apiBaseUrl = 'http://localhost/api/';//'http://inkeepme.com/api'
const appBaseUrl = 'http://localhost/';

var api = module.exports = {};  // Export this file as a module. DON"T change this
api.store = reduxStore;
//===================================================================================//
//==================== Add more methods for this module below =======================//
//===================================================================================//

/************************ Authentications stuff*********************************/
api.postSigninForm = function postSigninForm (form) {
// This function accept a sign in form value {key1: value1, key2: value2, ...} and post that form to the server
  rp.post( {uri: apiBaseUrl + 'login', form: form, json: true} )
    .then(function (parsedUser) {
      reduxStore.dispatch(actions.setCurrentUser(parsedUser))
      // console.log(reduxStore.getState());
    })
    .catch(function (err) {
    // when an error occurs, the following code is executed
      console.log("Error occurred" ,err);
  });
}

api.postSignupForm = function postSignupForm (form) {
// This function accept a signup form {key1: value1, key2: value2, ...} and post that form to the server
  console.log(form);
}

api.postSigninGoogle = function (){
// This function post a signin with Google request to server

  console.log('Signin with Google');
}

api.postSigninGoogle = function() {
// This function post a signin with Facebook request to server

  console.log('Signin with Facebook');
}

/***************************** User info stuff*********************************/

/***************************** Reservation stuff*******************************/

/***************************** rsvp Book stuff*********************************/
