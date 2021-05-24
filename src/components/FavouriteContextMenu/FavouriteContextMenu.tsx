import React from "react";
import { useAppSelector } from 'hooks/store';
import { selectAllFavouriteLists, addToFavouriteList } from 'slices/favouriteList'
import { useAppDispatch } from 'hooks/store';
import LinkItem from "components/LinkItem"
import { Menu, Item } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import { useParams } from "react-router-dom";


interface AddToFavourite {
  song: string | undefined;
}

interface FavouriteData {
  data?: {
    list: string,
    song: string,
    artist: string,
  }
}

function FavouriteContextMenu(props: AddToFavourite): JSX.Element | null {
  const { song } = props;
  if (!song) return null

  const { artist } = useParams<{ artist: string }>();
  const favouriteLists = useAppSelector(selectAllFavouriteLists);
  const dispatch = useAppDispatch();

  function handleItemClick({ data }: FavouriteData) {
    dispatch(addToFavouriteList(data));
  }

  return (
    <Menu id={song}>
      {
        favouriteLists.map((listItem: any) => (
          <Item
            data={{ list: listItem, artist, song }}
            onClick={handleItemClick}
            key={listItem}>
            {listItem}
          </Item>
        ))}
      <Item><LinkItem url='/favourites' name='Create new list' /></Item>
    </Menu>
  );
}

export default FavouriteContextMenu;
