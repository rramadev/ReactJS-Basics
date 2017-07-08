import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import { Root } from './components/Root';
import { User } from './components/User';
import { UserDetail } from './components/UserDetail';
import { Home } from './components/Home';

class App extends React.Component {  
  render() {
    return (
      <Router history={browserHistory}>
        <Route path={'/'} component={Root}>
          <IndexRoute component={Home} />
          <Route path={'/user'} component={User} />
          <Route path={'/user/:id'} component={UserDetail} />                      
          <Route path={'/home'} component={Home} />
        </Route>
      </Router>
    );
  }
}
// Render the App component directly into the dom, inside the div#app
render(<App />, window.document.getElementById('app'));
