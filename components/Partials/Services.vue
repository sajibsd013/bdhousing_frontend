<template>
  <div class="">
    <div class="row g-2 justify-content-center pt-3">
      <div class="col-lg-3 col-md-6 col-6">
        <NuxtLink to="/check-tax" >
          <img
            alt="ট্যাক্স যাচাই"
            src="/img/services/seo.png"
            class="mx-auto d-block pointer border p-3 rounded service_image"
          />
          <h6 class="small text-center mt-2 fw-semibold">ট্যাক্স যাচাই</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-3 col-md-6 col-6">
        <NuxtLink to="/house">
          <img
            alt="Private Chamber Appoinment"
            src="/img/services/house.png"
            class="mx-auto d-block pointer border p-2 rounded service_image"
          />
          <h6 class="small text-center mt-2 fw-semibold">খানা প্রদানের তথ্য</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-3 col-md-6 col-6">
        <NuxtLink to="/">
          <img
            alt="কর মূল্যয়ন তথ্য"
            src="/img/services/taxes.png"
            class="mx-auto d-block pointer border p-2 rounded service_image"
          />
          <h6 class="small text-center mt-2 fw-semibold">কর মূল্যয়ন তথ্য</h6>
        </NuxtLink>
      </div>
      <div class="col-lg-3 col-md-6 col-6">
        <NuxtLink to="/faq">
          <img
            alt="সচরাচর জিজ্ঞাসা"
            src="/img/services/conversation.png"
            class="mx-auto d-block pointer border p-3 rounded service_image"
          />
          <h6 class="small text-center mt-2 fw-semibold">সচরাচর জিজ্ঞাসা</h6>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style scoped>
/* Extra small devices (phones, 600px and down) */
h6 {
  font-size: 70% !important;
}
.service_image {
  width: 170px;
  height: 170px;
}
@media only screen and (max-width: 600px) {
  h6 {
    font-size: 60% !important;
  }
  .service_image {
    width: 120px;
    height: 120px;
  }
}
</style>
