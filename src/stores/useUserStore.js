import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: {
    isAuthenticated: null,
    id: '',
    user_id: '',
    nickname: '',
    profile_img_url: '',
    favorite_posts: [],
  },

  update: () =>
    set((state) => ({
      user: {
        ...state.user,
        isAuthenticated: false,
      },
    })),

  logout: () =>
    set(() => ({
      user: {
        isAuthenticated: false,
        id: '',
        user_id: '',
        nickname: '',
        profile_img_url: '',
        favorite_posts: [],
      },
    })),

  login: (userInfo) =>
    set(() => ({
      user: {
        isAuthenticated: true,
        ...userInfo,
      },
    })),
}));

// persist 사용해서 로컬스토리지에 받아오기 전에 초기값으로 될 수 밖에 없는 그 상황 방지..

export default useUserStore;
