<template>
  <div class="titleWrapper" :class="size">
    <h3>{{ title }}</h3>
    <p v-if="!!subtitle">{{ subtitle }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

type TitleSizeType = 'small' | 'medium' | 'large';

export default Vue.extend({
  name: 'Title',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: String,
    size: {
      type: String as () => TitleSizeType,
      default: 'medium',
    },
  },
  setup(props) {
    props.size;
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
