import React from 'react';

function MoreInfos() {
  return (
    <section className="more-details-container">
      <div className="video">
        <iframe
          title={ RecipeTitle }
          data-testid="video"
          width="64"
          height="64"
          src={ strYoutube }
          frameBorder="0"
          allow="accelerometer;encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {map das recomendações-
      (data-testid="${index}-recomendation-card")
      (data-testid="${index}-recomendation-title")
      }
      <button
        data-testid="start-recipe-btn"
        className="recipe-btn"
      >
        Start Recipe
      </button>
    </section>
  );
}

export default MoreInfos;
