import { configureStore } from '@reduxjs/toolkit';
import favouriteListReducer from 'slices/favouriteList';

export const store = configureStore({
  reducer: {
    favourites: favouriteListReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

