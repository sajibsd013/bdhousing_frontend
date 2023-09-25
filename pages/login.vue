<template>
  <section class="container pb-5 pt-3 mb-5">
    <div class="col-lg-4 col-md-6 col-12 mx-auto py-3">
      <img
        class="mx-auto d-block"
        src="/img/icons/login.jpeg"
        width="240"
        height="240"
        alt=""
      />
    </div>

    <div class="col-lg-4 col-md-7 mx-auto ">
      <ValidationObserver v-slot="{ handleSubmit }">
        <form class="form" @submit.prevent="handleSubmit(submitForm)">
          <div class="mb-3">
            <label for="username" class="form-label"
              >Username</label
            >
            <input
              class="form-control"
              id="username"
              placeholder="Enter your username"
              v-model="form_data.username"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label"
              >Password</label
            >
            <input
              class="form-control"
              id="password"
              type="password"
              placeholder="Enter your password"
              v-model="form_data.password"
            />
          </div>
          <div class="d-grid gap-2">
            <button class="btn btn-primary btn-sm" type="submit">Log in</button>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </section>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: "SignIn",

  components: {
    ValidationObserver,
    ValidationProvider,
  },

  data() {
    return {
      form_data: {
        username: "",
        password: "",
      },
    };
  },
  computed: {},

  methods: {
    async submitForm() {
      try {
        const response = await this.$auth.loginWith("local", {
          data: this.form_data,
        });
        console.log(response);
        if (response.status === 200) {
          this.$toast.success("Successfully authenticated");
        } else {
          this.$toast.error("Login failed! Try again");
        }
      } catch (error) {
        console.log(error.message || error.response.data.message);
        this.$toast.error("Login failed! Try again");
      }
      return;
    },
  },
  mounted() {},
};
</script>

<style scoped></style>
