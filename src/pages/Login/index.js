import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import { session } from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

function Login() {
  const [id, setId] = useState('');

  const { push } = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    const data = await session(id);

    localStorage.setItem('@BeTheHero:ongID', id);
    localStorage.setItem('@BeTheHero:ongName', data.name);

    push('/profile');
    try {
    } catch {
      alert('Falha no login, tente novamente!');
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <img src={logo} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>

          <input
            type="text"
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
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
