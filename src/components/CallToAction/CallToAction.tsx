import React from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import AddToFavourite from 'components/AddToFavourite'

interface CallToAction {
  name: string | undefined;
}


function CallToAction(props: CallToAction): JSX.Element | null {
  const { name } = props;
  if (!name) {
    return null;
  }
  const addToList = (): void => {
    // alert(`listItem", ${name}, "is added to you're list`);
  };
  return (
    <>
      <ContextMenuTrigger id={name}>
        <span
          data-testid="cta-list-item"
          onClick={addToList}
        >
          {name}
        </span>
      </ContextMenuTrigger>
      <AddToFavourite id={name} />
    </>
  );
}

export default CallToAction;