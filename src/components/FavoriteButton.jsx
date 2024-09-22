import { Heart } from 'lucide-react';
import useUserStore from '../stores/useUserStore.js';
import { useGetFavoritePosts, useToggleFavoritePost } from '../query/userQuery.js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FavoriteButton = ({ postId }) => {
  const { id, isAuthenticated } = useUserStore((state) => state.user);
  const { data: favoritePosts = [], isSuccess } = useGetFavoritePosts(id);

  const [isSelected, setIsSelected] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess && isAuthenticated) {
      setIsSelected(favoritePosts.includes(postId));
    }
  }, [isSuccess]);

  const { mutateFavoritePosts } = useToggleFavoritePost({ userId: id, postId });
  const handleClick = () => {
    if (isAuthenticated) {
      setIsSelected(!isSelected);
      mutateFavoritePosts({ userId: id, postId });
    } else {
      if (confirm('로그인 후 이용 가능합니다. 로그인 페이지로 이동하시겠습니까?')) {
        navigate('/login');
      }
    }
  };

  return (
    <Heart
      onClick={handleClick}
      className={`favoriteButton absolute top-2 right-2 text-red-400 ${isSelected ? 'fill-red-400' : null}`}
    />
  );
};

export default FavoriteButton;
