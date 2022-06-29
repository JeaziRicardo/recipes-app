import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {  fetchAllNationalities, fetchByNationalities } from '../services/API';

function DropDown() {
  const MAX_LENGTH = 11;
  const [nationalities, setNationalities] = useState([]);
  const [option, setOption] = useState('All');
  const [recipes, setRecipes] = useState([]);

  const handleChange = ({ target }) => {
    const { value } = target;
    setOption(value);
  };

  useEffect(() => {
    async function fetchData() {
      const { meals } = await fetchAllNationalities();
      setNationalities(meals);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const { meals } = await fetchByNationalities(option);
      setRecipes(meals);
    }
    fetchData();
  }, [option]);

  return (
    <section>
      <select
        data-testid="explore-by-nationality-dropdown"
        onChange={ handleChange }
      >
        <option
          value="All"
          data-testid="All-option"
        >
          All
        </option>
        { nationalities.map(({ strArea }) => (
          <option
            key={ strArea }
            value={ strArea }
            data-testid={ `${strArea}-option` }
          >
            { strArea }
          </option>
        )) }
      </select>
      <section className="cardExibtion">
        { recipes?.map(({ strMeal, strMealThumb, idMeal }, index) => index <= MAX_LENGTH && (
          <section
            key={ index }
            className="recipeCard"
            data-testid={ `${index}-recipe-card` }
          >
            <Link to={ `/foods/${idMeal}` }>
              <img
                data-testid={ `${index}-card-img` }
                src={ strMealThumb }
                alt={ strMeal }
              />
              <h3 data-testid={ `${index}-card-name` }>{ strMeal }</h3>
            </Link>
          </section>
        )) }
      </section>
    </section>
  );
}

export default DropDown;
