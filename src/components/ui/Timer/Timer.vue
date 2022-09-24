<template>
  <div class="timerWrapper">
    <p>{{ value | timeFormat }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Timer',
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },

  filters: {
    timeFormat(seconds: number) {
      return new Date(seconds * 1000).toISOString().substr(11, 8);
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
