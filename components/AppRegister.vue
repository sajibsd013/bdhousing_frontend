<template>
  <section class="mb-5 pb-5">
    <div class="col-lg-4 col-md-6 col-12 mx-auto py-3">
      <img
        class="mx-auto d-block"
        src="/img/icons/login.jpeg"
        width="240"
        height="240"
        alt=""
      />

    </div>
  </section>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: "register",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {

    };
  },
  computed: {

  },

  methods: {

  },
  mounted() {

  },
  beforeCreate() {
    if (this.$auth.$state.loggedIn) {
      this.$router.push("/");
    }
  },
};
</script>
