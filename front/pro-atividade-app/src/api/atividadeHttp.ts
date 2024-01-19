import axios from 'axios';

// Pacote de integração com back-end
const api = axios.create({
    baseURL: 'http://localhost:5098/api/'
});

export default api;