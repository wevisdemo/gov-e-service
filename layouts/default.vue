<template>
  <div class="layout">
    <WvNavbar :homeHref="basePath">
      <WvNavButton v-if="route_name === ''" active
        ><nuxt-link to="/">Home</nuxt-link></WvNavButton
      >

      <WvNavButton v-else><nuxt-link to="/">Home</nuxt-link></WvNavButton>

      <WvNavButton v-if="route_name === 'about'" active
        ><nuxt-link to="/about">About</nuxt-link></WvNavButton
      >

      <WvNavButton v-else><nuxt-link to="/about">About</nuxt-link></WvNavButton>
    </WvNavbar>

    <Nuxt />

    <WvFooter />
  </div>
</template>

<script>
import WvNavbar from "@wevisdemo/ui/components/navbar.vue";
import WvFooter from "@wevisdemo/ui/components/footer.vue";
import WvNavButton from "@wevisdemo/ui/components/nav-button.vue";

export default {
  components: { WvNavbar, WvFooter, WvNavButton },
  computed: {
    route_name() {
      return this.$route.path.split("/")[1];
    },
  },
  data() {
    return {
      basePath: process.env.WEB_URL || "/",
    };
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  display: block;
  width: 100%;
  color: rgba(0, 0, 0, 0.75);
}
</style>
