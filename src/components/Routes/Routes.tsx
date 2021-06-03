import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Artist from "components/pages/Artists";
import Tracks from "components/pages/Tracks";
import FavouritesOverview from "components/pages/FavouritesOverview";
import FavouriteList from "components/pages/FavouriteList";

function Routes(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/" component={Artist} />
      <Route path="/favourites" component={FavouritesOverview} />
      <Route path="/favourite/:favourite" component={FavouriteList} />
      <Route path={`/artist/:artist`} component={Tracks} />
      <Route> Artist not found </Route>
    </Switch>
  );
}

export default Routes;
