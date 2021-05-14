import React, { useRef } from "react";
import { createUseStyles } from "react-jss";
import { styles } from "./App.styles";
import Routes from "components/Routes";
import { Provider } from 'react-redux';
import { store } from 'store';
import { BrowserRouter as Router } from "react-router-dom";
import CreateList from 'components/CreateList'

const useStyles = createUseStyles(styles, { name: "App" });

function App(): JSX.Element {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <div className={classes.app}>
        <header>Rockify</header>


        <CreateList />
        <Router>
          <Routes />
        </Router>


      </div>
    </Provider>
  );
}

export default App;
