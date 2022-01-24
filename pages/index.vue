<template>
  <div class="index-page">
    <WvNavbar />

    <IntroSection />

    <ThaiSection />

    <WorldSection :world_data="world_data" />

    <TopCountriesSection :world_data="world_data" />

    <WvFooter />
  </div>
</template>

<script>
import world_data from "~/static/data/world.json";
import WvNavbar from "@wevisdemo/ui/components/navbar.vue";
import WvFooter from "@wevisdemo/ui/components/footer.vue";

export default {
  data() {
    return {
      world_data: world_data,
    };
  },
  mounted() {
    window.Sharer.init();
  },
  components: { WvNavbar, WvFooter },
};
</script>

<style lang="scss" scoped>
.index-page {
  h1 {
    color: $color-blue;
  }
}
</style>
