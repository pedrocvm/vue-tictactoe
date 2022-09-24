<template>
  <div class="totalTimeWrapper">
    <Title title="Total time" />
    <Timer :value="totalTime" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Title from '@/components/ui/Title/Title.vue';
import Timer from '@/components/ui/Timer/Timer.vue';

export default Vue.extend({
  name: 'TotalTime',
  components: {
    Title,
    Timer,
  },
  computed: {
    totalTime() {
      return this.$store.state.gameScore.reduce(
        (acc, curr) => acc + curr.timestamp,
        0
      );
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
