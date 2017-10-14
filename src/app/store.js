import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import userReducer from './reducers/userReducer';
import linkReducer from './reducers/linkReducer';


const middleware = applyMiddleware(createLogger());
export default createStore(
  combineReducers({
    user: userReducer,
    link: linkReducer
  }),
  {},
  middleware
);