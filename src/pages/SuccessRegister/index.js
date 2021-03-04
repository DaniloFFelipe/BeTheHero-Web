import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/logo.svg';

function SuccessRegister() {
  const { id } = useParams();

  return (
    <div className="success-container">
      <div className="content">
        <section>
          <img src={logo} alt="Be the hero" />
          <h1>Cadastro Realizado com Sucesso</h1>
          <p>
            Seu cadastro foi realizado com sucesso, agora basta começar a
            cadastra seus casos em busca de um herói.
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para Login
          </Link>
        </section>

        <div>
          <h1>Sua ID</h1>
          <p>{id}</p>
        </div>
      </div>
    </div>
  );
}

export default SuccessRegister;
