import React from 'react';
import { Link } from 'react-router';

// Stateless component
export const Header = (props) => {
  return(
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-Header">
          <ul className="nav navbar-nav">
            <li><Link to={'/home'} activeStyle={{color: 'blue'}}>Home</Link></li> 
            <li><Link to={'/user'} activeClassName={'active'}>User</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );  
}