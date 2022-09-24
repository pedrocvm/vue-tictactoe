<template>
  <div class="boardWrapper">
    <table :class="boardSize">
      <tr v-for="(row, rowIndex) in boardData" :key="rowIndex">
        <td
          v-for="(line, lineIndex) in row"
          :key="lineIndex"
          @click="handlePlay(rowIndex, lineIndex)"
        >
          <PlayerMarker :role="line" v-if="line" />
        </td>
      </tr>
    </table>

    <div class="actionsWrapper">
      <Button
        label="Reset"
        @action="resetBoard"
        :tile="true"
        :fullwidth="true"
      />
      <Button
        label="Back to home"
        color="light"
        :minimal="true"
        :fullwidth="true"
        @action="backToHome"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '@/components/ui/Button/Button.vue';
import PlayerMarker from '@/components/ui/PlayerMarker/PlayerMarker.vue';
import { PlayerRoleEnum } from '@/components/ui/Player/types';

export default Vue.extend({
  name: 'Board',

  components: {
    PlayerMarker,
    Button,
  },

  data() {
    return {
      boardData: [] as string[][],
      boardSize: 'small',
      turns: 0,
      hasMatchEnd: false,
    };
  },

  mounted() {
    const boardSize = +this.$store.state.gameOptions.boardSize;

    this.boardData = Array(boardSize)
      .fill()
      .map(() => Array(boardSize).fill(''));

    switch (boardSize) {
      case 3:
        this.boardSize = 'small';
        break;

      case 5:
        this.boardSize = 'medium';
        break;

      case 7:
        this.boardSize = 'large';
        break;

      default:
        return;
    }
  },

  methods: {
    handlePlay(line: number, col: number) {
      const currentPlayer = this.$store.state.currentPlayer;
      const winnerPlayer = this.$store.state.winnerPlayer;

      if (!this.boardData[line][col] && !winnerPlayer && !this.hasMatchEnd) {
        this.boardData = structuredClone(this.boardData);
        this.boardData[line][col] = currentPlayer;

        this.checkWinner();

        currentPlayer === PlayerRoleEnum.P1
          ? this.$store.commit('SET_CURRENTPLAYER', PlayerRoleEnum.P2)
          : this.$store.commit('SET_CURRENTPLAYER', PlayerRoleEnum.P1);

        this.turns++;

        this.checkDraw();
      }
    },

    checkWinner() {
      const boardSize = +this.$store.state.gameOptions.boardSize;
      const currentPlayer = this.$store.state.currentPlayer;
      const winnerPlayer = this.$store.state.winnerPlayer;

      // checking row
      this.boardData.forEach((rows, index) => {
        if (rows.every((row) => row === currentPlayer)) {
          this.setWinners();
        }
      });

      // checking columns
      this.boardData.forEach((_, index) => {
        if (this.getColumn(index).every((item) => item === currentPlayer)) {
          this.setWinners();
        }
      });

      // checking diagonals
      if (
        this.getDiagonals().primary.every((item) => item === currentPlayer) ||
        this.getDiagonals().secondary.every((item) => item === currentPlayer)
      ) {
        this.setWinners();
      }
    },

    resetBoard() {
      const boardSize = +this.$store.state.gameOptions.boardSize;
      const currentPlayer = +this.$store.state.currentPlayer;

      this.boardData = Array(boardSize)
        .fill()
        .map(() => Array(boardSize).fill(''));

      this.$store.commit('SET_WINNERPLAYER', null);
      this.turns = 0;
      this.hasMatchEnd = false;

      this.$store.commit('SET_TIMEINTERVAL', 'stop');
      this.$store.commit('SET_CURRENTTIME', 0);
      this.$store.commit('SET_TIMEINTERVAL', 'start');
    },

    getColumn(col) {
      var column = [];

      this.boardData.forEach((item, index, self) => {
        column.push(item[col]);
      });

      return column;
    },

    getDiagonals() {
      const primary = this.boardData.map((item, index) => item[index]);

      const secondary = this.boardData.map(
        (item, index, self) => item[self.length - index - 1]
      );

      return {
        primary,
        secondary,
      };
    },

    checkDraw() {
      const boardSize = +this.$store.state.gameOptions.boardSize;
      let maximumTurns = 0;

      switch (boardSize) {
        case 3:
          maximumTurns = 9;
          break;

        case 5:
          maximumTurns = 25;
          break;

        case 7:
          maximumTurns = 49;
          break;

        default:
          return;
      }

      if (this.turns === maximumTurns) {
        this.$store.commit('SET_WINNERPLAYER', 'Draw');
        this.$store.commit('SET_TIMEINTERVAL', 'stop');
      }

      return this.turns === maximumTurns;
    },

    setWinners() {
      const currentPlayer = this.$store.state.currentPlayer;

      this.$store.commit('SET_WINNERPLAYER', currentPlayer);
      this.$store.commit('UPDATE_GAMESCORE', {
        winner: currentPlayer.toString(),
        timestamp: this.$store.state.currentTime,
      });

      this.turns = 0;
      this.hasMatchEnd = true;

      this.$store.commit('SET_TIMEINTERVAL', 'stop');
    },

    backToHome() {
      this.$store.dispatch('clearGame');
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
