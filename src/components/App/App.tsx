import React from "react";
import { createUseStyles } from "react-jss";
import { styles } from "./App.styles";
import Routes from "components/Routes";
import { Provider } from 'react-redux';
import { store } from 'store';
import { BrowserRouter as Router } from "react-router-dom";
import CreateList from 'components/CreateList'
import LinkItem from 'components/LinkItem'
import Menu from 'components/Menu'

const useStyles = createUseStyles(styles, { name: "App" });

function App(): JSX.Element {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Router>
        <Menu />
        <div className={classes.content}>
          <Routes />
        </div>
      </Router>

    </Provider>
  );
}

export default App;
