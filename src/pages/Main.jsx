import Card from '../components/card';
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
          <div className='  mt-[150px] space-x-5 ml-[65px]'>
            <button
              className='  w-[230px] h-[80px] rounded-lg  border border-slate-300 hover:border-indigo-300 '
              onClick={() => {
                navigate('/map');
              }}
            >
              <div className='flex place-items-center ml-[52px]'>
                <a href='https://imgbb.com/'>
                  <img
                    className='w-[60px]'
                    src='https://i.ibb.co/JQ4ZwCJ/image.png'
                    alt='image'
                  />
                </a>
                <p>지도보기</p>
              </div>
            </button>
            <button
              className=' w-[230px] h-[80px]  rounded-lg border border-slate-300 hover:border-indigo-300'
              onClick={() => {
                navigate('/form');
              }}
            >
              <div className='flex place-items-center ml-[45px]'>
                <a href='https://imgbb.com/'>
                  <img
                    className='w-10'
                    src='https://i.ibb.co/bRxpBp3/image.png'
                    alt='image'
                  />
                </a>
                <p>장소추천하기</p>
              </div>
            </button>
          </div>
          <div>
            <div className='mt-5 ml-[70px] '>
              <input
                className=' text-center w-[500px] h-[60px] rounded-full border border-slate-300 hover:border-indigo-300'
                type='text'
                placeholder='태그를 입력해주세요'
                value={searchTag}
                onChange={(e) => setSearchTag(e.target.value)}
              />
            </div>
            <div className='mt-3 ml-[90px] space-x-4'>
              <button
                className='p-1 rounded-lg bg-slate-200 hover:bg-slate-300'
                onClick={() => handleTagClick('상쾌한')}
              >
                #상쾌한
              </button>
              <button
                className='p-1 rounded-lg bg-slate-200 hover:bg-slate-300'
                onClick={() => handleTagClick('즐거운')}
              >
                #즐거운
              </button>
              <button
                className='p-1 rounded-lg bg-slate-200 hover:bg-slate-300'
                onClick={() => handleTagClick('일상적인')}
              >
                #일상적인
              </button>
              <button
                className='p-1 rounded-lg bg-slate-200 hover:bg-slate-300'
                onClick={() => handleTagClick('여유로운')}
              >
                #여유로운
              </button>
              <button
                className='p-1 rounded-lg bg-slate-200 hover:bg-slate-300'
                onClick={() => handleTagClick('활동적인')}
              >
                #활동적인
              </button>
            </div>
          </div>
        </div>
        <div className='mt-[220px]  ml-20'>
          <Card searchTag={searchTag} />
        </div>
      </div>
    </>
  );
};

export default Main;
