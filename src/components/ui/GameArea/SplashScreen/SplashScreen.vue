<template>
  <div class="splashScreenWrapper">
    <div class="logoArea" :class="interactionHasStarted ? 'hidden' : ''">
      <Logo size="large" />
    </div>

    <div class="interactionArea" v-if="interactionHasStarted">
      <Button
        label="Start Game"
        type="success"
        size="large"
        color="light"
        @action="handleStartGame"
        :fullwidth="true"
      />
      <Button
        label="Options"
        size="large"
        @action="handleSettingUp"
        :fullwidth="true"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Logo from '@/components/ui/Logo/Logo.vue';
import Button from '@/components/ui/Button/Button.vue'; 

export default Vue.extend({
  name: 'SplashScreen',
  components: {
    Logo,
    Button,
  },
  data() {
    return {
      interactionHasStarted: false,
    };
  },
  methods: {
    handleSettingUp() {
      this.$emit('onSettingUp');
    },

    handleStartGame() {
      this.$emit('onStartGame');
    },
  },
  mounted() {
    setTimeout(() => {
      this.interactionHasStarted = true;
    }, 4500);
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
