import { getUser } from '../composables/auth/userData';
import type { UserWithoutPassword } from '~/types/user';

export const useAuthStore = defineStore(
  'auth',
  () => {
    const authUser = ref<Maybe<UserWithoutPassword>>();

    const signIn = (email: string, password: string) => {
      const foundUser = getUser(email, password);

      if (!foundUser) {
        throw createError({
          statusCode: 401,
          statusMessage: 'Invalid email or password',
        });
      }

      setUser(foundUser);
    };

    const setUser = (user: Maybe<UserWithoutPassword>) =>
      (authUser.value = user);

    const signOut = () => setUser(null);

    return {
      user: authUser,
      isAuthenticated: computed(() => !!authUser.value),
      isAdmin: computed(() =>
        !authUser.value ? false : authUser.value.roles.includes('ADMIN'),
      ),
      signIn,
      signOut,
    };
  },
  {
    // 이렇게 하면 하이드레이션이 발생 하므로 서버에서 넘겨주는 화면과 클라이언트 화면이 다른걸 확인 해줘야 함
    // 그러고 하이드레이션이 발생 하는 부분에 ClientOnly 태그를 넣어주면 된다.
    // persist: {
    //   storage: persistedState.localStorage,
    // },
    persist: true,
  },
);
