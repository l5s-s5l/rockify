import React, { useEffect, useState } from "react";
import List from "components/List";
import { getData, Song } from "api/getData";
import { useContextMenu } from "react-contexify";
import { useParams } from "react-router-dom";
import CallToAction from "components/CallToAction";

function Track(): JSX.Element {
  const [data, setData] = useState<Song[] | null>(null);
  const { artist } = useParams<{ artist: string }>();
  const { show } = useContextMenu();
  const getTracks = async () => {
    const songs = await getData("songs", artist);
    setData(songs);
  };

  useEffect(() => {
    getTracks();
  }, []);

  const onClickHandler = (e: React.MouseEvent, id: string) => {
    show(e, {
      id: id,
    });
  };

  if (!data) return <p>Loading...</p>;

  const listItems = data.map((listItem: Song) => (
    <CallToAction
      clickHandler={onClickHandler}
      key={listItem.id}
      name={listItem.name}
    />
  ));

  return (
    <>
      <h1>Tracks</h1>
      <List>{listItems}</List>
    </>
  );
}

export default Track;
