import { useNavigate } from 'react-router-dom';
import { useDeletePostById, useGetPostsByUserId } from '../query/postQuery';
import useUserStore from '../stores/useUserStore';
import FavoriteButton from '../components/FavoriteButton';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Mypage = () => {
  const { user } = useUserStore();
  const { user_id } = user;

  const { data, isError, isSuccess, isPending } = useGetPostsByUserId(user_id);
  const { mutate } = useDeletePostById();
  const navigate = useNavigate();
  const handleMoveToDetail = (e, postId) => {
    if (e.target.closest('.deleteButton')) return;
    if (e.target.closest('.favoriteButton')) return;
    navigate(`/detail/${postId}`);
  };

  if (isSuccess) {
    console.log('data성공', data);
  }
  if (isError) {
    console.log('에러');
  }
  if (isPending) {
    return <div>로딩 중..</div>;
  }
  // const settings = {
  //   slidesToShow: 3 > data?.length ? data?.length : 3,
  //   infinite: data?.length > 3 ? true : false,
  //   slidesToScroll: 1,
  //   dots: true,
  //   arrows: true,
  // };

  return (
    <div className='flex flex-col'>
      <body className='flex flex-col px-10 gap-12'>
        <div className='border-f5f5f5 border-b-8 pb-5 w-11/12 h-48 pt-5 flex gap-10 items-center '>
          <img
            src={'https://i.pinimg.com/236x/d6/4e/97/d64e9765deca662e8fa07d2cfdb67f7c.jpg'}
            className='rounded-full w-32 h-32 bg-black'
          ></img>
          <div className='flex flex-col gap-3'>
            <p className='text-3xl font-omyu_pretty font-extrabold'>{user.nickname}</p>
            <p className='text-xl  font-omyu_pretty font-extrabold'>{user.user_id}</p>
          </div>
        </div>

        <div className='flex gap-20'>
          <div className='flex flex-col gap-3 w-6/12'>
            <p className='text-2xl font-omyu_pretty font-extrabold'>내 장소</p>
            {/* <Slider {...settings}> */}
            <div className='flex gap-5 '>
              {data?.map((item) => (
                <div
                  className='flex flex-col  w-48 relative'
                  key={item.id}
                  onClick={(e) => {
                    handleMoveToDetail(e, item.id);
                  }}
                >
                  <FavoriteButton postId={item.id} />
                  <img
                    className=' bg-neutral-200  rounded-t-lg h-64'
                    src={item.img_url}
                  />
                  <div className=' -bg--secondary-green h-20 rounded-b-lg'>
                    <p className='pl-2 text-xl font-bold font-omyu_pretty '>{item.address.split(' ')[0]}</p>
                    <p className='pl-2 font-bold font-omyu_pretty'>{item.address.split(' ')[1]}</p>
                    <div className='flex justify-around'>
                      <div className='font-bold font-omyu_pretty  text-gray-600 w-28'>{item.tag.join(', ')}</div>
                      <button
                        className='-bg--primary-green font-bold font-omyu_pretty text-white w-12 rounded-md deleteButton'
                        onClick={() => {
                          mutate({ postId: item.id, userId: user_id });
                        }}
                      >
                        삭제
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* </Slider> */}
          </div>
          <div className='flex flex-col gap-3 w-6/12'>
            <p className='text-2xl font-bold font-omyu_pretty'>좋아요한 장소</p>
            <div className='flex gap-5'>
              {data?.map((item) => (
                <div
                  className='flex flex-col  w-48 relative'
                  key={item.id}
                  onClick={(e) => {
                    handleMoveToDetail(e, item.id);
                  }}
                >
                  <FavoriteButton postId={item.id} />
                  <img
                    className=' bg-neutral-200 rounded-t-lg h-64'
                    src={item.img_url}
                  />
                  <div className=' -bg--secondary-green h-20 rounded-b-lg'>
                    <p className='pl-2 text-xl font-bold font-omyu_pretty'>{item.address.split(' ')[0]}</p>
                    <p className='pl-2 font-bold font-omyu_pretty'>{item.address.split(' ')[1]}</p>
                    <div className='flex justify-around'>
                      <div className='font-bold font-omyu_pretty  text-gray-600 w-28'>{item.tag.join(', ')}</div>
                      <button
                        className='-bg--primary-green font-omyu_pretty text-white w-12 rounded-md deleteButton'
                        onClick={() => {
                          mutate({ postId: item.id, userId: user_id });
                        }}
                      >
                        삭제
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Mypage;
