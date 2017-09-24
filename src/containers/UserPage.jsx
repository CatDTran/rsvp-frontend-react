import React from 'react';
import { connect } from 'react-redux'

import * as actionsCreators from '../redux/actions/actions'

class UserPage extends React.Component {
  render(){
    return (
      <div>
        <p>{this.constructor.name}</p>
        {JSON.stringify(this.props.state)}
      </div>
    );
  }
}

function mapStateToProps (state){
  return {state: state}
}

export default connect(mapStateToProps, actionsCreators)(UserPage)
