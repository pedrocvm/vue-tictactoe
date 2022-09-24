<template>
  <div class="scorePercentageWrapper">
    <div class="valueWrapper">{{ value | percent }}</div>
    <span>{{ label }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ScorePercentage',
  props: {
    value: {
      type: Number,
      required: true,
    },
    label: String,
  },
  data() {
    return {};
  },
  filters: {
    percent(value: number) {
      if (value % 1 === 0) {
        return `${value}%`;
      } else {
        return `${value.toFixed(1)}%`;
      }
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
