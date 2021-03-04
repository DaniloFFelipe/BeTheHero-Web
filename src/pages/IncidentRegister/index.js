import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { registerIncident } from '../../services/api';

import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/logo.svg';

function IncidentRegister() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(Number);

  const { push } = useHistory();

  const ongId = localStorage.getItem('@BeTheHero:ongID');

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      await registerIncident(ongId, data);

      push('/profile');
    } catch {
      alert('Erro ao deletar o incidente, tente novamente');
    }
  }

  return (
    <div className="incitent-register-container">
      <div className="content">
        <section>
          <img src={logo} alt="Be the hero" />
          <h1>Cadastro novo caso</h1>
          <p>
            Descreva o casa detalhadamente para encontrar um herói para revolver
            isso.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Título do caso"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default IncidentRegister;
