import React from "react";
import { selectAllFavouriteLists } from "slices/favouriteList";
import { useAppSelector } from "hooks/store";
import List from "components/List";
import LinkItem from "components/LinkItem";
import NewList from "components/NewList";

function FavouritesOverview(): JSX.Element | null {
  const favouriteLists = useAppSelector(selectAllFavouriteLists);

  if (!favouriteLists)
    return <h2>{`I looks like you haven't created a favourite list yet`}</h2>;

  const listItems = favouriteLists.map((listItem: string) => (
    <LinkItem key={listItem} name={listItem} url={`/favourite/${listItem}`} />
  ));

  return (
    <>
      <NewList />
      <List>{listItems}</List>
    </>
  );
}

export default FavouritesOverview;
