import React from 'react';
import { browserHistory } from 'react-router'

export class UserDetail extends React.Component {
  onNavigateHome() {
    browserHistory.push('/users');
  }

  render() {    
    return(
      <div>
        <h3>User ID: {this.props.params.id} </h3>        
        <hr/>
        <button className="btn btn-primary" onClick={this.onNavigateHome}>Back to Users</button>
        <hr/>
      </div>
    );
  }
}