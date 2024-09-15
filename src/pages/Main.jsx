import Layout from '../shared/layout';

const Main = () => {
  return (
    <>
      <Layout />
      <div>
        <div className='text-blue-600'>
          <button>지도보기</button>
          <button>장소 추천하기</button>
        </div>
        <div>
          <div>
            <input
              type='text'
              placeholder='태그를 입력해주세요'
            />
            <button id='search'>검색</button>
          </div>
          <button>#차분한</button>
          <button>#다정한</button>
          <button>#병엽한</button>
          <button>#민영한</button>
          <button>#보영한</button>
        </div>
        <div>
          <h2>최신장소</h2>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Main;
