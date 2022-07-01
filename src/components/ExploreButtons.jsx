import React from 'react';
import { useHistory } from 'react-router-dom';
import { fetchRandom } from '../services/API';

function ExploreButtons() {
  const history = useHistory();
  const actualPage = history.location.pathname;

  const surpriseMe = async () => {
    const radom = await fetchRandom(actualPage);
    if (actualPage === '/explore/foods') {
      const { meals } = radom;
      history.push(`/foods/${meals[0].idMeal}`);
    } else {
      const { drinks } = radom;
      history.push(`/drinks/${drinks[0].idDrink}`);
    }
  };

  return (
    <div className="ExploreBtn">
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
        onClick={ surpriseMe }
      >
        Surprise me!
      </button>
    </div>
  );
}

export default ExploreButtons;
