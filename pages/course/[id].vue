<template>
  <p-page padding>
    <h2>course</h2>
    <div class="text-subtitle1">
      {{ $route.params }}
    </div>
  </p-page>
</template>

<script setup lang="ts">
const route = useRoute();
console.log(route.params.id);
</script>

<style scoped></style>
