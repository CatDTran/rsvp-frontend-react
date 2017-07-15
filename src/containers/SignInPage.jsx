import React from 'react';
import SignInForm from '../components/signin-form.jsx'

export default class SignInPage extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        {this.constructor.name}
        <SignInForm></SignInForm>
      </div>
    );
  }
}
