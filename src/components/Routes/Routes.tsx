import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Artist from 'components/pages/Artists';
import Tracks from 'components/pages/Tracks';
import Favourites from 'components/pages/Favourites';

function Routes(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/" component={Artist} />
      <Route path="/favourites" component={Favourites} />
      <Route path={`/artist/:artist`} component={Tracks} />
      <Route> Artist not found </Route>
    </Switch>
  );
}

export default Routes;
