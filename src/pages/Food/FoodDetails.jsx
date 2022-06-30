import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRecipesInfo } from '../../services/API';

function FoodsDetails() {
  const { recipesId } = useParams();
  const dispatch = useDispatch();
  const page = useSelector(({ recipes }) => recipes.typeRecipes);
  async function getDetails() {
    const response = await fetchRecipesInfo(recipesId, page);
    const data = response.meals[0];
    console.log(data);
  }
  getDetails();

  return (
    <div>
      <h1>a</h1>
    </div>
  );
}

export default FoodsDetails;
