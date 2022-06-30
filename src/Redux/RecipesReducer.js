import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  typeRecipes: '',
  foundRecipes: [],
  favoriteRecipes: [],
  doneRecipes: [],
  categoriesFilters: [],
  selectedCategory: '',
  recipeDetails: {},
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
    setCategoriesFilters: (state, action) => {
      state.categoriesFilters = [...action.payload];
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    changeRecipeDetails: (state, action) => {
      state.recipeDetails = action.payload;
    },
  },
});

export const { updateFavoriteRecipes,
  updateFoundRecipes, updateDoneRecipes,
  changeTypeForDrink, changeTypeForFood,
  setCategoriesFilters, setSelectedCategory,
  changeRecipeDetails,
} = recipesSlice.actions;

export default recipesSlice.reducer;
