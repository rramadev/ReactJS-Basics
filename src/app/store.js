import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { loadState, saveState } from './localStorage';

import userReducer from './reducers/userReducer';
import linkReducer from './reducers/linkReducer';

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

  return store;
};

export default configureStore;