import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Main = () => {
  const navigate = useNavigate();
  const [searchTag, setSearchTag] = useState('');

  const handleTagClick = (tag) => {
    setSearchTag(tag);
  };

  return (
    <>
      <div>
        <div className='grid place-items-center'>
          <div className='  mt-[150px] space-x-[30px] ml-[65px]'>
            <button
              className='  w-[300px] h-[100px] rounded-lg  border -border--primary-green hover:-border--secondary-green '
              onClick={() => {
                navigate('/map');
              }}
            >
              <div className='flex place-items-center ml-[70px]'>
                <img
                  className='w-[65px] mr-4 '
                  src='https://i.ibb.co/JQ4ZwCJ/image.png'
                  alt='image'
                />
                <p className='text-[20px]'>지도보기</p>
              </div>
            </button>
            <button
              className=' w-[300px] h-[100px]  rounded-lg border -border--primary-green hover:-border--secondary-green'
              onClick={() => {
                navigate('/form');
              }}
            >
              <div className='flex place-items-center ml-[65px] '>
                <img
                  className='w-[38px] mr-4 '
                  src='https://i.ibb.co/bRxpBp3/image.png'
                  alt='image'
                />
                <p className='text-[20px]'>장소추천하기</p>
              </div>
            </button>
          </div>
          <div>
            <div className='mt-[100px] ml-[70px] '>
              <input
                className=' text-center w-[800px] h-[60px] rounded-full border -border--primary-green hover:-border--secondary-green'
                type='text'
                placeholder='태그를 입력해주세요'
                value={searchTag}
                onChange={(e) => setSearchTag(e.target.value)}
              />
            </div>
            <div className='mt-[35px] ml-[230px] space-x-4'>
              <button
                className='p-1 text-white rounded-lg -bg--primary-green hover:-bg--secondary-green'
                onClick={() => handleTagClick('상쾌한')}
              >
                #상쾌한
              </button>
              <button
                className='p-1 text-white rounded-lg -bg--primary-green hover:-bg--secondary-green'
                onClick={() => handleTagClick('즐거운')}
              >
                #즐거운
              </button>
              <button
                className='p-1 text-white rounded-lg -bg--primary-green hover:-bg--secondary-green'
                onClick={() => handleTagClick('일상적인')}
              >
                #일상적인
              </button>
              <button
                className='p-1 text-white rounded-lg -bg--primary-green hover:-bg--secondary-green'
                onClick={() => handleTagClick('여유로운')}
              >
                #여유로운
              </button>
              <button
                className='p-1 text-white rounded-lg -bg--primary-green hover:-bg--secondary-green'
                onClick={() => handleTagClick('활동적인')}
              >
                #활동적인
              </button>
            </div>
          </div>
        </div>
        <div className='mt-[220px]  ml-20'>
          <Card
            type={'MAIN'}
            searchTag={searchTag}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
