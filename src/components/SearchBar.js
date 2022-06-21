import React from 'react';

function SearchBar() {
  return (
    <div>
      <label htmlFor="ingredient">
        Ingredient
        <input
          type="radio"
          name="search-type"
          value="ingredient"
          id="ingredient"
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
          data-testid="name-search-radio"
        />
      </label>
      <label htmlFor="first-letter">
        First letter
        <input
          type="radio"
          name="search-type"
          id="first-letter"
          value="first-letter"
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
