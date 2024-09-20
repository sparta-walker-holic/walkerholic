import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useGetPostsByDate, useGetPostsByLikes } from '../query/postQuery';

const Card = ({ type, searchTag }) => {
  const navigate = useNavigate();

  // 태그필터링
  const { data: latestPosts, isSuccess: isLatestSuccess } = useGetPostsByDate();
  const { data: mostLikedPosts, isSuccess: isMostLikedSuccess } = useGetPostsByLikes();

  const filteredLatestPosts = searchTag
    ? latestPosts?.filter((post) =>
        post.tag.some((tag) => {
          return tag.includes(searchTag);
        }),
      )
    : latestPosts;
  console.log(filteredLatestPosts);

  const filteredMostLikedPosts = searchTag
    ? mostLikedPosts?.filter((post) =>
        post.tag.some((tag) => {
          return tag.includes(searchTag);
        }),
      )
    : mostLikedPosts;

  const infinite = () => {
    if (isLatestSuccess) {
      return latestPosts > 4 || type === 'MAIN' ? true : false;
    } else {
      return true;
    }
  };
  const arrows = () => {
    if (isLatestSuccess) {
      return latestPosts > 4 || type === 'MAIN' ? true : false;
    } else {
      return true;
    }
  };
  //Slick 설정.
  const settings = {
    dots: true, // 슬라이드 아래 점 표시
    infinite, // 무한 슬라이드
    speed: 1500, // 슬라이드 속도
    slidesToShow: 4 > filteredLatestPosts?.length ? filteredLatestPosts?.length : 4, // 개씩 보여줌
    slidesToScroll: 1, // 한번에 하나의 슬라이드만 넘김
    arrows, // 좌우 화살표
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className='container mx-auto '>
        {/* 최신순 배열 */}
        <h2 className='mt-5 ml-20 text-xl font-bold'> 최신장소 </h2>

        <Slider {...settings}>
          {isLatestSuccess
            ? filteredLatestPosts.map((post, index) => (
                <div
                  key={index}
                  className='snap-center shrink-0  h-[600px]:  min-w-[100%] max-w-[100%]   '
                >
                  <div className='p-4 min-w-[100%] '>
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
                      <div className='p-6 transition duration-300 ease-in hover:-bg--primary-green hover:text-white'>
                        <h1 className='mb-3 text-2xl font-semibold w-[100%] h-[64px] '>{post.title}</h1>
                        <p className='mb-3 leading-relaxed h-[65px]'>{post.description}</p>
                        <div className='flex flex-wrap items-center mt-6 -text--secondary-green'>
                          {new Date(post.created_at).toLocaleDateString()}
                          <div className=' text-[15px]  text-gray-600 ml-[170px]'>❤️ {post.likes}</div>
                        </div>

                        <div className='flex flex-wrap items-center mt-2 '>
                          <div className='inline-flex items-center -text--secondary-green md:mb-2 lg:mb-0'>
                            {post.author_nickname}
                          </div>
                          <div className='text-[12px] inline-flex items-center ml-auto mr-3 text-gray-400 lg:ml-auto md:ml-0'>
                            #{post.tag.join(', #')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </Slider>

        {/* 좋아요 많은순 */}
        <h2 className='mt-[80px] ml-20 text-xl font-bold'> 좋아요 많은 장소 </h2>
        <Slider {...settings}>
          {isMostLikedSuccess
            ? filteredMostLikedPosts.map((post, index) => (
                <div
                  key={index}
                  className='snap-center shrink-0  h-[600px]:  min-w-[100%] max-w-[100%]   '
                >
                  <div className='p-4 min-w-[100%]'>
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
                      <div className='p-6 transition duration-300 ease-in hover:-bg--primary-green hover:text-white'>
                        <h1 className='mb-3 text-2xl font-semibold h-[64px]'>{post.title}</h1>
                        <p className='mb-3 leading-relaxed h-[52px]'>{post.description}</p>
                        <div className='flex flex-wrap items-center mt-6 -text--secondary-green'>
                          {new Date(post.created_at).toLocaleDateString()}
                          <div className='text-gray-600 ml-[170px]'>❤️ {post.likes}</div>
                        </div>
                        <div className='flex flex-wrap items-center mt-2 '>
                          <div className='inline-flex items-center -text--secondary-green md:mb-2 lg:mb-0'>
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
              ))
            : null}
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
        background: 'rgba(159, 159, 159, 0.5)',
        borderRadius: '100%',
        pauseOnHover: true,
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
        background: 'rgba(159, 159, 159, 0.5)',
        borderRadius: '100%',
        pauseOnHover: true,
      }}
      onClick={onClick}
    />
  );
};
export default Card;
