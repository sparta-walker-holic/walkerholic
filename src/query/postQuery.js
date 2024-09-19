import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../api/postRequest.js';

export const useGetPosts = () => {
  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  return { data, isPending, isError, isSuccess };
};
