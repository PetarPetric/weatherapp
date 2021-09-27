<template>
  <div id="#app">
    <home />
  </div>
</template>

<script>
import Home from "./components/Homepage.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style lang="scss">
@import "./styles/style.scss";
</style>
