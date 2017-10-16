import React from 'react';
import { browserHistory } from 'react-router'

export class UserDetail extends React.Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  onNavigateHome() {
    browserHistory.push('/users');
  }

  render() {    
    return(
      <div>
        <h3>User ID: {this.props.params.id} </h3>     
        {/* <h3>User Name: {this.props} </h3>    
        <h3>User Age: {this.props} </h3>     */}
        <hr/>
        <button className="btn btn-primary" onClick={this.onNavigateHome}>Back to Users</button>
        <hr/>
      </div>
    );
  }
}