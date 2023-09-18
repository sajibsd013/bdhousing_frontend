<template>
  <div class="container">
    <div class="col-lg-4 col-md-7 mx-auto p-3 border card shadow my-3 border-0">
      <h6 class="mb-3">পাসওয়ার্ড পরিবর্তন করুন</h6>
      <ValidationObserver v-slot="{ handleSubmit }">
        <form class="form" @submit.prevent="handleSubmit(updatePass)">
          <div class="mb-3">
            <label for="username" class="form-label small">Username</label>
            <input
              class="form-control form-control-sm"
              id="old_password"
              type="text"
              placeholder="Enter your password"
              v-model="form_data.username"
              disabled
            />
          </div>
          <div class="mb-3">
            <label for="password1" class="form-label small">Password</label>
            <input
              class="form-control form-control-sm"
              id="password1"
              type="password"
              placeholder="Enter your password"
              v-model="form_data.password1"
            />
          </div>
          <div class="mb-3">
            <label for="new_password" class="form-label small"
              >Retype Password</label
            >
            <input
              class="form-control form-control-sm"
              id="new_password"
              type="password"
              placeholder="Enter your password"
              v-model="form_data.new_password"
            />
          </div>
          <div class="d-grid gap-2">
            <button
              class="btn btn-primary btn-sm"
              type="submit"
              :disabled="form_data.password1 != form_data.new_password"
            >
              Change Password
            </button>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  head() {
    return {
      title: "Admin || Users ",
    };
  },

  components: {
    ValidationObserver,
    ValidationProvider,
  },

  data() {
    return {
      form_data: {
        new_password: "",
        password1: "",
        username: "",
      },
    };
  },

  computed: {},
  methods: {
    async updatePass() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.$axios
          .post(`auth/change-pass/`, this.form_data, {
            headers: {
              // "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            this.$toast.success("Success! password changed");
            this.$router.push("/admin/users");

            this.$nuxt.$loading.finish();
            console.log(res);
          })
          .catch((error) => {
            this.$nuxt.$loading.finish();
            this.$toast.error(error.message || error.response.data.message);

            console.log(error.message || error.response.data.message);
          });
      });

      return;
    },
  },
  mounted() {
    this.form_data.username = this.$route.query["username"];
  },
  name: "Users",
  layout: "admin",
  beforeCreate() {
    if (
      !this.$auth.$state.loggedIn ||
      !this.$auth.user.is_admin ||
      !this.$route.query["username"]
    ) {
      this.$router.push("/admin");
    }
  },
};
</script>

<style>
/* Materialize Table style */
</style>
