import React from 'react';
import { useHistory } from 'react-router-dom';

function ExploreButtons() {
  const history = useHistory();
  const actualPage = history.location.pathname;
  return (
    <div>
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => { history.push(`${actualPage}/ingredients`); } }
      >
        By Ingredient
      </button>
      {actualPage === '/explore/foods' && (
        <button
          type="button"
          data-testid="explore-by-nationality"
          onClick={ () => { history.push(`${actualPage}/nationalities`); } }
        >
          By Nationality
        </button>)}
      <button
        type="button"
        data-testid="explore-surprise"
      >
        Surprise me!
      </button>
    </div>
  );
}

export default ExploreButtons;
