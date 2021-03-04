import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { BottomScrollListener } from 'react-bottom-scroll-listener';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import { deleteIncident, getIncidentByPage } from '../../services/api';

import logo from '../../assets/logo.svg';

import './styles.css';

function Profile() {
  const { push } = useHistory();

  const [incidents, setIncidents] = useState([]);
  const [page, setPage] = useState(2);

  const name = localStorage.getItem('@BeTheHero:ongName');
  const ongId = localStorage.getItem('@BeTheHero:ongID');

  if (name == null || ongId == null) {
    push('/');
  }

  useEffect(() => {
    // api
    //   .get(`/incidents`, {
    //     headers: {
    //       Authorization: ongId,
    //     },
    //   })
    //   .then((response) => {
    //     setIncidents(response.data);
    //   });

    getIncidentByPage(ongId).then((data) => {
      setIncidents(data);
    });

    //setIncidents(data);
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      // await api.delete(`/incidents/${id}`, {
      //   headers: {
      //     Authorization: ongId,
      //   },
      // });

      await deleteIncident(id, ongId);

      setIncidents(incidents.filter((i) => i.id !== id));
    } catch {
      alert('Erro ao deletar o incidente, tente novamente');
    }
  }

  function handleLogout() {
    localStorage.clear();

    push('/');
  }

  async function handleScrollAtBottom() {
    setPage(page + 1);

    // const response = await api.get(
    //   `/incidents`,
    //   { params: { page } },
    //   {
    //     headers: {
    //       Authorization: ongId,
    //     },
    //   }
    // );

    const data = await getIncidentByPage(ongId, page);

    setIncidents(incidents.concat(data));
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="Be The Hero" />
        <span>Bem Vindo, {name}</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <BottomScrollListener onBottom={handleScrollAtBottom}>
        <div></div>
      </BottomScrollListener>

      <ul>
        {incidents.map((inicident) => (
          <li key={inicident.id}>
            <strong>CASO:</strong>
            <p>{inicident.title}</p>

            <strong>DESCRIÇÃO: </strong>
            <p>{inicident.description}</p>

            <strong>Valor:</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(inicident.value)}
            </p>

            <button
              type="button"
              onClick={() => handleDeleteIncident(inicident.id)}
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
