import React from 'react';
import { browserHistory } from 'react-router'

export class UserDetail extends React.Component {
  componentWillMount() {
    // this.props.fetchUser();
  }

  onNavigateHome() {
    browserHistory.push('/users');
  }

  render() {    
    return(
      <div>
        <h3>User ID: {this.props.user.id} </h3>     
        <h3>User Name: {this.props.user.name} </h3>    
        <h3>User Age: {this.props.user.age} </h3>    
        <hr/>
        <button className="btn btn-primary" onClick={(id) => this.props.fetchUser('59e285d9b805880100f1cff4')}>Fetch new User</button>
        <button className="btn btn-primary" onClick={this.onNavigateHome}>Back to Users</button>
        <hr/>
      </div>
    );
  }
}