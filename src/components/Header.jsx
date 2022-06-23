import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header({ title }) {
  const history = useHistory();
  const [searchBar, setSearchBar] = useState(false);
  return (
    <header>
      <button
        data-testid="profile-top-btn"
        type="button"
        onClick={ () => history.push('/profile') }
        src={ profileIcon }
      >
        <img src={ profileIcon } alt="profileIcon" />
      </button>
      <h1 data-testid="page-title">{ title }</h1>
      <button
        data-testid="search-top-btn"
        type="button"
        onClick={ () => setSearchBar(!searchBar) }
        src={ searchIcon }
      >
        <img src={ searchIcon } alt="searchIcon" />
      </button>
      {
        searchBar && (
          <SearchBar />
        )
      }
    </header>
  );
}
Header.propTypes = {
  title: PropTypes.string,
}.isRequired;
export default Header;
