import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../stores/useUserStore';

const Form = () => {
  const { kakao } = window;
  const API_URL = 'http://localhost:4000';
  const { user_id, nickname } = useUserStore((state) => state.user);

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
    address: '',
    like: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    // 지도 API 불러오기
    const mapContainer = document.getElementById('map');
    const mapOption = {
      // 지도 중심 좌표
      center: new kakao.maps.LatLng(35.96316856652495, 127.82690202979383),
      // 지도의 확대 레벨
      level: 13,
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

      // 클릭한 곳의 주소 정보를 가져옴
      // TODO: 주소가 화면에 노출되면 좋을 듯
      searchDetailAddrFromCoords(latlng, function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          const address = result[0].address.address_name;
          // 마커를 클릭한 위치로 이동
          marker.setPosition(latlng);

          const coordinate = {
            lat: latlng.getLat(),
            lng: latlng.getLng(),
          };

          setPost((prevPost) => ({
            ...prevPost,
            position: coordinate,
            address: address,
          }));
        }
      });
    });
  }, []);

  // 주소-좌표 변환
  const geocoder = new kakao.maps.services.Geocoder();

  function searchDetailAddrFromCoords(coords, callback) {
    // 좌표로 법정동 상세 주소 정보를 요청합니다
    geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
  }

  // 데이터 추가
  const onSubmitHandler = async (post) => {
    const date = new Date();
    const dateStr = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

    try {
      await axios.post(`${API_URL}/posts`, {
        ...post,
        created_at: dateStr,
        author_id: user_id,
        author_nickname: nickname,
      });
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

    setPost({ ...post, tag: tagArr });
  };

  return (
    <>
      <h1 className='text-4xl mt-36 mb-14 pb-2 font-bold text-center -text--primary-green'>
        <span className='border-b-2 p-2'>장소 추천하기</span>
      </h1>
      <div>
        <div className='grid m-10 place-items-center'>
          <form
            className='flex w-[1200px]'
            onSubmit={(e) => {
              e.preventDefault();
              onSubmitHandler(post);
            }}
          >
            <div className='mr-10'>
              <p className='mb-4'>아래 지도에서 원하는 위치를 클릭해주세요!</p>
              <div
                id='map'
                className='w-[700px] h-[600px] rounded-lg'
              ></div>
            </div>

            <div className='place-items-start row-end-3 mt-8'>
              <label className='mb-0 font-bold text-lg'>제목</label>
              <input
                required
                className='w-[500px] mt-2 py-2 mb-5 border p-3 focus:ring-2 focus:ring-inset focus:-ring--primary-green focus:outline-none rounded-lg'
                placeholder='제목을 입력해주세요.'
                type='text'
                onChange={(e) => {
                  setPost({ ...post, title: e.target.value });
                }}
              />
              {/* TODO: 벨로그 태그 입력처럼 바꿔보기 */}
              <label className='mb-0 font-bold text-lg'>태그</label>
              <input
                required
                className='w-[500px] mt-2 py-2 mb-5  border p-3 focus:ring-2 focus:ring-inset focus:-ring--primary-green focus:outline-none rounded-lg'
                name='tag[]'
                placeholder='ex) 활기찬, 생동감있는'
                onChange={handleKeyDown}
              />
              <label className='mb-0 font-bold text-lg'>내용</label>
              <textarea
                required
                className='w-[500px] mt-2 h-48 py-2 mb-2 border p-3 focus:ring-2 focus:ring-inset focus:-ring--primary-green focus:outline-none rounded-lg resize-none'
                placeholder='내용을 입력해주세요.'
                onChange={(e) => {
                  setPost({ ...post, description: e.target.value });
                }}
              />
              <label className='mb-0 font-bold text-lg'>파일 첨부</label>
              <input
                required
                className='w-[500px] mt-2 py-2 mb-5'
                type='file'
                accept='image/jpg, image/png, image/jpeg, image/gif'
                onChange={onChangeImageUpload}
              />
              <div className='mt-2'>
                <button
                  className='w-[240px] h-14 border -border--primary-green rounded-lg mr-4 -text--primary-green'
                  type='button'
                  onClick={() => {
                    navigate('-1');
                  }}
                >
                  취소하기
                </button>
                <button
                  className='w-[240px] border h-14 -bg--primary-green text-white rounded-lg'
                  type='submit'
                >
                  {' '}
                  등록하기
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
