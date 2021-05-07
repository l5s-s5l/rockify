import React, { useEffect, useState } from "react";
import List from "components/List"
import { getData, Artist } from "api/getData";
import { LINK } from "const";

function Artists(): JSX.Element {
  const [data, setData] = useState<Artist[] | null>(null);
  const getArtists = async () => {
    const artists = await getData("artists");
    setData(artists);
  };
  useEffect(() => {
    getArtists();
  }, []);

  return <List data={data} type={LINK} />
}

export default Artists;
