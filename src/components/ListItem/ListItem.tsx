import React from "react";
import { Iartist, Isong } from "api/getData";
import { Link } from "react-router-dom";
import { styles } from "./ListItem.styles";
import { createUseStyles } from "react-jss";
import { SONG, ARTIST } from "const";

interface ListItem {
  listItem: Iartist | Isong;
  type: typeof SONG | typeof ARTIST;
}

const useStyles = createUseStyles(styles, { name: "ListItem" });

function ListItem(props: ListItem): JSX.Element | null {
  const { listItem, type } = props;
  const classes = useStyles();

  const addToList = (): void => {
    console.log("listItem", listItem.name, "is added to the list");
  };

  if (type === ARTIST) {
    return (
      <Link to={`/artist/${listItem.name}`}>
        <span className={classes.listItem}>{listItem.name}</span>
      </Link>
    );
  }

  if (type === SONG) {
    return (
      <span className={classes.listItem} onClick={addToList}>
        {listItem.name}
      </span>
    );
  }

  return null;
}

export default ListItem;
