import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function FooterNav() {
  const history = useHistory();
  return (
    <footer>
      <nav data-testid="footer">
        <button
          data-testid="drinks-bottom-btn"
          type="button"
          onClick={ () => (history.push('/drinks')) }
        >
          <img src={ drinkIcon } alt="drinkIcon" />
        </button>
        <button
          data-testid="explore-bottom-btn"
          type="button"
          onClick={ () => (history.push('/explore')) }
        >
          <img src={ exploreIcon } alt="exploreIcon" />
        </button>
        <button
          data-testid="food-bottom-btn"
          type="button"
          onClick={ () => (history.push('/foods')) }
        >
          <img src={ mealIcon } alt="mealIcon" />
        </button>
      </nav>
    </footer>
  );
}

export default FooterNav;
