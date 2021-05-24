import React from "react";
import FavouriteContextMenu from 'components/FavouriteContextMenu'
import { useContextMenu } from "react-contexify";
import { CTA_EVENT } from "const"
import { removeFromFavouriteList } from 'slices/favouriteList'
import { useAppDispatch } from 'hooks/store';
import { useParams } from "react-router-dom";


interface CallToAction {
  name: string | undefined;
  event?: typeof CTA_EVENT.ADD_TO_LIST | typeof CTA_EVENT.REMOVE_FROM_LIST;
}

function CallToAction(props: CallToAction): JSX.Element | null {
  const { name, event } = props;

  if (!name) {
    return null;
  }

  const { favourite } = useParams<{ favourite: string }>();

  const dispatch = useAppDispatch();
  const { show } = useContextMenu({ id: name });

  const onClickHandler = (e: React.MouseEvent): void => {
    if (event === CTA_EVENT.ADD_TO_LIST) {
      show(e)
    }
    if (event === CTA_EVENT.REMOVE_FROM_LIST) {
      const payload = {
        list: favourite,
        track: name
      }
      dispatch(removeFromFavouriteList(payload));
    }
  }

  return (
    <>
      <div onClick={onClickHandler}>
        <span
          data-testid="cta-list-item"
        >
          {name}
        </span>
      </div>
      <FavouriteContextMenu song={name} />
    </>
  );
}

export default CallToAction;