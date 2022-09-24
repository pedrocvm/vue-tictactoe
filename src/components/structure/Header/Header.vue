<template>
  <Container>
    <div class="headerWrapper" v-scroll="handleScroll">
      <h2>Tic Tac Toe</h2>

      <div class="headerTitleWrapper">
        <strong>Pedro Matos</strong>
        <em>Frontend Developer</em>
      </div>
    </div>
  </Container>
</template>

<script lang="ts">
import Vue from 'vue';
import Container from '@/components/structure/Container/Container.vue';
import Logo from '@/components/ui/Logo/Logo.vue';

export default Vue.extend({
  name: 'Header',
  components: {
    Container,
    Logo,
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
    handleScroll: (event, el) => {
      window.scrollY >= 150
        ? el.classList.add('translucid')
        : el.classList.remove('translucid');
    },

    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  directives: {
    scroll: {
      inserted: function (el, binding) {
        const f = function (event) {
          if (binding.value(event, el)) {
            window.removeEventListener('scroll', f);
          }
        };

        window.addEventListener('scroll', f);
      },
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
