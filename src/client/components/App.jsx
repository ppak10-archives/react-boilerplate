/**
 * App.jsx
 * React app file
 */

// Node Modules
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Components
import {Navigation} from './Navigation';

// Pages
import {AboutPage} from '../pages/About';
import {HomePage} from '../pages/Home';

export const App = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  </Router>
);
