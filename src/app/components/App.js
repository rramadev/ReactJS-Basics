import '../../assets/css/sass/styles.scss';

import React from 'react';

import Header from '../containers/header';
import { Footer } from './Footer';

export const App = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1">
          <Header newP={'Link'} />
        </div>        
      </div>
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1">          
          {props.children}
        </div>        
      </div> 
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1">
          <Footer />
        </div>        
      </div>   
    </div>
  );
};