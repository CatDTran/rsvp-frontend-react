import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; // Material UI Components
import injectTapEventPlugin from 'react-tap-event-plugin';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom' // router module

import { store } from './redux/store.js';
import HomePage from './containers/HomePage';
import UserPage from './containers/UserPage';
import SignInPage from './containers/SignInPage';
import ReservationsListPage from './containers/ReservationsListPage'
import ReservationDetailPage from './containers/ReservationDetailPage'
import BooksListPage from './containers/BooksListPage';
import BookDetailPage from './containers/BookDetailPage';


injectTapEventPlugin();

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      {/* root routes for the app*/}
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/sign-in" component={SignInPage}/>
      <Route exact path="/user" component={UserPage}/>
      <Route exact path="/reservations-list" component={ReservationsListPage}/>
      <Route exact path="/reservation-detail" component={ReservationDetailPage}/>
      <Route exact path="/books-list" component={BooksListPage}/>
      <Route exact path="/book-detail" component={BookDetailPage}/>

      </div>
    </Router>
    );
  }
}

export default App;
