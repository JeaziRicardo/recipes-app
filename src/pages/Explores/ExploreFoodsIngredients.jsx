import React from 'react';
import FooterNav from '../../components/FooterNav';
import Header from '../../components/Header';
import IngredientCard from '../../components/IngredientCard';

function ExploreFoodsIngredients() {
  return (
    <div>
      <Header title="Explore Ingredients" />
      <IngredientCard />
      <FooterNav />
    </div>
  );
}

export default ExploreFoodsIngredients;
