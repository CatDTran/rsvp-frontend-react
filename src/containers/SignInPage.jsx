import React from 'react';
import SignInForm from '../components/signin-form.jsx'
import { connect } from 'react-redux'
import * as actionsCreators from '../redux/actions/actions'

class SignInPage extends React.Component {
  constructor(props){
    super(props);
  }

  signinSucessfull() {
    // TODO: 
  }

  render(){
    return (
      <div>
        {this.constructor.name}
        <SignInForm signinSucessfull={this.signinSucessfull}></SignInForm>
      </div>
    );
  }
}

function mapStateToProps (state){
  return {state: state}
}

export default connect(mapStateToProps, actionsCreators)(SignInPage)