import React from 'react';
import { useDispatch } from 'react-redux';
import CategoriesFilter from '../../components/CategoriesFilters';
import FooterNav from '../../components/FooterNav';
import Header from '../../components/Header';
import RenderRecipes from '../../components/RenderRecipes';
import { changeTypeForFood, updateFoundRecipes } from '../../Redux/RecipesReducer';
import { emptyFetch } from '../../services/API';

function Foods() {
  const dispatch = useDispatch();
  dispatch(changeTypeForFood());

  async function getMeals() {
    const data = await emptyFetch('food');
    dispatch(updateFoundRecipes(data.meals));
  }
  getMeals();
  return (
    <div>
      <Header title="Foods" />
      <CategoriesFilter />
      <RenderRecipes />
      <FooterNav />
    </div>
  );
}

export default Foods;
