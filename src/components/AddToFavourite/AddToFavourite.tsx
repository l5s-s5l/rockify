import React, { useRef } from "react";
import { useAppSelector } from 'hooks/store';
import { selectAllFavouriteLists } from 'slices/favouriteList'
import { ContextMenu, MenuItem } from "react-contextmenu";
import LinkItem from "components/LinkItem"

interface AddToFavourite {
  id: string | undefined;
}

function AddToFavourite(props: AddToFavourite): JSX.Element | null {
  const { id } = props;
  if (!id) return null
  const favouriteLists = useAppSelector(selectAllFavouriteLists);

  return (
    <>
      {favouriteLists.map((list) => {
        { list }
      })}
      <ContextMenu id={id}>
        {favouriteLists.length === 0
          ?
          <MenuItem><LinkItem url='/favourites' name='>First create a list' /></MenuItem>
          :
          <>
            <MenuItem>uno</MenuItem>
            <MenuItem>duo</MenuItem>
            {favouriteLists.map((list) => {
              <MenuItem>{list}</MenuItem>
            })
            }
          </>
        }
      </ContextMenu>
    </>
  );
}

export default AddToFavourite;
