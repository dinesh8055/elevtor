import React from 'react';
import { render } from 'react-dom';

import css from './css/home.css'

import Landing from './components/Landing/index.js'

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Landing}>
    </Route>
  </Router>
)

render(router, document.getElementById('root'));
