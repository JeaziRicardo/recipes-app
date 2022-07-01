import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { fetchByAllIngredient } from '../services/API';
import { setIngredient } from '../Redux/RecipesReducer';

function IngredientCard() {
  const MAX_LENGTH = 11;
  const dispatch = useDispatch();
  const { location: { pathname } } = useHistory();
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (pathname === '/explore/drinks/ingredients') {
        const { drinks } = await fetchByAllIngredient(pathname);
        setIngredients(drinks);
      } else {
        const { meals } = await fetchByAllIngredient(pathname);
        setIngredients(meals);
      }
    }

    fetchData();
  }, [pathname]);

  return (
    <section className="cardExibtion">

      { pathname === '/explore/drinks/ingredients'
        && (
          ingredients.map(({ strIngredient1 }, index) => index <= MAX_LENGTH && (
            <section
              key={ index }
              className="recipeCard"
              data-testid={ `${index}-ingredient-card` }
            >
              <Link
                to="/drinks"
                onClick={ () => dispatch(setIngredient(strIngredient1)) }
              >
                <img
                  data-testid={ `${index}-card-img` }
                  src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` }
                  alt={ `${strIngredient1}` }
                />
                <h3
                  data-testid={ `${index}-card-name` }
                >
                  { `${strIngredient1}` }
                </h3>
              </Link>
            </section>
          ))) }

      { pathname === '/explore/foods/ingredients'
        && (
          ingredients.map(({ strIngredient }, index) => index <= MAX_LENGTH && (
            <section
              key={ index }
              className="recipeCard"
              data-testid={ `${index}-ingredient-card` }
            >
              <Link
                to="/foods"
                onClick={ () => dispatch(setIngredient(strIngredient)) }
              >
                <img
                  data-testid={ `${index}-card-img` }
                  src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
                  alt={ `${strIngredient}` }
                />
                <h3
                  data-testid={ `${index}-card-name` }
                >
                  { `${strIngredient}` }
                </h3>
              </Link>
            </section>
          ))) }

    </section>
  );
}

export default IngredientCard;
