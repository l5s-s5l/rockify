import React from "react";
import { selectAllFavouriteLists } from 'slices/favouriteList'
import { useAppSelector } from 'hooks/store';
import List from 'components/List'
import CreateList from 'components/CreateList'
import { LIST_TYPE } from 'const'

function FavouritesOverview(): JSX.Element | null {
  const favouriteLists = useAppSelector(selectAllFavouriteLists);
  return (
    <>
      <CreateList />
      {favouriteLists.length ?
        <List data={favouriteLists} type={LIST_TYPE.LINK} contentType={'favourite'} />
        :
        <h2>{`I looks like you haven't created a favourite list yet`}</h2>
      }
    </>
  )
}

export default FavouritesOverview;
