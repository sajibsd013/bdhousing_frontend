<template>
  <div class="container">
    <div class="row my-2 mb-4 g-1 text-center">
      <div
        v-for="data in data_list"
        class="col-md-3 col-sm-6 col-6"
        :key="data.icon"
      >
        <div
          class="card h-100 _card shadow border-0 p-2 p-sm-4"
          :style="`background-color: ${data.bg}`"
        >
          <div class="row">
            <div
              class="col-6 text-start d-flex flex-column justify-content-center"
            >
              <h2 class="py-0 my-0 text-light">{{ data.number }}</h2>
              <h6 class="py-0 my-1 fw-semibold text-light">{{ data.key }}</h6>
            </div>
            <div class="col-6 d-flex justify-content-center align-items-center">
              <i
                class="text-light rounded-circle p-2 p-sm-3 _card_icon"
                :class="data.icon"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8 col-md-7"></div>
      <div class="col-lg-4 col-md-5 shadow bg-white rounded p-3">
        <AdminNotifications />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminPage",
  layout: "admin",
  beforeCreate() {
    if (!this.$auth.$state.loggedIn) {
      this.$router.push("/");
    }
  },
  computed: {
    data_list() {
      const data = [
        {
          icon: "icofont-users",
          key: "ব্যবহারকারী",
          number: this.users.length,

          bg: "rgb(0 207 232)",
        },
        {
          icon: "icofont-chart-histogram-alt",
          key: "কর মূল্যয়ন তথ্য",
          number: this.tax.length,

          bg: "rgb(40 199 111)",
        },
        {
          icon: "icofont-ui-home",
          key: "খানা প্রদানের তথ্য",
          number: this.house.length,
          bg: "rgb(255 159 67)",
        },

        {
          icon: "icofont-support-faq",
          key: "সচরাচর জিজ্ঞাসা",
          number: this.faqs.length,
          bg: "rgb(234 84 85)",
        },
      ];
      return data;
    },
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
          console.log(error.response);
          console.log(error.response.data.message || error.message);
          // context.commit('error', error)
        });
    },
    async getHouse() {
      await this.$axios
        .get(`house`)
        .then((res) => {
          if (res.status === 200) {
            this.house = res.data;
          }
        })
        .catch((error) => {
          console.log(error.response);
          console.log(error.response.data.message || error.message);
          // context.commit('error', error)
        });
    },
    async getTax() {
      await this.$axios
        .get(`tax`)
        .then((res) => {
          if (res.status === 200) {
            this.tax = res.data;
          }
        })
        .catch((error) => {
          console.log(error.response);
          console.log(error.response.data.message || error.message);
          // context.commit('error', error)
        });
    },
        async getUsers() {
      await this.$axios
        .get(`/auth/users/`)
        .then((res) => {
          if (res.status === 200) {
            this.users = res.data;
          }
        })
        .catch((error) => {
          console.log(error.response);
          console.log(error.response.data.message || error.message);
          // context.commit('error', error)
        });
    },
  },
  data() {
    return {
      faqs: [],
      house: [],
      tax: [],
      users: [],
    };
  },
  mounted() {
    this.getFaqs();
    this.getHouse();
    this.getTax();
    this.getUsers();
  },
};
</script>

<style scoped>
._card_icon {
  font-size: 50px;
  background-color: hsl(50 33% 25% / 0.1);
  /* opacity: 0.4; */
}
@media only screen and (max-width: 600px) {
  ._card_icon {
    font-size: 30px !important;
  }
  h6 {
    font-size: 83% !important;
  }
}
</style>
