import axios from 'axios';

const baseURL = process.env.API_DOMAIN;
const api = axios.create({
    baseURL,
});

export default api;
