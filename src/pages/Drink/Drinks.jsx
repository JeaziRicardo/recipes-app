import React from 'react';
import { useDispatch } from 'react-redux';
import FooterNav from '../../components/FooterNav';
import Header from '../../components/Header';
import { changeTypeForDrink } from '../../Redux/RecipesReducer';

function Drinks() {
  const dispatch = useDispatch();
  dispatch(changeTypeForDrink());
  return (
    <div>
      <Header title="Drinks" />
      <FooterNav />
    </div>
  );
}

export default Drinks;
