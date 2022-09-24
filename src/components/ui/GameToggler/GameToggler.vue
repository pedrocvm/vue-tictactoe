<template>
  <div class="gameTogglerWrapper">
    <Button
      label="Tic tac toe"
      :class="isSelected ? 'selected' : ''"
      @action="handleToggleGame('tic tac toe')"
    />

    <Button
      label="4-in-a-row"
      :class="!isSelected ? 'selected' : ''"
      :disabled="true"
      @action="handleToggleGame('4-in-a-row')"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { GameTypeEnum } from '@/store/types';
import Button from '@/components/ui/Button/Button.vue';

export default Vue.extend({
  name: 'GameToggler',
  components: {
    Button,
  },
  computed: {
    isSelected() {
      return this.$store.state.selectedGame === GameTypeEnum.TIC_TAC_TOE;
    },
  },
  methods: {
    handleToggleGame(value: GameTypeEnum) {
      this.$store.commit('SET_SELECTEDGAME', value);
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
