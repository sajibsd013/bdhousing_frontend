<template>
  <div>
    <CommonSection />
    <div>
      <NuxtLink
        v-if="!$auth.$state.loggedIn"
        class="btn btn-sm btn-outline-dark d-block m-5"
        to="/login"
      >
        Admin Login <i class="icofont-sign-in"></i>  
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("Called! app");
  },
  beforeCreate() {
    if (this.$auth.$state.loggedIn) {
      this.$router.push("/");
    }
  },
};
</script>

<style></style>
