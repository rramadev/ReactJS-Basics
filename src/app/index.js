import React from 'react';
import { render } from 'react-dom';

import { App } from './containers/App';

// Render the App component directly into the dom, inside the div#app
render(<App />, window.document.getElementById('app'));
