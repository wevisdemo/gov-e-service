<template>
  <div class="index-page">
    <IntroSection />

    <ThaiSection />

    <TopCountriesSection />
  </div>
</template>

<script>
export default {
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
