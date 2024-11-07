export default defineNuxtRouteMiddleware(() => {
  const { isAuthenticated } = useAuthUser();

  if (isAuthenticated) {
    if (process.server) return navigateTo('/');
    // 탐색을 취소함
    return abortNavigation();
  }
});
