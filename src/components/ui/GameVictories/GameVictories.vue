<template>
  <div class="gameVictoriesWrapper">
    <Title title="Game victories %" />

    <div class="scoreWrapper">
      <div class="score">
        <Player
          :name="$store.state.players[0].name"
          :role="$store.state.players[0].role"
        />
        <div>
          <ScorePercentage :value="calcPercentual('p1').wins" label="V" />
          <ScorePercentage :value="calcPercentual('p1').defeats" label="L" />
        </div>
      </div>

      <div class="score">
        <Player
          :name="$store.state.players[1].name"
          :role="$store.state.players[1].role"
        />
        <div>
          <ScorePercentage :value="calcPercentual('p2').wins" label="V" />
          <ScorePercentage :value="calcPercentual('p2').defeats" label="L" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ScorePercentage from '@/components/ui/ScorePercentage/ScorePercentage.vue';
import { PlayerRoleEnum } from '@/components/ui/Player/types';
import Title from '@/components/ui/Title/Title.vue';
import Player from '@/components/ui/Player/Player.vue';

export default Vue.extend({
  name: 'GameVictories',
  components: {
    Title,
    ScorePercentage,
    Player,
  },

  methods: {
    calcPercentual(p: string) {
      const player = PlayerRoleEnum[p.toUpperCase()];
      const allMatches = this.$store.state.gameScore;

      if (!allMatches.length) {
        return {
          wins: 0,
          defeats: 0,
        };
      }

      const totalWins = allMatches.filter((item) => item.winner === player);

      const wins = (totalWins.length * 100) / allMatches.length;
      const defeats = 100 - wins;

      return {
        wins,
        defeats,
      };
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
