import React from "react";
import { createUseStyles } from "react-jss";
import { styles } from "./App.styles";
import Routes from "components/Routes";

import { BrowserRouter as Router } from "react-router-dom";
import List from "components/List";
import { ARTIST } from "const";

const useStyles = createUseStyles(styles, { name: "App" });

function App(): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <div className={classes.app}>
        <header>Rockify</header>
        <Router>
          <List type={ARTIST} />
          <Routes />
        </Router>
      </div>
    </>
  );
}

export default App;
