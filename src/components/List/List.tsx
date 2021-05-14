import React, { useEffect } from "react";
import { Artist, Song } from "api/getData";
import ListItem from "components/ListItem";
import { styles } from "./List.styles";
import { createUseStyles } from "react-jss";
import { CTA, LINK } from "const";
import { useAppSelector, useAppDispatch } from 'hooks/store';
import { decrement, increment, selectCount } from 'slices/counter';
import { selectAllFavouriteLists, selectFavouriteList } from 'slices/favouriteList'
import { RootState } from "store";


const useStyles = createUseStyles(styles, { name: "List" });

interface List {
  data: Artist[] | Song[] | null;
  type: typeof CTA | typeof LINK;
}

function List(props: List): JSX.Element {
  const classes = useStyles();
  const { data, type } = props;
  const dispatch = useAppDispatch();

  const favouriteListKey = useAppSelector(selectAllFavouriteLists);
  // const favouriteList = useAppSelector(selectFavouriteList(state, listKey));

  if (Array.isArray(data) && !data.length) {
    return <span> no items found</span>;
  }

  return (
    <>
      {<ul className={classes.list}>
        {favouriteListKey.map((item: string) => (
          <li className={classes.listItem} key={item}>
            {item}
          </li>
        ))}
      </ul>}

      <ul className={classes.list}>
        {Array.isArray(data) &&
          data.map((listItem: Artist | Song) => (
            <li className={classes.listItem} key={listItem.id}>
              <ListItem type={type} listItem={listItem} />
            </li>
          ))}
      </ul>
    </>
  );
}

export default List;
