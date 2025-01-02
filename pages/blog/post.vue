<template>
  <article class="mb-5 pb-5 pt-3" v-if="blog.id">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-8">
          <h2 class="blog-post-title text-dark">{{ blog.ques }}</h2>
          <hr />
          <div v-html="blog.ans"></div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  head() {
    return {
      title: "Bangladesh Tax Digitization || "+this.blog?.ques,
    };
  },

  data() {
    return {
      blog: [],
    };
  },
  methods: {
    async getblogDetails() {
      await this.$axios
        .get(`faqs/`)
        .then((res) => {
          if (res.status === 200) {
            this.blog = res.data[this.$route.query.id];
          } else {
            // this.$router.push("/");
          }
        })
        .catch((error) => {
          //   this.$router.push("/");

          console.log(error.response);
          console.log(error.response.data.message || error.message);
          // context.commit('error', error)
        });
    },

  },
  mounted() {
    this.getblogDetails();
  },
};
</script>

<style scoped></style>
