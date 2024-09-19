import mockData from '../mokaData';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Card = ({ searchTag }) => {
  const navigate = useNavigate();

  // 태그필터링
  const filteredPosts = mockData.posts.filter((post) => post.tag.some((tag) => tag.includes(searchTag)));
  // 최신순 정렬
  const latestPosts = [...filteredPosts].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  // 좋아요 많은 순 정렬
  const mostLikedPosts = [...filteredPosts].sort((a, b) => b.likes - a.likes);

  //Slick 설정.
  const settings = {
    dots: true, // 슬라이드 아래 점 표시
    infinite: true, // 무한 슬라이드
    speed: 2000, // 슬라이드 속도
    slidesToShow: 4, // 개씩 보여줌
    slidesToScroll: 1, // 한번에 하나의 슬라이드만 넘김
    arrows: true, // 좌우 화살표
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className='container mx-auto '>
        {/* 최신순 배열 */}
        <h2 className='mt-5 ml-20 text-xl font-bold'> 최신장소 </h2>
        <Slider {...settings}>
          {latestPosts.map((post, index) => (
            <div
              key={index}
              className='snap-center shrink-0  h-[600px] w-full max-w-[100%] p-4 '
            >
              <div className='p-4 '>
                <div
                  className='h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60'
                  onClick={() => {
                    navigate(`/detail/${post.id}`);
                  }}
                >
                  <img
                    className='object-cover object-center w-full h-[300px] '
                    src={post.img_url}
                    alt='blog'
                  />
                  <div className='p-6 transition duration-300 ease-in hover:bg-indigo-600 hover:text-white'>
                    <h1 className='mb-3 text-2xl font-semibold w-[100%] '>{post.title}</h1>
                    <p className='mb-3 leading-relaxed'>{post.description}</p>
                    <div className='flex flex-wrap items-center mt-6 text-indigo-300'>
                      {new Date(post.created_at).toLocaleDateString()}
                      <div className='text-gray-600 ml-[130px]'>❤️ {post.likes}</div>
                    </div>

                    <div className='flex flex-wrap items-center mt-2 '>
                      <div className='inline-flex items-center text-indigo-300 md:mb-2 lg:mb-0'>
                        {post.author_nickname}
                      </div>
                      <div className='inline-flex items-center ml-auto mr-3 text-gray-400 lg:ml-auto md:ml-0'>
                        #{post.tag.join(', #')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* 좋아요 많은순 */}
        <h2 className='mt-5 ml-20 text-xl font-bold'> 좋아요 많은 장소 </h2>
        <Slider {...settings}>
          {mostLikedPosts.map((post, index) => (
            <div
              key={index}
              className='snap-center shrink-0 w-[500px] p-4 '
            >
              <div className='p-4 '>
                <div
                  className='h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60'
                  onClick={() => {
                    navigate(`/detail/${post.id}`);
                  }}
                >
                  <img
                    className='object-cover object-center w-full lg:h-72 md:h-48'
                    src={post.img_url}
                    alt='blog'
                  />
                  <div className='p-6 transition duration-300 ease-in hover:bg-indigo-600 hover:text-white'>
                    <h1 className='mb-3 text-2xl font-semibold'>{post.title}</h1>
                    <p className='mb-3 leading-relaxed'>{post.description}</p>
                    <div className='flex flex-wrap items-center mt-6 text-indigo-300'>
                      {new Date(post.created_at).toLocaleDateString()}
                      <div className='text-gray-600 ml-[130px]'>❤️ {post.likes}</div>
                    </div>
                    <div className='flex flex-wrap items-center mt-2 '>
                      <div className='inline-flex items-center text-indigo-300 md:mb-2 lg:mb-0'>
                        {post.author_nickname}
                      </div>
                      <div className='inline-flex items-center ml-auto mr-3 text-gray-400 lg:ml-auto md:ml-0'>
                        #{post.tag.join(', #')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

// 커스텀 화살표 컴포넌트 (화살표 스타일 추가)
const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        background: 'gray',
        borderRadius: '100%',
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: 'rgba(128, 128, 128, 0.5)',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
      }}
      onClick={onClick}
    />
  );
};
export default Card;
