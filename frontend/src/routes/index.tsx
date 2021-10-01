import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/signup" component={SignUp}></Route>
    </Switch>
  );
};

export default Routes;
