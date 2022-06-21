import React, { useState } from 'react';

function SearchBar() {
  const [filter, setFilter] = useState('');
  const [searchText, setSearchText] = useState('');
  const handleChange = ({ target }) => {
    const { value, type } = target;
    if (type === 'radio') setFilter(value);
    else setSearchText(value);
  };

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
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
