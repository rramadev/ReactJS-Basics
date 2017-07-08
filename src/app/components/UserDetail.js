import React from 'react';
import { browserHistory } from 'react-router'

export class UserDetail extends React.Component {
  onNavigateHome() {
    browserHistory.push('/home');
  }

  render() {    
    return(
      <div>
        <h3>User ID: {this.props.params.id} </h3>        
        <hr/>
        <button className="btn btn-primary" onClick={this.onNavigateHome}>Go Home</button>
        <hr/>
      </div>
    );
  }
}

// Specify the types of the props passed to the component
UserDetail.propTypes = {
  
};