import axios from 'axios';

const API_URL = 'http://localhost:4000/users';

export const getFavoritePost = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}?id=${userId}`);
    return response.data[0].favorite_posts;
  } catch (error) {
    return error.response.data;
  }
};

export const toggleFavoritePost = async ({ userId, postId }) => {
  try {
    const response = await axios.get(`${API_URL}?id=${userId}`);
    const userData = response.data[0];

    let updatedFavoritePosts;
    if (userData.favorite_posts.includes(postId)) {
      updatedFavoritePosts = userData.favorite_posts.filter((post) => post !== postId);
    } else {
      updatedFavoritePosts = [...userData.favorite_posts, postId];
    }

    await axios.patch(`${API_URL}/${userId}`, { favorite_posts: updatedFavoritePosts });
  } catch (error) {
    return error.response.data;
  }
};
