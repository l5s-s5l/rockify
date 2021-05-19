import React from "react";
import AddToFavourite from 'components/AddToFavourite'
import { useContextMenu } from "react-contexify";

interface CallToAction {
  name: string | undefined;
}

const MENU_ID = "menu-id";
function CallToAction(props: CallToAction): JSX.Element | null {
  const { name } = props;

  if (!name) {
    return null;
  }

  const { show } = useContextMenu({ id: name });

  return (
    <>
      <div onClick={show}>
        <span
          data-testid="cta-list-item"
        >
          {name}
        </span>
      </div>
      <AddToFavourite id={name} />
    </>
  );
}

export default CallToAction;