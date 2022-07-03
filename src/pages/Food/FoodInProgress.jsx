import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import RecipesInfos from '../../components/RecipeInfo';
import { changeRecipeInfo } from '../../Redux/RecipesReducer';
import { fetchRecipesInfo } from '../../services/API';

function FoodsInProgress() {
  const { recipesId } = useParams();
  const dispatch = useDispatch();
  async function getDetails() {
    const response = await fetchRecipesInfo(recipesId, 'food');
    const data = response.meals[0];
    dispatch(changeRecipeInfo(data));
  }
  getDetails();

  return (
    <div>
      <RecipesInfos />
    </div>
  );
}

export default FoodsInProgress;
