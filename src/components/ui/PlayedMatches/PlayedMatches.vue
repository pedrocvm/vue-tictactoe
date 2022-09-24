<template>
  <div class="playedMatchesWrapper">
    <Title title="Played matches" />

    <div class="matchesWrapper">
      <div
        class="circle"
        :class="!!$store.state.gameScore[index] && 'filled'"
        v-for="(match, index) in +$store.state.gameOptions.totalMatches"
        :key="index"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Title from '@/components/ui/Title/Title.vue';

export default Vue.extend({
  name: 'PlayedMatches',
  components: {
    Title,
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
