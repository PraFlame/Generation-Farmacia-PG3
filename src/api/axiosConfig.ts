import axios from 'axios';

const api = axios.create({
    baseURL: 'https://farmacia-jjxo.onrender.com',
    timeout: 10000,
});

export default api;