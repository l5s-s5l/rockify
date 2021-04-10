import React, { useEffect, useState } from "react";
import { getData, Artist, Song } from "api/getData";
import { createUseStyles } from "react-jss";
import "./App.css";

const styles = {
  app: {
    textAlign: "center",
  },

  "app-logo": {
    height: "40vmin",
    pointerEvents: "none",
  },
  appHeader: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },

  appLink: {
    color: "#61dafb",
  },
};

const useStyles = createUseStyles(styles, { name: "App" });

function App(): JSX.Element {
  const classes = useStyles();
  const [data, setData] = useState<Artist[] | Song[] | null>(null);

  const getArtists = async () => {
    const artists = await getData("artists");
    setData(artists);
  };

  useEffect(() => {
    if (!data) {
      getArtists();
    }
  }, []);

  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>Rockify</header>
      <ul>
        {Array.isArray(data) &&
          data.map((artist: Artist) => <li key={artist.id}>{artist.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
