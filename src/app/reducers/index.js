import { combineReducers } from 'redux';
import userReducer from './userReducer';
import linkReducer from './linkReducer';

export default combineReducers({
  user: userReducer,
  link: linkReducer
});