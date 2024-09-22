import { useNavigate } from 'react-router-dom';
import { useGetPostById, useGetPosts, useGetPostsByLikes } from '../../query/postQuery.js';

const MiniPostCard = ({ postId }) => {
  const { data: post, isSuccess } = useGetPostById(postId);

  let title = null;
  let author_nickname = null;

  if (isSuccess) {
    title = post[0].title;
    author_nickname = post[0].author_nickname;
  }

  const navigate = useNavigate();
  const handleMoveToDetail = () => {
    navigate(`/detail/${postId}`);
  };

  return (
    <div
      className='rounded-xl bg-white w-[240px] h-[120px] p-3 hover:bg-gray-50 shadow shadow-gray-400/80'
      onClick={handleMoveToDetail}
    >
      <h3 className='font-bold'>{title}</h3>
      <p>{author_nickname}</p>
    </div>
  );
};

export default MiniPostCard;
