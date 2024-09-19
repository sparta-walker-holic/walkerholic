import mockData from '../../data/mockData.js';
import { useNavigate } from 'react-router-dom';

const MiniPostCard = ({ postId }) => {
  const post = mockData.posts.find((post) => post.id === postId);
  const { title, author_nickname } = post;
  const navigate = useNavigate();
  const handleMoveToDetail = () => {
    navigate(`details/${postId}`);
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
