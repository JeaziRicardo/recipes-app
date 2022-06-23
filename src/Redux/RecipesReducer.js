import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  foundRecipes: [],
  favoriteRecipes: [],
  doneRecipes: [],
};

export const recipesSlice = createSlice({
  name: 'recipes',
  INITIAL_STATE,
  reducer: {
    updateFoundRecipes: (state, action) => {
      state.foundRecipes = [...action.payload];
    },
    updateFavoriteRecipes: (state, action) => {
      state.favoriteRecipes = [...action.payload];
    },
    updateDoneRecipes: (state, action) => {
      state.doneRecipes = [...action.payload];
    },
  },
});

export const { updateFavoriteRecipes,
  updateFoundRecipes, updateDoneRecipes,
} = recipesSlice.actions;

export default recipesSlice.reducer;
