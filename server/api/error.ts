export default eventHandler(() => {
  // return 'Hello Nuxt3 !';
  // return {
  //   message: 'Hello Nuxt3 !',
  // };
  throw createError({
    status: 404,
    statusMessage: '페이지를 찾을 수 없습니다.',
  });
});
