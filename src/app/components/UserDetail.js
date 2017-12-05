import React from 'react';
import { browserHistory } from 'react-router';
import Button from 'material-ui/RaisedButton';

export class UserDetail extends React.Component {
  componentWillMount() {
    // New User data can be loaded manually using the Fetch-button
    // this.props.fetchUser();
  }

  onNavigateHome() {
    browserHistory.push('/users');
  }

  render() {    
    return (
      <div>
        <h3>User ID: {this.props.user.id} </h3>     
        <h3>User Name: {this.props.user.name} </h3>    
        <h3>User Age: {this.props.user.age} </h3>    
        <hr/>
        {/* Material-UI Button */}
        <Button onClick={() => this.props.onFetchUser('5a031e6a3744ae0100f81882')} 
          label="Fetch new User" />
        {/* Bootstrap Button */}
        {/* <button className="btn btn-primary" onClick={(id) => this.props.fetchUser('5a031e6a3744ae0100f81882')}>Fetch new User</button> */}
        <button className="btn btn-primary" onClick={this.onNavigateHome}>Back to Users</button>
        <hr/>
      </div>
    );
  }
}