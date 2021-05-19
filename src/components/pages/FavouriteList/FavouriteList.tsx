import React from "react";
import { selectFavouriteList } from 'slices/favouriteList'
import { useAppSelector } from 'hooks/store';
import { useParams } from "react-router-dom";
import List from 'components/List'
import { LINK } from 'const'


function FavouriteList(): JSX.Element | null {
  const { favourite } = useParams<{ favourite: string }>();

  const favouriteList = useAppSelector((state) => selectFavouriteList(state, favourite));
  return (
    <div>favourite: </div>
  )
}

export default FavouriteList;
