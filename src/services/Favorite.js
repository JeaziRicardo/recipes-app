const FAVORITES = 'favoriteRecipes';
const setFavoritesRecipes = (recipe) => {
  const getFavorites = localStorage.getItem(FAVORITES);
  const favorites = JSON.parse(getFavorites);

  const newFavoriteRecipe = [{
    id: recipe.idDrink || recipe.idMeal,
    type: recipe.idMeal ? 'food' : 'drink',
    nationality: recipe.strArea || '',
    category: recipe.strCategory,
    alcoholicOrNot: recipe.strAlcoholic || '',
    name: recipe.strDrink || recipe.strMeal,
    image: recipe.strMealThumb || recipe.strDrinkThumb,
  }];

  if (!favorites || favorites === []) {
    localStorage.setItem(FAVORITES, JSON.stringify(newFavoriteRecipe));
    return 'black';
  }
  const isFavoriteRecipe = favorites
    .some((favoriteRecipe) => favoriteRecipe.id === recipe.idDrink
    || favoriteRecipe.id === recipe.idMeal);
  if (isFavoriteRecipe) {
    const newFavoriteRecipes = favorites
      .filter((favoriteRecipe) => favoriteRecipe.id !== recipe.idDrink
      && favoriteRecipe.id !== recipe.idMeal);
    localStorage.setItem(FAVORITES, JSON.stringify(newFavoriteRecipes));
    return 'white';
  }
  const newFavoriteRecipes = [...favorites, ...newFavoriteRecipe];
  localStorage.setItem(FAVORITES, JSON.stringify(newFavoriteRecipes));
  return 'black';
};

function verifyFavoriteRecipe(recipe) {
  const getFavorites = localStorage.getItem(FAVORITES);
  const favorites = JSON.parse(getFavorites);
  if (favorites) {
    const isFavoriteRecipe = favorites
      .some((favoriteRecipe) => favoriteRecipe.id === recipe.idDrink
      || favoriteRecipe.id === recipe.idMeal);
    if (isFavoriteRecipe) {
      return 'black';
    }
    return 'black';
  }
}

export { setFavoritesRecipes, verifyFavoriteRecipe };
