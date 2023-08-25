<template>
  <div class="mb-5 pb-5">
    <App v-if="isApp" />
    <Web v-else />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  computed: {
    isApp() {
      return window.innerWidth < 767;
    },
  },

  mounted() {
    if (this.$route.query.redirect) {
      this.$router.push(this.$route.query.redirect);
    }
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 100)
    })
  },
};
</script>

<style scoped></style>
