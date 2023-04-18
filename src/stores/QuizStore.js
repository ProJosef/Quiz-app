import { defineStore } from "pinia";
import { ref, watch } from "vue";
import q from "../assets/data.json";

export const useQuizStore = defineStore("QuizStore", () => {
  const search = ref("");

  const quizes = ref(q);

  watch(search, () => {
    quizes.value = q.filter((quiz) =>
      quiz.name.toLowerCase().includes(search.value.toLowerCase())
    );
  });

  return { search, quizes };
});
