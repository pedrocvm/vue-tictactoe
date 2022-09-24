import Vue from 'vue';
import Vuex from 'vuex';
import {
  BoardSizeEnum,
  GameModeEnum,
  GameTypeEnum,
  MatchType,
  TotalMatchesEnum,
} from './types';
import { PlayerRoleEnum } from '@/components/ui/Player/types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedGame: GameTypeEnum.TIC_TAC_TOE as GameTypeEnum,
    players: [
      {
        name: 'Player 1',
        role: PlayerRoleEnum.P1,
      },
      {
        name: 'Player 2',
        role: PlayerRoleEnum.P2,
      },
    ],
    currentPlayer: null,
    winnerPlayer: null,
    hasGameStarted: false,
    currentTime: 0,
    timeInterval: 0,
    gameOptions: {
      boardSize: BoardSizeEnum.THREE_4_THREE as BoardSizeEnum,
      totalMatches: TotalMatchesEnum.NORMAL as TotalMatchesEnum,
      gameMode: GameModeEnum.PVP as GameModeEnum,
    },
    gameScore: [] as MatchType[],
  },

  mutations: {
    SET_SELECTEDGAME(state, data: GameTypeEnum) {
      state.selectedGame = data;
    },

    UPDATE_GAMESCORE(state, data: MatchType) {
      const gameScore = state.gameScore;
      if (gameScore.length < +state.gameOptions.totalMatches) {
        gameScore.push(data);
        state.gameScore = gameScore;
      }
    },

    CLEAR_GAMESCORE(state) {
      if (state.gameScore.length === +state.gameOptions.totalMatches) {
        state.gameScore = [];
      }
    },

    SET_PLAYERS(state, data) {
      const { name, role } = data;
      const players = state.players;

      const index = players.findIndex((player) => player.role === role);

      if (!!name) {
        players[index].name = name;
      } else {
        if (role === PlayerRoleEnum.P1) {
          players[index].name = 'Player 1';
        } else {
          players[index].name = 'Player 2';
        }
      }

      state.players = players;
    },

    SET_GAMEOPTIONS(state, data: { name: string; value: any }) {
      const { name, value } = data;

      const gameOptions = state.gameOptions;
      (gameOptions as any)[name] = value;

      state.gameOptions = gameOptions;
    },

    SET_CURRENTPLAYER(state, data) {
      state.currentPlayer = data;
    },

    SET_WINNERPLAYER(state, data) {
      state.winnerPlayer = data;
    },

    SET_HASGAMESTARTED(state, data) {
      state.hasGameStarted = data;
    },

    SET_CURRENTTIME(state, data) {
      state.currentTime = data;
    },

    SET_TIMEINTERVAL(state, data) {
      if (data !== 'stop') {
        state.timeInterval = setInterval(() => {
          state.currentTime += 1;
        }, 1000);
      } else {
        clearInterval(state.timeInterval);
      }
    },
  },

  actions: {
    clearGame({ commit }) {
      commit('SET_HASGAMESTARTED', false);
      commit('SET_CURRENTPLAYER', null);
      commit('SET_WINNERPLAYER', null);
      commit('SET_GAMEOPTIONS', {
        boardSize: BoardSizeEnum.THREE_4_THREE as BoardSizeEnum,
        totalMatches: TotalMatchesEnum.NORMAL as TotalMatchesEnum,
        gameMode: GameModeEnum.PVP as GameModeEnum,
      });
      commit('CLEAR_GAMESCORE');
      commit('SET_CURRENTTIME', 0);
      commit('SET_TIMEINTERVAL', 'stop');
    },
  },
});
