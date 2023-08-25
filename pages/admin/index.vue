<template>
  <div class="container">
    <div class="row my-2 mb-4 g-1 text-center">

    </div>
    <div class="row">
      <div class="col-lg-8 col-md-7"></div>
      <div class="col-lg-4 col-md-5 shadow bg-white rounded p-3">
        <AdminNotifications />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminPage",
  layout: "admin",
  beforeCreate() {
    if (!this.$auth.$state.loggedIn || this.$auth.user.is_admin === false) {
      this.$router.push("/");
    }
  },
  computed: {


  },
  data() {
    return {};
  },
};
</script>

<style scoped>
._card_icon{
  font-size: 50px;
  background-color: hsl(50 33% 25% / 0.10);;
  /* opacity: 0.4; */
}
@media only screen and (max-width: 600px) {
  ._card_icon{
    font-size: 30px !important;
  }
  h6{
    font-size: 83% !important;
  }
}
</style>
