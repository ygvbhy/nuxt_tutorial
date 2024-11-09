export default defineNuxtRouteMiddleware(() => {
  const { isAuthenticated } = storeToRefs(useAuthStore());

  if (isAuthenticated.value) {
    if (process.server) return navigateTo('/');
    // 탐색을 취소함
    return abortNavigation();
  }
});
