<script setup>
import QuizCard from "../components/QuizCard.vue";
import { useQuizStore } from "../stores/QuizStore.js";

const store = useQuizStore();
</script>

<template>
  <div class="cards">
    <QuizCard v-for="quiz in store.quizes" :key="quiz.id" :quiz="quiz" />
  </div>
</template>

<style lang="scss" scoped>
.cards {
  display: flex;
  gap: 1rem;
  margin: 20px auto;
  max-width: 900px;
}
</style>
