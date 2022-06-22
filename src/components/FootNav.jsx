import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function FootNav() {
  return (
    <section>
      <nav data-testid="footer">
        <button
          type="button"
          data-testid="drinks-bottom-btn"
        >
          <img src={ drinkIcon } alt="drinkIcon" />
        </button>
        <button
          type="button"
          data-testid="explore-bottom-btn"
        >
          <img src={ exploreIcon } alt="exploreIcon" />
        </button>
        <button
          type="button"
          data-testid="food-bottom-btn"
        >
          <img src={ mealIcon } alt="mealIcon" />
        </button>
      </nav>
    </section>
  );
}

export default FootNav;
