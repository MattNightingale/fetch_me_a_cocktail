import { configureStore } from '@reduxjs/toolkit';
import favouritesReducer from './components/Favourites/FavouritesSlice';

export const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
  },
})