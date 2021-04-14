import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "components/List";
import { SONG, ARTIST } from "const";

function Routes(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path={`/`}>
          <List type={ARTIST} />
        </Route>
        <Route path={`/artist/:artist`}>
          <List type={SONG} />
        </Route>
        <Route> Artist not found </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
