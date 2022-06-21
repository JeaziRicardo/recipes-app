import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Foods from '../pages/Foods';
import Drinks from '../pages/Drinks';
import Profile from '../pages/Profile';
import Login from '../pages/Login';

function Routers() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/foods" component={ Foods } />
      <Route path="/drinks" component={ Drinks } />
      <Route path="/profile" component={ Profile } />
    </Switch>
  );
}

export default Routers;
