import React from "react";
import { createUseStyles } from "react-jss";
import { Artist, Song } from "api/getData";
import { styles } from "./ListItem.styles";
import LinkItem from 'components/LinkItem'
import { LIST_TYPE, CTA_EVENT } from "const";
import CallToAction from "components/CallToAction";

interface ListItem {
  listItem: Artist | Song | string;
  type: typeof LIST_TYPE.CTA | typeof LIST_TYPE.LINK;
  event?: typeof CTA_EVENT.ADD_TO_LIST | typeof CTA_EVENT.REMOVE_FROM_LIST;
  contentType?: string | undefined,
}

const useStyles = createUseStyles(styles, { name: "ListItem" });

function ListItem(props: ListItem): JSX.Element | null {
  const { listItem, type, contentType, event } = props;
  const classes = useStyles();

  const listValue = typeof listItem === 'string' ? listItem : listItem.name;

  return (
    <div className={classes.listItem}>
      { type === LIST_TYPE.LINK ?
        <LinkItem name={listValue} url={`/${contentType}/${listValue}`} />
        :
        <CallToAction event={event} name={listValue} />}
    </div>
  )
}

export default ListItem;
