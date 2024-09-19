import React, { useCallback, useRef, useState } from 'react';
import { validateId, validatePassword } from '../services/validate';
import { createUser, signUp } from '../api/auth/authAPI';
import { useNavigate } from 'react-router-dom';

const InputField = React.memo(({ placeholder, type, _ref, validation, onChange }) => {
  return (
    <div className='flex flex-col gap-[5px] w-full'>
      <input
        type={type}
        placeholder={placeholder}
        ref={_ref}
        className='px-[10px] h-[30px] border-[1px] border-solid border-black'
        onChange={onChange}
      />
      {validation === null ? null : validation ? (
        <span className='text-[10px] pl-[5px] text-green-300'>유효한 값 입니다.</span>
      ) : (
        <span className='text-[10px] pl-[5px] text-red-600'>
          {type === 'password'
            ? '최소 한 개 이상의 영문 숫자포함 8자리 이상'
            : '영문 숫자를 포함 6자리 이상(특수문자 제외)'}
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
    setNicknameValidation(validateId(nicknameRef.current.value));
  }, []);

  const handleSignUp = useCallback(async () => {
    const data = await signUp(userIdRef.current.value, passwordRef.current.value, nicknameRef.current.value);
    await createUser(userIdRef.current.value, nicknameRef.current.value);

    alert(data.message);
    data.success && navigate('/login');
  }, []);

  return (
    <div className='centeredDiv'>
      <div className='centeredDiv flex-col gap-[30px] py-[30px] px-[15px] w-1/6 border-[1px] border-solide border-black'>
        <InputField
          placeholder='아이디'
          type='text'
          _ref={userIdRef}
          validation={idValidation}
          onChange={handleIdChange}
        />
        <InputField
          placeholder='비밀번호'
          type='password'
          _ref={passwordRef}
          validation={passwordValidation}
          onChange={handlePasswordChange}
        />
        <InputField
          placeholder='닉네임'
          type='text'
          _ref={nicknameRef}
          validation={nicknameValidation}
          onChange={handleNicknameChange}
        />
        <button
          disabled={isEnabled}
          onClick={handleSignUp}
          className={`border-[1px] border-solid border-black w-full ${!isEnabled ? 'text-black' : 'text-gray-400'}`}
        >
          가입하기
        </button>
      </div>
    </div>
  );
};

export default Register;
