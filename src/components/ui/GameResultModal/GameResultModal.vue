<template>
  <div class="gameResultModalWrapper">
    <div class="resultWrapper">
      <p>
        {{
          $store.state.winnerPlayer !== 'Draw'
            ? `Congratulations`
            : 'It‘s a Draw!'
        }}
      </p>

      <div
        class="congratulationsWrapper"
        v-if="$store.state.winnerPlayer !== 'Draw'"
      >
        <h2>
          {{
            $store.state.players.find(
              (player) => player.role === $store.state.winnerPlayer
            ).name
          }}
        </h2>

        <p>You win this {{ `${hasGameEnd ? 'game' : 'match'}` }}!</p>

        <img src="/img/trophy.png" alt="Trophy image" v-if="hasGameEnd" />
      </div>
    </div>

    <img v-if="$store.state.winnerPlayer === 'Draw'" src="/img/draw.gif" />

    <div class="actionWrapper">
      <Button
        :label="hasGameEnd ? 'Finish' : 'Continue'"
        type="success"
        color="light"
        :fullwidth="true"
        @action="hasGameEnd ? finishGame() : handleModalClose()"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '@/components/ui/Button/Button.vue';
import { PlayerRoleEnum } from '@/components/ui/Player/types';

export default Vue.extend({
  name: 'GameResultModal',
  components: {
    Button,
  },

  computed: {
    hasGameEnd() {
      if (
        this.$store.state.gameScore.length ===
        +this.$store.state.gameOptions.totalMatches
      ) {
        const gameScore = this.$store.state.gameScore;
        const p1Wins = gameScore.filter(
          (game) => game.winner === PlayerRoleEnum.P1
        ).length;
        const p2Wins = gameScore.filter(
          (game) => game.winner === PlayerRoleEnum.P2
        ).length;

        if (p1Wins > p2Wins) {
          this.$store.commit('SET_WINNERPLAYER', PlayerRoleEnum.P1);
        } else {
          this.$store.commit('SET_WINNERPLAYER', PlayerRoleEnum.P2);
        }
      }

      return (
        this.$store.state.gameScore.length ===
        +this.$store.state.gameOptions.totalMatches
      );
    },
  },

  methods: {
    handleModalClose() {
      this.$store.commit('SET_WINNERPLAYER', null);
      this.$store.commit('SET_TIMEINTERVAL', 'stop');
    },

    finishGame() {
      this.$store.dispatch('clearGame');
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
