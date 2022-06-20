import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Foods from '../pages/Foods';
import Login from '../pages/Login';

function Routers() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/foods" component={ Foods } />
    </Switch>
  );
}

export default Routers;
