import type { Rubric, RubricCompound } from "./../type";
import { ref } from "vue";


const sumCounts = ref<number>(0);
const selectedItems = ref<number[]>([]);


export const useConculateCounts = () => {
  const calculateSumCounts = (rubric: Rubric | RubricCompound, event: Event) => {
    if ((event.target as HTMLInputElement).checked) {
      sumCounts.value = sumCounts.value + rubric.count;
    } else {
      sumCounts.value = sumCounts.value - rubric.count;
    }
  };

  return {
    sumCounts,
    selectedItems,
    calculateSumCounts,
  };
};

