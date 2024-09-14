import { useEffect } from 'react';

const Form = () => {
  // 지도 API 불러오기
  useEffect(() => {
    const mapContainer = document.getElementById('map');
    const mapOption = {
      // 지도 중심 좌표
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      // 지도의 확대 레벨
      level: 3,
    };

    const map = new kakao.maps.Map(mapContainer, mapOption);
  }, []);

  return (
    <>
      <h1 className='text-center text-3xl font-bold'>게시글 작성</h1>
      <div>
        <form className='my-8 grid place-items-center'>
          <input
            required
            className='w-[500px] py-2 my-2 border p-2'
            placeholder='제목을 입력해주세요.'
            type='text'
          />
          <p>아래 지도에서 원하는 위치를 클릭해주세요!</p>
          <div
            id='map'
            style={{ width: '500px', height: '400px' }}
          ></div>
          {/* TODO: 태그 입력 부분 수정 */}
          <input
            required
            className='w-[500px] py-2 my-2 border p-2'
            placeholder='태그를 입력해주세요.'
          />
          <textarea
            required
            className='w-[500px] h-48 py-2 my-2 border p-2'
            placeholder='내용을 입력해주세요.'
          />
          <input
            className='w-[500px] py-2 my-2'
            type='file'
          />
          <div className='w-[500px] flex justify-between'>
            <button className='w-20 border'>이전</button>
            <button className='w-20 border'>등록</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
