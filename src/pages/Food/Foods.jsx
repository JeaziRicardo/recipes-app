import React from 'react';
import { useDispatch } from 'react-redux';
import FooterNav from '../../components/FooterNav';
import Header from '../../components/Header';
import { changeTypeForFood } from '../../Redux/RecipesReducer';

function Foods() {
  const dispatch = useDispatch();
  dispatch(changeTypeForFood());
  return (
    <div>
      <Header title="Foods" />
      <FooterNav />
    </div>
  );
}

export default Foods;
