const Mypage = () => {
  return (
    <div className='flex flex-col h-full'>
      <div className='bg-neutral-200 h-16'>레이아웃헤더</div>
      {/* 열받앙 하이트비율로 적용이안됨.  */}
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
          <div className='border-black'>
            {/* //보더컬러 왜 적용안됨? 열받 */}
            <div className='flex w-1/6 bg-neutral-200 h-20 rounded-t-lg'>게시물 사진</div>
            <div className='flex  flex-col w-1/6 bg-neutral-200 h-20 rounded-b-lg'>
              <p className='pl-2'>지역</p>
              <p className='pl-2'>구</p>
              <div className='flex justify-around'>
                <div>키워드</div>
                <button className='bg-blue-950 text-white w-12 rounded-md'>삭제</button>
              </div>
            </div>
          </div>

          <p className='text-lg'>좋아요한 장소</p>
          <div>
            <div className='flex w-1/6 bg-neutral-200 h-20 rounded-t-lg'>게시물 사진</div>
            <div className='flex flex-col w-1/6 bg-neutral-200 h-20 rounded-b-lg'>
              <p className='pl-2'>지역</p>
              <p className='pl-2'>구</p>
              <div className='flex justify-around'>
                <div>키워드</div>
                <button className='bg-blue-950 text-white w-12 rounded-md'>삭제</button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Mypage;
