import React from 'react';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function FooterNav() {
  return (
    <footer>
      <nav data-testid="footer">
        <button
          data-testid="drinks-bottom-btn"
          type="button"
        >
          <img src={ drinkIcon } alt="drinkIcon" />
        </button>
        <button
          data-testid="explore-bottom-btn"
          type="button"
        >
          <img src={ exploreIcon } alt="exploreIcon" />
        </button>
        <button
          data-testid="food-bottom-btn"
          type="button"
        >
          <img src={ mealIcon } alt="mealIcon" />
        </button>
      </nav>
    </footer>
  );
}

export default FooterNav;
