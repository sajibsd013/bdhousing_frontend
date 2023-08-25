<template>
  <section class="">
    <div class="col-lg-8 col-md-9 col-11 mx-auto py-5">
      <div class="px-sm-5 px-3 py-5 rounded shadow bg-white text-center mb-5">
        <h4 class="">Thank you..Your data is stored!</h4>
        <p class="small text-muted mb-4">Will contact you soon</p>

        <NuxtLink to="/" class="">Back to home</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SuccessPage",
    head() {
    return {
      title: "স্বাস্থ্যসেবক || Success ",
    };
  },
};
</script>

<style scoped></style>
