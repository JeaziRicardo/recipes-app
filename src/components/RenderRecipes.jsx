import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function RenderRecipes() {
  const foundRecipes = useSelector(({ recipes }) => recipes.foundRecipes);
  const firstRender = useSelector(({ recipes }) => recipes.firstRender);
  const type = useSelector(({ recipes }) => recipes.typeRecipes);

  let id;
  if (type === 'food' && foundRecipes.length > 0) id = foundRecipes[0].idMeal;
  else if (foundRecipes.length > 0) id = foundRecipes[0].idDrink;

  const history = useHistory();
  const path = history.location.pathname;
  return (
    <section className="card-exibtion">
      {foundRecipes.length === 1 && history.push(`${path}/${id}`)}
      {foundRecipes.length === 0 && firstRender
      && global.alert('Sorry, we haven\'t found any recipes for these filters.')}
      {/* {foundRecipes.length > 1 && //renderização dos card} */}
    </section>
  );
}

export default RenderRecipes;
