import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
      state.push(action.payload)
    },
    removeFromFavourites: (state, action) => {
      return state.filter(drink => drink.id !== action.payload);
    }
  },
})


export const { addToFavourites, removeFromFavourites } = favouritesSlice.actions

export default favouritesSlice.reducer;