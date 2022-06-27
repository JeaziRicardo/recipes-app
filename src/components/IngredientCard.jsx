import React from 'react';

function IngredientCard() {
  return (
    <section
      data-testid={ `${index}-ingredient-card` }
    >
      <img
        data-testid={ `${index}-card-img` }
        src=""
        alt=""
      />
      <h3
        data-testid={ `${index}-card-name` }
      >
        nome
      </h3>
    </section>
  );
}

export default IngredientCard;
