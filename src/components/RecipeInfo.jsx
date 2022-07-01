import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import clipboard from 'clipboard-copy';
// import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

function RecipesInfos() {
  const history = useHistory();
  const { location } = history;
  const [linkCopy, setLinkCopy] = useState(false);
  const recipe = useSelector(({ recipes }) => recipes.recipeInfo);
  const recipeArr = Object.entries(recipe);
  const ingredientsArr = recipeArr.filter((recipeKey) => recipeKey[0]
    .includes('strIngredient'));
  const measureArr = recipeArr.filter((recipeKey) => recipeKey[0]
    .includes('strMeasure'));
  function copyRecipeLink() {
    navigator.clipboard.writeText(`http://localhost:3000${location.pathname}`);
    setLinkCopy(true);
  }
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
          src={ whiteHeartIcon }
        // onClick={ Função de favoritar a comida}
        >
          <img src={ whiteHeartIcon } alt="WhiteHeartIdon" />
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
        <ul>
          {ingredientsArr.map((ingredient, index) => ingredient[1] !== null
              && ingredient[1].trim() !== ''
            && (
              <li
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                {`${ingredient[1]} - ${measureArr[index][1]}`}
              </li>
            ))}
        </ul>
      </section>
      <div>
        <p data-testid="instructions">
          {recipe.strInstructions}
        </p>
      </div>
    </section>
  );
}

export default RecipesInfos;
