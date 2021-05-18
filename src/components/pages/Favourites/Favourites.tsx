import React from "react";
import { selectAllFavouriteLists } from 'slices/favouriteList'
import { useAppSelector } from 'hooks/store';

function FavouriteList(): JSX.Element | null {
  const favouriteLists = useAppSelector(selectAllFavouriteLists);

  return (
    <ul>
      {favouriteLists.map((list: string) => (
        <li key={list}>
          {list}
        </li>
      ))}
    </ul>
  );
}

export default FavouriteList;
