import React from 'react';

export default class ReservationsListPage extends React.Component {
  render(){
    return (
      <div>
        {this.constructor.name}
        {JSON.stringify(this.props.store)}
      </div>
    );
  }
}
