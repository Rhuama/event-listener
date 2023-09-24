import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.sympla.com.br/public/v3/',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.SYMPLA_API_KEY}`,
  },
});

export default api;