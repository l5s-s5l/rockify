import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Artist from "pages/Artists";
import Tracks from "pages/Tracks";
import FavouritesOverview from "pages/FavouritesOverview";
import FavouriteList from "pages/FavouriteList";

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
