<script setup>
import { useQuizStore } from "../stores/QuizStore.js";

const store = useQuizStore();
</script>

<template>
  <header>
    <RouterLink to="/"><h1>Quizes</h1></RouterLink>
    <input type="text" placeholder="search..." v-model.trim="store.search" />
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-block: 1rem;
  input {
    padding: 0.5em;
    border-radius: 0.5em;
  }
  a {
    text-decoration: none;
  }
}
</style>
