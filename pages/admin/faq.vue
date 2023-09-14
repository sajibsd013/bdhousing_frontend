<template>
  <div class="container">
    <div class="card shadow p-2 my-3 border-0">
      <DataTable
        title="FAQs"
        :columns="faqs_columns"
        :rows="faqs"
        class="table-responsive"
      />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Admin || FAQs ",
    };
  },
  data() {
    return {
      faqs: [],
      faqs_columns: [
        { label: "Questions", field: "ques" },
        { label: "Answer", field: "ans" },
      ],
    };
  },
  
  computed: {},
  methods: {
    async getFaqs() {
      await this.$axios
        .get(`faqs`)
        .then((res) => {
          if (res.status === 200) {
            this.faqs = res.data;
          }
        })
        .catch((error) => {
          console.log(error.response);
          console.log(error.response.data.message || error.message);
          // context.commit('error', error)
        });
    },
  },
  mounted() {
    this.getFaqs();
  },
  name: "FAQs",
  layout: "admin",
  beforeCreate() {
    if (!this.$auth.$state.loggedIn) {
      this.$router.push("/");
    }
  },
};
</script>

<style>
/* Materialize Table style */
</style>
