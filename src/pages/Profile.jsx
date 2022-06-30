import React from 'react';
import { useHistory } from 'react-router-dom';
import FooterNav from '../components/FooterNav';
import Header from '../components/Header';

function Profile() {
  const { email } = JSON.parse(localStorage.getItem(
    'user',
  ));
  const history = useHistory();
  function clearUser() {
    localStorage.removeItem('user');
    localStorage.removeItem('mealsToken');
    localStorage.removeItem('cocktailsToken');
    localStorage.removeItem('doneRecipes');
    localStorage.removeItem('favoriteRecipes');
    localStorage.removeItem('inProgressRecipes');
    history.push('/');
  }

  return (
    <div>
      <Header title="Profile" />
      <h2 data-testid="profile-email">{email}</h2>
      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ (() => { history.push('/done-recipes'); }) }
      >
        Done Recipes
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ (() => { history.push('/favorite-recipes'); }) }
      >
        Favorite Recipes
      </button>
      <button
        type="button"
        onClick={ clearUser }
        data-testid="profile-logout-btn"
      >
        Logout
      </button>
      <FooterNav />
    </div>
  );
}

export default Profile;
