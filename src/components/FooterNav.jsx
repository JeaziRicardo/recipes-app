import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../Styles/Footer.css';

function FooterNav() {
  const history = useHistory();
  return (
    <footer data-testid="footer">
      <nav>
        <button
          data-testid="drinks-bottom-btn"
          type="button"
          onClick={ () => (history.push('/drinks')) }
          src={ drinkIcon }
          alt="drinkIcon"
        >
          <img src={ drinkIcon } alt="drinkIcon" />
        </button>
        <button
          data-testid="explore-bottom-btn"
          type="button"
          onClick={ () => (history.push('/explore')) }
          src={ exploreIcon }
          alt="exploreIcon"
        >
          <img src={ exploreIcon } alt="exploreIcon" />
        </button>
        <button
          data-testid="food-bottom-btn"
          type="button"
          onClick={ () => (history.push('/foods')) }
          src={ mealIcon }
          alt="mealIcon"
        >
          <img src={ mealIcon } alt="mealIcon" />
        </button>
      </nav>
    </footer>
  );
}

export default FooterNav;
