import React from "react";
import { Artist, Song } from "api/getData";
import ListItem from "components/ListItem";
import { styles } from "./List.styles";
import { createUseStyles } from "react-jss";
import { CTA, LINK } from "const";

const useStyles = createUseStyles(styles, { name: "List" });

interface List {
  data: Artist[] | Song[] | string[] | null;
  type: typeof CTA | typeof LINK;
  contentType?: string | undefined
}

function List(props: List): JSX.Element {
  const classes = useStyles();
  const { data, type, contentType } = props;

  if (Array.isArray(data) && !data.length) {
    return <div className={classes.placeholder}>Create a new list</div>;
  }

  return (
    <>
      <ul className={classes.list}>
        {Array.isArray(data) &&
          data.map((listItem: Artist | Song | string) => (
            <li className={classes.listItem} key={typeof listItem === 'string' ? listItem : listItem.id}>
              <ListItem type={type} listItem={listItem} contentType={contentType} />
            </li>
          ))}
      </ul>
    </>
  );
}

export default List;
