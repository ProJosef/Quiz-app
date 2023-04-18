<script setup>
import { ref, computed } from "vue";
import quizes from "../assets/data.json";

const { quizName } = defineProps(["quizName"]);
const { questions } = quizes.find((q) => q.name == quizName);

const questionNumber = ref(0);
const currentQuestion = computed(() => questions[questionNumber.value]);
const completed = computed(() => `${(1 / questions.length) * 100}%`);

const score = ref(0);
const selectedoption = ref(null);
const quizIsActive = ref(true);

function submit() {
  if (selectedoption.value == currentQuestion.value.right_answer) {
    score.value++;
  }
  selectedoption.value = null;
  if (questionNumber.value < questions.length - 1) {
    questionNumber.value++;
  } else {
    quizIsActive.value = false;
  }
}
function retest() {
  questionNumber.value = 0;
  quizIsActive.value = true;
}
</script>

<template>
  <div class="box" v-if="quizIsActive">
    <div class="bar">
      <div class="completed" v-for="n in questionNumber"></div>
    </div>
    <h2>{{ currentQuestion.question }}</h2>
    <div
      v-for="(option, index) in currentQuestion.options"
      :key="index"
      class="options"
    >
      <input
        type="radio"
        name="option"
        :id="index"
        :value="option"
        v-model="selectedoption"
      />
      <label :for="index">
        {{ option }}
      </label>
    </div>
    <button :disabled="!selectedoption" @click="submit">Submit</button>
  </div>
  <div class="box result" v-else>
    <h2>Congratulations! You have completed the quiz.</h2>
    <h2>Your final score is {{ score }} / {{ questions.length }}</h2>
    <button @click="retest">Retest</button>
  </div>
</template>

<style lang="scss" scoped>
.bar {
  display: flex;
  padding: 1px;
  width: 300px;
  height: 1.6rem;
  border: 2px solid sandybrown;
  margin-bottom: 10px;
  .completed {
    width: v-bind(completed);
    height: 100%;
    border: 1px solid #fff;
    background: sandybrown;
  }
}
.box {
  max-width: 900px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  h2 {
    font-size: 22px;
    margin-bottom: 20px;
  }
  .options {
    display: flex;
    gap: 10px;
    align-items: start;
    margin-bottom: 10px;
    label {
      cursor: pointer;
    }
    input {
      cursor: pointer;
      width: 18px;
      height: 18px;
      border: 2px solid #333;
      &:checked {
        background-color: #333;
      }
    }
  }
  button {
    padding: 10px 20px;
    margin-top: 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #0069d9;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }
    &:disabled {
      background-color: #007bff93;
    }
  }
}
.result {
  text-align: center;
  padding-block: 40px;
}
</style>
