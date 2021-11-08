import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './pages/pageNotFound';
import Dashboard from './pages/dashboard';
import Session from './pages/session/session';

const Routes = props => {
  return (
  	<Switch>
  		<Route path="/lesson/:type" component={Session} />
        <Route exact path="/" component={Dashboard} />
        <Route component={PageNotFound} />
      </Switch>
  	)
}

export default Routes;