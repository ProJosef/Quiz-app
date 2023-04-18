<script setup>
import QuizesHeader from "./components/QuizesHeader.vue";
</script>

<template>
  <div class="container">
    <QuizesHeader />
    <RouterView />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  margin: 0 auto;
  padding-inline: 1rem;
  max-width: 980px;
}
</style>
