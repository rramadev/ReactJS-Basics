import React from 'react';
import { render } from 'react-dom';

import { Root } from './components/Root';
import configureStore from './store';

const store = configureStore();

// Render the App component directly into the dom, inside the div#root
render(
  <Root store={store} />,
  window.document.getElementById('root')
);
