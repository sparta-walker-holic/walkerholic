import { Heart } from 'lucide-react';
import useUserStore from '../stores/useUserStore.js';

const FavoriteButton = ({ postId }) => {
  const { favorite_posts } = useUserStore((state) => state.user);
  const isSelected = favorite_posts.some((favoritePost) => favoritePost === postId);
  return <Heart className={`absolute top-2 right-2 text-red-400 ${isSelected ? 'fill-red-400' : null}`} />;
};

export default FavoriteButton;
