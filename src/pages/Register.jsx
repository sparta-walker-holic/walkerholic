import React, { useCallback, useRef, useState } from 'react';
import { validateId, validatePassword, validateNickname } from '../services/validate';
import { createUser, signUp } from '../api/auth/authAPI';
import { useNavigate } from 'react-router-dom';

const InputField = React.memo(({ textType, _ref, validation, onChange, type }) => {
  return (
    <div className='flex flex-col gap-[10px] w-full'>
      <label className='text-[17px] text-white tracking-[5px]'>
        {type === 'id' ? '아이디' : type === 'password' ? '비밀번호' : '닉네임'}
      </label>
      <input
        type={textType}
        ref={_ref}
        className='bg-bg-input leading-[40px] rounded-[15px] border-none px-[20px] h-[40px] text-white enabled:hover:-border--primary-green'
        onChange={onChange}
      />
      {validation === null ? null : validation ? (
        <span className='text-[12px] pl-[5px] text-green-300'>유효한 값 입니다.</span>
      ) : (
        <span className='text-[12px] pl-[5px] text-red-600'>
          {type === 'id'
            ? '영문 숫자를 포함 6자리 이상(특수문자 제외)'
            : type === 'password'
              ? '최소 한 개 이상의 영문 숫자포함 4자리 이상'
              : '특수문자를 제외하고 알파벳(대소문자), 숫자, 한글로만 구성된 2자리 이상'}
        </span>
      )}
    </div>
  );
});

InputField.displayName = 'InputField';

const Register = () => {
  const userIdRef = useRef(null);
  const passwordRef = useRef(null);
  const nicknameRef = useRef(null);

  const [idValidation, setIdValidation] = useState(null);
  const [passwordValidation, setPasswordValidation] = useState(null);
  const [nicknameValidation, setNicknameValidation] = useState(null);

  const isEnabled = !(idValidation && passwordValidation && nicknameValidation);

  const navigate = useNavigate();

  const handleIdChange = useCallback(() => {
    setIdValidation(validateId(userIdRef.current.value));
  }, []);

  const handlePasswordChange = useCallback(() => {
    setPasswordValidation(validatePassword(passwordRef.current.value));
  }, []);

  const handleNicknameChange = useCallback(() => {
    setNicknameValidation(validateNickname(nicknameRef.current.value));
  }, []);

  const handleSignUp = useCallback(async () => {
    const data = await signUp(userIdRef.current.value, passwordRef.current.value, nicknameRef.current.value);
    await createUser(userIdRef.current.value, nicknameRef.current.value);

    alert(data.message);
    data.success && navigate('/login');
  }, []);

  return (
    <div className='centeredDiv'>
      <div className='bg-bg-walk bg-cover bg-center w-1/4 h-auto overflow-hidden rounded-[20px] shadow-default'>
        <div className='backdrop-opacity-20 backdrop-invert bg-black/30'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSignUp();
            }}
            className='centeredDiv flex-col py-[30px] px-[15px] gap-[40px]'
          >
            <h1 className='text-[20px] text-white tracking-[5px]'>회원가입</h1>
            <InputField
              textType='text'
              _ref={userIdRef}
              validation={idValidation}
              onChange={handleIdChange}
              type='id'
            />
            <InputField
              textType='password'
              _ref={passwordRef}
              validation={passwordValidation}
              onChange={handlePasswordChange}
              type='password'
            />
            <InputField
              textType='text'
              _ref={nicknameRef}
              validation={nicknameValidation}
              onChange={handleNicknameChange}
              type='nickname'
            />
            <button
              disabled={isEnabled}
              type='submit'
              className={`mt-[30px] h-[40px] leading-[40px] rounded-[20px] w-full ${!isEnabled ? 'text-white -bg--primary-green' : 'text-gray-400 border-[1px] border-gray-400'}`}
            >
              가입하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
