<template>
  <div>
    <!-- {{ $auth.$state.loggedIn }} -->
    <h4>Reports</h4>
  </div>
</template>

<script>
export default {
  name: "Reports",
  layout: "admin",
  beforeCreate() {
    if (!this.$auth.$state.loggedIn || this.$auth.user.is_admin === false) {
      this.$router.push("/");
    }
  },
};
</script>

<style></style>
