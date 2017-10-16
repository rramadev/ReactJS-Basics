import React from 'react';

import { User } from './User';

export const UserList = (props) => {
  return (      
    <div className="row">
      <div className="col-xs-10 col-xs-offset-1">  
        <p>User list:</p>
        <hr/>
        <User 
          user={props.user} 
          link={props.link} 
          changeHomeLink={(link) => props.setLink(link)}
          changeName={(name) => props.setName(name)}
          changeAge={(age) => props.setAge(age)} /> 
        <hr/>
        <button>Fetch User</button>           
      </div>        
    </div>      
  );
};