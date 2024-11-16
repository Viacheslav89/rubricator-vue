<template>
  <div class="rubric-compound">
    <div class="rubric-compound__wrapper">
      <input class="rubric-compound__checkbox" type="checkbox" :value="rubricCompound.id" @click="calculateSumCounts(rubricCompound, $event)" v-model="selectedItems"/>
      <a :href="url">{{ rubricCompound.title }}</a>
    </div>
    <div class="rubric-compound__counts--wrapper">
      <p class="rubric-compound__count">{{ rubricCompound.count }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RubricCompound } from "./../type"
import { useConculateCounts } from "../composables/useCanculate";

const { calculateSumCounts, selectedItems } = useConculateCounts();

const props = defineProps<{
  rubricCompound: RubricCompound;
}>();

const url = `https://www.klerk.ru${props.rubricCompound.url}`;

</script>

<style scoped lang="scss">
.rubric-compound {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dotted grey;
  padding-bottom: 5px;

  &__counts--wrapper {
    width: 50px;
  }
  
  &__count {
    margin: 0;
    text-align: right; 
  }

  &__total--counts {
    margin: 0;
  }
}
</style>
