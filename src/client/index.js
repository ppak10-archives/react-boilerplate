/**
 * index.js
 * Entry file for webpack
 */

// Node Modules
import React from 'react';
import {render} from 'react-dom';

// Style
import './style';

// App
import {App} from './components/App';

// Document Element
render(<App />, document.getElementById('root'));
