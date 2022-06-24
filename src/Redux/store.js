import { configureStore } from '@reduxjs/toolkit';
import recipes from './RecipesReducer';

const store = configureStore({
  reducer: {
    recipes,
  },
});

export default store;
