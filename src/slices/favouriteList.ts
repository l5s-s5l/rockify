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
            //state.favouriteLists['test'] = action.payload;
        },
        removeFromFavouriteList: (state) => {
            //state.value -= 1;
        },

    },
});

export const { createFavouriteList, addToFavouriteList, removeFromFavouriteList } = favouriteListSlice.actions;

export const selectAllFavouriteLists = (state: RootState) => {
    const lists: string[] = []
    Object.keys(state.favourites.lists).map(function (key) {
        lists.push(key)
    });
    return lists;
}

// export const selectFavouriteList = (state: RootState, listKey: string) => {
//     return state.favourites.lists[listKey]
// }

export const selectFavouriteList = (state: RootState, listKey: string) => {
    return state.favourites.lists[listKey]
}

export default favouriteListSlice.reducer;
