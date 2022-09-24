<template>
  <Container>
    <div class="statisticsSectionWrapper">
      <Title
        title="Awesome Statistics"
        subtitle="All statistics in a place!"
        size="large"
      />

      <div class="gameDataWrapper">
        <GameVictories />

        <div class="gameData">
          <PlayedMatches />
          <GameHistory />
        </div>
      </div>

      <div class="gameTimeWrapper">
        <TotalTime />
      </div>
    </div>
  </Container>
</template>

<script lang="ts">
import Vue from 'vue';
import Container from '@/components/structure/Container/Container.vue';
import Title from '@/components/ui/Title/Title.vue';
import GameVictories from '@/components/ui/GameVictories/GameVictories.vue';
import PlayedMatches from '@/components/ui/PlayedMatches/PlayedMatches.vue';
import GameHistory from '@/components/ui/GameHistory/GameHistory.vue';
import TotalTime from '@/components/ui/TotalTime/TotalTime.vue';

export default Vue.extend({
  name: 'StatisticsSection',
  components: {
    Container,
    Title,
    GameVictories,
    PlayedMatches,
    GameHistory,
    TotalTime,
  },
  data() {
    return {};
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
