import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useUserStore from '../stores/useUserStore';
import { useGetPostById } from '../query/postQuery';

const Detail = () => {
  const { postId } = useParams();
  const { user } = useUserStore((state) => state.user); //좋아요한 사용자 구별위해
  const { data, isError, isSuccess, isPending } = useGetPostById(postId);

  if (isSuccess) {
    console.log(data);
  }
  if (isError) {
    console.log('에러');
  }
  useEffect(() => {
    if (!isPending) {
      const { kakao } = window;
      const mapContainer = document.getElementById('map');
      console.log('mapContainer', mapContainer);
      const mapOptions = {
        center: new kakao.maps.LatLng(post.position.lat, post.position.lng), //이게 동적으로 들어오는 값
        level: 3,
      };
      const map = new kakao.maps.Map(mapContainer, mapOptions);
      const marker = new kakao.maps.Marker({
        position: map.getCenter(),
      });
      marker.setMap(map);
    }
  }, [isPending]);

  if (isPending) {
    return <div>로딩 중..</div>;
  }

  const [post] = data;

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
          <p>장소:{post.address}</p>
        </div>
        <img
          className='bg-neutral-400 w-2/6 h-80'
          src={post.img_url}
        />
      </div>
      <div
        className='bg-neutral-500 w-full h-3/5'
        id='map'
      ></div>
    </div>
  );
};

export default Detail;
