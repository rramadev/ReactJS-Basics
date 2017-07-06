import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
  render() {
    let user = {
      name: 'Anna',
      age: 28,
      hobbies: ['tennis', 'cooking']
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header/>
          </div>        
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home name={'John'} age={29} hobbies={['Chess', 'Swimming']}>
              <p>- This is a paragraph passed as a children prop from the App component.</p>
            </Home>
            <Home name={user.name} age={user.age} hobbies={user.hobbies}/>
          </div>        
        </div>
      </div>
    );
  }
}
// Render the App component directly into the dom, inside the div#app
render(<App/>, window.document.getElementById('app'));
