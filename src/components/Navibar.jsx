import { Link, useNavigate } from 'react-router-dom';
import useUserStore from '../stores/useUserStore';
import { useEffect, useState } from 'react';
import useAuthStorage from '../hooks/useAuthStorage';
import { verifyJwtToken, getUser } from '../api/auth/authAPI';

const Navibar = () => {
  const [isLoading, setLoading] = useState(true);
  const { isAuthenticated } = useUserStore((state) => state.user);
  const update = useUserStore((state) => state.update);
  const login = useUserStore((state) => state.login);
  const logout = useUserStore((state) => state.logout);
  const { getItem, removeItem } = useAuthStorage();
  const navigate = useNavigate();

  useEffect(() => {
    const authenticate = async () => {
      setLoading(true);
      const token = await getItem('accessToken');
      const data = await verifyJwtToken(token);

      if (!token || !data) {
        setLoading(false);
        update();
        return; // 토큰이 없으면 함수 종료
      }

      const userInfo = await getUser(data.id);
      login(userInfo);
      setLoading(false);
    };

    authenticate();
  }, []);

  const handleLogOut = async () => {
    await removeItem('accessToken');
    logout();

    navigate('/');
  };

  if (isLoading) {
    return (
      <nav className='fixed top-0 left-0 w-full h-[80px] centeredDiv flew-row justify-between px-[100px] -bg--primary-green z-10'>
        <div
          onClick={() => {
            navigate('/');
          }}
          className='centeredDiv w-[80px] h-full -bg--primary-green'
        >
          <img
            onClick={() => {
              navigate('/');
            }}
            src='https://i.ibb.co/wWNyqCz/3.png'
            alt='3'
            border='0'
          />
        </div>
      </nav>
    );
  }

  return (
    <nav className='fixed top-0 left-0 w-full h-[80px] centeredDiv flew-row justify-between px-[100px] -bg--primary-green z-10'>
      <div
        onClick={() => {
          navigate('/');
        }}
        className='centeredDiv w-[80px] h-full -bg--primary-green'
      >
        <img
          onClick={() => {
            navigate('/');
          }}
          src='https://i.ibb.co/wWNyqCz/3.png'
          alt='3'
          border='0'
        />
        <p className='ml-[20px] text-white'>walkaholic</p>
      </div>
      <div className='text-white centeredDiv flex-row gap-[20px]'>
        {isAuthenticated ? (
          <>
            <Link to='/mypage'>
              <button>마이페이지</button>
            </Link>
            <button onClick={handleLogOut}>로그아웃</button>
          </>
        ) : (
          <>
            <Link to='/login'>
              <button>로그인</button>
            </Link>
            <Link to='/register'>
              <button>회원가입</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navibar;
