import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
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
    }),
    {
      name: 'user',
      getStorage: () => sessionStorage,
    },
  ),
);

export default useUserStore;
