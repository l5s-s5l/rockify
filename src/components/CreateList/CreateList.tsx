import React, { useRef } from "react";
import { createFavouriteList } from 'slices/favouriteList';
import { useAppDispatch } from 'hooks/store';


function CreateList(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const createNewFavouriteList = (): void => {
    if (inputRef?.current?.value.length) {
      dispatch(createFavouriteList(inputRef.current.value));
    }
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={createNewFavouriteList}> New Favourite list </button>
    </>
  );
}

export default CreateList;
