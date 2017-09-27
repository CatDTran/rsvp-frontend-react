import React from 'react';
import { connect } from 'react-redux'
import * as actionsCreators from '../redux/actions/actions'

class ReservationsListPage extends React.Component {
  render(){
    return (
      <div>
        {this.constructor.name}
        {JSON.stringify(this.props.state.reservations)}
      </div>
    );
  }
}

function mapStateToProps (state){
  return {state: state}
}

export default connect(mapStateToProps, actionsCreators)(ReservationsListPage)