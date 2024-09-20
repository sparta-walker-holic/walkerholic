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

export const getPostsByDate = async () => {
  try {
    const response = await axios.get(`${API_URL}?_sort=-created_at`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getPostsByLikes = async () => {
  try {
    const response = await axios.get(`${API_URL}?_sort=-likes`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getPostById = async (postId) => {
  try {
    const response = await axios.get(`${API_URL}?id=${postId}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
