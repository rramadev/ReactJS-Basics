import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { App } from '../components/App';
import { Home } from '../components/Home';
import UserList from './UsersContainer';
import UserDetail from './UserDetailContainer';
import configureStore from '../store';

const store = configureStore();

export const Root = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <Router history={browserHistory}>
          <Route path={'/'} component={App}>
            <IndexRoute component={Home} />
            <Route path={'/home'} component={Home} />
            <Route path={'/users'} component={UserList} />
            <Route path={'/user/:id'} component={UserDetail} />
          </Route>
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
};