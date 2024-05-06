<script>
import navBar from "../components/nav-bar.vue";
export default {
  components: { navBar },
  name: "BaseLayout",
};
</script>

<template>
  <div class="container">
    <nav-bar />
    <slot />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  height: 100%;
}
</style>
