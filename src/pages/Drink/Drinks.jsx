import React from 'react';
import { useDispatch } from 'react-redux';
import CategoriesFilter from '../../components/CategoriesFilters';
import FooterNav from '../../components/FooterNav';
import Header from '../../components/Header';
import RenderRecipes from '../../components/RenderRecipes';
import { changeTypeForDrink, updateFoundRecipes } from '../../Redux/RecipesReducer';
import { emptyFetch } from '../../services/API';

function Drinks() {
  const dispatch = useDispatch();
  dispatch(changeTypeForDrink());

  async function getDrink() {
    const data = await emptyFetch('drink');
    dispatch(updateFoundRecipes(data.drinks));
  }
  getDrink();

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
