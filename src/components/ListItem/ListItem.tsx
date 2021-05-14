import React from "react";
import { createUseStyles } from "react-jss";
import { Artist, Song } from "api/getData";
import { styles } from "./ListItem.styles";

import LinkItem from 'components/LinkItem'
import { CTA, LINK } from "const";
import CallToAction from "components/CallToAction";

interface ListItem {
  listItem: Artist | Song;
  type: typeof CTA | typeof LINK;
}

const useStyles = createUseStyles(styles, { name: "ListItem" });


function ListItem(props: ListItem): JSX.Element | null {
  const { listItem, type } = props;
  const classes = useStyles();

  return (
    <div className={classes.listItem}>
      { type === LINK ?
        <LinkItem name={listItem.name} />
        :
        <CallToAction name={listItem.name} />}
    </div>
  )
}

export default ListItem;
