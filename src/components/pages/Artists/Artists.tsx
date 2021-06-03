import React, { useEffect, useState } from "react";
import List from "components/List";
import { getData, Artist } from "api/getData";
import LinkItem from "components/LinkItem";

function Artists(): JSX.Element {
  const [data, setData] = useState<Artist[] | null>(null);
  const getArtists = async () => {
    const artists = await getData("artists");
    setData(artists);
  };
  useEffect(() => {
    getArtists();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  const listItems = data.map((listItem: Artist) => (
    <LinkItem
      key={listItem.id}
      name={listItem.name}
      url={`/artist/${listItem.name}`}
    />
  ));

  return <List>{listItems}</List>;
}

export default Artists;
