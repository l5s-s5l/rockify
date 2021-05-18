import React from "react";
import { createUseStyles } from "react-jss";
import { Artist, Song } from "api/getData";
import { styles } from "./ListItem.styles";
import LinkItem from 'components/LinkItem'
import { CTA, LINK } from "const";
import CallToAction from "components/CallToAction";

interface ListItem {
  listItem: Artist | Song | string;
  type: typeof CTA | typeof LINK;
  contentType?: string | undefined,
}

const useStyles = createUseStyles(styles, { name: "ListItem" });

function ListItem(props: ListItem): JSX.Element | null {
  const { listItem, type, contentType } = props;
  const classes = useStyles();

  const listValue = typeof listItem === 'string' ? listItem : listItem.name;

  return (
    <div className={classes.listItem}>
      { type === LINK ?
        <LinkItem name={listValue} url={`/${contentType}/${listValue}`} />
        :
        <CallToAction name={listValue} />}
    </div>
  )
}

export default ListItem;
