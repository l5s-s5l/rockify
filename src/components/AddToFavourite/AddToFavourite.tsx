import React, { useRef } from "react";
import { useAppSelector } from 'hooks/store';
import { selectAllFavouriteLists, addToFavouriteList } from 'slices/favouriteList'
import { useAppDispatch } from 'hooks/store';
import LinkItem from "components/LinkItem"
import { Menu, Item } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";

interface AddToFavourite {
  id: string | undefined;
}

interface FavouriteData {
  data: {
    list: string,
    song: string,
  }
}

function AddToFavourite(props: AddToFavourite): JSX.Element | null {
  const { id } = props;

  if (!id) return null

  const favouriteLists = useAppSelector(selectAllFavouriteLists);
  const dispatch = useAppDispatch();
  const listItem = useRef();

  const noFavouritLists = favouriteLists.length === 0;


  function handleItemClick({ data }: any) {
    dispatch(addToFavouriteList(data));
  }

  return (
    <Menu id={id}>
      {noFavouritLists
        ?
        <Item><LinkItem url='/favourites' name='Create a list' /></Item>
        :
        favouriteLists.map((listItem) => (
          <Item data={{ list: listItem, song: id }} onClick={handleItemClick} key={listItem}>{listItem}</Item>
        ))}
    </Menu>
  );
}

export default AddToFavourite;
