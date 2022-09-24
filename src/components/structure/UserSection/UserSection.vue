<template>
  <Container>
    <div class="userSectionWrapper">
      <div class="infoWrapper">
        <div class="avatarWrapper">
          <img src="/img/user-profile.jpg" alt="User Avatar" />
        </div>
        <div class="personalDataWrapper">
          <h2>Gordão</h2>
          <p>Age: <span>21</span></p>
          <p>Location: <span>Braga/Portugal</span></p>
          <p>Occupation: <span>Frontend Developer</span></p>
        </div>
      </div>

      <div class="aboutWrapper">
        <p>About me:</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id
          interdum ante, vel dignissim lorem. Maecenas ut arcu eget felis ornare
          vehicula vel vel leo. Pellentesque maximus eget magna quis molestie.
        </p>
      </div>
    </div>
  </Container>
</template>

<script lang="ts">
import Vue from 'vue';
import Container from '@/components/structure/Container/Container.vue';

export default Vue.extend({
  name: 'UserSection',
  components: {
    Container,
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
