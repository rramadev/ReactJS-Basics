import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import { App } from './components/App';
import { UserDetail } from './components/UserDetail';
import { Home } from './components/Home';
import  UserList  from './containers/users';


import store from './store';

// Provider wraps the App
// Render the App component directly into the dom, inside the div#app
render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path={'/'} component={App}>
        <IndexRoute component={Home} />
        <Route path={'/home'} component={Home} />
        <Route path={'/users'} component={UserList} />
        <Route path={'/user/:id'} component={UserDetail} />
      </Route>
    </Router>
  </Provider>,
  window.document.getElementById('app')
);
