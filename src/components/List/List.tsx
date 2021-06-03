import React, { Children } from "react";
import { styles } from "./List.styles";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(styles, { name: "List" });

interface List {
  children: JSX.Element[] | null;
}

function List(props: List): JSX.Element {
  const { children } = props;
  const classes = useStyles();

  return (
    <ul className={classes.list}>
      {Children.map(children, (child, i) => {
        return (
          <li key={i} className={classes.listItem}>
            {child}
          </li>
        );
      })}
    </ul>
  );
}

export default List;
