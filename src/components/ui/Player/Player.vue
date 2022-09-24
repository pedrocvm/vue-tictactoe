<template>
  <div class="playerWrapper">
    <h2>{{ name }}</h2>
    <span v-if="showRole">
      <PlayerMarker :role="role" :highlighted="true" />
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import type { PropType } from 'vue';
import PlayerMarker from '@/components/ui/PlayerMarker/PlayerMarker.vue';
import { PlayerRoleEnum } from './types';

export default Vue.extend({
  name: 'Player',
  components: {
    PlayerMarker,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String as () => PlayerRoleEnum,
      required: true,
    },
    showRole: Boolean,
  },

  setup(props) {
    props.role;
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
