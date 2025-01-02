<template>
  <div>
    <ul class="navbar-nav mx-auto mt-lg-0">
      <li class="nav-item">
        <NLink class="nav-link" aria-current="page" to="/"> হোম </NLink>
      </li>
      <li class="nav-item">
        <NLink class="nav-link" to="/check-tax">ট্যাক্স যাচাই</NLink>
      </li>
      <li class="nav-item">
        <NLink class="nav-link" to="/house">খানা প্রদানের তথ্য</NLink>
      </li>
      <!-- <li class="nav-item">
        <NLink class="nav-link" to="/tax">কর মূল্যয়ন তথ্য</NLink>
      </li> -->
      <li class="nav-item">
        <NLink class="nav-link" to="/faq">সচরাচর জিজ্ঞাসা</NLink>
      </li>
      <li class="nav-item">
        <NLink class="nav-link" to="/about"> আমাদের সম্পর্কে </NLink>
      </li>
      <li class="nav-item">
        <NLink class="nav-link" to="/blog"> ব্লগ </NLink>
      </li>
      <li class="nav-item">
        <NLink class="nav-link" to="/contact-us"> যোগাযোগ করুন</NLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav-link{
  /* color: black!important; */
  font-size: 14px!important;
}
.nav-item .nav-link:hover,
.nuxt-link-exact-active {
  /* color: var(--secondary-text) !important; */
  color: #0d6efd !important;
}
</style>
