import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useGetPosts } from '../query/postQuery';

const Main = () => {
  const navigate = useNavigate();
  const [searchTag, setSearchTag] = useState('');
  const { isPending, isError } = useGetPosts();

  const handleTagClick = (tag) => {
    setSearchTag(tag);
  };

  if (isPending) {
    return <p>Loading..</p>;
  }

  if (isError) {
    return <p> Error </p>;
  }

  return (
    <>
      <div className='font-HakgyoansimNadeuriTTF-B'>
        <div>
          <div
            className='grid place-items-center'
            style={{
              height: '800px',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundImage: `url('https://i.ibb.co/GJSw9rH/Pngtree-park-landscape-photography-11743.jpg')`,
            }}
          >
            <h1 className=' font-semibold border-spacing-5 -text--primary-green text-[130px] text--bg--primary-green ml-[400px] mt-[265px]'>
              Walkaholic
            </h1>

            <div>
              <div className='mt-[70px] ml-[70px]  '>
                <input
                  className='drop-shadow-2xl text-center w-[800px] h-[60px] rounded-full border -border--primary-green hover:-border--secondary-green'
                  type='text'
                  placeholder='태그를 입력해주세요'
                  value={searchTag}
                  onChange={(e) => {
                    setSearchTag(e.target.value);
                  }}
                />
              </div>
              <div className='drop-shadow-2xl mt-[35px] ml-[270px] mb-[200px] space-x-4'>
                <button
                  className='p-2 text-white rounded-lg drop-shadow-2xl -bg--primary-green hover:-bg--secondary-green'
                  onClick={() => handleTagClick('시원한')}
                >
                  #시원한
                </button>
                <button
                  className='p-2 text-white rounded-lg drop-shadow-2xl -bg--primary-green hover:-bg--secondary-green'
                  onClick={() => handleTagClick('즐거운')}
                >
                  #즐거운
                </button>
                <button
                  className='p-2 text-white rounded-lg drop-shadow-2xl -bg--primary-green hover:-bg--secondary-green'
                  onClick={() => handleTagClick('일상적인')}
                >
                  #일상적인
                </button>
                <button
                  className='p-2 text-white rounded-lg drop-shadow-2xl -bg--primary-green hover:-bg--secondary-green'
                  onClick={() => handleTagClick('여유로운')}
                >
                  #여유로운
                </button>
                <button
                  className='p-2 text-white rounded-lg drop-shadow-2xl -bg--primary-green hover:-bg--secondary-green'
                  onClick={() => handleTagClick('활동적인')}
                >
                  #활동적인
                </button>
              </div>
            </div>
          </div>
          <div className='  mt-[30px] space-x-[50px] flex w-full items-center justify-center '>
            <button
              className=' hover:text-white hover:-bg--primary-green w-[300px] h-[200px]  hover:-border--secondary-green '
              onClick={() => {
                navigate('/map');
              }}
            >
              <div className=' ml-[95px]'>
                <img
                  className='w-[65px] ml-[18px]  mb-[15px] '
                  src='https://i.ibb.co/JQ4ZwCJ/image.png'
                  alt='image'
                />
                <p className='text-[20px] mr-[100px] font-bold'>지도보기</p>
              </div>
            </button>

            <button
              className=' hover:text-white hover:-bg--primary-green w-[300px] h-[200px]   hover:-border--secondary-green'
              onClick={() => {
                navigate('/form');
              }}
            >
              <div className=' ml-[65px] '>
                <img
                  className='w-[38px] mr-4 ml-[70px] mb-[15px]'
                  src='https://i.ibb.co/bRxpBp3/image.png'
                  alt='image'
                />
                <p className='text-[20px] mr-[60px] font-bold'>장소추천하기</p>
              </div>
            </button>
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
