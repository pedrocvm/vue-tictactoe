<template>
  <div class="playerMarkerWrapper">
    <img
      :src="`/img/${icon}_${
        (highlighted && $store.state.currentPlayer === role) ||
        $store.state.winnerPlayer === role
          ? 'bright'
          : 'dark'
      }.svg`"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { PlayerRoleEnum } from '@/components/ui/Player/types';

export default Vue.extend({
  name: 'PlayerMarker',
  props: {
    role: {
      type: String as () => PlayerRoleEnum,
      required: true,
    },
    highlighted: Boolean,
  },
  data() {
    return {
      icon: '',
    };
  },

  setup(props) {
    props.role;
    props.size;
  },

  mounted() {
    const currentPlayer = +this.$store.state.currentPlayer;

    if (this.role === PlayerRoleEnum.P1) {
      this.icon = 'X';
    } else if (this.role === PlayerRoleEnum.P2) {
      this.icon = 'O';
    } else {
      this.icon = '';
    }
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
