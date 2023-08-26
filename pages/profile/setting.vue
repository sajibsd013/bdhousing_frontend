<template>
  <div class="container">
    <div class="row my-3 mb-5 pb-5">
      <div class="col-12 mx-auto">
        <div class="row">
          <!--Right side navbar-->
          <div class="col-lg-3 col-md-4">
            <div class="card bg-common d-md-block d-none p-0 card-left">
              <div class="card-body p-1">
                <nav class="nav d-block">
                  <div
                    class="nav nav-tabs d-md-block d-none"
                    id="nav-tab"
                    role="tablist"
                  >
                    <a
                      class="nav-link active border"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="true"
                      ><i class="icofont-ui-user me-1"></i>Profile
                    </a>
                    <a
                      class="nav-link border"
                      id="password-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#password"
                      type="button"
                      role="tab"
                      aria-controls="password"
                      aria-selected="true"
                      ><i class="icofont-ui-user me-1"></i>Password
                    </a>
                    <a
                      class="nav-link border"
                      id="account-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#account"
                      type="button"
                      role="tab"
                      aria-controls="account"
                      aria-selected="false"
                      ><i class="icofont-gear me-1"></i>Account
                    </a>

                    <a
                      class="nav-link border"
                      id="notification-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#notification"
                      type="button"
                      role="tab"
                      aria-controls="notification"
                      aria-selected="false"
                      ><i class="icofont-alarm me-1"></i>Notification
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <!--Right side bar starts-->
          <div class="col-lg-9 col-md-8">
            <div class="card p-2">
              <div class="card-header border-bottom mb-3 d-md-none">
                <ul class="nav nav-tabs card-header-tabs nav-fill">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="true"
                      ><i class="icofont-ui-user"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="password-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#password"
                      type="button"
                      role="tab"
                      aria-controls="password"
                      aria-selected="true"
                      ><i class="icofont-ui-user"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="account-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#account"
                      type="button"
                      role="tab"
                      aria-controls="account"
                      aria-selected="true"
                      ><i class="icofont-gear"></i>
                    </a>
                  </li>

                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="notification-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#notification"
                      type="button"
                      role="tab"
                      aria-controls="notification"
                      aria-selected="true"
                    >
                      <i class="icofont-alarm"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active p-3"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <h5>Your profile information</h5>
                  <hr />

                  <form @submit.prevent="updateProfile">
                    <div class="mb-3">
                      <label for="name" class="form-label">Full Name</label>
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        name="name"
                        id="name"
                        v-model="user_data.full_name"
                        required
                      />
                    </div>

                    <div class="mb-3">
                      <label for="mobile" class="form-label">Username</label>
                      <input
                        type="text"
                        class="form-control form-control-sm bg-white"
                        name="mobile"
                        v-model="user_data.username"
                        required
                        disabled
                      />
                    </div>
                    <div class="mb-3">
                      <label for="mobile" class="form-label">Email</label>
                      <input
                        type="email"
                        class="form-control form-control-sm"
                        name="email"
                        v-model="user_data.email"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="mobile" class="form-label">Birthday</label>
                      <input
                        type="date"
                        class="form-control form-control-sm"
                        name="birthday"
                        v-model="user_data.birthday"
                      />
                    </div>
                    <div class="form-group form-check mb-3">
                      <input
                        type="checkbox"
                        class="form-check-input pointer"
                        id="exampleCheck1"
                        required
                      />
                      <label
                        class="form-check-label pointer"
                        for="exampleCheck1"
                        >Are you sure ?</label
                      >
                    </div>

                    <button
                      type="submit"
                      id="update_profile"
                      class="btn btn-dark w-100 btn-sm"
                    >
                      Update profile
                    </button>
                  </form>
                </div>
                <div
                  class="tab-pane fade show p-3"
                  id="password"
                  role="tabpanel"
                  aria-labelledby="password-tab"
                >
                  <h5>Your password information</h5>
                  <hr />

                  <form @submit.prevent="updatePassword" class="d-none">
                    <div class="mb-3">
                      <label for="name" class="form-label"
                        >Current password</label
                      >
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        name="current_password"
                        id="current_password"
                        v-model="pass.current_password"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label for="name" class="form-label">New password</label>
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        name="new_password"
                        id="new_password"
                        v-model="pass.new_password"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      id="update_password"
                      class="btn btn-dark w-100 btn-sm"
                    >
                      Update password
                    </button>
                  </form>
                </div>
                <div
                  class="tab-pane p-3 fade"
                  id="account"
                  role="tabpanel"
                  aria-labelledby="account-tab"
                >
                  <h5>Account Setting</h5>
                  <hr />
                  <h5 for="" class="text-danger">Deactivate Account</h5>
                  <p class="text-muted">
                    Anytime you can reactivate your account
                  </p>
                  <button class="btn btn-danger btn-sm">
                    Deactivate Account
                  </button>
                  <hr />
                  <h5 for="" class="text-danger">Delete Account</h5>
                  <p class="text-muted">
                    Once you delete your account. There is no going back.Please!
                    be certain.
                  </p>
                  <button class="btn btn-danger btn-sm">Delete Account</button>
                </div>

                <div
                  class="tab-pane p-3 fade"
                  id="notification"
                  role="tabpanel"
                  aria-labelledby="notification-tab"
                >
                  <h5>Notification Setting</h5>
                  <hr />
                  <form>
                    <!--SMS notification part-->
                    <div classs="mb-3">
                      <label classs="d-block mb-2">SMS Notifications</label>
                      <ul class="list-group">
                        <li class="list-group-item">
                          Comments
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckChecked"
                              checked
                            />
                            <label
                              class="form-check-label"
                              for="flexSwitchCheckChecked"
                            ></label>
                          </div>
                        </li>

                        <li class="list-group-item">
                          Update froom people
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckChecked"
                              checked
                            />
                            <label
                              class="form-check-label"
                              for="flexSwitchCheckChecked"
                            ></label>
                          </div>
                        </li>

                        <li class="list-group-item">
                          Reminders
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckChecked"
                              checked
                            />
                            <label
                              class="form-check-label"
                              for="flexSwitchCheckChecked"
                            ></label>
                          </div>
                        </li>

                        <li class="list-group-item">
                          Events
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckChecked"
                              checked
                            />
                            <label
                              class="form-check-label"
                              for="flexSwitchCheckChecked"
                            ></label>
                          </div>
                        </li>
                        <li class="list-group-item">
                          Page you follow
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckChecked"
                              checked
                            />
                            <label
                              class="form-check-label"
                              for="flexSwitchCheckChecked"
                            ></label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </form>
                </div>
              </div>
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
      title: "Setting",
    };
  },
  computed: {
    userData() {
      const user_data = { ...this.$auth.user };
      return user_data;
    },
  },
  data() {
    return {
      user_data: { ...this.$auth.user },
      pass: {
        current_password: "",
        new_password: "",
      },
    };
  },
  methods: {
    async updateProfile() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.disable_btn = true;
        this.$axios
          .put(
            `auth/user-update/`,
            { data: this.user_data },
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          )
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              this.$toast.success("Success! Profile updaded succefully..");
              this.$auth.fetchUser();
              this.$router.push("/profile");
            } else {
              this.$toast.error("Error found! Try again");
            }
            this.$nuxt.$loading.finish();
          })
          .catch((error) => {
            console.log(error.response);
            this.$toast.error(error.message || error.response.data.message);
            this.$nuxt.$loading.finish();
            console.log(error.message || error.response.data.message);
          });

        this.disable_btn = false;
      });

      return;
    },
    async updatePassword() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.disable_btn = true;
        this.$axios
          .post(
            `auth/change-password`,
            { data: this.pass },
            {
              headers: {
                // "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          )
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              this.$toast.success("Success! Password updaded succefully..");
              this.$auth.fetchUser();
              this.$router.push("/profile");
            } else {
              this.$toast.error("Error found! Try again");
            }
            this.$nuxt.$loading.finish();
          })
          .catch((error) => {
            console.log(error.response);
            this.$toast.error(error.message || error.response.data.message);
            this.$nuxt.$loading.finish();
            console.log(error.message || error.response.data.message);
          });

        this.disable_btn = false;
      });

      return;
    },
  },
  beforeCreate() {
    if (this.$auth.$state.loggedIn == false) {
      this.$router.push("/");
    }
  },
};
</script>

<style></style>
