import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import userReducer from './reducers/userReducer';
import linkReducer from './reducers/linkReducer';


const middleware = applyMiddleware(thunk, createLogger());
export default createStore(
  combineReducers({
    user: userReducer,
    link: linkReducer
  }),
  {},
  middleware
);