import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: {
    isAuthenticated: null,
    id: '',
    user_id: '',
    nickname: '',
    profile_img_url: '',
    favorite_posts: [],
    my_posts: [],
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
        my_posts: [],
      },
    })),

  login: (userInfo) =>
    set((state) => ({
      user: {
        isAuthenticated: true,
        ...userInfo,
      },
    })),
}));

export default useUserStore;
