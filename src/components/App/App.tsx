import React from "react";

import { createUseStyles } from "react-jss";
import logo from "images/logo.svg";
import "./App.css";

//https://d3txbfs48hwpcq.cloudfront.net/db.json

const styles = {
  app: {
    textAlign: "center",
  },

  "app-logo": {
    height: "40vmin",
    pointerEvents: "none",
  },
  appHeader: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },

  appLink: {
    color: "#61dafb",
  },
};

const useStyles = createUseStyles(styles, { name: "App" });

function App(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <img src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={classes.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
