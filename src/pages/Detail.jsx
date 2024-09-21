import React from 'react';

const Detail = () => {
  return <div></div>;
};

export default Detail;

// import { useParams } from 'react-router-dom';
// import mockData from '../mock';
//
// const Detail = () => {
//   const { postId } = useParams();
//   const post = mockData.posts.find((item) => item.id === postId.toString());
//   console.log(post.title);
//   return (
//     <div className='bg-neutral-200  w-6/12 h-full flex mx-auto my-5 flex-col py-5 px-10 gap-5'>
//       <div className='flex justify-between'>
//         <div>하트</div>
//         <div>닫기</div>
//       </div>
//       <div className='flex justify-between'>
//         <div className='flex flex-col w-4/6 gap-12'>
//           <h1 className='font-bold text-xl '>{post.title}</h1>
//           <p>닉네임:{post.author_nickname}</p>
//           <p>설명:{post.description}</p>
//           <p>
//             장소:{post.position.lat}
//             {post.position.lng}
//           </p>
//         </div>
//         <img
//           className='bg-neutral-400 w-2/6 h-80'
//           src={post.img_url}
//         />
//       </div>
//       <div className='bg-neutral-500 w-full h-3/5'>지도</div>
//     </div>
//   );
// };
//
// export default Detail;
