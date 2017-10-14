import React from 'react';
import { Link } from 'react-router';

// Stateless component
export const Header = (props) => {
  return(
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-Header">
          <ul className="nav navbar-nav">
            <li><Link to={'/home'} activeStyle={{color: 'blue'}}>{props.link.homeLink}</Link></li> 
            <li><Link to={'/users'} activeClassName={'myActiveClass'}>Users</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );  
}