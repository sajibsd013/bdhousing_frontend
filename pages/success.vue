<template>
  <section class="">
    <div class="col-lg-8 col-md-9 col-11 mx-auto py-5">
      <div class="px-sm-5 px-3 py-5 rounded shadow bg-white text-center mb-5">
        <h4 class="">অভিনন্দন! আপনার তথ্য সংরক্ষিত হয়েছে</h4>

        <NuxtLink :to="`/${$route.query.q}`" class="">Add New Data</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SuccessPage",
    head() {
    return {
      title: "Success ",
    };
  },
};
</script>

<style scoped></style>
