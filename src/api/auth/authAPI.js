import axiosAuthInstance from './authInstance';
import jsonserverInstance from '../jsonserver/jsonserverInstance';

export const signUp = async (userId, password, nickname) => {
  try {
    const response = await axiosAuthInstance.post('/register', {
      id: userId,
      password,
      nickname,
    });

    return response.data;
  } catch (error) {
    console.log('signUp', error);
    alert(error.response.data.message);
  }
};

export const signIn = async (userId, password) => {
  try {
    const response = await axiosAuthInstance.post('/login', {
      id: userId,
      password,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log('signIn', error);
    alert('계정 정보를 확인하여 주시기 바랍니다.');
  }
};

export const verifyJwtToken = async (token) => {
  try {
    const response = await axiosAuthInstance.get('/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log('verifyJwtToken', error);
    // TODO: 토큰 인증기간 만료시, 알럿 노출
  }
};

export const createUser = async (userId, _nickname) => {
  try {
    const userInfo = {
      user_id: userId,
      nickname: _nickname,
      profile_img_url: '',
      favorite_posts: [],
      my_posts: [],
    };

    await jsonserverInstance.post('/users', userInfo);
  } catch (error) {
    console.log('createUser', error);
    alert('계정 생성을 하는데 오류가 발생하였습니다.');
  }
};

export const getUser = async (userId) => {
  try {
    const response = await jsonserverInstance.get(`/users?user_id=${userId}`);

    if (response.data === null) {
      throw new Error('계정을 불러오는데 오류가 발생하였습니다.');
    }

    return response.data[0];
  } catch (error) {
    console.log('getUser', error);
    alert(error.message);
  }
};
