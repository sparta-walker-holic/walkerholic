import { useNavigate } from 'react-router-dom';
import { useGetPosts } from '../../query/postQuery.js';

const MiniPostCard = ({ postId }) => {
  const { data: posts } = useGetPosts();
  const post = posts?.find((post) => post.id === postId);
  const { title, author_nickname } = post;
  const navigate = useNavigate();
  const handleMoveToDetail = () => {
    navigate(`/detail/${postId}`);
  };

  return (
    <div
      className='rounded bg-white h-[90px] p-1 hover:bg-gray-50 hover:shadow hover:shadow-gray-400/80'
      onClick={handleMoveToDetail}
    >
      <h3 className='font-bold'>{title}</h3>
      <p>{author_nickname}</p>
    </div>
  );
};

export default MiniPostCard;
