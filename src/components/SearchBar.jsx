import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchByIngredient, fetchByFirstLetter, fetchByName } from '../services/API';
import { updateFoundRecipes } from '../Redux/RecipesReducer';

function SearchBar() {
  const page = useSelector(({ recipes }) => (recipes.typeRecipes));
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  const [searchText, setSearchText] = useState('');

  const handleChange = ({ target }) => {
    const { value, type } = target;
    if (type === 'radio') setFilter(value);
    else setSearchText(value);
  };

  function saveSearchResult(data) {
    if (data.length !== 0 && data.meals !== null && data.drinks !== null) {
      if (page === 'food') {
        dispatch(updateFoundRecipes(data.meals));
      } else {
        dispatch(updateFoundRecipes(data.drinks));
      }
    } else {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
  }

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
    saveSearchResult(data);
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
        <input
          type="radio"
          name="search-type"
          value="ingredient"
          id="ingredient"
          onChange={ handleChange }
          data-testid="ingredient-search-radio"
        />
        Ingredient
      </label>
      <label htmlFor="name">
        <input
          type="radio"
          name="search-type"
          id="name"
          value="name"
          onChange={ handleChange }
          data-testid="name-search-radio"
        />
        Name
      </label>
      <label htmlFor="first-letter">
        <input
          type="radio"
          name="search-type"
          id="firstLetter"
          value="first-letter"
          onChange={ handleChange }
          data-testid="first-letter-search-radio"
        />
        First letter
      </label>
      <button
        className="searchBtn"
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
