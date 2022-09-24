<template>
  <div class="optionsScreenWrapper">
    <Title title="Select options" />

    <div class="optionsWrapper">
      <div
        class="optionWrapper"
        v-for="option in gameOptions"
        :key="option.title"
      >
        <Title :title="option.title" size="small" />

        <div class="option" v-for="opt in option.options" :key="opt.label">
          <RadioButton
            :label="opt.label"
            :name="option.name"
            :id="opt.label"
            :value="opt.value"
            :disabled="opt.disabled"
            @inputChange="updateOptions"
          />
        </div>
      </div>

      <div class="playersIdentificationWrapper">
        <Title title="Players" size="small" />

        <div class="textFieldArea">
          <TextField
            placeholder="Insert Player 1"
            @inputChange="setPlayerName({ name: $event, role: '1' })"
            :value="$store.state.players[0].name"
            maxlength="10"
            minlength="2"
          />
          <TextField
            placeholder="Insert Player 2"
            @inputChange="setPlayerName({ name: $event, role: '2' })"
            :value="$store.state.players[1].name"
            maxlength="10"
            minlength="2"
          />
        </div>
      </div>
    </div>

    <div class="interactionArea">
      <Button
        label="Close"
        @action="closeSettings"
        :fullwidth="true"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Title from '@/components/ui/Title/Title.vue';
import RadioButton from '@/components/ui/RadioButton/RadioButton.vue';
import GameOptions, { GameOptionType } from './options';
import TextField from '@/components/ui/TextField/TextField.vue';
import Button from '@/components/ui/Button/Button.vue';
import { BoardSizeEnum, GameModeEnum, TotalMatchesEnum } from '@/store/types';
import { PlayerRoleEnum } from '@/components/ui/Player/types';

export default Vue.extend({
  name: 'OptionsScreen',
  components: {
    Title,
    RadioButton,
    TextField,
    Button,
  },
  data() {
    return {
      gameOptions: GameOptions as GameOptionType,
      inputData: {},
    };
  },
  methods: {
    updateOptions(data) {
      this.$store.commit('SET_GAMEOPTIONS', data);
    },

    setPlayerName(data) {
      this.$store.commit('SET_PLAYERS', data);
    },

    closeSettings() {
      this.$emit('closeSettingUp');
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
