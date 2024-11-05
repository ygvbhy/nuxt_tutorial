<template>
  <div>
    <!-- NusLayout 은 루투 요소가 아니어야 한다. 즉 div 태그로든 뭐든 감싸서 진행 해야 함. -->
    <!-- 굳이 루트로 써야 한다면 definePageMeta 에 설정값을 추가 한다. -->
    <NuxtLayout name="custom">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  // NuxtLayout 이 루트 요소라면 아래의 항목을 선언 한 뒤 사용 해야 한다.
  // layoutTransition: false,
});
</script>

<style scoped></style>
