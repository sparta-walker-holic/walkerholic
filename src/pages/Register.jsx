import React, { useCallback, useRef, useState } from 'react';
import { validateId, validatePassword } from '../services/validate';
import { signUp } from '../api/auth/authAPI';
import _ from 'lodash';

const InputField = React.memo(({ placeholder, type, _ref, validation, onChange }) => {
  console.log(placeholder);
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

  const debouncedValidateUserId = useCallback(
    _.debounce(() => {
      setIdValidation(validateId(userIdRef.current.value));
    }, 500),
    [],
  );

  const handleIdChange = useCallback(() => {
    debouncedValidateUserId();
  }, []);

  const debouncedValidatePassword = useCallback(
    _.debounce(() => {
      setPasswordValidation(validatePassword(passwordRef.current.value));
    }, 500),
    [],
  );

  const handlePasswordChange = useCallback(() => {
    debouncedValidatePassword();
  }, []);

  const debouncedValidateNickname = useCallback(
    _.debounce(() => {
      setNicknameValidation(validateId(nicknameRef.current.value));
    }, 500),
    [],
  );

  const handleNicknameChange = useCallback(() => {
    debouncedValidateNickname();
  }, []);

  const handleSignUp = useCallback(async () => {
    await signUp(userIdRef.current.value, passwordRef.current.value, nicknameRef.current.value);
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

// const Register = () => {
//   const userIdRef = useRef(null);
//   const passwordRef = useRef(null);
//   const nicknameRef = useRef(null);

//   const [idValidation, setIdValidation] = useState(null);
//   const [passwordValidation, setPasswordValidation] = useState(null);
//   const [nicknameValidation, setNicknameValidation] = useState(null);
//   const isEnabled = !(idValidation && passwordValidation && nicknameValidation);

//   const debouncedValidateUserId = useCallback(
//     _.debounce(() => {
//       setIdValidation(validateId(userIdRef.current.value));
//     }, 500),
//     [],
//   );

//   const handleIdChange = () => {
//     debouncedValidateUserId();
//   };

//   const debouncedValidatePassword = useCallback(
//     _.debounce(() => {
//       setPasswordValidation(validatePassword(passwordRef.current.value));
//     }, 500),
//     [],
//   );

//   const handlePasswordChange = () => {
//     debouncedValidatePassword();
//   };

//   const debouncedValidateNickname = useCallback(
//     _.debounce(() => {
//       setNicknameValidation(validateId(nicknameRef.current.value));
//     }, 500),
//     [],
//   );

//   const handleNicknameChange = () => {
//     debouncedValidateNickname();
//   };

//   const handleSignUp = async () => {
//     await signUp(userIdRef.current.value, passwordRef.current.value, nicknameRef.current.value);
//   };

//   return (
//     <div className='centeredDiv'>
//       <div className='centeredDiv flex-col gap-[30px] py-[30px] px-[15px] w-1/6 border-[1px] border-solide border-black'>
//         <div className='flex flex-col gap-[5px] w-full'>
//           <input
//             type='text'
//             placeholder='아이디'
//             ref={userIdRef}
//             className='px-[10px] h-[30px] border-[1px] border-solid border-black'
//             onChange={handleIdChange}
//           ></input>
//           {idValidation === null ? null : idValidation ? (
//             <span className='text-[10px] pl-[5px] text-green-300'>유효한 값 입니다.</span>
//           ) : (
//             <span className='text-[10px] pl-[5px] text-red-600'>영문 숫자를 포함 6자리 이상(특수문자 제외)</span>
//           )}
//         </div>
//         <div className='flex flex-col gap-[5px] w-full'>
//           <input
//             type='password'
//             placeholder='비밀번호'
//             ref={passwordRef}
//             className='px-[10px] h-[30px] border-[1px] border-solid border-black'
//             onChange={handlePasswordChange}
//           ></input>
//           {passwordValidation === null ? null : passwordValidation ? (
//             <span className='text-[10px] pl-[5px] text-green-300'>유효한 값 입니다.</span>
//           ) : (
//             <span className='text-[10px] pl-[5px] text-red-600'>최소 한 개 이상의 영문 숫자포함 8자리 이상</span>
//           )}
//         </div>
//         <div className='flex flex-col gap-[5px] w-full'>
//           <input
//             type='text'
//             placeholder='닉네임'
//             ref={nicknameRef}
//             className='px-[10px] h-[30px] border-[1px] border-solid border-black'
//             onChange={handleNicknameChange}
//           ></input>
//           {nicknameValidation === null ? null : nicknameValidation ? (
//             <span className='text-[10px] pl-[5px] text-green-300'>유효한 값 입니다.</span>
//           ) : (
//             <span className='text-[10px] pl-[5px] text-red-600'>영문 숫자를 포함 6자리 이상(특수문자 제외)</span>
//           )}
//         </div>
//         <button
//           disabled={isEnabled}
//           onClick={handleSignUp}
//           className={`border-[1px] border-solid border-black w-full ${!isEnabled ? 'text-black' : 'text-gray-400'}`}
//         >
//           가입하기
//         </button>
//       </div>
//     </div>
//   );
// };

export default Register;
