<script setup>
const props = defineProps(["quiz"]);
</script>

<template>
  <div class="card">
    <RouterLink :to="`/${quiz.name}`">
      <img :src="quiz.img" :alt="`${quiz.name} image`" />
    </RouterLink>
    <h3>{{ quiz.name }}</h3>
    <p>{{ quiz.questions.length }} Questions</p>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  width: 300px;
  padding: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  img {
    width: 100%;
    height: 170px;
    cursor: pointer;
  }
}
</style>
