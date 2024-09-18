import axios from 'axios';
import { useEffect, useState } from 'react';

const Form = () => {
  // const [clickLatLng, setClickLatLng] = useState({ lat: '', lng: '' });
  const API_URL = 'http://localhost:4000';

  const [posts, setPosts] = useState(null);
  const [post, setPost] = useState({
    title: '',
    description: '',
    img_url: '',
    created_at: '',
    author_id: '',
    author_nickname: '',
    tag: [],
    position: {
      lat: 0,
      lng: 0,
    },
  });
  const [previewUrl, setPreviewUrl] = useState('');

  // 지도 API 불러오기
  useEffect(() => {
    const mapContainer = document.getElementById('map');
    const mapOption = {
      // 지도 중심 좌표
      center: new kakao.maps.LatLng(37.55468604177569, 126.97058654356819),
      // 지도의 확대 레벨
      level: 3,
    };

    // 지도 생성
    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 클릭한 위치에 마커 표시
    const marker = new kakao.maps.Marker({
      // 지도 중심 좌표에 마커 생성
      position: map.getCenter(),
    });
    // 지도에 마커 표시
    marker.setMap(map);

    // 지도에 클릭 이벤트 등록
    kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
      // 클릭한 곳의 위도, 경도 정보를 가져옴
      const latlng = mouseEvent.latLng;

      // 마커를 클릭한 위치로 이동
      marker.setPosition(latlng);

      console.log('위도, 경도 => ', latlng.getLat(), latlng.getLng());

      setPost((prevPost) => ({
        ...prevPost,
        position: coordinate,
      }));

      const coordinate = {
        lat: latlng.getLat(),
        lng: latlng.getLng(),
      };
    });
  }, []);

  // 데이터 요청
  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await axios.get(`${API_URL}/posts`);
      setPosts(data);
    };
    fetchPost();
  }, []);

  console.log('posts', posts);

  // 데이터 추가
  // TODO: 새로고침해야 데이터 들어가는 것 수정
  const onSubmitHandler = async (post) => {
    const date = new Date();
    const dateStr = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    console.log(dateStr);
    setPost((prevPost) => ({
      ...prevPost,
      created_at: dateStr,
    }));
    console.log('post=> ', post);
    // await axios.post(`${API_URL}/posts`, post);

    try {
      await axios.post(`${API_URL}/posts`, { ...post, created_at: dateStr });
    } catch (error) {
      console.log(error);
    }
    // setPost({ ...post, created_at: dateStr });
  };

  const onChangeImageUpload = (e) => {
    // const file = e.target.files[0];
    // const imageUrl = URL.createObjectURL(file);
    // setUploadImgUrl(imageUrl);
    // setPost({ ...post, img_url: imageUrl });

    const reader = new FileReader();
    const file = e.target.files[0];

    // TODO: Base64 데이터 최적화하기 => 가독성 너무 안 좋음
    reader.onloadend = (e) => {
      const base64Img = e.target.result;
      setPost({ ...post, img_url: base64Img });
      console.log(file);
      console.log(e.target.result);
    };
    reader.readAsDataURL(file);
    // setPreviewUrl(reader.result);
    console.log(reader);
  };

  return (
    <>
      <h1 className='text-center text-3xl font-bold'>게시글 작성</h1>
      <div>
        <form
          className='my-8 grid place-items-center'
          onSubmit={(e) => {
            e.preventDefault();
            // alert('test');
            onSubmitHandler(post);
          }}
        >
          <input
            // required
            className='w-[500px] py-2 my-2 border p-2'
            placeholder='제목을 입력해주세요.'
            type='text'
            onChange={(e) => {
              setPost({ ...post, title: e.target.value });
            }}
          />
          <p>아래 지도에서 원하는 위치를 클릭해주세요!</p>
          <div
            id='map'
            style={{ width: '500px', height: '400px' }}
          ></div>
          {/* TODO: 태그 입력 부분 수정 */}
          <input
            // required
            className='w-[500px] py-2 my-2 border p-2'
            placeholder='태그를 입력해주세요.'
            onChange={(e) => {
              setPost({ ...post, tag: e.target.value });
            }}
          />
          <textarea
            // required
            className='w-[500px] h-48 py-2 my-2 border p-2'
            placeholder='내용을 입력해주세요.'
            onChange={(e) => {
              setPost({ ...post, description: e.target.value });
            }}
          />
          <input
            className='w-[500px] py-2 my-2'
            type='file'
            accept='image/jpg, image/png, image/jpeg, image/gif'
            onChange={onChangeImageUpload}
          />
          <div>{previewUrl}</div>
          <div className='w-[500px] flex justify-between'>
            <button className='w-20 border'>이전</button>
            <button
              className='w-20 border'
              type='submit'
            >
              {' '}
              등록
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
