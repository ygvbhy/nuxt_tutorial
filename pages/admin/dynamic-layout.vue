<template>
  <div class="q-pa-md">
    <div class="q-my-xl text-center q-gutter-md">
      <q-btn
        label="default layout"
        color="dark"
        @click="changePageLayout('default')"
      />
      <q-btn
        label="admin layout"
        color="dark"
        @click="changePageLayout('admin')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// 프로젝트 내에 지정한 layout 에 대한 타입 내용이 지정 된다.
import type { LayoutKey } from '#build/types/layouts';
const changePageLayout = (layout: LayoutKey) => {
  // layout 을 동적으로 바꾸는 nuxt 내장 함수
  setPageLayout(layout);
};

definePageMeta({
  // layout: false 일땐 layout 이 출력되지 않는다.
  layout: false,
});
</script>

<style scoped></style>
