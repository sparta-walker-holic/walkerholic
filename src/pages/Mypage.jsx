import mockData from '../mock';

const Mypage = () => {
  const post = mockData.posts;

  //포스트 맥돌리기

  return (
    <div className='flex flex-col h-full'>
      {/* 열받앙 헤이트가 비율로 적용이안됨.  */}
      <body className='flex flex-col p-10 justify-between'>
        <div className=' bg-neutral-200 w-7/12 h-48 mx-auto flex flex-col gap-5 justify-center items-center rounded-lg'>
          <div>
            <p className='text-lg '>닉네임</p>
            <p>보영짱</p>
          </div>
          <div>
            <p className='text-lg '>아이디</p>
            <p>qhdud7857</p>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <p className='text-lg'>내장소</p>
          <div className='flex gap-5'>
            {post.map((item) => (
              <div
                className='flex w-1/6 flex-col'
                key={item.id}
              >
                <img
                  className=' bg-neutral-200 h-28 rounded-t-lg'
                  src={item.img_url}
                />
                <div className=' bg-neutral-200 h-20 rounded-b-lg'>
                  <p className='pl-2'>지역</p>
                  <p className='pl-2'>구</p>
                  <div className='flex justify-around'>
                    <div>{item.tag}</div>
                    <button className='bg-blue-950 text-white w-12 rounded-md'>삭제</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className='text-lg'>좋아요한 장소</p>
          <div className='flex gap-5'>
            {post.map((item) => (
              <div
                className='flex w-1/6 flex-col'
                key={item.id}
              >
                <img
                  className=' bg-neutral-200 h-28 rounded-t-lg'
                  src={item.img_url}
                />
                <div className=' bg-neutral-200 h-20 rounded-b-lg'>
                  <p className='pl-2'>지역</p>
                  <p className='pl-2'>구</p>
                  <div className='flex justify-around'>
                    <div>{item.tag}</div>
                    <button className='bg-blue-950 text-white w-12 rounded-md'>삭제</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </body>
    </div>
  );
};

export default Mypage;
