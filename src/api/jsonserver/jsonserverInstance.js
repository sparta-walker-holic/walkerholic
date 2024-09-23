import axios from 'axios';

const jsonserverInstance = axios.create({
  baseURL: import.meta.env.VITE_JSON_SERVER_API,
});

export default jsonserverInstance;
