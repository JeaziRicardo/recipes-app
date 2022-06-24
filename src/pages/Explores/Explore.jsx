import React from 'react';
import FooterNav from '../../components/FooterNav';
import Header from '../../components/Header';

function Explore() {
  return (
    <div>
      <Header title="Explore" />
      <div>
        <button
          type="button"
          data-testid="explore-foods"
        >
          Explore Foods
        </button>
        <button
          type="button"
          data-testid="explore-foods"
        >
          Explore Drinks
        </button>
      </div>
      <FooterNav />
    </div>
  );
}

export default Explore;
