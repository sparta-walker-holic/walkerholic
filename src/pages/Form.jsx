import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const { kakao } = window;
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
  const navigate = useNavigate();

  useEffect(() => {
    // 지도 API 불러오기
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

  // 데이터 추가
  const onSubmitHandler = async (post) => {
    const date = new Date();
    const dateStr = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    console.log(dateStr);

    // TODO: created_at 뒤에 user 정보 입력
    try {
      await axios.post(`${API_URL}/posts`, { ...post, created_at: dateStr });
      alert('게시글이 등록되었습니다!');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  // 이미지 업로드
  const onChangeImageUpload = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = (e) => {
      const base64Img = e.target.result;
      setPost({ ...post, img_url: base64Img });
    };
    reader.readAsDataURL(file);
  };

  // 태그 입력
  const handleKeyDown = (e) => {
    const value = e.target.value;
    const tagArr = value.split(',').map((item) => {
      return item.trim();
    });

    console.log(tagArr);
    setPost({ ...post, tag: tagArr });
  };

  // 주소 검색하기
  const onSearchHandler = () => {
    alert('연결 확인');
  };

  return (
    <>
      <h1 className='text-3xl font-bold text-center'>게시글 작성</h1>
      <div>
        <form
          className='grid my-8 place-items-center'
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitHandler(post);
          }}
        >
          <input
            required
            className='w-[500px] py-2 my-2 border p-2'
            placeholder='제목을 입력해주세요.'
            type='text'
            onChange={(e) => {
              setPost({ ...post, title: e.target.value });
            }}
          />
          <input className='w-[500px] py-2 my-2 border p-2' />
          <button
            className='w-20 border '
            type='button'
            onClick={onSearchHandler}
          >
            검색하기
          </button>
          <p>아래 지도에서 원하는 위치를 클릭해주세요!</p>
          <div
            id='map'
            style={{ width: '500px', height: '400px' }}
          ></div>
          <div>
            {post.tag.map((tagStr, idx) => {
              <div key={idx}>
                <sapn>{tagStr}</sapn>
                <span>&times;</span>
              </div>;
            })}
            <input
              required
              className='w-[500px] py-2 my-2 border p-2'
              name='tag[]'
              placeholder='태그를 입력해주세요. ex) 활기찬, 생동감있는'
              onChange={handleKeyDown}
            />
          </div>
          <textarea
            required
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
          <div>
            <button
              className='w-20 border '
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
