import React from "react";
import FavouriteContextMenu from "components/FavouriteContextMenu";

interface CallToAction {
  name: string | undefined;
  clickHandler?: (e: React.MouseEvent, id: string) => void;
}

function CallToAction(props: CallToAction): JSX.Element | null {
  const { name, clickHandler } = props;

  if (!name) {
    return null;
  }
  return (
    <>
      <div onClick={(e) => clickHandler && clickHandler(e, name)}>
        <span data-testid="cta-list-item">{name}</span>
      </div>
      <FavouriteContextMenu song={name} />
    </>
  );
}

export default CallToAction;
