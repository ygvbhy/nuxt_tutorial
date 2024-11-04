<template>
  <div class="q-pa-xl">
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
      <template #footer>
        <ClientOnly>
          <q-btn
            v-if="prevCourse"
            label="이전 강의"
            color="primary"
            unelevated
            :to="prevCourse"
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

// const title = ref('');
// definePageMeta 에 정의 된 내용은 컴파일 될때 최상단으로 이동하여 선언 된다.
// 따라서 위의 ref 등을 사용하여 선언 한 변수가 meta 안에 들어갈 경우 오류를 뿜는다.
// 그러므로 definePageMeta 내부의 내용은 변수로 설정 하면 안된다.
// 컴파일러 매크로 함수. 이것은 컴포넌트 내에서 참조할 수 없도록 컴파일 된다.
definePageMeta({
  key: (route) => route.fullPath,
  title: 'My home page',
  // title: title.value,
});

console.log('route.meta.title ', route.meta);
</script>

<style scoped></style>
