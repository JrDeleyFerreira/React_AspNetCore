import axios from 'axios';

// Pacote de integração com back-end
export default axios.create({
    baseURL: 'http://localhost:5098/api/'
});