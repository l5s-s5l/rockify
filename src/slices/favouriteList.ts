import { createSlice } from '@reduxjs/toolkit';
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
            state.lists[action.payload] = {};
        },
        addToFavouriteList: (state, action) => {
            const { song, list } = action.payload;

            state.lists[list] = [song];
        },
        removeFromFavouriteList: () => {
            //state.value -= 1;
        },
    },
});

export const { createFavouriteList, addToFavouriteList, removeFromFavouriteList } = favouriteListSlice.actions;

export const selectAllFavouriteLists = (state: RootState): string[] => {
    const lists: string[] = []
    Object.keys(state.favourites.lists).map(function (key) {
        lists.push(key)
    });
    return lists;
}

export const selectFavouriteList = (state: RootState, listKey: string): string => {
    console.log('lists', state.favourites.lists[listKey])
    const list = state.favourites.lists[listKey];

    return list
}

export default favouriteListSlice.reducer;
