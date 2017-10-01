import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; // Material UI Components
import injectTapEventPlugin from 'react-tap-event-plugin';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom' // router module
import { Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'

import api from './api'
import HomePage from './containers/HomePage';
import UserPage from './containers/UserPage';
import SignInPage from './containers/SignInPage';
import ReservationsListPage from './containers/ReservationsListPage'
import ReservationDetailPage from './containers/ReservationDetailPage'
import BooksListPage from './containers/BooksListPage';
import BookDetailPage from './containers/BookDetailPage';


injectTapEventPlugin();

class App extends Component {

  constructor(props){
  // This is the constructor for this component. Since App component is the root component, we should get the initial state from of the App when it starts up on browser.
    super(props);
    // listener to Redux store's state change
    this.props.store.subscribe( function(){
    });
  }

  componentWillMount(){
    api.initializeState();
  }

  componentDidMount(){

  }

  render() {
    console.log('render() called');
    return (
    <Provider store={this.props.store}>
      {/* Must wrap <Router/> inside <Provider/> to be able to pass Redux store down to child components inside*/}
      <Router>
      {/* ^This tag is needed for React-Router */}
        <MuiThemeProvider>
        {/* ^This tag is needed for Material-UI */}
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
                <Link to="/">Home</Link> <span/>
                <Link to="/sign-in">Sign in</Link> <span/>
                <Link to="/user">User</Link> <span/>
                <Link to="/reservations-list">reservations</Link> <span/>
                <Link to="/books-list">RSVP Books</Link> <span/>
            </div>
            {/*root routes for the app*/}
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/home" component={HomePage}/>
            {/* Only show SignInPage when current logged in user is null */}
            <Route exact path="/sign-in" render={() => ( this.props.store.getState().current_user ? (<Redirect to="/user"/>) : (<SignInPage/>) )}/>
            <Route exact path="/user" component={UserPage}/>
            <Route exact path="/reservations-list" component={ReservationsListPage}/>
            <Route exact path="/reservation-detail" component={ReservationDetailPage}/>
            <Route exact path="/books-list" component={BooksListPage}/>
            <Route exact path="/book-detail" component={BookDetailPage}/>
          </div>
        </MuiThemeProvider>
      </Router>
    </Provider>
    );
  }
}

//========== implement Redux state changes listeners for this component here =============//
// store.subscribe( function(){
//   console.log("Listener inside App.js was invoked.... initialState was: " + JSON.stringify(initialState));
//   // check if state change is caused by user logging in by comparing store.current_user property
//   if (initialState.current_user === null && store.getState().current_user !== null){
//     console.log('User just logged in!!!');
//     // redirect to user-page after logging IN
//     //window.location =  '/user';
//   }// else if (false){
//   //   // TODO: should we redirect to HomePage page after logging OUT here?
//   //   console.log('User has just logged out!!!');
//   // }
// });

export default App;
