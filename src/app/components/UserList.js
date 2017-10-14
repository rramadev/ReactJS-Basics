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
          changeHomeLink={(name) => props.setLink(name)} />            
      </div>        
    </div>      
  );
};