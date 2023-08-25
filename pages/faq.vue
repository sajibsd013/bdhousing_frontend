<template>
  <section class="container pb-5 pt-3 mb-5">
    <div class="accordion col-md-8 w-md-100" id="accordionExample">
      <h3 class="text-dark">FAQs</h3>
      <template v-for="(faq, index) in faqs">
        <div :key="index">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="`#collapse-${index}`"
                aria-expanded="true"
                :aria-controls="`collapse-${index}`"
              >
               <small> {{ faq.ques }}</small>
              </button>
            </h2>
            <div
              :id="`collapse-${index}`"
              class="accordion-collapse collapse"
              :class="index == 0 ? 'show' : 'none'"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>{{ faq.ans }}</p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  name: "faq",
  head() {
    return {
      title: "স্বাস্থ্যসেবক || FAQs ",
    };
  },
  data() {
    return {
      faqs: [],
    };
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
          // console.log(error.response);
          // console.log(error.response.data.message || error.message);
          // context.commit('error', error)
        });
    },
  },
  mounted() {
    this.getFaqs();
  },
};
</script>
<style scoped>
.accordion-item {
  background: #f9fafd !important;
  border: 1px solid #d8e2ef !important;
  box-shadow: 0px 3px 10px rgba(54, 124, 193, 0.3) !important;
}
@media only screen and (max-width: 600px) {
  p ,h2{
    font-size: 80% !important;
  }

}
</style>
