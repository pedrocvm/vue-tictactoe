<template>
  <div class="gameBoardWrapper">
    <div
      class="splashScreenArea"
      v-if="!isSettingUp & !$store.state.hasGameStarted"
    >
      <SplashScreen
        @onSettingUp="handleSettingUp"
        @onStartGame="handleStartGame"
      />
    </div>

    <div
      class="optionsScreenArea"
      v-if="isSettingUp & !$store.state.hasGameStarted"
    >
      <OptionsScreen @closeSettingUp="handleSettingUp" />
    </div>

    <div class="gameScreenArea" v-if="$store.state.hasGameStarted">
      <Board />
    </div>

    <div class="gameResultArea" v-if="$store.state.winnerPlayer">
      <GameResultModal />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SplashScreen from '@/components/ui/GameArea/SplashScreen/SplashScreen.vue';
import OptionsScreen from '@/components/ui/GameArea/OptionsScreen/OptionsScreen.vue';
import GameResultModal from '@/components/ui/GameResultModal/GameResultModal.vue';
import Board from '@/components/ui/GameArea/Board/Board.vue';
import { PlayerRoleEnum } from '@/components/ui/Player/types';

export default Vue.extend({
  name: 'GameBoard',
  components: {
    SplashScreen,
    OptionsScreen,
    Board,
    GameResultModal,
  },
  data() {
    return {
      isSettingUp: false,
      currentTime: 0,
      interval: 0,
    };
  },
  methods: {
    handleSettingUp() {
      this.isSettingUp = !this.isSettingUp;
    },

    handleStartGame() {
      this.$store.commit('SET_HASGAMESTARTED', true);
      this.$store.commit(
        'SET_CURRENTPLAYER',
        Math.floor(Math.random() * 2 + 1).toString()
      );

      this.$store.commit('SET_TIMEINTERVAL', 'start')
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
