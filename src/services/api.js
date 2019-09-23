import axios from 'axios';

const homolog = 'http://localhost:8080';

const api = axios.create({
  baseURL: homolog,
});

export default api;
