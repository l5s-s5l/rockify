import React, { useEffect, useState } from "react";
import { getData, Iartist, Isong } from "api/getData";
import ListItem from "components/ListItem";
import { styles } from "./List.styles";
import { createUseStyles } from "react-jss";
import { useParams } from "react-router-dom";
import { SONG, ARTIST } from "const";

const useStyles = createUseStyles(styles, { name: "List" });

interface List {
  type: typeof ARTIST | typeof SONG;
}

function List(props: List): JSX.Element {
  const classes = useStyles();
  const { type } = props;
  const { artist } = useParams<{ artist: string }>();
  const [data, setData] = useState<Iartist[] | Isong[] | null>(null);

  const getArtists = async () => {
    const artists = await getData("artists");
    setData(artists);
  };

  const getSongs = async () => {
    const songs = await getData("songs", artist);
    setData(songs);
  };

  useEffect(() => {
    if (!artist) {
      getArtists();
    }

    if (artist) {
      setData(null);
      getSongs();
    }
  }, [artist]);

  return (
    <ul className={classes.list}>
      {Array.isArray(data) &&
        data.map((listItem: Iartist | Isong) => (
          <li className={classes.listItem} key={listItem.id}>
            <ListItem type={type} listItem={listItem} />
          </li>
        ))}
    </ul>
  );
}

export default List;
