import { Heart } from 'lucide-react';
import useUserStore from '../stores/useUserStore.js';
import { useGetFavoritePosts, useToggleFavoritePost } from '../query/userQuery.js';
import { useEffect, useState } from 'react';

const FavoriteButton = ({ postId }) => {
  const { id, isAuthenticated } = useUserStore((state) => state.user);
  const { data: favoritePosts = [], isSuccess } = useGetFavoritePosts(id);

  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (isSuccess && isAuthenticated) {
      setIsSelected(favoritePosts.includes(postId));
    }
  }, [isSuccess]);

  const { mutateFavoritePosts } = useToggleFavoritePost({ userId: id, postId });
  const handleClick = () => {
    setIsSelected(!isSelected);
    mutateFavoritePosts({ userId: id, postId });
  };

  return (
    <Heart
      onClick={handleClick}
      className={`absolute top-2 right-2 text-red-400 ${isSelected ? 'fill-red-400' : null}`}
    />
  );
};

export default FavoriteButton;
