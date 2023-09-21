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

          <nav class="my-3">
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                class="nav-link active "
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                <small>খানা প্রদানের তথ্য</small>
              </button>
              <button
                class="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                <small>কর মূল্যয়ন তথ্য</small>
              </button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              tabindex="0"
            >
              <AdminHouse />
            </div>
            <div
              class="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              tabindex="0"
            >
              <AdminTax />
            </div>
          </div>
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
    return {};
  },
  methods: {},
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
