import React, { useState } from 'react';

function Login() {
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

  return (
    <form>
      <section>
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
          onClick={ () => {} }
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
