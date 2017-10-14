import React from 'react';
import { Link } from 'react-router';

// Stateless component
export const Header = (props) => {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">      
      ReactJS/Redux  
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">          
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Link to={'/home'} activeStyle={{color: 'blue'}}>{props.link.homeLink}</Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Link to={'/users'} activeClassName={'myActiveClass'}>Users</Link>
            </a>
          </li>
        </ul>        
      </div>
    </nav>
  );  
}