export const useDefaultLocale = (fallback = 'en') => {
  const locale = ref(fallback);
  // locale.value = navigator.language.split('-')[0];
  // 서버측에선 위의 코드를 받아올 수 없어서 서버에서 오류가 남.
  if (process.server) {
    const reqLocale = useRequestHeaders()
      ['accept-language']?.split(',')[0]
      .split('-')[0];
    if (reqLocale) {
      locale.value = reqLocale;
    }
  } else if (process.client) {
    const navLang = navigator.language.split('-')[0];
    if (navLang) {
      locale.value = navLang;
    }
  }

  return locale;
};
