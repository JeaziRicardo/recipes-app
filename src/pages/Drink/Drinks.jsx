import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesFilter from '../../components/CategoriesFilters';
import FooterNav from '../../components/FooterNav';
import Header from '../../components/Header';
import RenderRecipes from '../../components/RenderRecipes';
import { changeTypeForDrink, updateFoundRecipes } from '../../Redux/RecipesReducer';
import { emptyFetch, fetchByIngredient } from '../../services/API';

function Drinks() {
  const dispatch = useDispatch();
  const ingredient = useSelector(({ recipes }) => (recipes.ingredient));
  dispatch(changeTypeForDrink());

  useEffect(() => {
    async function getDrink() {
      if (ingredient === '') {
        const data = await emptyFetch('drink');
        dispatch(updateFoundRecipes(data.drinks));
      } else {
        const { drinks } = await fetchByIngredient(ingredient, 'drink');
        dispatch(updateFoundRecipes(drinks));
      }
    }
    getDrink();
  }, [dispatch, ingredient]);

  return (
    <div>
      <Header title="Drinks" />
      <CategoriesFilter />
      <RenderRecipes />
      <FooterNav />
    </div>
  );
}

export default Drinks;
