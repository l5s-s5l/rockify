import React from "react";
import List from "components/List";
import { Song } from "types";
import { useContextMenu } from "react-contexify";
import { useParams } from "react-router-dom";
import CallToAction from "components/CallToAction";
import useFetchData from "hooks/useFetchData";

function Track(): JSX.Element {
  const { show } = useContextMenu();
  const { artist } = useParams<{ artist: string }>();
  const { data, isLoading, error } = useFetchData({
    type: "songs",
    query: artist,
  });

  const onClickHandler = (e: React.MouseEvent, id: string) => {
    show(e, {
      id: id,
    });
  };

  if (isLoading) return <p>Loading...</p>;
  if (error || !data) return <p>Something went wrong...</p>;

  const listItems = data.map((listItem: Song) => (
    <CallToAction
      clickHandler={onClickHandler}
      key={listItem.id}
      name={listItem.name}
    />
  ));

  return (
    <>
      <h1>{artist}</h1>
      <List>{listItems}</List>
    </>
  );
}

export default Track;
