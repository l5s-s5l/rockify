import React from "react";
import { Link } from "react-router-dom";
interface LinkItem {
  name: string | undefined;
}


function LinkItem(props: LinkItem): JSX.Element {
  const { name } = props;

  return (
    <Link data-testid="link-list-item" to={`/artist/${name}`}>
      <span>{name}</span>
    </Link>
  );
}

export default LinkItem;
