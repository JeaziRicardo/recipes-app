import React from 'react';
import { useHistory } from 'react-router-dom';
import FooterNav from '../../components/FooterNav';
import Header from '../../components/Header';
import '../../Styles/ExploreButton.css';

function Explore() {
  const history = useHistory();

  return (
    <div>
      <Header title="Explore" />
      <div className="ExploreBtn">
        <button
          type="button"
          data-testid="explore-foods"
          onClick={ () => history.push('/explore/foods') }
        >
          Explore Foods
        </button>
        <button
          type="button"
          data-testid="explore-drinks"
          onClick={ () => history.push('/explore/drinks') }
        >
          Explore Drinks
        </button>
      </div>
      <FooterNav />
    </div>
  );
}

export default Explore;
