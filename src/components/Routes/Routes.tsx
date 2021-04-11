import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "components/List";
import { SONG } from "const";

function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path={`/artist/:artist`}>
        <List type={SONG} />
      </Route>
    </Switch>
  );
}

export default Routes;
