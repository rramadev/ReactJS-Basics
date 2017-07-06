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
            <Home name={'John'} age={29} hobbies={['Chess', 'Swimming']}/>
            {/*<Home user={user} />*/}
          </div>        
        </div>
      </div>
    );
  }
}
// Render the App component directly into the dom, inside the div#app
render(<App/>, window.document.getElementById('app'));
