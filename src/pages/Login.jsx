import { useRef } from 'react';
import { getUser, signIn } from '../api/auth/authAPI';
import useAuthStorage from '../hooks/useAuthStorage';
import useUserStore from '../stores/useUserStore';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const userIdRef = useRef(null);
  const passwordRef = useRef(null);
  const { setItem } = useAuthStorage();
  const update = useUserStore((state) => state.update);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    const data = await signIn(userIdRef.current.value, passwordRef.current.value);
    await setItem('accessToken', data.accessToken);
    const userInfo = await getUser(data.userId);
    update(userInfo);

    alert('성공적으로 로그인 되었습니다.');
    navigate('/');
  };

  return (
    <div className='centeredDiv'>
      <div className='centeredDiv flex-col gap-[30px] py-[30px] px-[15px] w-1/6 border-[1px] border-solide border-black'>
        <input
          type='text'
          placeholder='아이디'
          ref={userIdRef}
          className='px-[10px] h-[30px] border-[1px] border-solid border-black'
        />
        <input
          type='password'
          placeholder='비밀번호'
          ref={passwordRef}
          className='px-[10px] h-[30px] border-[1px] border-solid border-black'
        />
        <button
          onClick={handleSignIn}
          className='border-[1px] border-solid border-black w-full '
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default Login;
