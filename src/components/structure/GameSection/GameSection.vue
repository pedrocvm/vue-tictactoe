<template>
  <Container>
    <div class="gameSectionWrapper">
      <Title
        title="Tic tac toe games"
        subtitle="Welcome to the best game in the world."
        size="large"
      />

      <GameToggler />

      <div class="gameArea">
        <Player
          v-if="windowWidth > 1024"
          :name="$store.state.players[0].name"
          :role="$store.state.players[0].role"
          :showRole="true"
        />
        <GameArea />
        <Player
          v-if="windowWidth > 1024"
          :name="$store.state.players[1].name"
          :role="$store.state.players[1].role"
          :showRole="true"
        />
      </div>

      <div class="timerArea">
        <Player
          v-if="windowWidth <= 1024"
          :name="$store.state.players[0].name"
          :role="$store.state.players[0].role"
          :showRole="true"
        />
        <Timer :value="$store.state.currentTime" />
        <Player
          v-if="windowWidth <= 1024"
          :name="$store.state.players[1].name"
          :role="$store.state.players[1].role"
          :showRole="true"
        />
      </div>
    </div>
  </Container>
</template>

<script lang="ts">
import Vue from 'vue';
import Container from '@/components/structure/Container/Container.vue';
import GameToggler from '@/components/ui/GameToggler/GameToggler.vue';
import Player from '@/components/ui/Player/Player.vue';
import GameArea from '@/components/ui/GameArea/GameArea.vue';
import Title from '@/components/ui/Title/Title.vue';
import Timer from '@/components/ui/Timer/Timer.vue';

export default Vue.extend({
  name: 'GameSection',
  components: {
    Container,
    GameToggler,
    Player,
    GameArea,
    Title,
    Timer,
  },

  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },

  mounted() {
    window.addEventListener('resize', this.onResize);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },

  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
