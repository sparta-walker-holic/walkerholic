import axios from 'axios';

const API_URL = 'http://localhost:4000/posts';

export const getPosts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
