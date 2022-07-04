import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  typeRecipes: '',
  foundRecipes: [],
  doneRecipes: [],
  categoriesFilters: [],
  selectedCategory: '',
  recipeInfo: {},
  ingredient: '',
};

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState: INITIAL_STATE,
  reducers: {
    updateFoundRecipes: (state, action) => {
      state.foundRecipes = [...action.payload];
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
    changeRecipeInfo: (state, action) => {
      state.recipeInfo = action.payload;
    },
    setIngredient: (state, action) => {
      state.ingredient = action.payload;
    },
  },
});

export const {
  updateFoundRecipes, updateDoneRecipes,
  changeTypeForDrink, changeTypeForFood,
  setCategoriesFilters, setSelectedCategory,
  changeRecipeInfo, setIngredient,
} = recipesSlice.actions;

export default recipesSlice.reducer;
