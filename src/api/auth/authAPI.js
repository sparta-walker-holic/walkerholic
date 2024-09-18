import axiosAuthInstance from './authInstance';

export const signUp = async (userId, password, nickname) => {
  console.log(userId, password, nickname);

  // const response = await axiosAuthInstance.post('/register', {
  //   id: userId,
  //   password,
  //   nickname,
  // });

  // console.log(response);
};
