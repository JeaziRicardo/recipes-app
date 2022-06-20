import React from 'react';
function Login() {
  const validation = ({ target }) => {
    const regexEmail = '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$';
    const minSenha = 7;
  };
  
  return (
    <form>
      <section>
        <input
          data-testid="email-input"
          type="email"
          value={}
          placeholder="Email"
          onChange={ ({ target }) => (validation(target)) }
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="Password"
          onChange={ ({ target }) => (validation(target)) }
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
