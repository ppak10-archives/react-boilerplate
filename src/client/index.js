/**
 * index.js
 * Entry file for webpack
 */

// Node Modules
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

// Store
import {configureStore} from './store';

// Style
import './style';

// App
import {App} from './components/App';

// Document Element
render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
