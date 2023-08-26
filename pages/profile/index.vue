<template>
  <div class="container mb-5 pb-5">
    <div class="row g-4 justify-content-center bg-white py-3">
      <div class="col-12">
        <div class="card p-3 py-5 h-100 text-center">
          <img
            src="/img/icons/user_icon.svg"
            class="d-block mx-auto"
            alt="user icon"
            width="55"
            height="55"
          />
          <h5 class="mt-4">
            {{ $auth.user.full_name }} ({{ $auth.user.username }})
          </h5>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Profile",
    };
  },
  data() {
    return {
    };
  },
  methods: {

  },
  mounted() {
    // this.$auth.fetchUser();
  },

  beforeCreate() {
    if (this.$auth.$state.loggedIn == false) {
      this.$router.push("/");
    }
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  small {
    font-size: 85% !important;
  }
}
</style>
