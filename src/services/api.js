import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://64.225.7.209',
  baseURL: 'http://localhost:3333',
});

export default api;
