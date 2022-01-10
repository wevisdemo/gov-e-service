<template>
  <div class="index-page">
    <IntroSection />

    <ThaiSection />

    <WorldSection :world_data="world_data" />

    <TopCountriesSection :world_data="world_data" />
  </div>
</template>

<script>
import world_data from "~/static/data/world.json";

export default {
  data() {
    return {
      world_data: world_data,
    };
  },
  mounted() {
    window.Sharer.init();
  },
};
</script>

<style lang="scss" scoped>
.index-page {
  h1 {
    color: $color-blue;
  }
}
</style>
