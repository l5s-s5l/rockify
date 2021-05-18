import React from "react";
import { Link } from "react-router-dom";
interface LinkItem {
  name: string | undefined;
  url: string
}

function LinkItem(props: LinkItem): JSX.Element {
  const { name, url } = props;

  return (
    <Link data-testid="link-list-item" to={url}>
      <span>{name}</span>
    </Link>
  );
}

export default LinkItem;
