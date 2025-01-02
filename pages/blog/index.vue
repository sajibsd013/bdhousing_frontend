<template>
  <section class="mb-5 pb-5 pt-3">
    <div class="container">
      <div class="p-md-3 p-3 border border-muted rounded bg-light">
        <h2 class="text-dark">
          সচরাচর জিজ্ঞাসা
        </h2>
        <hr>
      </div>

      <div class="col-md-7">
        <div v-for="blog in pageOfItems" :key="blog.id">
          <div class="my-3 p-3 card">
            <NuxtLink :to="`/blog/post/?id=${blog.id}`" class="text-decoration-underline ">{{ blog.ques }}</NuxtLink>
          </div>
        </div>
        <div class="d-flex align-items-center mt-3">
          <jw-pagination
            :items="blogs"
            :pageSize="8"
            @changePage="onChangePage"
            :labels="customLabels"
            class="mx-auto"
          ></jw-pagination>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import JwPagination from "jw-vue-pagination";

export default {
  head() {
    return {
      title: "Bangladesh Tax Digitization || Blog",
    };
  },
  components: {
    JwPagination,
  },
  data() {
    return {
      pageOfItems: [],
      customLabels: {
        first: "<<",
        last: ">>",
        previous: "<",
        next: ">",
      },
      blogs: [],
    };
  },
  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    },
    async getBlogs() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        this.$axios
          .get(`faqs/`)
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              this.blogs = res.data;
            }
            this.$nuxt.$loading.finish();
          })
          .catch((error) => {
            this.$nuxt.$loading.finish();

            console.log(error.response);
            console.log(error.response.data.message || error.message);
            // context.commit('error', error)
          });
      });
    },
  },
  mounted() {
    this.getBlogs();
  },
};
</script>

<style></style>
