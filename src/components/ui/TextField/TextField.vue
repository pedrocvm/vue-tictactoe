<template>
  <div class="textFieldWrapper">
    <input
      type="text"
      :placeholder="placeholder"
      v-model="inputValue"
      :maxlength="maxlength"
    />
    <div class="iconWrapper" v-if="icon">
      <img :src="`/img/${icon}.svg`" alt="Send Icon" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TextField',
  props: {
    label: String,
    placeholder: String,
    icon: String,
    value: {
      type: String | Object,
      required: true,
    },
    maxlength: String,
    minlength: String,
  },
  computed: {
    inputValue: {
      get: function () {
        return this.value;
      },
      set: function (newValue) {
        this.$emit('inputChange', newValue);
      },
    },
  },
});
</script>

<style lang="scss">
@import './styles';
</style>
