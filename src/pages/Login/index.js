import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

function Login() {
  return (
    <div className="login-container">
      <section className="form">
        <img src={logo} alt="Be The Hero" />

        <form action="">
          <h1>Faça seu login</h1>

          <input type="text" placeholder="Sua ID" />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}

export default Login;
