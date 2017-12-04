import '../../assets/css/sass/styles.scss';

import React from 'react';

import Header from '../containers/header';

export const App = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1">
          <Header />
        </div>        
      </div>
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1">          
          {props.children}
        </div>        
      </div>    
    </div>
  );
};