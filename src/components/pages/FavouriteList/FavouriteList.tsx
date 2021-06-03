import React from "react";
import { selectFavouriteList } from "slices/favouriteList";
import { useAppSelector } from "hooks/store";
import { useParams } from "react-router-dom";
import CallToAction from "components/CallToAction";
import { removeFromFavouriteList } from "slices/favouriteList";
import { useAppDispatch } from "hooks/store";
import List from "components/List";

function FavouriteList(): JSX.Element | null {
  const { favourite } = useParams<{ favourite: string }>();
  const list = useAppSelector((state) => selectFavouriteList(state, favourite));
  const dispatch = useAppDispatch();

  const onClickHandler = (e: React.MouseEvent, id: string) => {
    const payload = {
      list: favourite,
      track: id,
    };
    dispatch(removeFromFavouriteList(payload));
  };

  if (list && !list.length)
    return <h2>{`It looks like you ca use some tracks here`}</h2>;

  const listItems = list.map((listItem: string) => (
    <CallToAction
      clickHandler={onClickHandler}
      key={listItem}
      name={listItem}
    />
  ));

  return (
    <>
      <h1>{favourite}</h1>
      <List>{listItems}</List>
    </>
  );
}

export default FavouriteList;
