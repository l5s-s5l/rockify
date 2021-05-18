
import React, { useEffect, useState } from "react";
import LinkItem from "components/LinkItem";
import { createUseStyles } from "react-jss";
import { styles } from "./Menu.styles"
import classes from "*.module.css";

const useStyles = createUseStyles(styles, { name: "Menu" });

function Menu(): JSX.Element {
  const classes = useStyles();

  return (
    <ul className={classes.menu}>
      <li className={classes.menuItem}>
        <LinkItem name='Artists' url='/' />
      </li>
      <li className={classes.menuItem}>
        <LinkItem name='Favourites' url='/favourites' />
      </li>
    </ul>
  )
}

export default Menu;
