<template>
  <div class="container">
    <div class="card shadow p-2 my-3 border-0">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            FAQs
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabindex="0"
        >
          <DataTable
            title="FAQs"
            :columns="faqs_columns"
            :rows="faqs"
            class="table-responsive"
          />
        </div>
      </div>
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
      bmifaqs: [],
      faqs_columns: [
        { label: "Questions", field: "ques" },
        { label: "Answer", field: "ans" },
      ],
    };
  },
  computed: {
  },
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
    async getBmiFaqs() {
      await this.$axios
        .get(`bmi-faqs`)
        .then((res) => {
          if (res.status === 200) {
            this.bmifaqs = res.data;
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
    this.getBmiFaqs();
  },
  name: "FAQs",
  layout: "admin",
  beforeCreate() {
    if (!this.$auth.$state.loggedIn || this.$auth.user.is_admin === false) {
      this.$router.push("/");
    }
  },
};
</script>

<style>
/* Materialize Table style */
</style>
