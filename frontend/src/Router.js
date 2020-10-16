import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeMobile from './components/mobile/HomeMobile.js';
import NotFound from './components/404/NotFound.js';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeMobile} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
