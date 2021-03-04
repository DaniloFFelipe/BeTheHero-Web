import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import IncidentRegister from './pages/IncidentRegister';
import SuccessRegister from './pages/SuccessRegister';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/incidents/new" component={IncidentRegister} />
        <Route path="/success/:id" component={SuccessRegister} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
