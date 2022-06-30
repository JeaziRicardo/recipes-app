import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRecipesInfo } from '../../services/API';

function DrinkDetails() {
  const { recipesId } = useParams();
  const page = useSelector(({ recipes }) => recipes.typeRecipes);
  async function getDetails() {
    const response = await fetchRecipesInfo(recipesId, page);
    const data = response.drinks[0];
    console.log(data);
  }
  getDetails();
  return (
    <div>
      <h1>a</h1>
    </div>
  );
}

export default DrinkDetails;
