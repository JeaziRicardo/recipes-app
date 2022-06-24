import React from 'react';
import FooterNav from '../../components/FooterNav';
import Header from '../../components/Header';
import ExploreButtons from '../../components/ExploreButtons';

function ExploreFoods() {
  return (
    <div>
      <Header title="Explore Foods" />
      <ExploreButtons />
      <FooterNav />
    </div>
  );
}

export default ExploreFoods;
