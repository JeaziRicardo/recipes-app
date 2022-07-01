import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesFilter from '../../components/CategoriesFilters';
import FooterNav from '../../components/FooterNav';
import Header from '../../components/Header';
import RenderRecipes from '../../components/RenderRecipes';
import { changeTypeForFood, updateFoundRecipes } from '../../Redux/RecipesReducer';
import { emptyFetch, fetchByIngredient } from '../../services/API';

function Foods() {
  const dispatch = useDispatch();
  const ingredient = useSelector(({ recipes }) => (recipes.ingredient));
  dispatch(changeTypeForFood());

  useEffect(() => {
    async function getMeals() {
      if (ingredient === '') {
        const data = await emptyFetch('food');
        dispatch(updateFoundRecipes(data.meals));
      } else {
        const { meals } = await fetchByIngredient(ingredient, 'food');
        dispatch(updateFoundRecipes(meals));
      }
    }
    getMeals();
  }, [dispatch, ingredient]);

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
