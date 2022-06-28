import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../Styles/RenderRecipes.css';

function RenderRecipes() {
  const foundRecipes = useSelector(({ recipes }) => recipes.foundRecipes);
  const type = useSelector(({ recipes }) => recipes.typeRecipes);
  const selectedCategory = useSelector(({ recipes }) => recipes.selectedCategory);

  let id;
  if (type === 'food' && foundRecipes.length > 0) id = foundRecipes[0].idMeal;
  else if (foundRecipes.length > 0) id = foundRecipes[0].idDrink;

  const history = useHistory();
  const path = history.location.pathname;
  const NUM = 11;
  return (
    <section className="cardExibtion">
      {foundRecipes.length === 1 && selectedCategory === ''
      && history.push(`${path}/${id}`)}
      {foundRecipes.length > 0 && foundRecipes.map((recipe, index) => index <= NUM
      && (
        // <Link to={ }>
        <div
          className="recipeCard"
          data-testid={ `${index}-recipe-card` }
          key={ index }
        >
          <img
            data-testid={ `${index}-card-img` }
            src={ type === 'food' ? recipe.strMealThumb : recipe.strDrinkThumb }
            alt={ type === 'food' ? recipe.strMeal : recipe.strDrink }

          />
          <h5
            data-testid={ `${index}-card-name` }
          >
            {type === 'food' ? recipe.strMeal : recipe.strDrink}
          </h5>

        </div>
        // </Link>
      ))}
    </section>
  );
}

export default RenderRecipes;
