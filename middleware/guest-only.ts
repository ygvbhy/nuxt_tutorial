export default defineNuxtRouteMiddleware(() => {
  const isAuthenticated = useAuthenticated();

  if (isAuthenticated) {
    if (process.server) return navigateTo('/');
    // 탐색을 취소함
    return abortNavigation();
  }
});
