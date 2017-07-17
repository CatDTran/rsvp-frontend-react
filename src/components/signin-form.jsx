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
      signup_form: {email: '', password: '', reenter_password: ''}
    };
    this.handleSignin = this.handleSignin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.shouldDisabled = this.shouldDisabled.bind(this);
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

  shouldDisabled(){
    // TODO: validate ignup form before enable 'Sign up' button here
    // if ( this.state.signup_form.password !== this.state.signup_form.reenter_password)
    //   return true;
    // return false;
  }

  handleChange(event) {
  // This function update this.state whenever the value inside an input field change (when user type inside an input field)
    console.log(event.target.id);
    switch (event.target.id) {
      case 'email':
        this.setState({signup_form: {email: event.target.value, password: this.state.signup_form.password, reenter_password: this.state.signup_form.reenter_password} });
        break;
      case 'password':
        this.setState({signup_form: {email: this.state.signup_form.password, password: event.target.value, reenter_password: this.state.signup_form.reenter_password} });
        break;
      case 'reenter_password':
        this.setState({signup_form: {email: this.state.signup_form.password, password: this.state.signup_form.password, reenter_password: event.target.value} });
      default:
        break;
    }
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

        <h4>Sign in</h4>
        <form onSubmit={this.handleSignin}>
          <TextField id="signin_email" floatingLabelText='email' name='email' /><br/>
          <TextField id="signin_password" type="password" floatingLabelText='password' name='password' /><br/>
          <RaisedButton type="submit" label="Sign in" primary={true} /><br/>
        </form>
        <hr width="70%"/>

        <h4>Or</h4>
        <RaisedButton label='Google Sign in' primary={true} onClick={this.signinGoogle}/><br/><br/>
        <RaisedButton label='Facebook Sign in' primary={true} onClick={this.signinFacebook}/>
        <hr width="70%"/>

        <h4>Or sign up for an account</h4>
        <form onSubmit={this.handleSignup}>
          <TextField id="email" floatingLabelText='email' name='email' onChange={this.handleChange}/><br/>
          <TextField id="password" floatingLabelText='password' name='password' onChange={this.handleChange}/><br/>
          <TextField id="reenter-password" floatingLabelText='reenter password' name='reenter_password' onChange={this.handleChange}/><br/>
          <RaisedButton type='submit' label="Sign up" name='' primary={true}
            disabled={false} /><br/>
        </form>

      </div>
    );
  }
}
