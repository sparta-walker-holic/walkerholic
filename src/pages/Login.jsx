import { useRef } from 'react';
import { getUser, signIn } from '../api/auth/authAPI';
import useAuthStorage from '../hooks/useAuthStorage';
import useUserStore from '../stores/useUserStore';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const userIdRef = useRef(null);
  const passwordRef = useRef(null);
  const { setItem } = useAuthStorage();
  const login = useUserStore((state) => state.login);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    const data = await signIn(userIdRef.current.value, passwordRef.current.value);
    await setItem('accessToken', data.accessToken);
    const userInfo = await getUser(data.userId);
    login(userInfo);

    alert('성공적으로 로그인 되었습니다.');
    navigate('/');
  };

  return (
    <div className='centeredDiv'>
      <div className='bg-bg-walk bg-cover bg-center w-1/4 h-auto overflow-hidden rounded-[20px] shadow-default my-[50px]'>
        <div className='backdrop-opacity-10 backdrop-invert bg-black/20'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSignIn();
            }}
            className='centeredDiv flex-col py-[30px] px-[15px] gap-[40px]'
          >
            <h1 className='text-[20px] text-white tracking-[5px]'>로그인</h1>
            <div className='flex flex-col gap-[10px] w-full'>
              <label className='text-[17px] text-white tracking-[5px]'>아이디</label>
              <input
                type='text'
                ref={userIdRef}
                className='bg-bg-input leading-[40px] rounded-[15px] border-none px-[20px] h-[40px] text-white'
              />
            </div>
            <div className='flex flex-col gap-[10px] w-full'>
              <label className='text-[17px] text-white tracking-[5px]'>비밀번호</label>
              <input
                type='password'
                ref={passwordRef}
                className='bg-bg-input leading-[40px] rounded-[15px] border-none px-[20px] h-[40px] text-white'
              />
            </div>
            <button
              type='submit'
              className='mt-[30px] h-[40px] leading-[40px] rounded-[20px] w-full text-white -bg--primary-green'
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
