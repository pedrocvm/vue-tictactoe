<template>
  <div class="homeWrapper">
    <UserSection />
    <GameSection />
    <StatisticsSection />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import UserSection from '@/components/structure/UserSection/UserSection.vue';
import GameSection from '@/components/structure/GameSection/GameSection.vue';
import StatisticsSection from '@/components/structure/StatisticsSection/StatisticsSection.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    UserSection,
    GameSection,
    StatisticsSection,
  },
});
</script>
