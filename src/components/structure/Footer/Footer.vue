<template>
  <Container>
    <div class="footerWrapper">
      <h2>Tic Tac Toe</h2>

      <div class="contentWrapper">
        <div class="aboutWrapper">
          <span class="title">About</span>
          <ul>
            <li>Play tic tac toe anytime!</li>
            <li>
              Created by&nbsp;
              <a
                href="https://github.com/pedrocvm"
                rel="noopener noreferrer"
                >@pedrocvm</a
              >
            </li>
          </ul>
        </div>

        <div class="contactsWrapper">
          <span class="title">Contacts</span>
          <ul>
            <li>
              <a href="tel:+351912321948" rel="noopener noreferrer">
                (+351) 912 321 948
              </a>
            </li>
            <li>Rua Cruz de Pedra, 54, Braga</li>
          </ul>
        </div>

        <div class="socialMediaWrapper">
          <span class="title">Stay in touch</span>
          <ul>
            <li>
              <a href="javascript:void(0)" rel="noopener noreferrer">
                <img src="/img/facebook.svg" alt="Facebook Logo" />
              </a>
              <a href="javascript:void(0)" rel="noopener noreferrer">
                <img src="/img/twitter.svg" alt="Twitter Logo" />
              </a>
              <a href="javascript:void(0)" rel="noopener noreferrer">
                <img src="/img/instagram.svg" alt="Instagram Logo" />
              </a>
            </li>
            <li>
              <TextField
                placeholder="Subscribe our games"
                icon="send"
                @inputChange="setSubscribedEmail($event)"
                :value="subscribedEmail"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Container>
</template>

<script lang="ts">
import Vue from 'vue';
import Logo from '@/components/ui/Logo/Logo.vue';
import Container from '@/components/structure/Container/Container.vue';
import TextField from '@/components/ui/TextField/TextField.vue';

export default Vue.extend({
  name: 'Footer',
  components: {
    Container,
    Logo,
    TextField,
  },
  data() {
    return {
      subscribedEmail: '',
    };
  },
  methods: {
    setSubscribedEmail(value) {
      this.subscribedEmail = value;
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
