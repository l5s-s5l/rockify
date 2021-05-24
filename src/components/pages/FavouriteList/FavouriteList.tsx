import React from "react";
import { selectFavouriteList } from 'slices/favouriteList'
import { Favourite } from "api/getData";
import { useAppSelector } from 'hooks/store';
import { useParams } from "react-router-dom";
import List from 'components/List'
import { LIST_TYPE, CTA_EVENT } from "const";

function FavouriteList(): JSX.Element | null {
  const { favourite } = useParams<{ favourite: string }>();
  const list = useAppSelector((state) => selectFavouriteList(state, favourite))

  if (list && !list.length) return <h2>{`It looks like you ca use some tracks here`}</h2>

  return (
    <>
      <h1>{favourite}</h1>
      <List event={CTA_EVENT.REMOVE_FROM_LIST} type={LIST_TYPE.CTA} data={list} />
    </>
  )
}

export default FavouriteList;
