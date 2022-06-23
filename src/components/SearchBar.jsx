import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { fetchByIngredient, fetchByFirstLetter, fetchByName } from '../services/API';

function SearchBar({ page }) {
  const [filter, setFilter] = useState('');
  const [searchText, setSearchText] = useState('');
  const handleChange = ({ target }) => {
    const { value, type } = target;
    if (type === 'radio') setFilter(value);
    else setSearchText(value);
  };

  async function setFilterRecipes() {
    let data;
    switch (filter) {
    case 'ingredient':
      data = await fetchByIngredient(searchText, page);
      break;
    case 'name':
      data = await fetchByName(searchText, page);
      break;
    case 'first-letter':
      data = await fetchByFirstLetter(searchText, page);
      break;
    default:
      break;
    }
    console.log(data);
  }

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        placeholder="Search"
        onChange={ handleChange }
        id="search"
      />
      <label htmlFor="ingredient">
        Ingredient
        <input
          type="radio"
          name="search-type"
          value="ingredient"
          id="ingredient"
          onChange={ handleChange }
          data-testid="ingredient-search-radio"
        />
      </label>
      <label htmlFor="name">
        Name
        <input
          type="radio"
          name="search-type"
          id="name"
          value="name"
          onChange={ handleChange }
          data-testid="name-search-radio"
        />
      </label>
      <label htmlFor="first-letter">
        First letter
        <input
          type="radio"
          name="search-type"
          id="firstLetter"
          value="first-letter"
          onChange={ handleChange }
          data-testid="first-letter-search-radio"
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        id="serch-btn"
        onClick={ setFilterRecipes }
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;

SearchBar.propTypes = {
  page: PropTypes.string,
}.isRequired;
