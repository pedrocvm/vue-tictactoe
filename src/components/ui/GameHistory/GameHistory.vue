<template>
  <div class="gameHistoryWrapper">
    <Title title="Game history" />

    <div class="matchesWrapper">
      <div
        class="square"
        :class="!!$store.state.gameScore[index] && 'filled'"
        v-for="(match, index) in +$store.state.gameOptions.totalMatches"
        :key="index"
      >
        {{
          !!$store.state.gameScore[index]
            ? `P${$store.state.gameScore[index].winner}`
            : ''
        }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Title from '@/components/ui/Title/Title.vue';

export default Vue.extend({
  name: 'GameHistory',
  components: {
    Title,
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
