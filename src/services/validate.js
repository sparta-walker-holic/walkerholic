/*
^[A-Za-z0-9]{6,}$: 문자열이 시작(^)하여 영문 대소문자(A-Z, a-z)와 숫자(0-9)로만 구성되고, 최소 6자 이상({6,}) 이어져야 한다는 뜻.
특수문자 제외: [A-Za-z0-9] 부분이 영문 대소문자와 숫자만 허용하며, 특수문자는 포함되지 않음.
6자리 이상: {6,} 부분이 최소 6자리 이상.
*/
const idRegex = /^[A-Za-z0-9]{6,}$/;

/*
^(?=.*[A-Za-z]): 문자열에 최소 한 개 이상의 영문자(대소문자 무관)가 포함되어야 함.
(?=.*\d): 최소 한 개 이상의 숫자가 포함되어야 함.
[A-Za-z\d]{8,}$: 영문 대소문자와 숫자로 이루어진 최소 8자리 이상의 문자열.
영문 숫자 포함: [A-Za-z\d] 부분이 영문 대소문자와 숫자를 허용하며, 반드시 둘 다 포함되도록 요구.
8자리 이상: {8,} 부분이 최소 4자리 이상. 
*/
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;

/*
"특수문자 제외 2자리 이상, 한글 포함가능"
*/
const nicknameRegex = /^[a-zA-Z0-9가-힣]{2,}$/;

export const validateId = (input) => {
  return idRegex.test(input);
};

export const validatePassword = (input) => {
  return passwordRegex.test(input);
};

export const validateNickname = (input) => {
  return nicknameRegex.test(input);
};
