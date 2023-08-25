<template>
  <header class="sticky-top" style="z-index: 99">
    <div>
      <nav class="navbar navbar-expand-md bg-white border-bottom">
        <div class="container-fluid">
          <button @click="toggleNavbar" class="navbar-toggler">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="d-flex justify-content-center align-items-center ms-auto">
            <div class="me-2">
              <NLink class="btn btn-sm btn-outline-secondary" to="/">
                Go App
              </NLink>
            </div>

            <div v-if="$auth.loggedIn">
              <span class="dropdown text-white">
                <a
                  class="dropdown-toggle text-dark border rounded p-2 text-decoration-none"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span style="font-size: 14px" class="">
                    welcome
                    <small class="" style="font-weight: 500; color: #084298"
                      >{{ $auth.user.full_name }} </small
                    >!
                  </span>

                  <img
                    src="@/static/img/icons/user_icon.svg"
                    alt="user icon"
                    width="35"
                  />
                </a>
                <ul class="dropdown-menu" aria-labelledby="">
                  <li>
                    <NuxtLink to="/profile" class="dropdown-item">
                      <i class="icofont-ui-user me-1"></i>Profile
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/profile/setting" class="dropdown-item">
                      <i class="icofont-gear me-1"></i>Settings
                    </NuxtLink>
                  </li>
                  <div class="dropdown-divider"></div>
                  <li>
                    <a
                      style="cursor: pointer"
                      class="dropdown-item pointer"
                      @click="$auth.logout()"
                    >
                      <i class="icofont-logout me-1"></i>Logout
                    </a>
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="admin_menu bg-white shadow">
      <AdminNavItem />
    </div>

    <div
      style="z-index: 9000; width: 230px"
      class="offcanvas offcanvas-start py-0 rounded-end"
      :class="show ? 'show' : 'hide'"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
      st
    >
      <div class="offcanvas-header py-0 my-0">
        <button
          type="button"
          class="btn-close ms-auto mt-2"
          @click="toggleNavbar"
        ></button>
      </div>
      <div class="offcanvas-body">
        <AdminNavItem />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  computed: {},
  watch: {
    $route(to, from) {
      this.show = false;
    },
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
.admin_menu {
  height: 100vh;
  top: 0;
  position: fixed;
}
@media only screen and (max-width: 768px) {
  .admin_menu {
    display: none;
  }
}
</style>
