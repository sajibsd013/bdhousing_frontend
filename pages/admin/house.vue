<template>
  <div class="container">
    <AdminHouse />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Admin || House",
    };
  },

  name: "House",
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

.table-responsive {
}
</style>
