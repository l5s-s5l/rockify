import React from "react";
import { Artist, Song } from "api/getData";
import ListItem from "components/ListItem";
import { styles } from "./List.styles";
import { createUseStyles } from "react-jss";
import { LIST_TYPE, CTA_EVENT } from "const";

const useStyles = createUseStyles(styles, { name: "List" });

interface List {
  data: Artist[] | Song[] | string[] | null;
  type: typeof LIST_TYPE.CTA | typeof LIST_TYPE.LINK;
  event?: typeof CTA_EVENT.ADD_TO_LIST | typeof CTA_EVENT.REMOVE_FROM_LIST;
  contentType?: string | undefined
}

function List(props: List): JSX.Element {
  const classes = useStyles();
  const { data, type, contentType, event } = props;

  return (
    <>
      <ul className={classes.list}>
        {Array.isArray(data) &&
          data.map((listItem: Artist | Song | string) => (
            <li className={classes.listItem} key={typeof listItem === 'string' ? listItem : listItem.id}>
              <ListItem event={event} type={type} listItem={listItem} contentType={contentType} />
            </li>
          ))}
      </ul>
    </>
  );
}

export default List;
