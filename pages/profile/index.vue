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
            {{ $auth.user.full_name }} ({{ $auth.user.user_type }})
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
      title: "স্বাস্থ্যসেবক || Profile",
    };
  },
  data() {
    return {
      blogs: [],
    };
  },
  methods: {
    async getBlogs() {
      await this.$axios
        .get(`blog/?user=${this.$auth.user.id}`)
        // .get(`blog/`)
        .then((res) => {
          // console.log(res);
          if (res.status === 200) {
            this.blogs = res.data;
          }
        })
        .catch((error) => {
          // console.log(error.response);
          // console.log(error.response.data.message || error.message);
          // context.commit('error', error)
        });
    },
  },
  mounted() {
    // this.$auth.fetchUser();
    this.getBlogs();
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
