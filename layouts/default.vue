<template>
  <div class="layout">
    <WvNavbar />

    <Nuxt />

    <WvFooter />
  </div>
</template>

<script>
import WvNavbar from "@wevisdemo/ui/components/navbar.vue";
import WvFooter from "@wevisdemo/ui/components/footer.vue";

export default {
  components: { WvNavbar, WvFooter },
};
</script>

<style lang="scss" scoped></style>
