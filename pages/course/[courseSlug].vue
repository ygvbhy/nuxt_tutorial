<template>
  <div>
    <AppCard>
      <template #header>
        <div class="text-h5 text-weight-medium">{{ course?.title }}</div>
        <div class="flex q-gutter-x-sm items-center q-mt-sm text-grey-8">
          <span class="flex items-center">
            <q-icon name="star" size="16px" color="orange" />
            <span>{{ course?.rating }}</span>
          </span>
          <span> {{ course?.reviewsCount }}개의 수강평 </span>
          <span>&middot;</span>
          <span>{{ course?.studentCount }}명의 수강생</span>
          <q-space />
          <a class="text-bold" :href="course?.reviewsUrl" target="_blank">
            수강평 보기
          </a>
        </div>
      </template>
      <div class="q-mb-md">
        <VideoPlayer :src="course?.video" />
      </div>
      <div class="row q-col-gutter-md">
        <div class="col-6">
          <q-btn
            label="인프런에서 수강하기"
            unelevated
            class="full-width"
            color="primary"
            :href="course?.inflearnUrl"
            target="_blank"
          />
        </div>
        <div class="col-6">
          <q-btn
            label="짐코딩 클럽에서 수강하기"
            unelevated
            class="full-width"
            color="red"
            :href="course?.gymcodingUrl"
            target="_blank"
          />
        </div>
      </div>
      <p class="q-mt-lg text-grey-8">
        {{ course?.content }}
      </p>
      <q-separator class="q-mb-lg" />
      <q-form class="q-gutter-y-md">
        <q-btn
          label="수강완료"
          class="full-width"
          color="green"
          unelevated
          :outline="completed ? false : true"
          :icon="completed ? 'check' : undefined"
          @click="toggleComplete"
        />
        <q-input
          v-model="memo"
          type="textarea"
          outlined
          dense
          placeholder="메모를 작성해주세요."
          rows="3"
          autogrow
        />
      </q-form>
      <template #footer>
        <!-- Hydration 오류가 발생 함으로 인해 해당 코드들을 client only 로 감싸서 막아준다. -->
        <!-- 아래의 코드를 보면 new Date() 를 하기 때문에 서버에서 보낸 html 코드와 client 의 html 코드가 달라서 나는 오류임 -->
        <!-- hydration 오류가 출력이 되면 최대한 해결을 하는게 좋다. -->
        <ClientOnly>
          <q-btn
            v-if="prevCourse"
            label="이전 강의"
            color="primary"
            unelevated
            :to="prevCourse"
            @click="movePage(prevCourse.path)"
          />
          <q-btn
            label="쿼리 추가"
            color="dark"
            unelevated
            :to="{ path: $route.path, query: { timestamp: Date.now() } }"
          />
          <q-space />
          <q-btn
            v-if="nextCourse"
            label="다음 강의"
            color="primary"
            unelevated
            :to="nextCourse"
            @click="movePage(nextCourse.path)"
          />
        </ClientOnly>
      </template>
    </AppCard>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const courseSlug = route.params.courseSlug as string;
const { course, prevCourse, nextCourse } = useCourse(courseSlug);
console.log('[courseSlug].vue 컴포넌트 setup hooks');

// vue 의 setup 함수 내에 있기떄문에 컴포넌트를 불러 올때 검사하는 로직
// if (!course) {
//   throw createError({
//     statusCode: 404,
//     statusMessage: 'Course Not Found',
//     // server 와 client 모두 오류뿜뿜 옵션
//     // fatal: true,
//   });
// }

// const title = ref('');
// definePageMeta 에 정의 된 내용은 컴파일 될때 최상단으로 이동하여 선언 된다.
// 따라서 위의 ref 등을 사용하여 선언 한 변수가 meta 안에 들어갈 경우 오류를 뿜는다.
// 그러므로 definePageMeta 내부의 내용은 변수로 설정 하면 안된다.
// 컴파일러 매크로 함수. 이것은 컴포넌트 내에서 참조할 수 없도록 컴파일 된다.
definePageMeta({
  key: (route) => route.fullPath,
  title: 'My home page',
  // title: title.value,
  // keepalive: true, // 부모 페이지의 머무르는 중엔 내부에 선언된 데이터를 유지 해줌
  alias: ['/lecture/:courseSlug'], // 이 주소로 들어와도 라우팅에서 설정한 경로의 페이지가 로딩 됨
  // 이건 setup 함수 밖의 최상단에 뽑혀서 선언 되기 때문에 페이지의 렌더링 이전에 검사를 시작함.
  // validate: (route) => {
  middleware: (route) => {
    const courseSlug = route.params.courseSlug as string;
    const { course } = useCourse(courseSlug);

    if (!course) {
      return abortNavigation(
        createError({
          statusCode: 404,
          statusMessage: 'Course Not Found',
        }),
      );
    }

    // return true;
  },
});

const memo = ref('');
const completed = ref(false);

const movePage = async (path: string) => {
  await navigateTo(path);
};

const toggleComplete = () => {
  // showError('에러가 발생했습니다.');
  completed.value = !completed.value;
  // $fetch('/api/error');

  throw createError('에러가 발생했습니다.');
};
</script>

<style scoped></style>
