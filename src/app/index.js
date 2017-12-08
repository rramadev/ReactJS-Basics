import React from 'react';
import { render } from 'react-dom';

import { Root } from './containers/Root';

// Render the App component directly into the dom, inside the div#root
render(
  <Root />,
  window.document.getElementById('root')
);
