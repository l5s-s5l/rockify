import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Artist from 'components/pages/Artists';
import Tracks from 'components/pages/Tracks';

function Routes(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path={`/`}>
          <Artist />
        </Route>
        <Route path={`/artist/:artist`}>
          <Tracks />
        </Route>
        <Route> Artist not found </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
