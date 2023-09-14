<template>
  <header class="sticky-top" style="z-index: 999">
    <div
      class="navbar border-bottom bg-light d-flex justify-content-start d-none"
    >
      <a
        class="navbar-toggler border-0 me-1"
        @click="toggleNavbar"
        type="button"
      >
        <!-- <img src="../static/img/icons/menu.svg" alt="me" width="30" /> -->
        <i class="icofont-navigation-menu"></i>
      </a>
      <NLink class="navbar-brand text-success" to="/">
        <img
          src="~/static/img/logo.png"
          alt="sasthosebok.com"
          class="d-none d-md-block"
          width="55"
        />
      </NLink>
    </div>
    <nav
      class="navbar navbar-expand-md navbar-white bg-light border-bottom py-1 d-none d-md-block"
    >
      <div class="container">
        <div class="d-flex justify-content-center align-items-center">
          <a
            class="navbar-toggler border-0 me-1"
            @click="toggleNavbar"
            type="button"
          >
            <!-- <img src="../static/img/icons/menu.svg" alt="me" width="30" /> -->
            <i class="icofont-navigation-menu"></i>
          </a>
          <NLink class="navbar-brand text-success" to="/">
            <img
              src="~/static/img/logo.png"
              alt="sasthosebok.com"
              class=""
              width="55"
            />
          </NLink>
        </div>

        <div
          class="collapse navbar-collapse order-1 order-md-0"
          id="navbarSupportedContent"
        >
          <NavItem class="mx-auto" />
        </div>
        <div class="ms-auto d-flex justify-content-center d-none d-md-block">
          <template v-if="$auth.loggedIn">
            <span class="dropdown text-light">
              <a
                class="dropdown-toggle text-dark border rounded p-2 text-decoration-none"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span style="font-size: 14px">
                  Hello <small class="" style="font-weight: 500; color: #084298"
                    >{{ $auth.user.full_name }} </small
                  >
                </span>

                <img
                  src="../static/img/icons/user_icon.svg"
                  alt="user icon"
                  width="35"
                />
              </a>
              <ul class="dropdown-menu" aria-labelledby="">
                <li v-if="this.$auth.user && this.$auth.user.is_admin">
                  <NuxtLink to="/admin" class="dropdown-item">
                    <i class="icofont-dashboard me-1"></i>Admin Dashboard
                  </NuxtLink>
                </li>
                <li class="">
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
          </template>
          <template v-else>
            <div>
              <NuxtLink class="" to="/login">
                <small class="btn btn-outline-dark btn-sm"
                  > Admin Login <i class="icofont-sign-in"></i>
                </small>
              </NuxtLink>
              <NuxtLink class="d-none" to="/register">
                <small class="btn btn-dark btn-sm p"
                  ><i class="icofont-sign-in"></i> Register</small
                >
              </NuxtLink>
            </div>
          </template>
        </div>
      </div>
    </nav>
    <div class="mobile_nav d-block d-md-none">
      <nav class="nav shadow-lg">
        <NuxtLink to="/" class="nav-link">
          <i class="icofont-home"></i>
          <span class="small fw-semibold">Home</span>
        </NuxtLink>
        <NuxtLink
          :to="$auth.loggedIn ? '/profile' : '/login?redirect=/profile'"
          class="nav-link"
        >
          <i class="icofont-ui-user"></i>
          <span class="small fw-semibold">My Account</span>
        </NuxtLink>

        <!-- 
        <NuxtLink to="/notifications" class="nav-link text-muted">
          <i class="icofont-notification text-muted"></i>
          <span class="small text-muted fw-semibold">Notification</span>
        </NuxtLink> -->

        <a class="nav-link" @click="toggleNavbar">
          <i class="icofont-navigation-menu"></i>
          <span class="small fw-semibold">Menu</span>
        </a>

        <!-- <NuxtLink to="/bmi" class="nav-link text-dark">
          <i class="icofont-calculations"></i>
          <span class="small">BMI</span>
        </NuxtLink> -->
      </nav>
      <div
        style="z-index: 1000"
        @click="toggleNavbar"
        :class="show ? 'modal-backdrop fade show' : ''"
      ></div>
      <div
        style="z-index: 9000"
        class="offcanvas offcanvas-end w-75 my-3 py-0 rounded-start"
        :class="show ? 'show' : 'hide'"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header my-0 py-0">
          <button
            type="button"
            class="btn-close ms-auto my-0 pt-2"
            @click="toggleNavbar"
          ></button>
        </div>
        <div class="offcanvas-body p-2">
          <div class="card h-100 p-0 m-0 border-0">
            <div class="top card-body d-flex flex-column p-1 ps-3">
              <NuxtLink class="text-muted fw-semibold pb-3 app-nav-item" to="/">
                <i class="icofont-home me-2"></i>Home
              </NuxtLink>
              <NuxtLink
                class="text-muted fw-semibold pb-3 app-nav-item"
                v-if="$auth.loggedIn"
                to="/profile"
              >
                <i class="icofont-user me-2 small"></i>My account
              </NuxtLink>
              <NuxtLink
                class="text-muted fw-semibold pb-3 app-nav-item"
                to="/faq"
              >
                <i class="icofont-support-faq me-2"></i>FAQs
              </NuxtLink>
            </div>
            <div
              class="bottom card-footer p-1 ps-3 mb-3 border-0 bg-white"
              v-if="$auth.loggedIn"
            >
              <hr class="text-muted" />
              <a
                class="pointer text-muted fw-semibold pb-3 app-nav-item"
                @click="$auth.logout()"
              >
                <i class="icofont-logout me-2"></i>Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <a
      href="tel:+8801959970664"
      class="d-flex align-items-center __call d-none"
    >
      <img src="/img/icons/call.gif" class="rounded-circle" width="50" />
    </a>

    <div class="mobile_header shadow d-block d-md-none p-2 pb-3">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <p class="text-light my-0 py-0 small">Hello,</p>

          <template v-if="$auth.loggedIn">
            <span class="small text-light fw-semibold fw-italic my-0 py-0"
              >{{ $auth.user.full_name }}!</span
            >
          </template>
          <template v-else>
            <span class="small text-light fw-italic fw-semibold my-0 py-0"
              >Sir!</span
            >
          </template>
        </div>
        <div class="d-flex">
          <NuxtLink to="/notifications" class="mx-3 position-relative d-none">
            <i class="icofont-notification text-light h5"></i>
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              0
              <span class="visually-hidden">unread messages</span>
            </span>
          </NuxtLink>
          <NuxtLink
            to="/admin"
            v-if="this.$auth.user && this.$auth.user.is_admin"
          >
            <i class="icofont-dashboard text-light h1"></i>
          </NuxtLink>

          <a class="nav-link mx-2 d-none" @click="toggleNavbar">
            <i class="icofont-navigation-menu text-light h5"></i>
          </a>
        </div>
      </div>
    </div>
    <!-- <Sidebar /> -->
  </header>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  computed: {

  },
  methods: {
    toggleNavbar() {
      this.show = !this.show;
    },
  },
  watch: {
    $route(to, from) {
      this.show = false;
    },
  },
  mounted() {

    console.log("Called Navbar!");
  },
};
</script>
<style scoped>

.dropdown-item:hover,
.nav-item .nav-link:hover,
.nuxt-link-exact-active {
  /* color: var(--secondary-text) !important; */
  color: #0d6efd !important;
}
.app-nav-item {
  /* width: 200px; */
  -webkit-transition: background-color 2s ease-out;
  -moz-transition: background-color 2s ease-out;
  -o-transition: background-color 2s ease-out;
  transition: background-color 2s ease-out;
  margin-bottom: 1px;
  font-size: 12.5px !important;
  padding: 7px 0;
}
.app-nav-item:hover {
  padding-left: 25px;
  color: #084092 !important;
  background-color: #e2e3f0;
  border-left: 3px solid #084092;
}

/* .mobile_nav .nav-link {
  color: black ;
} */

.__call {
  bottom: 70px;
  left: 15px;
  width: fit-content;
  position: fixed;
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .__call {
    bottom: 15px;
    left: 15px;
  }
}

.tawk-mobile {
  display: none !important;
  background: rebeccapurple !important;
}
.mobile_header {
  background: #084092;
  /* border-radius: 0 0 20px 20px; */
  border-radius: 100% 0% 100% 0% / 0% 65% 35% 100%;
}
</style>
