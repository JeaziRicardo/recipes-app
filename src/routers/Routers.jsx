import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Foods from '../pages/Food/Foods';
import Drinks from '../pages/Drink/Drinks';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import ExploreDrinks from '../pages/Explores/ExploreDrinks';
import ExpDrinkIngredients from '../pages/Explores/ExploreDrinksIngredients';
import ExploreFoods from '../pages/Explores/ExploreFoods';
import ExpFoodIngredients from '../pages/Explores/ExploreFoodsIngredients';
import ExpFoodNational from '../pages/Explores/ExploreFoodsNationalities';
import DoneRecipes from '../pages/Recipes/DoneRecipes';
import Explore from '../pages/Explores/Explore';
import FavoriteRecipes from '../pages/Recipes/FavoriteRecipes';
import FoodsDetails from '../pages/Food/FoodDetails';
import DrinkDetails from '../pages/Drink/DrinkDetails';
import FoodProgress from '../pages/Food/FoodInProgress';
import DrinkProgress from '../pages/Drink/DrinkInProgress';

function Routers() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/foods/:recipes-id" component={ FoodsDetails } />
      <Route exact path="/foods/:recipes-id/in-progress" component={ FoodProgress } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="/drinks/:recipesId" component={ DrinkDetails } />
      <Route exact path="/drinks/:recipesId/in-progress" component={ DrinkProgress } />
      <Route path="/profile" component={ Profile } />
      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/explore/drinks" component={ ExploreDrinks } />
      <Route exact path="/explore/drinks/ingredients" component={ ExpDrinkIngredients } />
      <Route exact path="/explore/foods" component={ ExploreFoods } />
      <Route exact path="/explore/foods/ingredients" component={ ExpFoodIngredients } />
      <Route exact path="/explore/foods/nationalities" component={ ExpFoodNational } />
      <Route path="/done-recipes" component={ DoneRecipes } />
      <Route path="/favorite-recipes" component={ FavoriteRecipes } />
    </Switch>
  );
}

export default Routers;
