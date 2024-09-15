import Layout from '../shared/layout';
import Card from '../components/card';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  return (
    <>
      <Layout />
      <div>
        <div className='grid place-items-center'>
          <div className='mt-20 space-x-20'>
            <button
              onClick={() => {
                navigate('/map');
              }}
            >
              지도보기
            </button>
            <button
              onClick={() => {
                navigate('/form');
              }}
            >
              장소추천하기
            </button>
          </div>
          <div>
            <div className='mt-7 ml-[70px]'>
              <input
                type='text'
                placeholder='태그를 입력해주세요'
              />
              <button id='search'>검색</button>
            </div>
            <div className='mt-4 space-x-4'>
              <button>#차분한</button>
              <button>#다정한</button>
              <button>#병엽한</button>
              <button>#민영한</button>
              <button>#보영한</button>
            </div>
          </div>
        </div>
        <div className='mt-[300px]  ml-20'>
          <h1>최신장소</h1>

          <Card />
        </div>
      </div>
    </>
  );
};

export default Main;
