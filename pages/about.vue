<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <PageTitle title="About" />
      <PageDescription
        description="Vue & Nuxt Mastery Class 웹은 Nuxt3로 만들어졌습니다."
      />
      <div class="column">
        <router-link to="/">RouterLink Home</router-link>
        <router-link to="https://youtube.com/@gymcoding">
          RouterLink Youtube
        </router-link>
        <br />
        <NuxtLink to="/">RouterLink Home</NuxtLink>
        <NuxtLink to="https://youtube.com/@gymcoding">
          RouterLink Youtube
        </NuxtLink>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts"></script>
