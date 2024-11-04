<template>
  <q-card class="my-card" @click="$emit('click')">
    <img :src="props.thumbnail" />

    <q-card-section>
      <div class="text-h6 ellipsis">{{ props.title }}</div>
      <div class="text-subtitle2 ellipsis text-grey-8">
        {{ props.subTitle }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
interface Props {
  thumbnail: string;
  title: string;
  subTitle: string;
}
const props = defineProps<Props>();

defineEmits<{
  click: [];
}>();
</script>
