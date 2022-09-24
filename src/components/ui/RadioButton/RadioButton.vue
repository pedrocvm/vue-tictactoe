<template>
  <div
    class="radioButtonWrapper"
    :class="[
      inputValue === $store.state.gameOptions[name] ? 'checked' : '',
      disabled ? 'disabled' : '',
    ]"
  >
    <label :for="id">
      {{ label }}
      <input
        type="radio"
        :name="name"
        :id="id"
        v-model="inputValue"
        :value="$store.state.gameOptions[name]"
        :disabled="disabled"
        @change="handleInputChange"
      />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    value: {
      type: String | Object,
      required: true,
    },
    checked: Boolean,
    disabled: Boolean,
  },
  name: 'RadioButton',
  methods: {
    handleInputChange() {
      const data = {
        name: this.name,
        value: this.inputValue,
      };

      this.$emit('inputChange', data);
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        return newValue;
      },
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
