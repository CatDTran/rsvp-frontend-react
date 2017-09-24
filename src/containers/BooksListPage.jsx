import React from 'react';
import { connect } from 'react-redux'
import * as actionsCreators from '../redux/actions/actions'

class BooksListPage extends React.Component {
  render(){
    return (
      <div>
        {this.constructor.name}
      </div>
    );
  }
}

function mapStateToProps (state){
  return {state: state}
}

export default connect(mapStateToProps, actionsCreators)(BooksListPage)