import mockData from '../mokaData';

const Card = () => {
  console.log(mockData);
  return (
    <>
      <div className='flex flex-wrap'>
        {mockData.posts.map((post, index) => (
          <div
            key={index}
            className='p-4 w-[500px] '
          >
            <div className='p-4 '>
              <div className='h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60'>
                <img
                  className='object-cover object-center w-full lg:h-72 md:h-48'
                  src={post.img_url}
                  alt='blog'
                />
                <div className='p-6 transition duration-300 ease-in hover:bg-indigo-600 hover:text-white'>
                  <h2 className='mb-1 text-base font-medium text-indigo-300'>{post.created_at}</h2>
                  <h1 className='mb-3 text-2xl font-semibold'>{post.title}</h1>
                  <p className='mb-3 leading-relaxed'>{post.description}</p>
                  <div className='flex flex-wrap items-center mt-6'>{post.created_at}</div>
                  <div className='flex flex-wrap items-center mt-2 '>
                    <div className='inline-flex items-center text-indigo-300 md:mb-2 lg:mb-0'>
                      {post.author_nickname}
                    </div>
                    <div className='inline-flex items-center ml-auto mr-3 text-gray-400 lg:ml-auto md:ml-0'>
                      #{post.tag.join(', #')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
