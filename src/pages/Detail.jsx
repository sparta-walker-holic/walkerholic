import { useParams } from 'react-router-dom';
import mockData from '../mock';
import { useEffect } from 'react';
import useUserStore from '../stores/useUserStore';

const Detail = () => {
  const { postId } = useParams();
  const { user } = useUserStore((state) => state.user);
  const post = mockData.posts.find((item) => item.id === postId.toString());

  useEffect(() => {
    const { kakao } = window;
    const mapContainer = document.getElementById('map');
    const mapOptions = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), //이게 동적으로 들어오는 값
      level: 3,
    };
    const map = new kakao.maps.Map(mapContainer, mapOptions);

    const marker = new kakao.maps.Marker({
      position: map.getCenter(),
    });
    marker.setMap(map);
  }, []);

  return (
    <div className='bg-neutral-200  w-6/12 h-full flex mx-auto my-5 flex-col py-5 px-10 gap-5'>
      <div className='flex justify-between'>
        <div>하트</div>
        <div>닫기</div>
      </div>
      <div className='flex justify-between'>
        <div className='flex flex-col w-4/6 gap-12'>
          <h1 className='font-bold text-xl '>{post.title}</h1>
          <p>닉네임:{post.author_nickname}</p>
          <p>설명:{post.description}</p>
          <p>
            장소:{post.position.lat}
            {post.position.lng}
          </p>
        </div>
        <img
          className='bg-neutral-400 w-2/6 h-80'
          src={post.img_url}
        />
      </div>
      <div
        className='bg-neutral-500 w-full h-3/5'
        id='map'
      >
        지도
      </div>
    </div>
  );
};

export default Detail;
