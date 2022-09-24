<template>
  <div id="app">
    <div class="fixedHeaderWrapper">
      <Header />
    </div>

    <div class="appWrapper">
      <router-view />
    </div>

    <Footer />
  </div>
</template>

<script>
import Vue from 'vue';
import Home from '@/views/Home.vue';
import Header from '@/components/structure/Header/Header.vue';
import Footer from '@/components/structure/Footer/Footer.vue';

export default Vue.extend({
  components: {
    Home,
    Header,
    Footer,
  },
});
</script>

<style lang="scss">
@import '@/sass/global';

#app {
  height: 100%;
}

.fixedHeaderWrapper {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: map-get($layers, alwaysOnTop);
}

.appWrapper {
  padding-top: 7.5rem;
  min-height: calc(100% - 19rem);
  transition: map-get($transition, default);

  @media (max-width: 1024px) {
    padding: 15rem 0 0rem;
  }

  @media (max-width: 768px) {
    padding: 20rem 0 0rem;
  }
}
</style>
