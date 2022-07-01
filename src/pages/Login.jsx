import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../Styles/Login.css';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleValidation() {
    const regexEmail = /\S+@\S+\.\S+/;
    const minSenha = 7;
    if (regexEmail.test(email) && password.length >= minSenha) {
      return false;
    }
    return true;
  }
  function setStorage() {
    const userObj = {
      email,
    };
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem(
      'user',
      JSON.stringify(userObj),
    );
    history.push('/foods');
  }

  return (
    <form className="loginForm">
      <section className="loginSec">
        <input
          data-testid="email-input"
          type="email"
          value={ email }
          placeholder="Email"
          onChange={ ({ target }) => (setEmail(target.value)) }
        />
        <input
          data-testid="password-input"
          type="password"
          value={ password }
          placeholder="Password"
          onChange={ ({ target }) => (setPassword(target.value)) }
        />
        <button
          onClick={ setStorage }
          data-testid="login-submit-btn"
          type="button"
          disabled={ handleValidation() }
        >
          Entrar
        </button>
      </section>
    </form>
  );
}
export default Login;
