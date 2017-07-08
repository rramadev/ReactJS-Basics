import React from 'react';

import { UserList } from './UserList';

export class User extends React.Component {
  constructor(props) {
    super();
    this.state = {
      user: { 
        name: 'Anna',
        age: 28,
        hobbies: ['tennis', 'cooking']
      },
      homeLink: 'Home'
    }  
  }
  
  onChangeHomeLink(newName) {
    this.setState({
      homeLink: newName
    })
  }

  onGreet() {
    alert('The UserDetail component say Hi! to the User component.');
  }
  
  render() {
    let user = {
      name: 'Anna',
      age: 28,
      hobbies: ['tennis', 'cooking']
    };

    return (      
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1">
          <UserList name={'John'} initialAge={29} hobbies={['Chess', 'Swimming']}>
            <p>- This is a paragraph passed as a children prop from the User component.</p>
          </UserList>
          <UserList 
            name={user.name} 
            initialAge={user.age} 
            hobbies={user.hobbies} 
            greet={this.onGreet} 
            changeHomeLink={this.onChangeHomeLink.bind(this)} 
            initialLinkName={this.state.homeLink} />
        </div>        
      </div>      
    );
  }
}