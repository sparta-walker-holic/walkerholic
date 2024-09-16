import MiniPostCard from './MiniPostCard.jsx';

const PostListSideBar = ({ posts }) => {
  return (
    <div className='flex flex-col gap-3 fixed right-0 bg-gray-300 w-[230px] h-full p-5 z-40'>
      {posts.map((post) => {
        return (
          <MiniPostCard
            key={post}
            postId={post}
          />
        );
      })}
    </div>
  );
};

export default PostListSideBar;
