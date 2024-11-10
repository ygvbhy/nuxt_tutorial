// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  typescript: {
    shim: false,
    typeCheck: true,
  },
  modules: [
    'nuxt-quasar-ui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
  ],
  i18n: {
    locales: ['en', 'ko'], // URL 경로 접두사에 사용됨
    defaultLocale: 'ko', // Nuxt 페이지 및 라우팅을 위한 프로젝트의 기본 로케일
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
  },
  quasar: {
    plugins: ['Notify'],
    config: {
      notify: {
        position: 'top-right',
      },
    },
  },
  // 내부 함수는 Auto Imports 를 지원 하는데 외부 라이브러리는 지원하지 않는다.
  // 그래서 아래와 같이 선언 하여 Auto Imports 를 지원하게 만들어 줄 수 있다.
  imports: {
    //   presets: [
    //     {
    //       from: 'vue-i18n',
    //       imports: ['useI18n'],
    //     },
    //   ],
  },
  app: {
    head: {
      title: 'Vue & Nuxt 강의',
      meta: [
        {
          name: 'description',
          content: '짐코딩 Vue & Nuxt 강의 입니다.',
        },
      ],
    },
  },
  // 초기 환경 변수 설정.
  // env 파일에 같은 이름으로 정의 시 env 의 내용으로 최신화 됨.
  runtimeConfig: {
    authCookieName: '__user',
    jwtSecretKey: 'superKey',
    public: {
      clientConfigValue: 'Test',
    },
  },
});
