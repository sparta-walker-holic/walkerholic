import { useNavigate } from 'react-router-dom';
import { useGetPostById } from '../../query/postQuery.js';
import FavoriteButton from '../FavoriteButton.jsx';
import useUserStore from '../../stores/useUserStore.js';

const MiniPostCard = ({ postId }) => {
  const { data: post, isSuccess } = useGetPostById(postId);
  const { isAuthenticated } = useUserStore((state) => state.user);
  let title = null;
  let author_nickname = null;

  if (isSuccess) {
    title = post[0].title;
    author_nickname = post[0].author_nickname;
  }

  const navigate = useNavigate();
  const handleMoveToDetail = (e) => {
    if (e.target.closest('.favoriteButton')) return;
    if (isAuthenticated) {
      navigate(`/detail/${postId}`);
    } else {
      if (confirm('로그인 후 이용 가능합니다. 로그인 페이지로 이동하시겠습니까?')) {
        navigate('/login');
      }
    }
  };

  return (
    <div
      className='relative rounded-xl bg-white w-[240px] h-[120px] p-3 hover:bg-gray-50 shadow shadow-gray-400/80'
      onClick={handleMoveToDetail}
    >
      <FavoriteButton postId={postId} />
      <h3 className='font-bold'>{title}</h3>
      <p>{author_nickname}</p>
    </div>
  );
};

export default MiniPostCard;
