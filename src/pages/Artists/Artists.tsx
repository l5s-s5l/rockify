import React from "react";
import List from "components/List";
import { Artist } from "types";
import LinkItem from "components/LinkItem";
import useFetchData from "hooks/useFetchData";

function Artists(): JSX.Element {
  const { data, isLoading, error } = useFetchData({ type: "artists" });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error || !data) {
    return <p>something went wrong...</p>;
  }

  const listItems = data?.map((listItem: Artist) => (
    <LinkItem
      key={listItem.id}
      name={listItem.name}
      url={`/artist/${listItem.name}`}
    />
  ));

  return <List>{listItems}</List>;
}

export default Artists;
