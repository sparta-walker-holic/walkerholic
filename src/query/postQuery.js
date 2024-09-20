import { useQuery } from '@tanstack/react-query';
import { getPostById, getPosts, getPostsByDate, getPostsByLikes } from '../api/postRequest.js';

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
