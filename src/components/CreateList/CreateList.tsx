import React, { useRef } from "react";
import { createFavouriteList } from 'slices/favouriteList';
import { useAppDispatch } from 'hooks/store';
import { styles } from "./CreateList.styles";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(styles, { name: "ListItem" });


function CreateList(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const createNewFavouriteList = (): void => {
    if (inputRef?.current?.value.length) {
      dispatch(createFavouriteList(inputRef.current.value));
    }
  }

  return (
    <>
      <input className={classes.input} ref={inputRef} />
      <button className={classes.button} onClick={createNewFavouriteList}> Add list </button>
    </>
  );
}

export default CreateList;
