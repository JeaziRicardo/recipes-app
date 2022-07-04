import React from 'react';
import Header from '../../components/Header';
import DoneAndFavoritesBtn from '../../components/DoneAndFavoritesBtn';

function FavoriteRecipes() {
  return (
    <div>
      <Header title="Favorite Recipes" />
      <DoneAndFavoritesBtn />
    </div>
  );
}

export default FavoriteRecipes;
