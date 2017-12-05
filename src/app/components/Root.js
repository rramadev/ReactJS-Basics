import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { App } from './App';
import { Home } from './Home';
import UserList from '../containers/users';
import UserDetail from '../containers/userDetail';

export const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <Router history={browserHistory}>
          <Route path={'/'} component={App}>
            <IndexRoute component={UserList} />
            <Route path={'/home'} component={Home} />
            <Route path={'/users'} component={UserList} />
            <Route path={'/user/:id'} component={UserDetail} />
          </Route>
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
};