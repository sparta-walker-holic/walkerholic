import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getFavoritePost, toggleFavoritePost } from '../api/userRequest.js';

export const useGetFavoritePosts = (userId) => {
  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ['favoritePosts', userId],
    queryFn: () => getFavoritePost(userId),
  });

  return { data, isPending, isError, isSuccess };
};

export const useToggleFavoritePost = ({ userId }) => {
  const queryClient = useQueryClient();
  const { mutate: mutateFavoritePosts } = useMutation({
    mutationFn: toggleFavoritePost,
    onMutate: async ({ userId, postId }) => {
      await queryClient.cancelQueries(['user', userId]);
      const previousUserData = queryClient.getQueryData(['user', userId]);

      queryClient.setQueryData(['user', userId], (oldData) => {
        if (!oldData) return oldData;
        const isFavorited = oldData.favorite_posts.includes(postId);
        return {
          ...oldData,
          favorite_posts: isFavorited
            ? oldData.favorite_posts.filter((favoritePostId) => favoritePostId !== postId)
            : [...oldData.favorite_posts, postId],
        };
      });

      return { previousUserData };
    },
    onError: (error, variables, context) => {
      console.log('error.response.data', error.response?.data);
      queryClient.setQueryData(['user', variables.userId], context.previousUserData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['user', userId]);
    },
  });

  return { mutateFavoritePosts };
};
