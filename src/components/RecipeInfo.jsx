import React from 'react';

function RecipesInfos() {
  return (
    <section className="recipe-info">
      <header>
        <img
          data-testid="recipe-photo"
          src={ recipeImg }
          alt={ recipeTitle }
        />
        <h3
          data-testid="recipe-title"
        >
          { recipeTitle }
        </h3>
        <button
          type="button"
          data-testid="favorite-btn"
        >
          {FavoriteIcon}
        </button>
        <button
          type="button"
          data-testid="share-btn"
        >
          {ShareIcon}
        </button>
        <h4 data-testid="recipe-category">{ RecipeCategory }</h4>
      </header>
      {map dos ingredientes-(data-testid="${index}-ingredient-name-and-measure")}
      <div>
        <p data-testid="instructions">
          {texto de instrução}
        </p>
      </div>
    </section>
  );
}

export default RecipesInfos;
