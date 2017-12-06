import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { loadState, saveState } from './localStorage';

import userReducer from './reducers/userReducer';
import linkReducer from './reducers/linkReducer';

// Custom implementation of redux-promise
const addPromiseSupportToDispatch = (store) => (nextDispatch) => (action) => {
  if (typeof action.then === 'function') {
    return action.then(nextDispatch);
  }
  return nextDispatch(action);
};

const configureStore = () => {

  // Load local state from start
  const persistedState = loadState();
  const reducers = combineReducers({
    user: userReducer,
    link: linkReducer
  })
  const middleware = applyMiddleware(thunk, createLogger());
  const store = createStore(
    reducers,
    persistedState,
    middleware
  );

  store.subscribe(() => {
    saveState(store.getState());  
  });  
  
  // Add custom 'Promises as actions' support
  store.dispatch = addPromiseSupportToDispatch(store)(store.dispatch);

  return store;
};

export default configureStore;