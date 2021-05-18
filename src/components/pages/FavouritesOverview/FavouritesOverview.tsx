import React from "react";
import { selectAllFavouriteLists } from 'slices/favouriteList'
import { useAppSelector } from 'hooks/store';
import List from 'components/List'
import { LINK } from 'const'

function FavouritesOverview(): JSX.Element | null {
  const favouriteLists = useAppSelector(selectAllFavouriteLists);
  return <List data={favouriteLists} type={LINK} contentType={'favourite'} />
}

export default FavouritesOverview;
