import '../../assets/css/sass/styles.scss';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import { Root } from '../components/Root';
import { UserList } from '../components/UserList';
import { UserDetail } from '../components/UserDetail';
import { Home } from '../components/Home';

export class App extends React.Component {  
  render() {
    return (
      <Router history={browserHistory}>
        <Route path={'/'} component={Root}>
          <IndexRoute component={Home} />
          <Route path={'/home'} component={Home} />
          <Route path={'/users'} component={UserList} />
          <Route path={'/user/:id'} component={UserDetail} />
        </Route>
      </Router>
    );
  }
}