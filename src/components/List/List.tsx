import React from "react";
import { Artist, Song } from "api/getData";
import ListItem from "components/ListItem";
import { styles } from "./List.styles";
import { createUseStyles } from "react-jss";
import { CTA, LINK } from "const";


const useStyles = createUseStyles(styles, { name: "List" });

interface List {
  data: Artist[] | Song[] | null;
  type: typeof CTA | typeof LINK;
}

function List(props: List): JSX.Element {
  const classes = useStyles();
  const { data, type } = props;

  if (Array.isArray(data) && !data.length) {
    return <span> no items found</span>;
  }

  return (
    <ul className={classes.list}>
      {Array.isArray(data) &&
        data.map((listItem: Artist | Song) => (
          <li className={classes.listItem} key={listItem.id}>
            <ListItem type={type} listItem={listItem} />
          </li>
        ))}
    </ul>
  );
}

export default List;
