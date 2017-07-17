var rp = require('request-promise');
var actions = require('./redux/actions/actions.js');
var reduxStore = require('./redux/store.js');
var store = reduxStore.store;
const apiBaseUrl = 'http://localhost/api/';//'http://inkeepme.com/api'
const appBaseUrl = 'http://localhost/';

var api = module.exports = {};  // Export this file as a module. DON"T change this

//===================================================================================//
//==================== Add more methods for this module below =======================//
//===================================================================================//

/************************ Authentications stuff*********************************/
api.postSigninForm = function postSigninForm (form) {
// This funciton accept a signin form value {key1: value1, key2: value2, ...} and post that form to the server
  rp.post( {uri: apiBaseUrl + 'login', form: form, json: true} )
    .then(function (parsedUser) {
    // Store the logged in user to redux store
      console.log(store.getState());
      let unsubscribe = store.subscribe( () => console.log(store.getState) ); //log the state averytime it changes
      store.dispatch(actions.setCurrentUser(parsedUser))
      console.log(store.getState());
    })
    .catch(function (err) {
      console.log("Error occured" ,err);
  });
}

api.postSignupForm = function postSignupForm (form) {
// This funciton accept a signup form {key1: value1, key2: value2, ...} and post that form to the server
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
