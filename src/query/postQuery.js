import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  deletePostById,
  getPostById,
  getPosts,
  getPostsByDate,
  getPostsByLikes,
  getPostsByUserId,
} from '../api/postRequest.js';

export const useGetPosts = () => {
  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  return { data, isPending, isError, isSuccess };
};

export const useGetPostsByDate = () => {
  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ['postsByDate'],
    queryFn: getPostsByDate,
  });

  return { data, isPending, isError, isSuccess };
};

export const useGetPostsByLikes = () => {
  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ['postsByLikes'],
    queryFn: getPostsByLikes,
  });

  return { data, isPending, isError, isSuccess };
};

export const useGetPostById = (postId) => {
  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ['postById', postId],
    queryFn: () => getPostById(postId),
  });

  return { data, isPending, isError, isSuccess };
};

export const useGetPostsByUserId = (userId) => {
  console.log('userId@@@@', userId);
  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ['postsByUserId', userId],
    queryFn: () => getPostsByUserId(userId),
  });

  return { data, isPending, isError, isSuccess };
};

export const useDeletePostById = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: deletePostById,
    onSuccess: (data, variable) => {
      console.log('data', data);
      console.log('variable', variable);
      queryClient.invalidateQueries({ queryKey: ['postsByUserId', variable.userId] });
    },
  });
  return { mutate, isPending };
};
