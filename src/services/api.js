import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export async function deleteIncident(id, ongId) {
  await api.delete(`/incidents/${id}`, {
    headers: {
      Authorization: ongId,
    },
  });
}

export async function getIncidentByPage(ongId, page = 1) {
  const response = await api.get(
    `/incidents`,
    { params: { page } },
    {
      headers: {
        Authorization: ongId,
      },
    }
  );

  return response.data;
}

export async function registerIncident(ongId, data) {
  const response = await api.post('/incidents', data, {
    headers: {
      Authorization: ongId,
    },
  });

  return response.data;
}

export async function session(id) {
  const response = await api.post('/sessions', { id });
  return response.data;
}

export async function registerOng(data) {
  const response = await api.post('/ongs', data);

  return response.data;
}

export default api;
