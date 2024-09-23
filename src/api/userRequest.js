import jsonserverInstance from './jsonserver/jsonserverInstance.js';

export const getFavoritePost = async (userId) => {
  try {
    const response = await jsonserverInstance.get(`/users?id=${userId}`);
    return response.data[0].favorite_posts;
  } catch (error) {
    return error.response.data;
  }
};

export const toggleFavoritePost = async ({ userId, postId }) => {
  try {
    const response = await jsonserverInstance.get(`/users?id=${userId}`);
    const userData = response.data[0];

    let updatedFavoritePosts;
    if (userData.favorite_posts.includes(postId)) {
      updatedFavoritePosts = userData.favorite_posts.filter((post) => post !== postId);
    } else {
      updatedFavoritePosts = [...userData.favorite_posts, postId];
    }

    await jsonserverInstance.patch(`users/${userId}`, { favorite_posts: updatedFavoritePosts });
  } catch (error) {
    return error.response.data;
  }
};
