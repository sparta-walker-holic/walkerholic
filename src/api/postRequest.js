import jsonserverInstance from './jsonserver/jsonserverInstance.js';

export const getPosts = async () => {
  try {
    const response = await jsonserverInstance.get('/posts');
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getPostsByDate = async () => {
  try {
    const response = await jsonserverInstance.get(`/posts?_sort=-created_at`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getPostsByLikes = async () => {
  try {
    const response = await jsonserverInstance.get(`/posts?_sort=-likes`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getPostById = async (postId) => {
  try {
    const response = await jsonserverInstance.get(`/posts?id=${postId}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getPostsByUserId = async (userId) => {
  try {
    const response = await jsonserverInstance.get(`/posts?author_id=${userId}`);
    return response.data;
  } catch (error) {
    return error.response.date;
  }
};

export const deletePostById = async ({ postId }) => {
  console.log('postId', postId);
  try {
    const response = await jsonserverInstance.delete(`/posts/${postId}`);
    return response.data;
  } catch (error) {
    return error.response.date;
  }
};
