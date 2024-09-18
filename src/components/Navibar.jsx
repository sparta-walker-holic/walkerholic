import { Link } from 'react-router-dom';

const Navibar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full h-[80px] centeredDiv flew-row justify-between px-[100px] bg-pink-300'>
      <div className='centeredDiv w-[80px] h-full bg-white'></div>
      <div className='centeredDiv flex-row gap-[20px]'>
        <button>로그인</button>
        <Link to='/register'>
          <button>회원가입</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navibar;
