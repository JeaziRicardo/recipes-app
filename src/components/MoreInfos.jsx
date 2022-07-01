import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { emptyFetch } from '../services/API';
import '../Styles/MoreInfos.css';

function MoreInfos() {
  const recipe = useSelector(({ recipes }) => recipes.recipeInfo);
  const history = useHistory();
  const [recomendations, setRecomendations] = useState([]);
  useEffect(() => {
    async function getRecomendation() {
      const response = await emptyFetch(history.location.pathname
        .includes('food') ? 'drink' : 'food');
      const data = history.location.pathname
        .includes('food') ? response.drinks : response.meals;
      setRecomendations(data);
    }
    getRecomendation();
  }, [history]);
  const SIX = 6;

  return (
    <section className="more-details-container">
      {history.location.pathname
        .includes('food') && Object.keys(recipe).length > 0
        ? (
          <div
            data-testid="video"
            className="video"
          >
            <iframe
              title={ recipe.strTags }
              width="300"
              height="160"
              src={ recipe.strYoutube.replace('watch?v=', 'embed/') }
              frameBorder="0"
              allow="accelerometer;encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div />
        )}
      <section className="recomendation-wrapper">
        <div className="recomendation-card-container">
          {recomendations && recomendations.slice(0, SIX)
            .map((recomendation, index) => (
              <div
                key={ index }
                data-testid={ `${index}-recomendation-card` }
                className="recomendation-card"
              >
                <img
                  src={ recomendation.strMealThumb || recomendation.strDrinkThumb }
                  alt={ recomendation.strMeal || recomendation.strDrink }
                />
                <h5 data-testid={ `${index}-recomendation-title` }>
                  { recomendation.strMeal || recomendation.strDrink }
                </h5>
              </div>
            ))}
        </div>
      </section>
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="recipe-btn"
      >
        Start Recipe
      </button>
    </section>
  );
}

export default MoreInfos;
