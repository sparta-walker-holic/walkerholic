import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: {
    isAuthenticated: false,
    id: '',
    user_id: '',
    nickname: '',
    profile_img_url: '',
    favorite_posts: [],
    my_posts: [],
  },

  update: (userInfo) =>
    set(() => ({
      user: {
        isAuthenticated: true,
        ...userInfo,
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
}));

export default useUserStore;
