import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  typeRecipes: '',
  foundRecipes: [],
  favoriteRecipes: [],
  doneRecipes: [],
};

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState: INITIAL_STATE,
  reducers: {
    updateFoundRecipes: (state, action) => {
      state.foundRecipes = [...action.payload];
    },
    updateFavoriteRecipes: (state, action) => {
      state.favoriteRecipes = [...action.payload];
    },
    updateDoneRecipes: (state, action) => {
      state.doneRecipes = [...action.payload];
    },
    changeTypeForDrink: (state) => {
      state.typeRecipes = 'drink';
    },
    changeTypeForFood: (state) => {
      state.typeRecipes = 'food';
    },
  },
});

export const { updateFavoriteRecipes,
  updateFoundRecipes, updateDoneRecipes,
  changeTypeForDrink, changeTypeForFood,
} = recipesSlice.actions;

export default recipesSlice.reducer;
