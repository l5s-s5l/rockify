import { createSlice, current } from '@reduxjs/toolkit';
import { RootState } from 'store';

export interface favouriteListState {
  lists: any;
}

const initialState: favouriteListState = {
  lists: {},
};

export const favouriteListSlice = createSlice({
  name: 'favouriteList',
  initialState,
  reducers: {
    createFavouriteList: (state, action) => {
      state.lists[action.payload] = [];
    },
    addToFavouriteList: (state, action) => {
      const { song, list, artist } = action.payload;
      state.lists[list].push((`${artist} - ${song}`))
    },
    removeFromFavouriteList: (state, action) => {
      const { list, track } = action.payload
      const trackTitle = track.substr(0, track.indexOf('-'));
      const currentList = current(state.lists[list])
      const index = currentList.findIndex((listItem: string) => listItem === trackTitle);

      state.lists[list].splice(index, 1);
    },
  },
});

export const { createFavouriteList, addToFavouriteList, removeFromFavouriteList } = favouriteListSlice.actions;

export const selectAllFavouriteLists = (state: RootState): string[] => {
  const lists: string[] = []
  state.favourites.lists && Object.keys(state.favourites.lists).map(function (key) {
    lists.push(key)
  });
  return lists;
}

export const selectFavouriteList = (state: RootState, listKey: string): string[] => state?.favourites?.lists[listKey];

export default favouriteListSlice.reducer;
