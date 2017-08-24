import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; // Material UI Components
import injectTapEventPlugin from 'react-tap-event-plugin';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom' // router module
import { Provider } from 'react-redux'

import { store } from './redux/store.js';
import HomePage from './containers/HomePage';
import UserPage from './containers/UserPage';
import SignInPage from './containers/SignInPage';
import ReservationsListPage from './containers/ReservationsListPage'
import ReservationDetailPage from './containers/ReservationDetailPage'
import BooksListPage from './containers/BooksListPage';
import BookDetailPage from './containers/BookDetailPage';


injectTapEventPlugin();
var initialState;

// const App = ({ store }) => (
//   <Provider store={store}>
//     <Router>
//     {/* ^This tag is needed for React-Router */}
//       <MuiThemeProvider>
//       {/* ^This tag is needed for Material-UI */}
//         <div className="App">
//           <div className="App-header">
//             <img src={logo} className="App-logo" alt="logo" />
//             <h2>Welcome to React</h2>
//           </div>
//
//         {/*root routes for the app*/}
//         <Route exact path="/" component={HomePage}/>
//         <Route exact path="/sign-in" component={SignInPage}/>
//         <Route exact path="/user" component={UserPage}/>
//         <Route exact path="/reservations-list" component={ReservationsListPage}/>
//         <Route exact path="/reservation-detail" component={ReservationDetailPage}/>
//         <Route exact path="/books-list" component={BooksListPage}/>
//         <Route exact path="/book-detail" component={BookDetailPage}/>
//         </div>
//       </MuiThemeProvider>
//     </Router>
//   </Provider>
// )
//
class App extends Component {

  constructor(props){
    super(props);
    var initialState = this.props.store.getState();
    this.props.store.subscribe( function(){
      console.log("Listener inside App.js was invoked.... initialState was: " + JSON.stringify(initialState));
      // check if state change is caused by user logging in by comparing store.current_user property
      if (initialState.current_user === null && store.getState().current_user !== null){
        console.log('User just logged in!!!');
        // redirect to user-page after logging IN
        //window.location =  '/user';
      }// else if (false){
      //   // TODO: should we redirect to HomePage page after logging OUT here?
      //   console.log('User has just logged out!!!');
      // }
    });
  }

  componentDidMount(){
    console.log('componentDidMount() called ...');
  }

  render() {
    initialState  = store.getState();
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
            </div>

          {/*root routes for the app*/}
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/sign-in" component={SignInPage}/>
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
