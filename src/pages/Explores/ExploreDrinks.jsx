import React from 'react';
import FooterNav from '../../components/FooterNav';
import Header from '../../components/Header';
import ExploreButtons from '../../components/ExploreButtons';

function ExploreDrinks() {
  return (
    <div>
      <Header title="Explore Drinks" />
      <ExploreButtons />
      <FooterNav />
    </div>
  );
}

export default ExploreDrinks;
