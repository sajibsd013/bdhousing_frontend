<template>
  <section class="container pb-5 pt-3 mb-5">
    <div class="col-lg-7 col-md-10 col-11 mx-auto py-3">
      <div class="p-3 card bg-white border mb-5">
        <h5 class="mb-3">Add tex Information</h5>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form
            class="form small row g-3"
            @submit.prevent="handleSubmit(submitForm)"
          >
            <div class="row">
              <div class="mb-3 col-md-6">
                <label for="name" class="form-label">name</label>
                <input
                  class="form-control"
                  id="name"
                  placeholder="Enter your username"
                  v-model="form_data.name"
                />
              </div>
            </div>

            <div class="my-3">
              <div class="d-flex align-items-center mb-2">
                <input type="checkbox" id="checkbox" name="checkbox" required />
                <label for="checkbox" class="ms-1 small"> Are you sure? </label>
              </div>

              <div class="d-grid gap-2">
                <button class="btn btn-primary btn-sm" type="submit">
                  <!-- :disabled="phone.length != 10 || disable_btn" -->

                  Submit
                </button>
              </div>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </section>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: "Doctor",
  components: {
    ValidationObserver,
    ValidationProvider,
  },

  data() {
    return {
      form_data: {},
    };
  },
  computed: {},

  methods: {
    async submitForm() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.$axios
          .post(`api/tex/`, this.form_data, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            if (res.status === 201) {
              this.$toast.success("Success! we will contact you soon..");
              this.$router.push("/success");
            }
            this.$nuxt.$loading.finish();
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
  mounted() {},
  beforeCreate() {
    if (!this.$auth.$state.loggedIn) {
      this.$router.push("/");
    }
  },
};
</script>

<style scoped></style>
