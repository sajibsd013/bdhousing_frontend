<template>
  <div class="container">
    <AdminTax />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Admin || Tax ",
    };
  },

  name: "Tax",
  layout: "admin",
  beforeCreate() {
    if (!this.$auth.$state.loggedIn) {
      this.$router.push("/");
    }
  },
};
</script>

<style>
/* Materialize Table style */
</style>
