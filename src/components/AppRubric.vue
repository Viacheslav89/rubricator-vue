<template>
  <div class="rubric">
    <div class="rubric__item--wrapper">
      <div class="rubric__wrapper">
        <div
          :class="[
            'rubric__triangle--bottom',
            { 'rubric__triangle--right': !isListVisible },
          ]"
          @click="toggleList"
        ></div>

        <input
          type="checkbox"
          :value="rubric.id"
          @click="calculateSumCounts(rubric, $event)"
          v-model="selectedItems"
        />
        <a :href="url">{{ rubric.title }}</a>
      </div>

      <div class="rubric__counts--wrapper">
        <p class="rubric__count">({{ rubric.count }}</p>
        <span>/</span>
        <p class="rubric__total--counts">{{ getCountsChildren(rubric) }})</p>
      </div>
    </div>

    <ul class="rubric__compound--list" v-if="isListVisible">
      <li
        class="rubric__compound--item"
        v-for="children of rubric.children"
        :key="children.id"
      >
        <AppRubricCompound :rubricCompound="children" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import AppRubricCompound from './AppRubricCompound.vue';

import type { Rubric, RubricCompound } from "./../type";
import { useConculateCounts } from "../composables/useCanculate";
import { ref } from "vue";


const { calculateSumCounts, selectedItems } = useConculateCounts();

const props = defineProps<{
  rubric: Rubric;
}>();

const url = `https://www.klerk.ru${props.rubric.url}`;
const isListVisible = ref(true);

const toggleList = () => {
  isListVisible.value = !isListVisible.value;
};

const getCountsChildren = (rubric: Rubric) => {
  let countsTotal = 0;
  rubric.children.forEach(
    (rubricCompound: RubricCompound) =>
      (countsTotal = countsTotal + rubricCompound.count)
  );
  return countsTotal;
};
</script>

<style lang="scss" scoped>
.rubric {
  font-size: 18px;
  margin-bottom: 10px;

  &__item--wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    border-bottom: 1px solid grey;
    padding-bottom: 5px;
  }

  &__wrapper {
    display: flex;
  }

  &__triangle--bottom {
    width: 0px;
    height: 0px;
    border-top: 9px solid black;
    border-right: 9px solid transparent;
    transform: rotate(225deg);
    margin-right: 10px;
    margin-top: 3px;
  }

  &__triangle--right {
    transform: rotate(135deg);
  }

  &__counts--wrapper {
    width: 60px;
    display: flex;
    justify-content: space-between;
  }

  &__count {
    margin: 0;
  }

  &__total--counts {
    margin: 0;
  }

  &__item {
    list-style: none;
  }

  &__compound--list {
    padding-left: 45px;
  }

  &__compound--item {
    list-style: none;
  }
}
</style>
