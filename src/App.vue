<script>
import BaseLayout from "./layouts/layout.vue";

export default {
  components: { BaseLayout },
};
</script>

<template>
  <base-layout>
    <router-view />
  </base-layout>
</template>

<style scoped></style>
