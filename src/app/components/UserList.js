import React from 'react';

import { User } from './User';

export class UserList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      user: { 
        name: 'Anna',
        age: 28,
        hobbies: ['tennis', 'cooking']
      },
      homeLink: props.initialLinkName
    }  
  }
  
  // onChangeHomeLink(newLinkName) {
  //   this.setState({
  //     homeLink: newLinkName
  //   });
  //   this.props.changeHomeLink(newLinkName);
  // }

  onGreet() {
    alert('The User component says Congrats! to the User component.');
  }

  onSayHi() {
    alert('The User component say Hi! to the User component.');
  }
  
  render() {
    let defaultUser = {
      id: 1,
      name: 'Anna',
      age: 28,
      hobbies: ['Tennis', 'Cooking']
    };

    let userComp = ( 
      <User 
        id={2}
        name={'John'} 
        initialAge={29} 
        hobbies={['Chess', 'Swimming']}
        greet={this.onSayHi}
        changeHomeLink={(newLinkName) => this.props.changeHomeLink(newLinkName)} 
        initialLinkName={this.state.homeLink}>
        <p>- This is a paragraph passed as a children prop from the User component.</p>
      </User>
    );

    return (      
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1">
          {userComp}
          <User 
            id={defaultUser.id}
            name={defaultUser.name} 
            initialAge={defaultUser.age} 
            hobbies={defaultUser.hobbies} 
            greet={this.onGreet} 
            changeHomeLink={(newLinkName) => this.props.changeHomeLink(newLinkName)} 
            initialLinkName={this.state.homeLink}>
            <p>- Another paragraph passed as a children prop from the Parent component.</p>
          </User>
        </div>        
      </div>      
    );
  }
}