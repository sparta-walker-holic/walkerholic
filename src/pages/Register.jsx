import React, { useCallback, useRef, useState } from 'react';
import { validateId, validatePassword, validateNickname } from '../services/validate';
import { createUser, signUp } from '../api/auth/authAPI';
import { useNavigate } from 'react-router-dom';

const InputField = React.memo(({ placeholder, textType, _ref, validation, onChange, type }) => {
  return (
    <div className='flex flex-col gap-[5px] w-full'>
      <input
        type={textType}
        placeholder={placeholder}
        ref={_ref}
        className='px-[10px] h-[30px] border-[1px] border-solid border-black'
        onChange={onChange}
      />
      {validation === null ? null : validation ? (
        <span className='text-[10px] pl-[5px] text-green-300'>유효한 값 입니다.</span>
      ) : (
        <span className='text-[10px] pl-[5px] text-red-600'>
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
      <div className='centeredDiv flex-col gap-[30px] py-[30px] px-[15px] w-1/6 border-[1px] border-solide border-black'>
        <InputField
          placeholder='아이디'
          textType='text'
          _ref={userIdRef}
          validation={idValidation}
          onChange={handleIdChange}
          type='id'
        />
        <InputField
          placeholder='비밀번호'
          textType='password'
          _ref={passwordRef}
          validation={passwordValidation}
          onChange={handlePasswordChange}
          type='password'
        />
        <InputField
          placeholder='닉네임'
          textType='text'
          _ref={nicknameRef}
          validation={nicknameValidation}
          onChange={handleNicknameChange}
          type='nickname'
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
