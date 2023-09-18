<template>
  <div class="card h-100 p-0 m-0 border-0">
    <NLink
      class="text-dark bg-white border-bottom p-3 mb-4 d-none d-sm-block"
      to="/admin"
    >
      <img
        src="~/static/img/logo.png"
        alt=""
        width="150"
        class=""
      />
    </NLink>
    <!-- <hr class="mt-0 mb-4" /> -->
    <div class="top card-body d-flex flex-column p-1">
      <NuxtLink class="text-muted fw-semibold app-nav-item"  to="/admin">
        <i class="icofont-dashboard me-2"></i>ড্যাশবোর্ড
      </NuxtLink>
      <NuxtLink to="/admin/users"  class="text-muted small fw-semibold app-nav-item">
        <i class="icofont-users me-2"></i>ব্যবহারকারী
      </NuxtLink>
      <NuxtLink to="/admin/tax"  class="text-muted small fw-semibold app-nav-item">
        <i class="icofont-chart-histogram-alt me-2"></i>কর মূল্যয়ন তথ্য
      </NuxtLink>
      <NuxtLink to="/admin/house" class="text-muted fw-semibold app-nav-item">
        <i class="icofont-ui-home me-2"></i>খানা প্রদানের তথ্য
      </NuxtLink>
      <NuxtLink class="text-muted fw-semibold app-nav-item" to="/admin/faq">
        <i class="icofont-support-faq me-2"></i>সচরাচর জিজ্ঞাসা
      </NuxtLink>
    </div>
    <div
      class="bottom card-footer p-1 ps-3 mb-3 border-0 bg-white"
      v-if="$auth.loggedIn"
    >
      <hr class="text-muted" />
      <a
        class="pointer text-muted fw-semibold p-3 small"
        @click="$auth.logout()"
      >
        <i class="icofont-logout me-2"></i>Logout
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
i {
  font-size: 22px !important;
}

.dropdown-item:hover,
.nav-item .nav-link:hover,
.nuxt-link-exact-active {
  /* color: var(--secondary-text) !important; */
  
  color: #0d6efd !important;
  padding-left: 10px;
  background: #ededf1;
  border-left: 3px solid #084092;
}
.app-nav-item {
  width: 200px;
  font-size: 11px !important;
  transition: all ease-in-out 0.3s;
  margin-bottom: 1px;
  padding: 10.5px 16px;
}
.app-nav-item:hover {
  padding-left: 25px;
  color: #084092 !important;
  background: #e2e3f0;
  border-left: 3px solid #084092;
}

/* Medium devices (landscape tablets, 575768px and up) */
@media only screen and (max-width: 768px) {
  /* .app-nav-item {
    font-size: 9px !important;
    padding: 10px 16px;
  }

  i {
    font-size: 18px !important;
  } */
}
</style>
