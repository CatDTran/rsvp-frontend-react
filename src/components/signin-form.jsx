import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

var store = require('../redux/store.js');
var api = require('../api.js');

export default class SignInForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      signin_form: {email: '', password: ''},
      signup_form: {email: '', password: '', reenter_password: ''},
      signup_disabled: true
    };
    this.handleSignin = this.handleSignin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signinGoogle = this.signinGoogle.bind(this);
    this.signinFacebook = this.signinFacebook.bind(this);
  }

  handleSignin(event) {
    // Call api service to submit sign in form to server with form value: event.target.value
    var form_value = {email: event.target.email.value, password: event.target.password.value};
    event.preventDefault();
    api.postSigninForm(form_value);
    // TODO: check if a user in redux store exist which means user is logged in. if it is, redirect to reservations page
    
  }

  handleSignup(event) {
    // Call api service to submit sign up form to server with form value: event.target.value
    var form_value = {email: event.target.email.value, password: event.target.password.value};
    event.preventDefault();
    api.postSignupForm(form_value);
  }

  handleChange(event) {
  // This function update this.state whenever the value inside an input field change (when user type inside an input field)
    var newState = Object.assign({}, this.state)
    switch (event.target.id) {
      case 'email':
        newState.signup_form.email = event.target.value;
        this.setState(newState);
        break;
      case 'password':
        newState.signup_form.password = event.target.value;
        this.setState(newState);
        break;
      case 'reenter_password':
        newState.signup_form.reenter_password = event.target.value;
        this.setState(newState);
        break;
      default:
        break;
    }
    // Disable sign up button if password & reentered password fields not matched or email field is empty.
    if ( this.state.signup_form.password !== this.state.signup_form.reenter_password || this.state.signup_form.email === '') {
      newState.signup_disabled = true;
      this.setState(newState);
    } else {
      newState.signup_disabled = false;
      this.setState(newState);
    }
    console.log(event.target.value, this.state.signup_form);
  }

  signinGoogle(event) {
    // TODO: call api service to signin with Google here
  }

  signinFacebook(event) {
    // TODO: call api service to signin with Facebook here
  }


  render (){
    return (
      <div>
        {/* Sign in form */}
        <h4>Sign in</h4>
        <form onSubmit={this.handleSignin}>
          <TextField id="signin_email" floatingLabelText='email' name='email' /><br/>
          <TextField id="signin_password" type="password" floatingLabelText='password' name='password' /><br/>
          <RaisedButton type="submit" label="Sign in" primary={true} /><br/>
        </form>
        <hr width="70%"/>

        {/* Social sin in options */}
        <h4>Or</h4>
        <RaisedButton label='Google Sign in' primary={true} onClick={this.signinGoogle}/><br/><br/>
        <RaisedButton label='Facebook Sign in' primary={true} onClick={this.signinFacebook}/>
        <hr width="70%"/>

        {/* Sign up form */}
        <h4>Or sign up for an account</h4>
        <form onSubmit={this.handleSignup}>
          <TextField id="email" floatingLabelText='email' name='email' onChange={this.handleChange}/><br/>
          <TextField id="password" floatingLabelText='password' type='password' name='password' onChange={this.handleChange}/><br/>
          <TextField id="reenter_password" floatingLabelText='Please reenter password' type='password' name='reenter_password' onChange={this.handleChange}/><br/>
          <RaisedButton ref="submit_button" type='submit' label="Sign up" name='' primary={true} disabled={this.state.signup_disabled} /><br/>
        </form>

      </div>
    );
  }
}
