var rp = require('request-promise');
var actions = require('./redux/actions/actions.js');
var redux = require('./redux/store.js');
var reduxStore = redux.store;
var env = require('./config/env.js');

var apiBaseUrl = env.apiBaseUrl;

var api = module.exports = {};  // Export this file as a module. DON"T change this
api.store = reduxStore;
//===================================================================================//
//==================== Add more methods for this module below =======================//
//===================================================================================//

/* ******************************Initialize Redux state************************ */
api.initializeState = function initializeState(){
  // TODO: get logged in user info from server if available
  rp.get( {uri: apiBaseUrl + 'users'})
    .then(function(parsedUser){      
      reduxStore.dispatch(actions.setCurrentUser(parsedUser));
    })
    .catch(function(err){
      console.log("Error occurred", err);
    });
};

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
      reduxStore.dispatch(actions.setStatusCode(err.statusCode))
      console.log("Error occurred" ,reduxStore.getState().status_code);

  });
}

api.postSignupForm = function postSignupForm (form) {
// This function accept a signup form {key1: value1, key2: value2, ...} and post that form to the server
rp.post({uri: apiBaseUrl + 'signup', form: form, json:true})
  .then(function (parsedUser) {
    reduxStore.dispatch(actions.setCurrentUser(parsedUser))
  })
  .catch(function(err){
    reduxStore.dispatch(actions.setStatusCode(err.statusCode))
    console.log("Error occured", reduxStore.getState().status_code);
  });
  
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
