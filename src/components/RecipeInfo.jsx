import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import '../Styles/RecipeInfos.css';
import { setFavoritesRecipes, verifyFavoriteRecipe } from '../services/Favorite';

function RecipesInfos() {
  const history = useHistory();
  const { location } = history;
  const [checked, setChecked] = useState([]);
  const [colorHeart, setColorHeart] = useState('');
  const [ableButton, setAbleButton] = useState(true);
  const [linkCopy, setLinkCopy] = useState(false);

  const recipe = useSelector(({ recipes }) => recipes.recipeInfo);
  const recipeArr = Object.entries(recipe);

  const ingredientsArr = recipeArr.filter((recipeKey) => recipeKey[0]
    .includes('strIngredient'));

  const filtredIngredients = ingredientsArr
    .filter((ingredient) => ingredient[1] !== null
  && ingredient[1].trim() !== '');

  const measureArr = recipeArr.filter((recipeKey) => recipeKey[0]
    .includes('strMeasure'));

  function copyRecipeLink() {
    navigator.clipboard.writeText(`http://localhost:3000${location.pathname}`);
    setLinkCopy(true);
  }

  function hadleChange(target) {
    const checkeds = (checked.includes(target.value) ? (
      checked.filter((check) => check !== target.value)
    ) : (
      [...checked, target.value]
    ));
    setChecked(checkeds);
    setAbleButton(filtredIngredients.length !== checkeds.length);
  }

  function goToDoneRecipes() {
    history.push('/done-recipes');
  }

  function updateFavoriteRecipes() {
    const color = setFavoritesRecipes(recipe);
    setColorHeart(color);
  }

  useEffect(() => {
    const color = verifyFavoriteRecipe(recipe);
    setColorHeart(color);
  }, [recipe]);

  const heart = colorHeart === 'black' ? blackHeartIcon : whiteHeartIcon;

  return (
    <section className="recipe-info">
      <header>
        <img
          data-testid="recipe-photo"
          src={ recipe.strMealThumb || recipe.strDrinkThumb }
          alt={ recipe.strMeal || recipe.strDrink }
        />
        <h3
          data-testid="recipe-title"
        >
          { recipe.strMeal || recipe.strDrink }
        </h3>
        <button
          type="button"
          data-testid="favorite-btn"
          src={ heart }
          onClick={ updateFavoriteRecipes }
        >
          <img
            src={ heart }
            alt={ heart }
          />
        </button>
        <button
          type="button"
          data-testid="share-btn"
          src={ shareIcon }
          onClick={ copyRecipeLink }
        >
          <img src={ shareIcon } alt="ShareIcon" />
        </button>
        {linkCopy ? <span>Link copied!</span> : <span />}
        <h4
          data-testid="recipe-category"
        >
          {history.location.pathname
            .includes('food') ? recipe.strCategory : recipe.strAlcoholic}
        </h4>
      </header>
      <section className="ingredients-section">
        {location.pathname.includes('in-progress') ? (
          <ul>
            {filtredIngredients.map((ingredient, index) => (
              <label
                htmlFor={ index }
                key={ index }
                data-testid={ `${index}-ingredient-step` }
              >
                <input
                  type="checkbox"
                  id={ index }
                  value={ ingredient[1] }
                  onChange={ ({ target }) => hadleChange(target) }
                />
                <li
                  className={ checked.includes(ingredient[1]) ? 'checked' : 'no-check' }
                >
                  {`${ingredient[1]} - ${measureArr[index][1]}`}
                </li>
              </label>
            ))}
          </ul>
        ) : (
          <ul>
            {filtredIngredients.map((ingredient, index) => (
              <li
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                {`${ingredient[1]} - ${measureArr[index][1]}`}
              </li>
            ))}
          </ul>
        ) }
      </section>
      <div>
        <p data-testid="instructions">
          {recipe.strInstructions}
        </p>
      </div>
      <div>
        {history.location.pathname.includes('in-progress') ? (
          <button
            data-testid="finish-recipe-btn"
            type="button"
            onClick={ goToDoneRecipes }
            disabled={ ableButton }
          >
            Finish Recipe
          </button>
        ) : (
          <div />
        )}
      </div>
    </section>
  );
}

export default RecipesInfos;
