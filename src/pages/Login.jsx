import React from 'react';

function Login() {
  return (
    <form>
      <section>
        <input
          data-testid="email-input"
          type="email"
          placeholder="Email"
          onChange={ ({ target }) => (target.value) }
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="Password"
          onChange={ ({ target }) => (target.value) }
        />
        <button
          onClick={ () => {} }
          data-testid="login-submit-btn"
          type="button"
          disabled
        >
          Entrar
        </button>
      </section>
    </form>
  );
}
export default Login;
