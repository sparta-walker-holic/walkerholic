import axios from 'axios';

const jsonserverInstance = axios.create({
  baseURL: 'http://localhost:4000',
});

export default jsonserverInstance;
