<template>
  <div class="root">
    <div v-if="isApp">
      <!-- <Navbar v-if="$auth.$state.loggedIn" /> -->
      <Navbar />
      <Nuxt />
    </div>
    <div v-else>
      <Navbar />
      <Nuxt />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isApp() {
      return window.innerWidth < 767;
    },
  },
  mounted() {
    this.$store.dispatch("get_data")
    this.$store.dispatch("house/get_data")

  },
};
</script>

<style scoped>
.nuxt_root {
  min-height: 100vh !important;
}

</style>

